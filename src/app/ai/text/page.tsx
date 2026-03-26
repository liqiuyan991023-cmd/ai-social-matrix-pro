'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AITextPage() {
  const { data: session, status } = useSession();
  const [platform, setPlatform] = useState('youtube');
  const [contentType, setContentType] = useState('title');
  const [language, setLanguage] = useState('zh');
  const [style, setStyle] = useState('professional');
  const [tone, setTone] = useState('neutral');
  const [wordCount, setWordCount] = useState(50);
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">加载中...</div>;
  }

  if (!session) {
    redirect('/login');
  }

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    // 模拟 AI 生成过程
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 模拟生成结果
      const mockResults: Record<string, {
        title:string;
        script:string;
        description:string;
        tags:string;
        keywords:string;
      }> = {
        youtube: {
          title: '10 个提高 YouTube 频道订阅量的技巧 | 2024 年最新策略',
          script: '大家好，欢迎回到我的频道！今天我要分享 10 个提高 YouTube 频道订阅量的技巧...',
          description: '在这个视频中，我将分享 10 个实用的技巧，帮助你快速提高 YouTube 频道的订阅量...',
          tags: 'YouTube 订阅量, YouTube 增长, YouTube 技巧, 2024 YouTube 策略',
          keywords: 'YouTube 订阅量, YouTube 增长, YouTube 技巧, 2024 YouTube 策略, YouTube 算法'
        },
        tiktok: {
          title: '5 秒学会这个生活小技巧！',
          script: '大家好，今天我要分享一个超实用的生活小技巧，只需要 5 秒就能学会...',
          description: '这个小技巧改变了我的生活，希望也能帮助到你！#生活小技巧 #实用干货',
          tags: '生活小技巧, 实用干货, 日常必备, 聪明生活',
          keywords: '生活小技巧, 实用干货, 日常必备, 聪明生活, TikTok 热门'
        },
        instagram: {
          title: '周末穿搭灵感 | 轻松打造时尚造型',
          script: '周末不知道穿什么？这几套穿搭灵感让你轻松出门...',
          description: '周末穿搭灵感来啦！这几套造型既舒适又时尚，适合各种场合 #周末穿搭 #时尚灵感',
          tags: '周末穿搭, 时尚灵感, 日常穿搭, 穿搭分享',
          keywords: '周末穿搭, 时尚灵感, 日常穿搭, 穿搭分享, Instagram 时尚'
        },
        xiaohongshu: {
          title: '宝藏小众护肤品推荐 | 敏感肌必备',
          script: '作为敏感肌，我终于找到了适合自己的护肤品！今天分享给大家...',
          description: '敏感肌救星！这些小众护肤品温和不刺激，效果超惊艳 #敏感肌护肤 #小众好物',
          tags: '敏感肌护肤, 小众好物, 护肤品推荐, 护肤分享',
          keywords: '敏感肌护肤, 小众好物, 护肤品推荐, 护肤分享, 小红书种草'
        },
        douyin: {
          title: '30 秒学会这个神奇的魔术！',
          script: '今天教大家一个超简单的魔术，只需要 30 秒就能学会...',
          description: '这个魔术太神奇了！朋友看了都惊呆了 #魔术教学 #神奇魔术',
          tags: '魔术教学, 神奇魔术, 简单魔术, 魔术揭秘',
          keywords: '魔术教学, 神奇魔术, 简单魔术, 魔术揭秘, 抖音热门'
        }
      };

      setResult(mockResults[platform as keyof typeof mockResults][contentType as keyof typeof mockResults.youtube]);
    } catch (error) {
      console.error('生成失败:', error);
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
            AI 文案生成中心
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            为各平台生成优质文案，支持多语言和多种风格
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 生成表单 */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              生成设置
            </h2>
            
            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  目标平台
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
                  内容类型
                </label>
                <select
                  value={contentType}
                  onChange={(e) => setContentType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="title">标题</option>
                  <option value="script">脚本</option>
                  <option value="description">描述</option>
                  <option value="tags">标签</option>
                  <option value="keywords">关键词</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  语言
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="zh">中文</option>
                  <option value="en">英文</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  风格
                </label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="professional">专业</option>
                  <option value="casual">休闲</option>
                  <option value="creative">创意</option>
                  <option value="formal">正式</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  语气
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="neutral">中性</option>
                  <option value="positive">积极</option>
                  <option value="humorous">幽默</option>
                  <option value="inspirational">励志</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  字数限制
                </label>
                <input
                  type="number"
                  value={wordCount}
                  onChange={(e) => setWordCount(Number(e.target.value))}
                  min={10}
                  max={500}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  提示词
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="请输入您的创意或需求..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  disabled={loading}
                >
                  {loading ? '生成中...' : '生成文案'}
                </button>
              </div>
            </form>
          </motion.div>

          {/* 生成结果 */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              生成结果
            </h2>
            
            {result ? (
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                  <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                    {result}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => navigator.clipboard.writeText(result)}
                    className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none"
                  >
                    复制
                  </button>
                  <button
                    className="flex-1 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none"
                  >
                    重新生成
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-md flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  输入提示词并点击生成按钮，AI 将为您生成文案
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}