import Script from "next/script";
import type { Metadata } from "next";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        icon?: string;
      };
    }
  }
}

export const metadata: Metadata = {
  title: "AI Social Matrix Pro - 一站式AI内容创作与跨境社媒矩阵分发平台",
  description:
    "AI Social Matrix Pro 为跨境运营提供一站式AI内容创作、多平台发布、热点监控及流量数据分析，助力品牌实现全球增长。",
  keywords: [
    "AI内容创作",
    "社媒矩阵",
    "多平台发布",
    "跨境营销",
    "流量分析",
    "AI文案中心",
  ],
};

function Ico({ icon, className }: { icon: string; className?: string }) {
  return <iconify-icon icon={icon} className={className} />;
}

export default function Page() {
  return (
    <>
      <Script
        src="https://modao.cc/agent-py/static/source/js/iconify-icon.min.1.0.7.js"
        strategy="beforeInteractive"
      />

      <style jsx global>{`
        body {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
        }
        .ad-placeholder {
          background-color: #f3f4f6;
          border: 2px dashed #d1d5db;
          position: relative;
        }
        .ad-placeholder::after {
          content: "【广告位】";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #9ca3af;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .glass-nav {
          backdrop-filter: blur(12px);
          background-color: rgba(255, 255, 255, 0.8);
        }
      `}</style>

      <div className="bg-gray-50 text-gray-900 leading-relaxed">
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Ico className="text-white text-2xl" icon="mdi:matrix" />
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                  AI Social Matrix Pro
                </span>
              </div>

              <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
                <a className="hover:text-indigo-600 transition-colors" href="#">
                  产品方案
                </a>
                <a className="hover:text-indigo-600 transition-colors" href="#">
                  AI文案中心
                </a>
                <a className="hover:text-indigo-600 transition-colors" href="#">
                  热点监控
                </a>
                <a className="hover:text-indigo-600 transition-colors" href="#">
                  数据分析
                </a>
                <a className="hover:text-indigo-600 transition-colors" href="#">
                  定价
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a
                  className="text-sm font-medium text-gray-600 hover:text-indigo-600"
                  href="#"
                >
                  登录
                </a>
                <a
                  className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
                  href="#"
                >
                  免费开始使用
                </a>
                <div className="md:hidden flex items-center">
                  <Ico className="text-2xl text-gray-600" icon="mdi:menu" />
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold mb-6 tracking-wide uppercase">
                  <Ico icon="mdi:sparkles" />
                  2026年3月最新发布：V4.0 版本现已上线
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                  重塑社媒矩阵 <br />
                  <span className="text-indigo-600 italic">AI 驱动</span>{" "}
                  全球业务增长
                </h1>
                <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                  一站式完成热点追踪、AI文案生成、视频脚本创作与多平台一键发布。
                  让跨境电商、海外博主和品牌方以 1/10 的时间投入，获取 10
                  倍的流量红利。
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                    立即开启 AI 创作
                    <Ico icon="mdi:arrow-right" />
                  </button>
                  <button className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                    预约演示
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-50 rounded-full blur-3xl opacity-50" />
          </section>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="ad-placeholder w-full h-24 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="flex flex-col items-center">
                <span className="text-indigo-400 font-bold">
                  新用户首月限时 0 元试用计划
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  仅限 2026年3月 前注册用户
                </span>
              </div>
            </div>
          </div>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                为什么选择 AI Social Matrix Pro？
              </h2>
              <p className="text-gray-500">专为跨境社媒运营打造的高效率工作流</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Ico className="text-3xl" icon="mdi:trending-up" />
                </div>
                <h3 className="text-xl font-bold mb-4">全球热点实时监控</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  24/7 实时抓取 TikTok、Instagram、Twitter
                  全球热榜，自动识别高潜力爆款话题，让你的内容永远走在趋势前沿。
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Ico className="text-green-500" icon="mdi:check-circle" />
                    多语言关键词捕捉
                  </li>
                  <li className="flex items-center gap-2">
                    <Ico className="text-green-500" icon="mdi:check-circle" />
                    竞争对手动态追踪
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Ico className="text-3xl" icon="mdi:auto-fix" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI 智能内容生成</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  接入最强语言模型，一键生成符合不同平台调性的文案与视频脚本。支持
                  50+ 种语言自动翻译与地道化适配。
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Ico className="text-green-500" icon="mdi:check-circle" />
                    爆款脚本自动撰写
                  </li>
                  <li className="flex items-center gap-2">
                    <Ico className="text-green-500" icon="mdi:check-circle" />
                    智能配图与封面生成
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Ico className="text-3xl" icon="mdi:share-variant" />
                </div>
                <h3 className="text-xl font-bold mb-4">一键多平台发布</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  无需频繁切换 App。在 Matrix Pro
                  中统一管理您的账户矩阵，支持定时分发与自动互动回复，极大提升管理效率。
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Ico className="text-green-500" icon="mdi:check-circle" />
                    全球全平台矩阵分发
                  </li>
                  <li className="flex items-center gap-2">
                    <Ico className="text-green-500" icon="mdi:check-circle" />
                    自动回复与私信管理
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1">
                  <div className="ad-placeholder w-full h-32 rounded-2xl mb-12" />

                  <div className="mb-10">
                    <div className="flex justify-between items-end mb-8">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          热门 AI 文案工具
                        </h2>
                        <p className="text-gray-500 mt-1">
                          基于深度学习，为您匹配最适用的创作模型
                        </p>
                      </div>
                      <a
                        className="text-indigo-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                        href="#"
                      >
                        查看全部工具 <Ico icon="mdi:chevron-right" />
                      </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                      <div className="p-5 border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer bg-gray-50/50">
                        <Ico
                          className="text-red-500 text-3xl mb-3"
                          icon="mdi:youtube"
                        />
                        <h4 className="font-bold text-gray-900 mb-1 text-sm">
                          YouTube 脚本生成
                        </h4>
                        <p className="text-xs text-gray-500">
                          10分钟生成结构化长视频大纲与脚本
                        </p>
                      </div>

                      <div className="p-5 border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer bg-gray-50/50">
                        <Ico
                          className="text-pink-500 text-3xl mb-3"
                          icon="mdi:instagram"
                        />
                        <h4 className="font-bold text-gray-900 mb-1 text-sm">
                          Instagram 视觉文案
                        </h4>
                        <p className="text-xs text-gray-500">
                          吸引眼球的 Caption 与热门 Hashtag 推荐
                        </p>
                      </div>

                      <div className="p-5 border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer bg-gray-50/50">
                        <Ico
                          className="text-blue-500 text-3xl mb-3"
                          icon="mdi:google"
                        />
                        <h4 className="font-bold text-gray-900 mb-1 text-sm">
                          SEO 博客生成器
                        </h4>
                        <p className="text-xs text-gray-500">
                          符合 Google 搜索习惯的长篇专业文章
                        </p>
                      </div>

                      <div className="p-5 border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer bg-gray-50/50">
                        <Ico
                          className="text-indigo-500 text-3xl mb-3"
                          icon="mdi:translate"
                        />
                        <h4 className="font-bold text-gray-900 mb-1 text-sm">
                          多语种本土化翻译
                        </h4>
                        <p className="text-xs text-gray-500">
                          不仅是翻译，更是针对文化的重新创作
                        </p>
                      </div>

                      <div className="p-5 border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer bg-gray-50/50">
                        <Ico
                          className="text-green-500 text-3xl mb-3"
                          icon="mdi:chat-processing"
                        />
                        <h4 className="font-bold text-gray-900 mb-1 text-sm">
                          智能评论回复
                        </h4>
                        <p className="text-xs text-gray-500">
                          模拟真实语气回复用户，提升账号权重
                        </p>
                      </div>

                      <div className="p-5 border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer bg-gray-50/50">
                        <Ico
                          className="text-amber-500 text-3xl mb-3"
                          icon="mdi:file-image"
                        />
                        <h4 className="font-bold text-gray-900 mb-1 text-sm">
                          AI 封面图建议
                        </h4>
                        <p className="text-xs text-gray-500">
                          分析点击率，自动生成高转化封面提示词
                        </p>
                      </div>

                      <div className="p-5 border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer bg-gray-50/50">
                        <Ico
                          className="text-purple-500 text-3xl mb-3"
                          icon="mdi:account-group"
                        />
                        <h4 className="font-bold text-gray-900 mb-1 text-sm">
                          社群互动营销文案
                        </h4>
                        <p className="text-xs text-gray-500">
                          针对 Facebook Groups 的互动式内容
                        </p>
                      </div>

                      <div className="p-5 border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer bg-gray-50/50">
                        <Ico
                          className="text-orange-500 text-3xl mb-3"
                          icon="mdi:lightbulb-on"
                        />
                        <h4 className="font-bold text-gray-900 mb-1 text-sm">
                          创意内容头脑风暴
                        </h4>
                        <p className="text-xs text-gray-500">
                          当您缺乏灵感时，AI 为您提供 20+ 个切入点
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-600 rounded-3xl p-10 text-white flex flex-wrap gap-8 items-center justify-between">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold mb-1">85%</div>
                      <div className="text-indigo-100 text-sm">创作时间节省</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-extrabold mb-1">200%</div>
                      <div className="text-indigo-100 text-sm">
                        平均点击率提升
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-extrabold mb-1">1M+</div>
                      <div className="text-indigo-100 text-sm">
                        全球活跃创作者
                      </div>
                    </div>
                    <div className="bg-white/10 p-1 rounded-full flex">
                      <button className="px-6 py-3 bg-white text-indigo-600 rounded-full font-bold hover:bg-indigo-50 transition-colors">
                        立即升级专家版
                      </button>
                    </div>
                  </div>
                </div>

                <aside className="w-full lg:w-80">
                  <div className="sticky top-24 space-y-6">
                    <div className="ad-placeholder w-full h-[400px] rounded-2xl" />
                    <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                      <h4 className="font-bold text-indigo-900 mb-2">
                        加入官方专家社群
                      </h4>
                      <p className="text-xs text-indigo-700 mb-4 leading-relaxed">
                        获取第一手跨境运营秘籍，与全球 50,000+
                        顶尖创作者共同进步。
                      </p>
                      <button className="w-full bg-indigo-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700">
                        立即加入
                      </button>
                    </div>
                    <div className="ad-placeholder w-full h-[150px] rounded-2xl" />
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold flex justify-between items-center cursor-pointer">
                    支持哪些社交平台的一键发布？
                    <Ico className="text-indigo-600" icon="mdi:plus" />
                  </h4>
                  <p className="mt-4 text-gray-500 text-sm">
                    目前我们已深度对接 TikTok, Instagram (Posts/Reels), YouTube
                    (Shorts), Facebook, Twitter, LinkedIn 及
                    Pinterest。后续将增加更多小众高流量平台。
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold flex justify-between items-center cursor-pointer">
                    AI 生成的内容会被平台判定为搬运吗？
                    <Ico className="text-indigo-600" icon="mdi:plus" />
                  </h4>
                  <p className="mt-4 text-gray-500 text-sm">
                    Matrix Pro
                    采用的是原创内容生成逻辑而非简单的伪原创。AI
                    会根据最新平台算法偏好进行“二次深度创作”，并自动添加差异化视觉元素，确保内容的原创性与权重。
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold flex justify-between items-center cursor-pointer">
                    可以管理多个国家的账户吗？
                    <Ico className="text-indigo-600" icon="mdi:plus" />
                  </h4>
                  <p className="mt-4 text-gray-500 text-sm">
                    当然支持。我们的系统支持环境隔离与全球代理配置，您可以轻松在同一个后台管理分布在全球不同区域的成百上千个账户矩阵。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
              <div className="col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                    <Ico className="text-white text-xl" icon="mdi:matrix" />
                  </div>
                  <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                    AI Social Matrix Pro
                  </span>
                </div>
                <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                  全球领先的跨境社媒矩阵运营专家，通过人工智能技术，让每一条内容都发挥最大的商业价值。
                </p>
                <div className="flex gap-4 mt-6">
                  <a className="text-gray-400 hover:text-indigo-600" href="#">
                    <Ico className="text-2xl" icon="mdi:facebook" />
                  </a>
                  <a className="text-gray-400 hover:text-indigo-600" href="#">
                    <Ico className="text-2xl" icon="mdi:twitter" />
                  </a>
                  <a className="text-gray-400 hover:text-indigo-600" href="#">
                    <Ico className="text-2xl" icon="mdi:youtube" />
                  </a>
                </div>
              </div>

              <div>
                <h5 className="font-bold text-gray-900 mb-4 text-sm">产品</h5>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>
                    <a className="hover:text-indigo-600" href="#">
                      AI文案中心
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-indigo-600" href="#">
                      热点监控系统
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-indigo-600" href="#">
                      矩阵管理后台
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-indigo-600" href="#">
                      流量分析报表
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-gray-900 mb-4 text-sm">资源</h5>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>
                    <a className="hover:text-indigo-600" href="#">
                      运营博客
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-indigo-600" href="#">
                      API文档
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-indigo-600" href="#">
                      成功案例
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-indigo-600" href="#">
                      新手教程
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-gray-900 mb-4 text-sm">公司</h5>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>
                    <a className="hover:text-indigo-600" href="#">
                      关于我们
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-indigo-600" href="#">
                      加入我们
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-indigo-600" href="#">
                      合作伙伴
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-indigo-600" href="#">
                      隐私协议
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-gray-900 mb-4 text-sm">订阅周报</h5>
                <p className="text-xs text-gray-400 mb-4">
                  获取最新的 AI 运营干货
                </p>
                <div className="flex flex-col gap-2">
                  <input
                    className="px-4 py-2 bg-gray-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-600 outline-none"
                    placeholder="输入您的邮箱"
                    type="email"
                  />
                  <button className="bg-indigo-600 text-white py-2 rounded-lg text-sm font-bold">
                    订阅
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8 text-center">
              <p className="text-gray-400 text-xs italic">
                Copyright © 2026 AI Social Matrix Pro. All rights reserved.
                <br className="md:hidden" />
                当前时间: 2026年3月27日
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}