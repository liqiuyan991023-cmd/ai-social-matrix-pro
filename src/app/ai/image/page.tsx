'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AIImagePage() {
  const { data: session, status } = useSession();
  const [tab, setTab] = useState('image'); // image, video, tts, subtitle
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
      if (tab === 'image') {
        // 生成随机图片 URL
        setResult(`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=square_hd`);
      } else if (tab === 'video') {
        setResult('https://example.com/video.mp4');
      } else if (tab === 'tts') {
        setResult('https://example.com/audio.mp3');
      } else if (tab === 'subtitle') {
        setResult('字幕生成成功，已添加到视频中');
      }
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
            AI 多媒体生成
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            生成高质量的图片、视频、配音和字幕
          </p>
        </motion.div>

        {/* 选项卡 */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setTab('image')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${tab === 'image' ? 'border-primary text-primary' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
            >
              图片生成
            </button>
            <button
              onClick={() => setTab('video')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${tab === 'video' ? 'border-primary text-primary' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
            >
              视频生成
            </button>
            <button
              onClick={() => setTab('tts')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${tab === 'tts' ? 'border-primary text-primary' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
            >
              AI 配音
            </button>
            <button
              onClick={() => setTab('subtitle')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${tab === 'subtitle' ? 'border-primary text-primary' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
            >
              字幕生成
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 生成表单 */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {tab === 'image' ? 'AI 图片生成' : 
               tab === 'video' ? '文本生成视频' : 
               tab === 'tts' ? 'AI 配音 (TTS)' : 
               '自动字幕生成'}
            </h2>
            
            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {tab === 'image' ? '图片描述' : 
                   tab === 'video' ? '视频脚本' : 
                   tab === 'tts' ? '配音文本' : 
                   '视频文件'}
                </label>
                {tab === 'subtitle' ? (
                  <div className="border border-gray-300 dark:border-gray-600 rounded-md p-4 text-center">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-gray-500 dark:text-gray-400">点击上传视频文件</p>
                    <input type="file" className="hidden" />
                  </div>
                ) : (
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={tab === 'image' ? '描述您想要生成的图片...' : 
                               tab === 'video' ? '输入视频脚本...' : 
                               '输入需要配音的文本...'}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  ></textarea>
                )}
              </div>

              {tab === 'image' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    图片类型
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary">
                    <option value="photo">照片</option>
                    <option value="illustration">插画</option>
                    <option value="anime">动漫</option>
                    <option value="3d">3D</option>
                  </select>
                </div>
              )}

              {tab === 'tts' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    语音类型
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary">
                    <option value="male">男声</option>
                    <option value="female">女声</option>
                    <option value="child">童声</option>
                  </select>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  disabled={loading}
                >
                  {loading ? '生成中...' : 
                   tab === 'image' ? '生成图片' : 
                   tab === 'video' ? '生成视频' : 
                   tab === 'tts' ? '生成配音' : 
                   '生成字幕'}
                </button>
              </div>
            </form>
          </motion.div>

          {/* 生成结果 */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              生成结果
            </h2>
            
            {result ? (
              <div className="space-y-4">
                {tab === 'image' && (
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md flex items-center justify-center">
                    <img 
                      src={result} 
                      alt="Generated Image" 
                      className="max-w-full max-h-80 object-contain"
                    />
                  </div>
                )}
                {tab === 'video' && (
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-500 dark:text-gray-400">视频生成成功</p>
                      <button className="mt-2 text-primary hover:underline">下载视频</button>
                    </div>
                  </div>
                )}
                {tab === 'tts' && (
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-800 dark:text-gray-200">AI 配音</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">0:30</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-4">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <button className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                      <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                        下载音频
                      </button>
                    </div>
                  </div>
                )}
                {tab === 'subtitle' && (
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                    <p className="text-gray-800 dark:text-gray-200">{result}</p>
                    <div className="mt-4 flex space-x-2">
                      <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600">
                        下载字幕文件
                      </button>
                      <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
                        应用到视频
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-md flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  {tab === 'image' ? '输入图片描述并点击生成按钮' : 
                   tab === 'video' ? '输入视频脚本并点击生成按钮' : 
                   tab === 'tts' ? '输入配音文本并点击生成按钮' : 
                   '上传视频文件并点击生成按钮'}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}