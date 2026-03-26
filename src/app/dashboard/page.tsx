'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">加载中...</div>;
  }

  if (!session) {
    redirect('/login');
  }

  // 模拟用户数据
  const userData = {
    name: session.user?.name || '用户',
    email: session.user?.email || '',
    plan: '免费版',
    usage: {
      aiText: 3,
      aiImage: 2,
      aiVideo: 0
    },
    limits: {
      aiText: 10,
      aiImage: 5,
      aiVideo: 0
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            欢迎回来，{userData.name}！
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            这里是您的 AI 社媒矩阵管理中心
          </p>
        </motion.div>

        {/* 套餐信息 */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              套餐信息
            </h2>
            <Link href="/pricing" className="text-primary hover:text-primary/80 text-sm font-medium">
              升级套餐
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {userData.plan}
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              有效期至：永久
            </div>
          </div>
        </motion.div>

        {/* 使用情况 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                AI 文案生成
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {userData.usage.aiText}/{userData.limits.aiText}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full"
                style={{ width: `${(userData.usage.aiText / userData.limits.aiText) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                AI 图片生成
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {userData.usage.aiImage}/{userData.limits.aiImage}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full"
                style={{ width: `${(userData.usage.aiImage / userData.limits.aiImage) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                AI 视频生成
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {userData.usage.aiVideo}/{userData.limits.aiVideo}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full"
                style={{ width: `${(userData.usage.aiVideo / userData.limits.aiVideo) * 100}%` }}
              ></div>
            </div>
          </div>
        </motion.div>

        {/* 快捷功能 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/ai/text" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                AI 文案生成
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                为各平台生成优质文案
              </p>
            </div>
          </Link>

          <Link href="/ai/image" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                AI 图片生成
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                生成高质量的封面和配图
              </p>
            </div>
          </Link>

          <Link href="/ai/video" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                AI 视频生成
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                文本转视频，AI 配音
              </p>
            </div>
          </Link>

          <Link href="/publish" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📤</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                多平台发布
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                一键发布到多个社媒平台
              </p>
            </div>
          </Link>

          <Link href="/hot-topics" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                热点挖掘
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                发现热门话题和爆款规律
              </p>
            </div>
          </Link>

          <Link href="/analytics" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                数据分析
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                监测流量和互动数据
              </p>
            </div>
          </Link>

          <Link href="/social-accounts" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                社媒账号管理
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                绑定和管理多平台账号
              </p>
            </div>
          </Link>

          <Link href="/settings" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                账号设置
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                管理个人信息和偏好设置
              </p>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}