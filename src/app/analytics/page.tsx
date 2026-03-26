'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export default function AnalyticsPage() {
  const { data: session, status } = useSession();
  const [timeRange, setTimeRange] = useState('7d'); // 7d, 30d, 90d

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">加载中...</div>;
  }

  if (!session) {
    redirect('/login');
  }

  // 模拟数据
  const performanceData = [
    { name: '播放量', value: 12500, change: 15 },
    { name: '点赞量', value: 3200, change: 8 },
    { name: '评论量', value: 850, change: 12 },
    { name: '分享量', value: 1200, change: 5 },
    { name: '涨粉量', value: 450, change: 20 }
  ];

  const trendData = [
    { date: '1月', views: 8000, likes: 2000, followers: 200 },
    { date: '2月', views: 9500, likes: 2500, followers: 250 },
    { date: '3月', views: 12500, likes: 3200, followers: 450 },
    { date: '4月', views: 14000, likes: 3800, followers: 520 },
    { date: '5月', views: 16000, likes: 4200, followers: 600 },
    { date: '6月', views: 18500, likes: 4800, followers: 750 }
  ];

  const platformData = [
    { name: 'YouTube', value: 45 },
    { name: 'TikTok', value: 30 },
    { name: 'Instagram', value: 15 },
    { name: '小红书', value: 7 },
    { name: '抖音', value: 3 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  const aiSuggestions = [
    '您的视频长度在 15-30 秒之间时获得了更多互动，建议保持这个长度范围',
    '使用疑问句开头的标题点击率提高了 30%，建议在标题中使用更多疑问句',
    '发布时间在晚上 8-10 点的内容获得了更多曝光，建议在这个时间段发布',
    '包含情感表达的内容更容易引发分享，建议在内容中增加情感元素',
    '使用热门标签但内容独特的视频更容易脱颖而出，建议结合热门话题创作独特内容'
  ];

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
            流量数据监测
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            实时监测您的内容表现，获取 AI 优化建议
          </p>
        </motion.div>

        {/* 时间范围选择 */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex space-x-2">
            <button
              onClick={() => setTimeRange('7d')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${timeRange === '7d' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            >
              7天
            </button>
            <button
              onClick={() => setTimeRange('30d')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${timeRange === '30d' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            >
              30天
            </button>
            <button
              onClick={() => setTimeRange('90d')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${timeRange === '90d' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            >
              90天
            </button>
          </div>
        </motion.div>

        {/* 数据概览 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {performanceData.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {item.name}
                </h3>
                <span className={`text-sm font-medium ${item.change > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {item.change > 0 ? '+' : ''}{item.change}%
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                {item.value.toLocaleString()}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 趋势图表 */}
          <motion.div 
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              流量趋势
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={trendData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="views" stroke="#6366f1" strokeWidth={2} />
                  <Line type="monotone" dataKey="likes" stroke="#f43f5e" strokeWidth={2} />
                  <Line type="monotone" dataKey="followers" stroke="#10b981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* 平台分布 */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              平台分布
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* AI 优化建议 */}
          <motion.div 
            className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              AI 内容优化建议
            </h2>
            <div className="space-y-3">
              {aiSuggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                  <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200">
                    {suggestion}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}