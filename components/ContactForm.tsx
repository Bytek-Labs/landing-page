"use client";

import { useRef, useState } from "react";
import { whatsappLink } from "@/lib/site";

type Hint = { text: string; error?: boolean };

// Monta a mensagem e abre o WhatsApp — não precisa de backend.
export function ContactForm() {
  const [invalid, setInvalid] = useState({ name: false, message: false });
  const [hint, setHint] = useState<Hint>({ text: "" });
  const nameRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    setInvalid({ name: !name, message: !message });
    if (!name || !message) {
      setHint({ text: "Preencha seu nome e descreva o desafio.", error: true });
      (!name ? nameRef : msgRef).current?.focus();
      return;
    }

    const body = [`Olá! Meu nome é ${name}${company ? `, da ${company}` : ""}.`, "", message].join("\n");

    window.open(whatsappLink(body), "_blank", "noopener");
    setHint({ text: "Abrimos o WhatsApp com a mensagem pronta. É só enviar." });
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="f-name">Nome</label>
        <input ref={nameRef} id="f-name" name="name" type="text" autoComplete="name" required aria-invalid={invalid.name} />
      </div>
      <div className="field">
        <label htmlFor="f-company">Empresa <span className="opt">(opcional)</span></label>
        <input id="f-company" name="company" type="text" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="f-msg">Qual é o desafio?</label>
        <textarea
          ref={msgRef}
          id="f-msg"
          name="message"
          rows={4}
          required
          aria-invalid={invalid.message}
          placeholder="Ex.: controlamos os pedidos em planilhas e queremos um sistema simples para a equipe."
        />
      </div>
      <button type="submit" className="btn btn--primary btn--block">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="btn__wa">
          <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
          <path d="M8.8 8.6c.2-.5.5-.5.8-.5h.5c.2 0 .4 0 .6.5l.7 1.6c.1.2.1.4 0 .6l-.5.7c-.1.2-.1.3 0 .5.6 1 1.4 1.8 2.4 2.3.2.1.3.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.4 0 .5-.2 1.2-.7 1.5-.6.4-1.4.6-2.5.2-2.2-.7-4.4-2.8-5.1-5-.3-1.1 0-2 .2-2.7Z" />
        </svg>
        Enviar pelo WhatsApp
      </button>
      <p className={`form__hint${hint.error ? " is-error" : ""}`} role="status">{hint.text}</p>
    </form>
  );
}
