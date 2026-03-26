"use strict";(()=>{var e={};e.id=717,e.ids=[717],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},44674:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>d,patchFetch:()=>x,requestAsyncStorage:()=>u,routeModule:()=>l,serverHooks:()=>m,staticGenerationAsyncStorage:()=>c});var a={};r.r(a),r.d(a,{GET:()=>p});var i=r(49303),o=r(88716),s=r(60670),n=r(87070);async function p(){let e=process.env.NEXTAUTH_URL||"http://localhost:3000",t=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${["","features","pricing","login","register","dashboard","profile","settings","ai/text","ai/image","hot-topics","social-accounts","publish","analytics"].map(t=>`
    <url>
      <loc>${e}/${t}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`).join("")}
</urlset>`;return new n.NextResponse(t,{headers:{"Content-Type":"application/xml"}})}let l=new i.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"route",bundlePath:"app/sitemap.xml/route"},resolvedPagePath:"D:\\github\\ai-social-matrix-pro\\ai-social-matrix-pro\\src\\app\\sitemap.xml\\route.ts",nextConfigOutput:"export",userland:a}),{requestAsyncStorage:u,staticGenerationAsyncStorage:c,serverHooks:m}=l,d="/sitemap.xml/route";function x(){return(0,s.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:c})}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[276,972],()=>r(44674));module.exports=a})();