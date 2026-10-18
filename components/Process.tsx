import { steps } from "@/lib/site";
import { SectionHead } from "./SectionHead";

export function Process() {
  return (
    <section className="section" id="processo">
      <div className="container">
        <SectionHead eyebrow="Como trabalhamos" title="Primeiro o problema. Depois a tecnologia.">
          Você não precisa saber qual tecnologia usar. Precisa saber o que está tentando resolver, e ter
          clareza sobre como a solução será construída.
        </SectionHead>

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
  );
}
