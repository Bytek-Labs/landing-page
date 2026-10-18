import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Process } from "@/components/Process";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { JsonLd, faqGraph } from "@/components/StructuredData";
import { faq } from "@/lib/site";

export default function Home() {
  return (
    <>
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
      <JsonLd graph={[faqGraph(faq)]} />
    </>
  );
}
