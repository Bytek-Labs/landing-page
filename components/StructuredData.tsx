import { faq, services, site } from "@/lib/site";

// Dados estruturados (schema.org) para o Google entender quem é a empresa e o que ela faz.
export function StructuredData() {
  const org = {
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: `${site.url}/`,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/opengraph-image.jpg`,
    description:
      "Consultoria independente de tecnologia: sistemas sob medida, aplicações web, automação, inteligência artificial e integrações.",
    email: site.email,
    telephone: `+${site.whatsapp}`,
    areaServed: { "@type": "Country", name: "Brasil" },
    knowsLanguage: "pt-BR",
    sameAs: ["https://github.com/Bytek-Labs"],
    knowsAbout: ["Desenvolvimento de software", "Aplicações web", "Automação de processos", "Inteligência artificial", "Integração de sistemas"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.text },
      })),
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.name,
    inLanguage: "pt-BR",
    publisher: { "@id": `${site.url}/#organization` },
  };

  const faqPage = {
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": [org, website, faqPage] }).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
