import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { JsonLd, faqGraph, orgId } from "@/components/StructuredData";
import { servicePages, servicePath } from "@/lib/service-pages";
import { site, steps } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}

const findPage = (slug: string) => servicePages.find((p) => p.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = findPage((await params).slug);
  if (!page) return {};
  const path = servicePath(page.slug);
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: path,
      siteName: site.name,
      title: page.metaTitle,
      description: page.metaDescription,
      // o openGraph da página substitui o da raiz, então a imagem precisa ser repetida
      images: [{ url: "/opengraph-image.jpg", width: 1376, height: 768, alt: "Bytek Labs" }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const page = findPage((await params).slug);
  if (!page) notFound();

  const url = `${site.url}${servicePath(page.slug)}`;
  const related = servicePages.filter((p) => p.slug !== page.slug);

  return (
    <>
      <section className="page-hero">
        <div className="grid-bg" aria-hidden="true" />
        <div className="container page-hero__inner">
          <nav aria-label="Você está em" className="breadcrumb">
            <ol>
              <li><a href="/">Início</a></li>
              <li><a href="/#servicos">Serviços</a></li>
              <li aria-current="page">{page.name}</li>
            </ol>
          </nav>
          <h1>{page.h1}</h1>
          <p className="lead">{page.lead}</p>
          <div className="hero__actions">
            <a href="#contato" className="btn btn--primary">
              Pedir um orçamento
              <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" /></svg>
            </a>
            <a href="#como-funciona" className="btn btn--ghost">Como funciona</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="prose">
            {page.intro.map((text) => <p key={text}>{text}</p>)}
          </div>
          <div className="signs">
            <h2>Quando faz sentido</h2>
            <ul>
              {page.signs.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--raised">
        <div className="container">
          <header className="section__head">
            <p className="eyebrow">O que desenvolvemos</p>
            <h2>Soluções em {page.name.toLowerCase()}</h2>
          </header>
          {/* 4 itens cabem numa linha; 5 ficam 3 + 2, sem card sozinho no fim */}
          <div className="deliverables" style={{ "--cols": page.deliverables.length === 4 ? 4 : 3 } as React.CSSProperties}>
            {page.deliverables.map((d) => (
              <article key={d.title} className="deliverable spot reveal">
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="como-funciona">
        <div className="container">
          <header className="section__head">
            <p className="eyebrow">Como funciona</p>
            <h2>Primeiro o problema. Depois a tecnologia.</h2>
          </header>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title} className="step reveal">
                <span className="step__num mono">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--raised">
        <div className="container faq">
          <header className="section__head">
            <p className="eyebrow">Perguntas frequentes</p>
            <h2>Dúvidas sobre {page.name.toLowerCase()}</h2>
          </header>
          <div className="faq__list">
            {page.faq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__head">
            <p className="eyebrow">Outros serviços</p>
            <h2>Também podemos ajudar com</h2>
          </header>
          <div className="related">
            {related.map((p) => (
              <a key={p.slug} href={servicePath(p.slug)} className="related__card spot">
                <h3>{p.name}</h3>
                <p>{p.lead}</p>
                <span className="related__more">Ver serviço →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      <JsonLd
        graph={[
          {
            "@type": "Service",
            "@id": `${url}#service`,
            name: page.h1,
            serviceType: page.name,
            description: page.metaDescription,
            url,
            provider: { "@id": orgId() },
            areaServed: { "@type": "Country", name: "Brasil" },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: `${site.url}/` },
              { "@type": "ListItem", position: 2, name: "Serviços", item: `${site.url}/#servicos` },
              { "@type": "ListItem", position: 3, name: page.name, item: url },
            ],
          },
          faqGraph(page.faq),
        ]}
      />
    </>
  );
}
