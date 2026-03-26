'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function ProfilePage() {
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
    joinDate: '2024-01-01',
    plan: '免费版',
    usageHistory: [
      { date: '2024-03-20', action: 'AI 文案生成', count: 2 },
      { date: '2024-03-19', action: 'AI 图片生成', count: 1 },
      { date: '2024-03-18', action: 'AI 文案生成', count: 1 },
      { date: '2024-03-17', action: 'AI 文案生成', count: 2 },
      { date: '2024-03-16', action: 'AI 图片生成', count: 1 }
    ]
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
            个人中心
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            管理您的个人信息和账号设置
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 个人信息 */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-primary">
                    {userData.name.charAt(0)}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {userData.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {userData.email}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">
                    注册时间
                  </span>
                  <span className="text-gray-800 dark:text-white font-medium">
                    {userData.joinDate}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">
                    当前套餐
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {userData.plan}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 使用记录 */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                使用记录
              </h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        日期
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        操作
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        次数
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {userData.usageHistory.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {item.date}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {item.action}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {item.count}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}