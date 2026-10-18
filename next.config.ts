import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera um site estático em out/ (Cloudflare Pages, Vercel, Netlify...)
  output: "export",
  images: { unoptimized: true },
  // Permite abrir o servidor de desenvolvimento pelo celular na rede local
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
};

export default nextConfig;
