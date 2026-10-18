import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera um site estático em out/ (Cloudflare Pages, Vercel, Netlify...)
  output: "export",
  images: { unoptimized: true },
  // Gera servicos/<slug>/index.html, que todo host estático resolve sem ambiguidade
  trailingSlash: true,
  // Permite abrir o servidor de desenvolvimento pelo celular na rede local
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
};

export default nextConfig;
