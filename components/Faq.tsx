import { faq } from "@/lib/site";

export function Faq() {
  return (
    <section className="section section--raised" id="faq">
      <div className="container faq">
        <header className="section__head">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2>Antes de começar.</h2>
        </header>

        <div className="faq__list">
          {faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
