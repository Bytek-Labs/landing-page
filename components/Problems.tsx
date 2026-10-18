import { problems } from "@/lib/site";
import { SectionHead } from "./SectionHead";

export function Problems() {
  return (
    <section className="section" id="solucoes">
      <div className="container">
        <SectionHead eyebrow="Problemas que resolvemos" title="Ninguém procura um sistema por causa do framework.">
          Procura porque perde tempo, perde informação ou não encontra uma ferramenta que se encaixe no
          próprio processo. É por aí que começamos.
        </SectionHead>

        <div className="problems">
          {problems.map((p, i) => (
            <article key={p.title} className="problem spot reveal">
              <span className="problem__num mono">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
