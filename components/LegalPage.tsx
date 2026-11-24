import type { Metadata } from "next";
import { site } from "@/lib/site";

// Estrutura comum de Termos de uso e Política de privacidade.

export const legalUpdated = "23 de novembro de 2026";

export function legalMetadata(path: string, title: string, description: string): Metadata {
  return {
    title: `${title} | Bytek Labs`,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: path,
      siteName: site.name,
      title: `${title} | Bytek Labs`,
      description,
      // o openGraph da página substitui o da raiz, então a imagem precisa ser repetida
      images: [{ url: "/opengraph-image.jpg", width: 1376, height: 768, alt: "Bytek Labs" }],
    },
  };
}

export function LegalPage({ title, lead, children }: { title: string; lead: string; children: React.ReactNode }) {
  return (
    <>
      <section className="page-hero page-hero--compact">
        <div className="grid-bg" aria-hidden="true" />
        <div className="container page-hero__inner">
          <nav aria-label="Você está em" className="breadcrumb">
            <ol>
              <li><a href="/">Início</a></li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>
          <h1>{title}</h1>
          <p className="lead">{lead}</p>
          <p className="legal__updated mono">Última atualização: {legalUpdated}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="legal">{children}</article>
        </div>
      </section>
    </>
  );
}

/** Identificação do prestador, repetida nas duas páginas. */
export function LegalIdentity() {
  return (
    <ul>
      <li><strong>Nome comercial:</strong> {site.name}</li>
      <li><strong>Responsável:</strong> {site.responsible}</li>
      <li><strong>CNPJ:</strong> {site.cnpj}</li>
      <li><strong>E-mail:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></li>
      <li><strong>Telefone/WhatsApp:</strong> <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">{site.phone}</a></li>
      <li><strong>Site:</strong> <a href="/">{site.url.replace(/^https?:\/\//, "")}</a></li>
    </ul>
  );
}
