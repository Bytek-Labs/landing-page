import { servicePages, servicePath } from "@/lib/service-pages";
import { site } from "@/lib/site";

// Dados estruturados (schema.org) para o Google entender quem é a empresa e o que ela faz.

type Thing = Record<string, unknown>;

export const orgId = () => `${site.url}/#organization`;

export function JsonLd({ graph }: { graph: Thing[] }) {
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function organizationGraph(): Thing[] {
  return [
    {
      "@type": "ProfessionalService",
      "@id": orgId(),
      name: site.name,
      url: `${site.url}/`,
      logo: `${site.url}/logo.png`,
      image: `${site.url}/opengraph-image.jpg`,
      description:
        "Consultoria independente de tecnologia: sistemas sob medida, sites e aplicações web, automação, inteligência artificial e integração de sistemas.",
      email: site.email,
      telephone: `+${site.whatsapp}`,
      areaServed: { "@type": "Country", name: "Brasil" },
      knowsLanguage: "pt-BR",
      sameAs: ["https://github.com/Bytek-Labs"],
      knowsAbout: [
        "Desenvolvimento de software sob medida",
        "Criação de sites",
        "Aplicações web",
        "Automação de processos",
        "Inteligência artificial",
        "Integração de sistemas",
        "Desenvolvimento de APIs",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços",
        itemListElement: servicePages.map((p) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: p.h1, url: `${site.url}${servicePath(p.slug)}` },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      inLanguage: "pt-BR",
      publisher: { "@id": orgId() },
    },
  ];
}

export function faqGraph(items: { q: string; a: string }[]): Thing {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
