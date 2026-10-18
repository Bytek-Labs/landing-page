import { productStages, products } from "@/lib/site";
import { ProductPreview } from "./ProductPreview";
import { SectionHead } from "./SectionHead";

export function Products() {
  return (
    <section className="section section--raised" id="produtos">
      <div className="container">
        <SectionHead eyebrow="Produtos próprios" title="Também construímos produtos.">
          Além dos projetos para clientes, desenvolvemos softwares próprios para mercados específicos. Cada
          um tem seu público, sua identidade e seu estágio, mostrado aqui como ele está de fato.
        </SectionHead>

        <div className="products">
          {products.map((p) => (
            <article key={p.name} className="product spot tilt reveal">
              <ProductPreview product={p.name} />

              <div className="product__top">
                <span className={`status status--${p.status.tone}`}><i />{p.status.label}</span>
                <h3 className="product__name">{p.name}</h3>
                <p className="product__tag">{p.tagline}</p>
              </div>

              <p>{p.text}</p>

              <ol
                className="roadmap"
                aria-label={`Estágio: ${productStages[p.stage]}`}
                style={{ "--progress": p.stage / (productStages.length - 1) } as React.CSSProperties}
              >
                {productStages.map((stage, i) => (
                  <li
                    key={stage}
                    className={i < p.stage ? "is-done" : i === p.stage ? "is-current" : undefined}
                    aria-current={i === p.stage ? "step" : undefined}
                  >
                    <span>{stage}</span>
                  </li>
                ))}
              </ol>

              <div className="product__note">
                <span className="mono">{p.note.label}</span>
                <p>{p.note.highlight && <strong>{p.note.highlight}</strong>}{p.note.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
