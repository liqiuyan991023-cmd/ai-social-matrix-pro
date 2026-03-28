"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type KPIItem = {
  title: string;
  value: string;
  change: string;
  changePositive: boolean;
  iconBg: string;
  iconText: string;
  icon: string;
};

type PostRow = {
  title: string;
  platforms: { icon: string; color: string }[];
  status: string;
  statusClass: string;
  impressions: string;
  publishTime: string;
  action: string;
};

const kpiItems: KPIItem[] = [
  {
    title: "总曝光量",
    value: "2,485,900",
    change: "+12.5%",
    changePositive: true,
    iconBg: "bg-primary/10",
    iconText: "text-primary",
    icon: "mdi:eye",
  },
  {
    title: "互动总数",
    value: "124,032",
    change: "+24.8%",
    changePositive: true,
    iconBg: "bg-pink-50",
    iconText: "text-pink-600",
    icon: "mdi:heart",
  },
  {
    title: "新增关注",
    value: "15,840",
    change: "-2.1%",
    changePositive: false,
    iconBg: "bg-amber-50",
    iconText: "text-amber-600",
    icon: "mdi:account-plus",
  },
  {
    title: "估算收入",
    value: "$4,120.00",
    change: "+18.2%",
    changePositive: true,
    iconBg: "bg-green-50",
    iconText: "text-green-600",
    icon: "mdi:currency-usd",
  },
];

const postRows: PostRow[] = [
  {
    title: "2026跨境出海新蓝海话题分析",
    platforms: [
      { icon: "mdi:youtube", color: "text-red-500" },
      { icon: "mdi:instagram", color: "text-pink-500" },
    ],
    status: "已发布",
    statusClass: "bg-green-50 text-green-600",
    impressions: "12,400",
    publishTime: "2小时前",
    action: "分析",
  },
  {
    title: "AI 视频创作工具实测对比",
    platforms: [{ icon: "mdi:tiktok", color: "text-slate-900" }],
    status: "审核中",
    statusClass: "bg-amber-50 text-amber-600",
    impressions: "-",
    publishTime: "4小时前",
    action: "详情",
  },
  {
    title: "春季时尚趋势预演 #Fashion2026",
    platforms: [
      { icon: "mdi:instagram", color: "text-pink-500" },
      { icon: "mdi:twitter", color: "text-blue-400" },
    ],
    status: "定时中",
    statusClass: "bg-primary/10 text-primary",
    impressions: "-",
    publishTime: "计划于 20:00",
    action: "修改建议",
  },
];

const navItems = [
  { href: "/dashboard", label: "数据概览", icon: "mdi:view-dashboard" },
  { href: "/hot-topics", label: "热点监控", icon: "mdi:fire" },
  { href: "/tools", label: "内容中心", icon: "mdi:pencil-box-multiple" },
  { href: "/publish", label: "智能发布", icon: "mdi:send-circle" },
  { href: "/social-accounts", label: "账户管理", icon: "mdi:account-group" },
  { href: "/analytics", label: "效果分析", icon: "mdi:chart-bar" },
] as const;

export default function DashboardPage() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const trendChartRef = useRef<HTMLDivElement | null>(null);
  const pieChartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let trendChart: any;
    let pieChart: any;

    const initCharts = async () => {
      const echarts = await import("echarts");

      if (trendChartRef.current) {
        trendChart = echarts.init(trendChartRef.current);
        trendChart.setOption({
          tooltip: { trigger: "axis" },
          legend: { data: ["TikTok", "Instagram", "Twitter"], bottom: 0 },
          grid: {
            top: "10%",
            left: "3%",
            right: "4%",
            bottom: "15%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          },
          yAxis: { type: "value" },
          series: [
            {
              name: "TikTok",
              type: "line",
              smooth: true,
              data: [120, 132, 101, 134, 90, 230, 210],
              itemStyle: { color: "#5d5cde" },
            },
            {
              name: "Instagram",
              type: "line",
              smooth: true,
              data: [220, 182, 191, 234, 290, 330, 310],
              itemStyle: { color: "#ec4899" },
            },
            {
              name: "Twitter",
              type: "line",
              smooth: true,
              data: [150, 232, 201, 154, 190, 330, 410],
              itemStyle: { color: "#22d3ee" },
            },
          ],
        });
      }

      if (pieChartRef.current) {
        pieChart = echarts.init(pieChartRef.current);
        pieChart.setOption({
          tooltip: { trigger: "item" },
          legend: { bottom: 0, left: "center" },
          series: [
            {
              name: "平台分布",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2,
              },
              label: { show: false, position: "center" },
              emphasis: {
                label: { show: true, fontSize: 18, fontWeight: "bold" },
              },
              labelLine: { show: false },
              data: [
                { value: 1048, name: "TikTok", itemStyle: { color: "#5d5cde" } },
                { value: 735, name: "Instagram", itemStyle: { color: "#ec4899" } },
                { value: 580, name: "YouTube", itemStyle: { color: "#ef4444" } },
                { value: 484, name: "Facebook", itemStyle: { color: "#3b82f6" } },
                { value: 300, name: "Others", itemStyle: { color: "#94a3b8" } },
              ],
            },
          ],
        });
      }
    };

    const handleResize = () => {
      trendChart?.resize();
      pieChart?.resize();
    };

    void initCharts();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      trendChart?.dispose();
      pieChart?.dispose();
    };
  }, []);

  const sidebar = (
    <>
      <div className="flex items-center gap-3 border-b border-slate-800/80 p-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary shadow-inner">
          <Icon icon="mdi:matrix" className="text-xl text-white" />
        </div>
        <span className="text-lg font-bold tracking-tight">Matrix Pro</span>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileNavOpen(false)}
              className={
                active
                  ? "flex items-center gap-3 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-white shadow-lg shadow-primary/20"
                  : "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800/80 hover:text-white"
              }
            >
              <Icon icon={item.icon} className="text-xl shrink-0" />
              {item.label}
            </Link>
          );
        })}

        <div className="mt-4 border-t border-slate-800 pt-4">
          <Link
            href="/"
            onClick={() => setMobileNavOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <Icon icon="mdi:home" className="text-xl" /> 返回首页
          </Link>
        </div>
      </nav>

      <div className="border-t border-slate-800/80 bg-slate-950/40 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/60 bg-slate-800 text-sm font-bold text-white">
            P
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold">Premium User</p>
            <p className="text-[10px] text-slate-500">有效期至 2027/03/27</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f9fc] text-slate-800">
      {/* 桌面侧栏 */}
      <aside className="hidden w-64 flex-col bg-[#0f172a] text-white lg:flex">{sidebar}</aside>

      {/* 移动端抽屉 */}
      {mobileNavOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/60"
            aria-label="关闭菜单"
            onClick={() => setMobileNavOpen(false)}
          />
          <aside className="absolute left-0 top-0 flex h-full w-64 flex-col bg-[#0f172a] text-white shadow-2xl">
            {sidebar}
          </aside>
        </div>
      ) : null}

      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200/80 bg-white px-4 shadow-sm md:px-8">
          <div className="flex flex-1 items-center gap-3">
            <button
              type="button"
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
              aria-label="打开菜单"
              onClick={() => setMobileNavOpen(true)}
            >
              <Icon icon="mdi:menu" className="text-2xl" />
            </button>
            <div className="relative hidden w-64 sm:block md:max-w-xs flex-1">
              <Icon
                icon="mdi:magnify"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                className="w-full rounded-xl border border-transparent bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none transition-shadow focus:border-primary/30 focus:bg-white focus:ring-2 focus:ring-primary/20"
                placeholder="搜索话题、内容、订单..."
                type="search"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <button type="button" className="relative text-gray-400 transition-colors hover:text-primary">
              <Icon icon="mdi:bell-outline" className="text-2xl" />
              <span className="absolute right-0 top-0 h-2 w-2 rounded-full border-2 border-white bg-red-500" />
            </button>
            <button type="button" className="text-gray-400 transition-colors hover:text-primary">
              <Icon icon="mdi:cog-outline" className="text-2xl" />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {kpiItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100/80 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.iconBg} ${item.iconText}`}
                  >
                    <Icon icon={item.icon} className="text-xl" />
                  </div>
                  <span
                    className={`rounded px-2 py-1 text-xs font-bold ${
                      item.changePositive ? "bg-green-50 text-green-500" : "bg-red-50 text-red-500"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
                <h4 className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400">{item.title}</h4>
                <div className="text-2xl font-extrabold">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-100/80 bg-white p-6 shadow-card lg:col-span-2">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-slate-800">全球热点趋势监控 (TikTok/Instagram)</h3>
                <select className="cursor-pointer rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-slate-600 outline-none transition-colors hover:bg-gray-100">
                  <option>最近7天</option>
                  <option>最近30天</option>
                </select>
              </div>
              <div ref={trendChartRef} className="h-80 w-full" />
            </div>

            <div className="rounded-2xl border border-gray-100/80 bg-white p-6 shadow-card">
              <h3 className="mb-6 text-lg font-bold text-slate-800">平台发布分布</h3>
              <div ref={pieChartRef} className="h-80 w-full" />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100/80 bg-white shadow-card">
            <div className="flex items-center justify-between border-b border-gray-100 p-6">
              <h3 className="text-lg font-bold text-slate-800">最新发布状态</h3>
              <button type="button" className="text-sm font-bold text-primary transition-colors hover:underline">
                查看全部
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  <tr>
                    <th className="px-6 py-4">内容标题</th>
                    <th className="px-6 py-4">发布平台</th>
                    <th className="px-6 py-4">状态</th>
                    <th className="px-6 py-4">曝光量</th>
                    <th className="px-6 py-4">发布时间</th>
                    <th className="px-6 py-4">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {postRows.map((row) => (
                    <tr key={row.title}>
                      <td className="px-6 py-4 font-medium">{row.title}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          {row.platforms.map((p, idx) => (
                            <Icon key={`${row.title}-${idx}`} icon={p.icon} className={`text-xl ${p.color}`} />
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`rounded-full px-2 py-1 text-xs font-bold ${row.statusClass}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">{row.impressions}</td>
                      <td className="px-6 py-4 text-gray-500">{row.publishTime}</td>
                      <td className="cursor-pointer px-6 py-4 font-bold text-primary">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}