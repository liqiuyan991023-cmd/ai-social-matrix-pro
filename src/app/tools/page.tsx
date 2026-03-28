"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useMemo, useState } from "react";

type ToolItem = {
  title: string;
  description: string;
  badge: string;
  icon: string;
  iconBgClass: string;
  iconTextClass: string;
  category: "视频脚本" | "社交文案" | "SEO/博客" | "邮件营销" | "广告创意";
};

const categories = [
  "全部工具",
  "视频脚本",
  "社交文案",
  "SEO/博客",
  "邮件营销",
  "广告创意",
] as const;

const tools: ToolItem[] = [
  {
    title: "TikTok 爆款脚本",
    description:
      "基于最新流量逻辑，自动生成前3秒吸睛钩子、核心价值点与互动指令。",
    badge: "🔥 使用率最高",
    icon: "🎬",
    iconBgClass: "bg-red-50",
    iconTextClass: "text-red-600",
    category: "视频脚本",
  },
  {
    title: "Google Ads 优化器",
    description: "自动分析竞品广告语，生成高 CTR 的搜索广告标题与描述。",
    badge: "专业营销专用",
    icon: "📢",
    iconBgClass: "bg-blue-50",
    iconTextClass: "text-blue-600",
    category: "广告创意",
  },
  {
    title: "Instagram 情绪文案",
    description: "生成富有感染力的图片配文，自带分层 Hashtag，提升互动率。",
    badge: "视觉创作必备",
    icon: "📸",
    iconBgClass: "bg-pink-50",
    iconTextClass: "text-pink-600",
    category: "社交文案",
  },
  {
    title: "Amazon 五点描述",
    description: "输入产品卖点，AI 自动扩充为高转化、符合 SEO 规则的 Listing。",
    badge: "电商出海利器",
    icon: "🛒",
    iconBgClass: "bg-green-50",
    iconTextClass: "text-green-600",
    category: "SEO/博客",
  },
  {
    title: "多语种地道化翻译",
    description: "支持 26 种主流语言，模拟当地人语气，避免生硬的机器感。",
    badge: "支持 26+ 语言",
    icon: "🌍",
    iconBgClass: "bg-purple-50",
    iconTextClass: "text-purple-600",
    category: "社交文案",
  },
  {
    title: "冷启动开发信",
    description: "针对 B2B 场景，生成专业且具有转化力的英文开发信模板。",
    badge: "B2B 外贸专用",
    icon: "✉️",
    iconBgClass: "bg-amber-50",
    iconTextClass: "text-amber-600",
    category: "邮件营销",
  },
  {
    title: "新闻稿/PR 发布",
    description: "快速生成标准的品牌公关稿，适用于海外主流媒体发布。",
    badge: "企业品牌建设",
    icon: "📰",
    iconBgClass: "bg-cyan-50",
    iconTextClass: "text-cyan-600",
    category: "SEO/博客",
  },
  {
    title: "YouTube 创意选题",
    description: "根据近期搜索热词，为您提供 10 个高点击率的选题方向。",
    badge: "拒绝创作枯竭",
    icon: "💡",
    iconBgClass: "bg-orange-50",
    iconTextClass: "text-orange-600",
    category: "视频脚本",
  },
];

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("全部工具");

  const filteredTools = useMemo(() => {
    if (activeCategory === "全部工具") return tools;
    return tools.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-gray-900">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white shadow-sm">
              <Icon icon="mdi:matrix" className="text-xl" />
            </div>
            <span className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-lg font-bold text-transparent">
              AI Social Matrix Pro
            </span>
          </Link>

          <div className="flex items-center gap-4 md:gap-6">
            <Link href="/" className="text-sm text-gray-600 transition-colors hover:text-primary">
              首页
            </Link>
            <Link href="/tools" className="border-b-2 border-primary py-1 text-sm font-bold text-primary">
              文案中心
            </Link>
            <Link href="/dashboard" className="hidden text-sm text-gray-600 transition-colors hover:text-primary sm:inline">
              管理后台
            </Link>
            <Link
              href="/ai/text"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:brightness-110"
            >
              开始创作
            </Link>
          </div>
        </div>
      </nav>

      <main className="pb-16 pt-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10">
            <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              AI 文案创作中心
            </h1>
            <p className="text-slate-500">
              集成全球最先进的语言模型，为您量身定制爆款内容
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
            <div className="min-w-0 flex-1">
              <div className="mb-8 flex flex-wrap gap-2 md:gap-3">
                {categories.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={
                        isActive
                          ? "rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md shadow-primary/25"
                          : "rounded-full border border-gray-200 bg-white px-5 py-2 text-sm text-gray-600 transition-all hover:border-primary/40 hover:text-primary"
                      }
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {filteredTools.map((tool) => (
                  <Link
                    key={tool.title}
                    href="/ai/text"
                    className="group flex h-full flex-col rounded-2xl border border-gray-100/80 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                  >
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-105 ${tool.iconBgClass} ${tool.iconTextClass}`}
                    >
                      {tool.icon}
                    </div>

                    <h3 className="mb-2 font-bold text-gray-900">{tool.title}</h3>
                    <p className="mb-4 text-xs leading-relaxed text-gray-500">{tool.description}</p>

                    <div className="mt-auto flex items-center justify-between">
                      <span className="rounded-md bg-slate-50 px-2 py-1 text-[10px] text-slate-500">{tool.badge}</span>
                      <Icon icon="mdi:arrow-right" className="text-xl text-primary transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                ))}
              </div>

              {filteredTools.length === 0 ? (
                <p className="mt-8 rounded-2xl border border-dashed border-gray-200 bg-white py-12 text-center text-sm text-gray-500">
                  该分类下暂无工具，请切换其他分类试试。
                </p>
              ) : null}

              <div className="mt-14 rounded-3xl bg-gradient-to-r from-primary to-violet-700 p-8 text-center text-white shadow-xl md:p-12">
                <h2 className="mb-3 text-2xl font-bold md:text-3xl">没有找到您需要的工具？</h2>
                <p className="mx-auto mb-8 max-w-xl text-base text-white/85 md:text-lg">
                  我们的 AI 模型支持自定义工作流。您可以告诉我们您的需求，系统会自动为您生成专属的创作助手。
                </p>
                <Link
                  href="/ai/text"
                  className="inline-block rounded-xl bg-white px-8 py-4 text-lg font-bold text-primary transition-all hover:bg-white/95"
                >
                  定制专属 AI 工具
                </Link>
              </div>
            </div>

            <aside className="w-full shrink-0 space-y-6 lg:w-72 xl:w-80">
              <div className="ad-placeholder h-40 rounded-2xl" />
              <div className="rounded-2xl border border-primary/15 bg-primary/5 p-6">
                <h4 className="mb-2 font-bold text-slate-900">加入官方专家社群</h4>
                <p className="mb-4 text-xs leading-relaxed text-slate-600">
                  获取第一手跨境运营秘籍，与全球 50,000+ 顶尖创作者共同进步。
                </p>
                <button
                  type="button"
                  className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
                >
                  立即加入
                </button>
              </div>
              <div className="ad-placeholder h-32 rounded-2xl" />
            </aside>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm text-gray-400">© 2026 AI Social Matrix Pro - AI 创作中心 | 跨境运营新体验</p>
        </div>
      </footer>
    </div>
  );
}
