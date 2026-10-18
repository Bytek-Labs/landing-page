import { servicePages, servicePath } from "@/lib/service-pages";
import { navLinks, site, whatsappLink } from "@/lib/site";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__about">
          <Brand label="Bytek Labs, página inicial" />
          <p>
            Consultoria de tecnologia: desenvolvimento de software sob medida, sites, automação e
            inteligência artificial. Atendimento remoto para empresas de todo o Brasil.
          </p>
        </div>

        <nav aria-label="Serviços">
          <h2 className="footer__title">Serviços</h2>
          <ul>
            {servicePages.map((p) => (
              <li key={p.slug}><a href={servicePath(p.slug)}>{p.name}</a></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Navegação">
          <h2 className="footer__title">Bytek Labs</h2>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">Contato</h2>
          <ul>
            <li><a href={whatsappLink("Olá! Gostaria de conversar sobre um projeto com a Bytek Labs.")} target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href="https://github.com/Bytek-Labs" target="_blank" rel="noopener">GitHub</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Bytek Labs</p>
        <p>Software · Automação · Inteligência Artificial</p>
      </div>
    </footer>
  );
}
