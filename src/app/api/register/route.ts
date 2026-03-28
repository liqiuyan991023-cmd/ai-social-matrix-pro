// app/api/register/route.ts (服务端文件，无'use client')
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

// Prisma单例封装（避免重复创建连接）
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// 定义请求体类型
interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: RegisterRequest = await req.json();
    const { name, email, password } = body;

    // 1. 基础参数校验
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: '姓名、邮箱、密码不能为空' },
        { status: 400 }
      );
    }

    // 2. 邮箱格式校验
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '请输入有效的电子邮箱' },
        { status: 400 }
      );
    }

    // 3. 密码强度校验
    if (password.length < 8) {
      return NextResponse.json(
        { error: '密码长度不能少于8位' },
        { status: 400 }
      );
    }

    // 4. 检查邮箱是否已注册
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return NextResponse.json(
        { error: '该邮箱已被注册' },
        { status: 409 } // 409冲突码更语义化
      );
    }

    // 5. 密码哈希（核心安全修复）
    const hashedPassword = await bcrypt.hash(password, 10);

    // 6. 创建用户 + 关联免费套餐（事务保证原子性）
    await prisma.$transaction([
      prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword, // 存储哈希值而非明文
        },
      }),
      prisma.userPlan.create({
        data: {
          userId: (await prisma.user.findUnique({ where: { email } }))!.id,
          planType: 'free',
          startDate: new Date(),
        },
      }),
    ]);

    return NextResponse.json({ success: '注册成功！请登录您的账号' });
  } catch (error) {
    console.error('注册接口异常:', error);
    // 精准错误分类
    if (error instanceof Error) {
      if (error.message.includes('Prisma')) {
        return NextResponse.json(
          { error: '数据库连接异常，请稍后重试' },
          { status: 500 }
        );
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: '注册失败，请稍后重试' },
      { status: 500 }
    );
  }
}