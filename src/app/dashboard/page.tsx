"use client";

import { Icon } from "@iconify/react";
import { useEffect, useRef } from "react";

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
    iconBg: "bg-indigo-50",
    iconText: "text-indigo-600",
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
    statusClass: "bg-indigo-50 text-indigo-600",
    impressions: "-",
    publishTime: "计划于 20:00",
    action: "修改建议",
  },
];

export default function DashboardPage() {
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
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: { type: "value" },
          series: [
            {
              name: "TikTok",
              type: "line",
              smooth: true,
              data: [120, 132, 101, 134, 90, 230, 210],
              itemStyle: { color: "#4f46e5" },
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
              itemStyle: { color: "#0ea5e9" },
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
                { value: 1048, name: "TikTok", itemStyle: { color: "#4f46e5" } },
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

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f9fc] text-slate-800">
      <aside className="hidden w-64 flex-col bg-slate-900 text-white lg:flex">
        <div className="flex items-center gap-3 border-b border-slate-800 p-6">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-indigo-600">
            <Icon icon="mdi:matrix" className="text-xl text-white" />
          </div>
          <span className="text-lg font-bold">Matrix Pro</span>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto p-4">
          <a className="flex items-center gap-3 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-medium" href="#">
            <Icon icon="mdi:view-dashboard" className="text-xl" /> 数据概览
          </a>
          <a
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
            href="#"
          >
            <Icon icon="mdi:fire" className="text-xl" /> 热点监控
          </a>
          <a
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
            href="#"
          >
            <Icon icon="mdi:pencil-box-multiple" className="text-xl" /> 内容中心
          </a>
          <a
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
            href="#"
          >
            <Icon icon="mdi:send-circle" className="text-xl" /> 智能发布
          </a>
          <a
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
            href="#"
          >
            <Icon icon="mdi:account-group" className="text-xl" /> 账户管理
          </a>
          <a
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
            href="#"
          >
            <Icon icon="mdi:chart-bar" className="text-xl" /> 效果分析
          </a>

          <div className="mt-4 border-t border-slate-800 pt-4">
            <a className="flex items-center gap-3 px-4 py-3 text-sm text-slate-400 hover:text-white" href="#">
              <Icon icon="mdi:home" className="text-xl" /> 返回首页
            </a>
          </div>
        </nav>

        <div className="bg-slate-800/50 p-4">
          <div className="flex items-center gap-3">
            <img
              alt="User Avatar"
              className="h-10 w-10 rounded-full border-2 border-indigo-500"
              src="https://modao.cc/agent-py/media/generated_images/2026-03-27/00eadfe7a19143b0a17b654fdd47f5f3.jpg"
            />
            <div className="overflow-hidden">
              <p className="truncate text-sm font-bold">Premium User</p>
              <p className="text-[10px] text-slate-500">有效期至 2027/03/27</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-8">
          <div className="flex flex-1 items-center gap-4">
            <div className="relative hidden w-64 md:block">
              <Icon
                icon="mdi:magnify"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                className="w-full rounded-lg border-none bg-gray-50 py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-indigo-600"
                placeholder="搜索话题、内容、订单..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-indigo-600">
              <Icon icon="mdi:bell-outline" className="text-2xl" />
              <span className="absolute right-0 top-0 h-2 w-2 rounded-full border-2 border-white bg-red-500" />
            </button>
            <button className="text-gray-400 hover:text-indigo-600">
              <Icon icon="mdi:cog-outline" className="text-2xl" />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {kpiItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
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
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-800">全球热点趋势监控 (TikTok/Instagram)</h3>
                <select className="rounded-lg border-gray-200 bg-gray-50 text-xs">
                  <option>最近7天</option>
                  <option>最近30天</option>
                </select>
              </div>
              <div ref={trendChartRef} className="h-80 w-full" />
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-6 text-lg font-bold text-slate-800">平台发布分布</h3>
              <div ref={pieChartRef} className="h-80 w-full" />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 p-6">
              <h3 className="text-lg font-bold text-slate-800">最新发布状态</h3>
              <button className="text-sm font-bold text-indigo-600">查看全部</button>
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
                      <td className="cursor-pointer px-6 py-4 font-bold text-indigo-600">{row.action}</td>
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