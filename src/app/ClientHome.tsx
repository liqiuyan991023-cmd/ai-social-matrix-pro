"use client";
import { Main } from "next/document";
import Script from "next/script";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { icon?: string | undefined };
    }
  }
}

function Ico({ icon, className }: { icon: string; className?: string }) {
  return <iconify-icon icon={icon} className={className} />;
}

export default function ClientHome() {
  return (
    <>
      <Script
        src="https://modao.cc/agent-py/static/source/js/iconify-icon.min.1.0.7.js"
        strategy="beforeInteractive"
      />
      <div className="p-4">
        <Ico icon="mdi:matrix" className="text-2xl" />
      </div>
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
    </>
  );
}
