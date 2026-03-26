'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PublishPage() {
  const { data: session, status } = useSession();
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);
  const [content, setContent] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [scheduleType, setScheduleType] = useState('now'); // now, later
  const [scheduleTime, setScheduleTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">加载中...</div>;
  }

  if (!session) {
    redirect('/login');
  }

  // 模拟已绑定的账号
  const socialAccounts = [
    { id: '1', platform: 'youtube', name: 'Tech Channel' },
    { id: '2', platform: 'tiktok', name: 'Life Tips' },
    { id: '3', platform: 'instagram', name: 'Fashion Blog' }
  ];

  const handleAccountToggle = (accountId: string) => {
    if (selectedAccounts.includes(accountId)) {
      setSelectedAccounts(selectedAccounts.filter(id => id !== accountId));
    } else {
      setSelectedAccounts([...selectedAccounts, accountId]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');

    // 模拟发布过程
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccess('发布成功！');
      // 重置表单
      setSelectedAccounts([]);
      setContent('');
      setMediaUrl('');
      setScheduleType('now');
      setScheduleTime('');
    } catch (error) {
      console.error('发布失败:', error);
    } finally {
      setLoading(false);
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
            多平台发布
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            选择账号，编辑内容，一键发布到多个平台
          </p>
        </motion.div>

        {success && (
          <motion.div 
            className="mb-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center">
              <div className="text-green-500 dark:text-green-400">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800 dark:text-green-300">{success}</p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 账号选择 */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                选择账号
              </h2>
              <div className="space-y-3">
                {socialAccounts.map((account) => (
                  <div key={account.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id={`account-${account.id}`}
                        checked={selectedAccounts.includes(account.id)}
                        onChange={() => handleAccountToggle(account.id)}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 dark:border-gray-600 rounded"
                      />
                      <div>
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
                        <div className="text-sm text-gray-800 dark:text-white mt-1">
                          {account.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 内容编辑 */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                编辑内容
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    内容
                  </label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="输入发布内容..."
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    媒体文件
                  </label>
                  <div className="border border-gray-300 dark:border-gray-600 rounded-md p-4 text-center">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-gray-500 dark:text-gray-400">点击上传媒体文件</p>
                    <input type="file" className="hidden" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    发布时间
                  </label>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="publish-now"
                        name="schedule-type"
                        value="now"
                        checked={scheduleType === 'now'}
                        onChange={(e) => setScheduleType(e.target.value)}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 dark:border-gray-600"
                      />
                      <label htmlFor="publish-now" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                        立即发布
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="publish-later"
                        name="schedule-type"
                        value="later"
                        checked={scheduleType === 'later'}
                        onChange={(e) => setScheduleType(e.target.value)}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 dark:border-gray-600"
                      />
                      <label htmlFor="publish-later" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                        定时发布
                      </label>
                    </div>
                  </div>
                  {scheduleType === 'later' && (
                    <div className="mt-2">
                      <input
                        type="datetime-local"
                        value={scheduleTime}
                        onChange={(e) => setScheduleTime(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      />
                    </div>
                  )}
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    disabled={loading || selectedAccounts.length === 0}
                  >
                    {loading ? '发布中...' : '发布'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}