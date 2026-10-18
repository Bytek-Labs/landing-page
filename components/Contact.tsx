import { site, whatsappLink } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section className="section cta" id="contato">
      <div className="grid-bg" aria-hidden="true" />
      <div className="container cta__inner">
        <div className="cta__copy">
          <p className="eyebrow">Contato</p>
          <h2>Conte qual é o seu desafio.</h2>
          <p className="lead">
            Descreva o problema com suas palavras. A gente volta com perguntas, um caminho possível e os
            próximos passos.
          </p>
          <ul className="contact-list">
            <li>
              <span className="mono">whatsapp</span>
              <a
                href={whatsappLink("Olá! Gostaria de conversar sobre um projeto com a Bytek Labs.")}
                target="_blank"
                rel="noopener"
              >
                Abrir conversa
              </a>
            </li>
            <li>
              <span className="mono">e-mail</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
