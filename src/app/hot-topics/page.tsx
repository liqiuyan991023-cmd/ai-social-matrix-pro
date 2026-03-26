'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HotTopicsPage() {
  const { data: session, status } = useSession();
  const [platform, setPlatform] = useState('all');

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">加载中...</div>;
  }

  if (!session) {
    redirect('/login');
  }

  // 模拟热点数据
  const hotTopics = [
    {
      id: 1,
      platform: 'youtube',
      topic: 'AI 生成内容的未来',
      heat: 98,
      url: '#',
      tags: ['AI', '内容创作', '未来科技'],
      trend: 'rising'
    },
    {
      id: 2,
      platform: 'tiktok',
      topic: '极简生活方式',
      heat: 95,
      url: '#',
      tags: ['极简生活', '断舍离', '生活方式'],
      trend: 'rising'
    },
    {
      id: 3,
      platform: 'instagram',
      topic: '可持续时尚',
      heat: 92,
      url: '#',
      tags: ['可持续时尚', '环保', '时尚'],
      trend: 'stable'
    },
    {
      id: 4,
      platform: 'xiaohongshu',
      topic: '平价好物推荐',
      heat: 90,
      url: '#',
      tags: ['平价好物', '种草', '生活必备'],
      trend: 'rising'
    },
    {
      id: 5,
      platform: 'douyin',
      topic: '职场干货分享',
      heat: 88,
      url: '#',
      tags: ['职场', '干货', '经验分享'],
      trend: 'stable'
    }
  ];

  // 模拟热门标签
  const hotTags = [
    { tag: 'AI 生成内容', count: 125000 },
    { tag: '极简生活', count: 98000 },
    { tag: '可持续时尚', count: 85000 },
    { tag: '平价好物', count: 76000 },
    { tag: '职场干货', count: 68000 },
    { tag: '健康饮食', count: 62000 },
    { tag: '旅行攻略', count: 58000 },
    { tag: '家居装修', count: 52000 }
  ];

  // 模拟热门音乐
  const hotMusic = [
    { id: 1, title: 'Summer Vibes', artist: 'DJ Fresh', plays: '1.2M' },
    { id: 2, title: 'Morning Energy', artist: 'Electronic Dreams', plays: '980K' },
    { id: 3, title: 'Chill Evening', artist: 'Lofi Beats', plays: '850K' },
    { id: 4, title: 'Motivation', artist: 'Epic Music', plays: '720K' }
  ];

  // 模拟爆款规律分析
  const hotPatterns = [
    '视频长度在 15-30 秒之间的内容获得更多互动',
    '使用疑问句开头的标题点击率提高 30%',
    '包含情感表达的内容更容易引发分享',
    '发布时间在晚上 8-10 点的内容获得更多曝光',
    '使用热门标签但内容独特的视频更容易脱颖而出'
  ];

  // 过滤话题
  const filteredTopics = platform === 'all' 
    ? hotTopics 
    : hotTopics.filter(topic => topic.platform === platform);

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
            AI 热点挖掘
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            发现热门话题，掌握爆款规律，提升内容影响力
          </p>
        </motion.div>

        {/* 平台筛选 */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setPlatform('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${platform === 'all' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            >
              全部平台
            </button>
            <button
              onClick={() => setPlatform('youtube')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${platform === 'youtube' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            >
              YouTube
            </button>
            <button
              onClick={() => setPlatform('tiktok')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${platform === 'tiktok' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            >
              TikTok
            </button>
            <button
              onClick={() => setPlatform('instagram')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${platform === 'instagram' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            >
              Instagram
            </button>
            <button
              onClick={() => setPlatform('xiaohongshu')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${platform === 'xiaohongshu' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            >
              小红书
            </button>
            <button
              onClick={() => setPlatform('douyin')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${platform === 'douyin' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            >
              抖音
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 热门话题 */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                实时热门话题
              </h2>
              <div className="space-y-4">
                {filteredTopics.map((topic) => (
                  <div key={topic.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-white mb-1">
                        {topic.topic}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${topic.platform === 'youtube' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' : 
                          topic.platform === 'tiktok' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                          topic.platform === 'instagram' ? 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400' :
                          topic.platform === 'xiaohongshu' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' :
                          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
                          {topic.platform === 'youtube' ? 'YouTube' : 
                           topic.platform === 'tiktok' ? 'TikTok' :
                           topic.platform === 'instagram' ? 'Instagram' :
                           topic.platform === 'xiaohongshu' ? '小红书' :
                           '抖音'}
                        </span>
                        <span className={`flex items-center text-xs ${topic.trend === 'rising' ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}>
                          {topic.trend === 'rising' ? '🔥 上升' : '📈 稳定'}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {topic.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {topic.heat}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        热度
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 爆款规律分析 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                AI 分析爆款规律
              </h2>
              <div className="space-y-3">
                {hotPatterns.map((pattern, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                    <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-800 dark:text-gray-200">
                      {pattern}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 热门标签和音乐 */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* 热门标签 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                爆款标签推荐
              </h2>
              <div className="space-y-3">
                {hotTags.map((tag, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300">
                        {index + 1}
                      </div>
                      <span className="text-gray-800 dark:text-white">
                        #{tag.tag}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {tag.count.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 热门音乐 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                热门音乐推荐
              </h2>
              <div className="space-y-4">
                {hotMusic.map((music) => (
                  <div key={music.id} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                    <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18V5l12-2v13" />
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="16" r="3" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 dark:text-white">
                        {music.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {music.artist}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {music.plays}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}