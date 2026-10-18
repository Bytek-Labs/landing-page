const flowPaths = ["M0 18 C36 18 36 100 72 100", "M0 100 L72 100", "M0 182 C36 182 36 100 72 100"];

export function Hero() {
  return (
    <section className="hero">
      <div className="grid-bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Bytek Labs · Software &amp; Tecnologia</p>
          <h1>
            Tecnologia sob medida para <span className="accent">desafios reais.</span>
          </h1>
          <p className="lead">
            Desenvolvemos sistemas, aplicações web e automações inteligentes que ajudam empresas a
            simplificar processos, conectar operações e transformar ideias em produtos digitais.
          </p>
          <div className="hero__actions">
            <a href="#contato" className="btn btn--primary">
              Vamos conversar
              <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" /></svg>
            </a>
            <a href="#servicos" className="btn btn--ghost">Conheça nossas soluções</a>
          </div>
          <ul className="pillars" aria-label="Áreas de atuação">
            <li><strong>Software</strong><span>Sob medida</span></li>
            <li><strong>Automação</strong><span>Processos inteligentes</span></li>
            <li><strong>Inteligência artificial</strong><span>Aplicada a negócios</span></li>
          </ul>
        </div>

        {/* Diagrama: de processos soltos a um sistema conectado */}
        <div className="hero__visual" aria-hidden="true">
          <div className="flow">
            <div className="flow__col flow__col--in">
              {["planilhas.xlsx", "mensagens soltas", "tarefas manuais"].map((t) => (
                <div key={t} className="chip chip--muted"><i className="dot" />{t}</div>
              ))}
            </div>

            <svg className="flow__lines" viewBox="0 0 72 200" preserveAspectRatio="none">
              {flowPaths.map((d, i) => (
                <g key={d}>
                  <path d={d} />
                  <circle className="flow__packet" r="2.5">
                    <animateMotion dur="2.4s" begin={`${i * 0.8}s`} repeatCount="indefinite" path={d} />
                  </circle>
                </g>
              ))}
            </svg>

            <div className="core">
              <div className="core__bar"><span /><span /><span /><em>sistema-central</em></div>
              <div className="core__body">
                <div className="core__row"><b>Clientes</b><span className="pill">sincronizado</span></div>
                <div className="core__row"><b>Ordens</b><span className="meter"><i style={{ "--w": "72%" } as React.CSSProperties} /></span></div>
                <div className="core__row"><b>Financeiro</b><span className="meter"><i style={{ "--w": "48%" } as React.CSSProperties} /></span></div>
                <div className="core__row"><b>Assistente</b><span className="pill pill--accent">ativo</span></div>
              </div>
            </div>
          </div>
          <div className="flow__caption mono">entender → projetar → construir → evoluir</div>
        </div>
      </div>
    </section>
  );
}
