import Link from "next/link";

type ToolItem = {
  title: string;
  description: string;
  badge: string;
  icon: string;
  iconBgClass: string;
  iconTextClass: string;
};

const categories = [
  "全部工具",
  "视频脚本",
  "社交文案",
  "SEO/博客",
  "邮件营销",
  "广告创意",
];

const tools: ToolItem[] = [
  {
    title: "TikTok 爆款脚本",
    description:
      "基于最新流量逻辑，自动生成前3秒吸睛钩子、核心价值点与互动指令。",
    badge: "🔥 使用率最高",
    icon: "🎬",
    iconBgClass: "bg-red-50",
    iconTextClass: "text-red-600",
  },
  {
    title: "Google Ads 优化器",
    description: "自动分析竞品广告语，生成高 CTR 的搜索广告标题与描述。",
    badge: "专业营销专用",
    icon: "📢",
    iconBgClass: "bg-blue-50",
    iconTextClass: "text-blue-600",
  },
  {
    title: "Instagram 情绪文案",
    description: "生成富有感染力的图片配文，自带分层 Hashtag，提升互动率。",
    badge: "视觉创作必备",
    icon: "📸",
    iconBgClass: "bg-pink-50",
    iconTextClass: "text-pink-600",
  },
  {
    title: "Amazon 五点描述",
    description: "输入产品卖点，AI 自动扩充为高转化、符合 SEO 规则的 Listing。",
    badge: "电商出海利器",
    icon: "🛒",
    iconBgClass: "bg-green-50",
    iconTextClass: "text-green-600",
  },
  {
    title: "多语种地道化翻译",
    description: "支持 26 种主流语言，模拟当地人语气，避免生硬的机器感。",
    badge: "支持 26+ 语言",
    icon: "🌍",
    iconBgClass: "bg-purple-50",
    iconTextClass: "text-purple-600",
  },
  {
    title: "冷启动开发信",
    description: "针对 B2B 场景，生成专业且具有转化力的英文开发信模板。",
    badge: "B2B 外贸专用",
    icon: "✉️",
    iconBgClass: "bg-amber-50",
    iconTextClass: "text-amber-600",
  },
  {
    title: "新闻稿/PR 发布",
    description: "快速生成标准的品牌公关稿，适用于海外主流媒体发布。",
    badge: "企业品牌建设",
    icon: "📰",
    iconBgClass: "bg-cyan-50",
    iconTextClass: "text-cyan-600",
  },
  {
    title: "YouTube 创意选题",
    description: "根据近期搜索热词，为您提供 10 个高点击率的选题方向。",
    badge: "拒绝创作枯竭",
    icon: "💡",
    iconBgClass: "bg-orange-50",
    iconTextClass: "text-orange-600",
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* 导航栏 */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-indigo-600 text-white">
              ◼
            </div>
            <span className="text-lg font-bold text-gray-900">
              AI Social Matrix Pro
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-600 hover:text-indigo-600">
              首页
            </Link>
            <Link
              href="/tools"
              className="border-b-2 border-indigo-600 py-1 text-sm font-bold text-indigo-600"
            >
              文案中心
            </Link>
            <Link
              href="/dashboard"
              className="text-sm text-gray-600 hover:text-indigo-600"
            >
              管理后台
            </Link>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white">
              开始创作
            </button>
          </div>
        </div>
      </nav>

      <main className="pb-16 pt-24">
        <div className="mx-auto max-w-7xl px-4">
          {/* 头部 */}
          <div className="mb-12">
            <h1 className="mb-2 text-3xl font-extrabold text-gray-900">
              AI 文案创作中心
            </h1>
            <p className="text-gray-500">
              集成全球最先进的语言模型，为您量身定制爆款内容
            </p>
          </div>

          {/* 分类 Tab */}
          <div className="mb-10 flex flex-wrap gap-4">
            {categories.map((category, index) => {
              const isActive = index === 0;
              return (
                <button
                  key={category}
                  className={
                    isActive
                      ? "rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white"
                      : "rounded-full border border-gray-200 bg-white px-6 py-2 text-sm text-gray-600 transition-colors hover:border-indigo-600"
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* 工具网格 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-xl"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${tool.iconBgClass} ${tool.iconTextClass}`}
                >
                  {tool.icon}
                </div>

                <h3 className="mb-2 font-bold text-gray-900">{tool.title}</h3>
                <p className="mb-4 text-xs leading-relaxed text-gray-500">
                  {tool.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="rounded bg-gray-100 px-2 py-1 text-[10px] italic text-gray-500">
                    {tool.badge}
                  </span>
                  <span className="text-indigo-600">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* 特色横幅 */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 p-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">没有找到您需要的工具？</h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-indigo-100">
              我们的 AI 模型支持自定义工作流。您可以告诉我们您的需求，系统会自动为您生成专属的创作助手。
            </p>
            <button className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-indigo-600 transition-all hover:bg-indigo-50">
              定制专属 AI 工具
            </button>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm text-gray-400">
            © 2026 AI Social Matrix Pro - AI 创作中心 | 跨境运营新体验
          </p>
        </div>
      </footer>
    </div>
  );
}