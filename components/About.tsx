import { values } from "@/lib/site";

export function About() {
  return (
    <section className="section" id="sobre">
      <div className="container about">
        <div className="about__copy">
          <p className="eyebrow">Sobre a Bytek Labs</p>
          <h2>Uma operação enxuta, técnica e próxima de quem contrata.</h2>
          <p>
            A Bytek Labs é uma consultoria independente de tecnologia dedicada ao desenvolvimento de
            software, automação e soluções digitais personalizadas.
          </p>
          <p>
            Acreditamos que a tecnologia deve resolver problemas concretos, simplificar processos e criar
            novas possibilidades para os negócios. Por isso, cada projeto começa pela compreensão da
            necessidade, passa por um planejamento técnico cuidadoso e evolui por meio de desenvolvimento e
            validação.
          </p>
          <p>
            Além das soluções sob medida, criamos nossos próprios produtos, explorando oportunidades em que a
            tecnologia pode tornar atividades complexas mais simples e acessíveis.
          </p>
          <p>
            Trabalhamos de forma remota e atendemos empresas de todo o Brasil, com reuniões por vídeo,
            entregas acompanhadas online e contato direto com quem desenvolve.
          </p>
        </div>

        <ul className="values">
          {values.map((v) => (
            <li key={v.title} className="reveal">
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
