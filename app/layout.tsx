import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
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

const description =
  "Consultoria independente de tecnologia. Desenvolvemos sistemas sob medida, aplicações web, automações e integrações para resolver problemas reais de negócio.";

const revealGuard = `(function(d){d.classList.add('js');setTimeout(function(){if(!d.dataset.reveal)d.classList.remove('js')},3000)})(document.documentElement)`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Bytek Labs · Software, automação e IA sob medida",
  description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
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
      <body>{children}</body>
    </html>
  );
}
