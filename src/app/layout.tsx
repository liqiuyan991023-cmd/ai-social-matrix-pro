import type { Metadata } from "next";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "AI Social Matrix Pro",
  description: "AI 社交矩阵系统",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}