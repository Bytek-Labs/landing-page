"use client";

import { useEffect, useRef, useState } from "react";

// Prévias ilustrativas dos produtos: dados fictícios, só para mostrar a ideia.

const bymecStatuses = [
  { label: "Orçamento", tone: "muted" },
  { label: "Em execução", tone: "accent" },
  { label: "Pronto", tone: "ok" },
] as const;

const bymecOrders = [
  // Cada ordem avança de status num ritmo diferente (a cada `every` ticks).
  { car: "Gol 1.0", service: "Troca de embreagem", start: 0, every: 1 },
  { car: "Onix LT", service: "Revisão 40 mil km", start: 1, every: 2 },
  { car: "HB20", service: "Pastilhas de freio", start: 2, every: 3 },
];

const byllioInvoices = [
  { client: "Acme Inc.", usd: 3200 },
  { client: "Northwind", usd: 1850 },
  { client: "Globex LLC", usd: 2400 },
];

const RATE = 5.4; // câmbio ilustrativo

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD" });
const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Avança um contador enquanto o elemento está visível (e se o usuário aceita movimento).
function useTicker(intervalMs: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: number | undefined;
    const io = new IntersectionObserver(([entry]) => {
      window.clearInterval(timer);
      if (entry.isIntersecting) timer = window.setInterval(() => setTick((t) => t + 1), intervalMs);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearInterval(timer);
    };
  }, [intervalMs]);

  return { ref, tick };
}

function Window({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="preview" aria-hidden="true">
      <div className="preview__bar">
        <span /><span /><span />
        <em>{title}</em>
        <small>ilustração</small>
      </div>
      {children}
    </div>
  );
}

function BymecPreview() {
  const { ref, tick } = useTicker(1800);
  const statuses = bymecOrders.map(
    (o) => bymecStatuses[(o.start + Math.floor(tick / o.every)) % bymecStatuses.length],
  );
  const ready = statuses.filter((s) => s.tone === "ok").length;

  return (
    <div ref={ref} className="preview-wrap">
      <Window title="bymec · ordens de serviço">
        <ul className="preview__list">
          {bymecOrders.map((o, i) => {
            const status = statuses[i];
            return (
              <li key={o.car} className="preview__row">
                <div>
                  <b>{o.car}</b>
                  <span>{o.service}</span>
                </div>
                <span key={status.label} className={`tag tag--${status.tone}`}>{status.label}</span>
              </li>
            );
          })}
        </ul>
        <div className="preview__total">
          <span>Prontas para entrega</span>
          <b key={ready}>{ready} de {bymecOrders.length}</b>
        </div>
      </Window>
    </div>
  );
}

function ByllioPreview() {
  const { ref, tick } = useTicker(1600);
  // As faturas vão sendo convertidas uma a uma; depois de uma pausa, o ciclo recomeça.
  const phase = tick % (byllioInvoices.length + 2);
  const converted = byllioInvoices.slice(0, Math.min(phase, byllioInvoices.length));
  const total = converted.reduce((sum, inv) => sum + inv.usd * RATE, 0);

  return (
    <div ref={ref} className="preview-wrap">
      <Window title="byllio · recebimentos">
        <ul className="preview__list">
          {byllioInvoices.map((inv, i) => {
            const done = i < phase;
            return (
              <li key={inv.client} className="preview__row">
                <div>
                  <b>{inv.client}</b>
                  <span>{usd(inv.usd)}</span>
                </div>
                <span key={String(done)} className={`tag ${done ? "tag--ok" : "tag--muted"}`}>
                  {done ? brl(inv.usd * RATE) : "a receber"}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="preview__total">
          <span>Total convertido</span>
          <b key={total}>{brl(total)}</b>
        </div>
      </Window>
    </div>
  );
}

export function ProductPreview({ product }: { product: "ByMec" | "Byllio" }) {
  return product === "ByMec" ? <BymecPreview /> : <ByllioPreview />;
}
