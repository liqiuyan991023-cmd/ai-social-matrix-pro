"use client";
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
    </>
  );
}
