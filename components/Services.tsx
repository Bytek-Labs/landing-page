import { services } from "@/lib/site";
import { SectionHead } from "./SectionHead";

const icons: Record<(typeof services)[number]["icon"], React.ReactNode> = {
  system: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 9v11" /></>,
  web: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" /></>,
  ai: <><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /><circle cx="12" cy="12" r="3.5" /></>,
  integration: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><path d="M10 6.5h4.5a3 3 0 0 1 3 3V14M14 17.5H9.5a3 3 0 0 1-3-3V10" /></>,
};

export function Services() {
  return (
    <section className="section section--raised" id="servicos">
      <div className="container">
        <SectionHead eyebrow="Serviços" title="Quatro frentes, um mesmo método.">
          Do site institucional ao sistema interno com integrações, cada entrega parte da necessidade do negócio.
        </SectionHead>

        <div className="services">
          {services.map((s) => (
            <article key={s.title} className="service spot reveal">
              <div className="service__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">{icons[s.icon]}</svg>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <p className="service__ex"><span className="mono">exemplo</span>{s.example}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
