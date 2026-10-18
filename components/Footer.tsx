import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Brand label="Bytek Labs, voltar ao topo" />
        <p className="footer__tag">Software · Automação · Inteligência Artificial</p>
        <p className="footer__copy">© {new Date().getFullYear()} Bytek Labs</p>
      </div>
    </footer>
  );
}
