import React from 'react';

const AIToolStation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-600">AI Tool Station</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">首页</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">工具</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">教程</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">关于</a>
          </nav>
          <div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              登录
            </button>
          </div>
        </div>
      </header>

      {/* 主内容区 */}
      <main className="pt-20">
        {/* Hero区 */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              探索AI工具的无限可能
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              从内容创作到数据分析，我们提供一站式AI工具解决方案，帮助你提升工作效率，释放创造力
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors text-lg font-medium">
                开始使用
              </button>
              <button className="bg-white text-indigo-600 border border-indigo-600 px-8 py-3 rounded-md hover:bg-indigo-50 transition-colors text-lg font-medium">
                了解更多
              </button>
            </div>
          </div>
        </section>

        {/* 顶部横幅广告 */}
        <section className="bg-gray-200 py-4">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gray-300 py-6 rounded-md">
              <span className="text-gray-600 font-medium">【广告位】</span>
              <p className="text-gray-700 mt-2">这里是顶部横幅广告区域</p>
            </div>
          </div>
        </section>

        {/* 核心功能区 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">核心功能</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* 功能卡片1 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">内容创作</h3>
                    <p className="text-gray-600">利用AI生成高质量文章、社交媒体内容和营销文案，节省创作时间</p>
                  </div>
                  
                  {/* 功能卡片2 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">数据分析</h3>
                    <p className="text-gray-600">快速分析大量数据，生成可视化报告，帮助你做出更明智的决策</p>
                  </div>
                  
                  {/* 功能卡片3 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">智能对话</h3>
                    <p className="text-gray-600">通过AI聊天机器人提供即时客户支持，回答问题，解决问题</p>
                  </div>
                </div>
              </div>
              
              {/* 右侧边栏广告 */}
              <div className="lg:w-1/3">
                <div className="bg-gray-200 rounded-lg p-6 sticky top-24">
                  <div className="bg-gray-300 py-8 rounded-md h-64 flex flex-col items-center justify-center">
                    <span className="text-gray-600 font-medium">【广告位】</span>
                    <p className="text-gray-700 mt-2 text-center">这里是右侧边栏广告区域</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 内容区插屏广告 */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-gray-200 rounded-lg p-6">
              <div className="bg-gray-300 py-4 rounded-md flex items-center justify-center">
                <span className="text-gray-600 font-medium">【广告位】</span>
                <p className="text-gray-700 ml-4">这里是内容区插屏广告区域</p>
              </div>
            </div>
          </div>
        </section>

        {/* 热门工具推荐区 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">热门工具</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 工具卡片1 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-gray-100 flex items-center justify-center">
                  <img src="https://via.placeholder.com/300x200" alt="工具预览" className="max-h-full max-w-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI写作助手</h3>
                  <p className="text-gray-600 text-sm mb-4">快速生成高质量文章和内容</p>
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    使用工具
                  </button>
                </div>
              </div>
              
              {/* 工具卡片2 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-gray-100 flex items-center justify-center">
                  <img src="https://via.placeholder.com/300x200" alt="工具预览" className="max-h-full max-w-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">图像生成器</h3>
                  <p className="text-gray-600 text-sm mb-4">根据描述生成逼真的图像</p>
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    使用工具
                  </button>
                </div>
              </div>
              
              {/* 工具卡片3 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-gray-100 flex items-center justify-center">
                  <img src="https://via.placeholder.com/300x200" alt="工具预览" className="max-h-full max-w-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">代码助手</h3>
                  <p className="text-gray-600 text-sm mb-4">帮助编写和优化代码</p>
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    使用工具
                  </button>
                </div>
              </div>
              
              {/* 工具卡片4 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-gray-100 flex items-center justify-center">
                  <img src="https://via.placeholder.com/300x200" alt="工具预览" className="max-h-full max-w-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">语音转文字</h3>
                  <p className="text-gray-600 text-sm mb-4">将语音内容转换为文字</p>
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    使用工具
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AI Tool Station</h3>
              <p className="text-gray-400">提供最先进的AI工具，助力你的工作和创作</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">工具</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">写作助手</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">图像生成</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">代码助手</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">语音转文字</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">资源</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">教程</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">博客</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API文档</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">常见问题</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">联系我们</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">邮箱：contact@aitoolstation.com</li>
                <li className="text-gray-400">电话：+86 123 4567 8901</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2026 AI Tool Station. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIToolStation;