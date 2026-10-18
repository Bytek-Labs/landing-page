import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Process } from "@/components/Process";
import { PointerEffects } from "@/components/PointerEffects";
import { Products } from "@/components/Products";
import { RevealObserver } from "@/components/RevealObserver";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <a className="skip" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Problems />
        <Services />
        <Process />
        {/* Projetos e demonstrações: adicionar quando houver cases reais,
            com problema, solução, capturas e selo "Entregue", "Protótipo"
            ou "Demonstração". Lembre de incluir o link em navLinks. */}
        <Products />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
      <PointerEffects />
    </>
  );
}
