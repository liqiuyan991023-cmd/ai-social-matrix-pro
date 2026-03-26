'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SocialAccountsPage() {
  const { data: session, status } = useSession();
  const [showAddForm, setShowAddForm] = useState(false);
  const [platform, setPlatform] = useState('youtube');
  const [accountName, setAccountName] = useState('');

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">加载中...</div>;
  }

  if (!session) {
    redirect('/login');
  }

  // 模拟已绑定的账号
  const socialAccounts = [
    {
      id: 1,
      platform: 'youtube',
      accountName: 'Tech Channel',
      status: 'active'
    },
    {
      id: 2,
      platform: 'tiktok',
      accountName: 'Life Tips',
      status: 'active'
    },
    {
      id: 3,
      platform: 'instagram',
      accountName: 'Fashion Blog',
      status: 'active'
    }
  ];

  const handleAddAccount = (e: React.FormEvent) => {
    e.preventDefault();
    // 模拟添加账号
    setShowAddForm(false);
    setAccountName('');
    // 这里应该调用 API 添加账号
  };

  const handleDeleteAccount = (id: number) => {
    // 模拟删除账号
    // 这里应该调用 API 删除账号
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
            社媒账号管理
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            绑定和管理您的多平台社媒账号
          </p>
        </motion.div>

        {/* 添加账号按钮 */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {showAddForm ? '取消' : '添加账号'}
          </button>
        </motion.div>

        {/* 添加账号表单 */}
        {showAddForm && (
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              添加社媒账号
            </h2>
            <form onSubmit={handleAddAccount} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  平台
                </label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="youtube">YouTube</option>
                  <option value="tiktok">TikTok</option>
                  <option value="instagram">Instagram</option>
                  <option value="xiaohongshu">小红书</option>
                  <option value="douyin">抖音</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  账号名称
                </label>
                <input
                  type="text"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="输入账号名称"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  绑定账号
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* 已绑定账号列表 */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            已绑定账号
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    平台
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    账号名称
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    状态
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {socialAccounts.map((account) => (
                  <tr key={account.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${account.platform === 'youtube' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' : 
                        account.platform === 'tiktok' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                        account.platform === 'instagram' ? 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400' :
                        account.platform === 'xiaohongshu' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' :
                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
                        {account.platform === 'youtube' ? 'YouTube' : 
                         account.platform === 'tiktok' ? 'TikTok' :
                         account.platform === 'instagram' ? 'Instagram' :
                         account.platform === 'xiaohongshu' ? '小红书' :
                         '抖音'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                      {account.accountName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${account.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                        {account.status === 'active' ? '已连接' : '未连接'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-primary hover:text-primary/80 mr-3">
                        编辑
                      </button>
                      <button 
                        onClick={() => handleDeleteAccount(account.id)}
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                      >
                        删除
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}