import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// 极简版配置：无Prisma，纯模拟登录，先跑通部署
const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'your@email.com'
        },
        password: {
          label: 'Password',
          type: 'password'
        }
      },
      async authorize(credentials) {
        // 模拟登录：仅测试账号能登录（无需数据库）
        if (credentials?.email === 'test@test.com' && credentials?.password === '123456') {
          return { id: '1', name: 'Test User', email: 'test@test.com' };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET || 'temp-secret-key'
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };