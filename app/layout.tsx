import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const title = "Software sob medida, automação e IA | Bytek Labs";
const description =
  "Consultoria de tecnologia que desenvolve sistemas sob medida, sites, automações e integrações com IA para pequenas e médias empresas.";

const revealGuard = `(function(d){d.classList.add('js');setTimeout(function(){if(!d.dataset.reveal)d.classList.remove('js')},3000)})(document.documentElement)`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  // Código de verificação do Google Search Console (variável de build GOOGLE_SITE_VERIFICATION)
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.name,
    title: "Bytek Labs · Tecnologia sob medida para desafios reais",
    description:
      "Sistemas, aplicações web e automações inteligentes para simplificar processos e transformar ideias em produtos digitais.",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#111116",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Habilita as animações de entrada só quando há JavaScript. Se o app não
            iniciar em 3s (script bloqueado, rede lenta), mostra tudo sem animação. */}
        <script dangerouslySetInnerHTML={{ __html: revealGuard }} />
      </head>
      <body>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
