// Endereço público do site, usado nas metatags, no sitemap e no robots.txt.
// Defina SITE_URL nas variáveis de build da Cloudflare com a URL pública do site.
const siteUrl = (process.env.SITE_URL ?? process.env.CF_PAGES_URL ?? "http://localhost:3000").replace(/\/$/, "");

// Dados da marca e de contato.
export const site = {
  name: "Bytek Labs",
  url: siteUrl,
  whatsapp: "5513991082474", // DDI + DDD + número, só dígitos
  email: "golfeto.dev@gmail.com",
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#produtos", label: "Produtos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
];

export const problems = [
  {
    title: "Processos manuais",
    text: "Informações copiadas entre planilhas, conferências repetidas e tarefas que dependem de alguém lembrar de fazer.",
  },
  {
    title: "Sistemas desconectados",
    text: "Ferramentas que não conversam entre si, dados duplicados e retrabalho a cada atualização.",
  },
  {
    title: "Ferramentas que não servem",
    text: "Softwares genéricos que obrigam a operação a se adaptar a eles, e não o contrário.",
  },
  {
    title: "Ideias que ainda não viraram produto",
    text: "Uma plataforma, aplicativo ou SaaS que precisa sair do papel começando por um escopo viável.",
  },
];

export const services = [
  {
    icon: "system",
    title: "Sistemas sob medida",
    text: "Aplicações web, painéis administrativos, CRMs, plataformas internas e sistemas de gestão adaptados aos processos de cada empresa.",
    example: "Substituir planilhas dispersas por um sistema centralizado para gerenciar clientes e operações.",
  },
  {
    icon: "web",
    title: "Sites e aplicações web",
    text: "Sites institucionais, landing pages e experiências digitais responsivas, com foco em clareza, desempenho, acessibilidade e conversão.",
    example: "Criar a presença digital de uma empresa e facilitar a geração de contatos comerciais.",
  },
  {
    icon: "ai",
    title: "Automação e inteligência artificial",
    text: "IA integrada aos processos, automação de tarefas repetitivas, assistentes conversacionais e ferramentas conectadas por APIs.",
    example: "Um assistente no WhatsApp que consulta informações do sistema e executa operações autorizadas.",
  },
  {
    icon: "integration",
    title: "Integrações e evolução",
    text: "Conexão entre plataformas, desenvolvimento de APIs, modernização de aplicações existentes e melhoria de processos técnicos.",
    example: "Integrar um sistema de gestão a um canal de atendimento e eliminar a duplicação de dados.",
  },
] as const;

export const steps = [
  { title: "Diagnóstico", text: "Entendemos gargalos, necessidades e objetivos do negócio antes de propor qualquer tecnologia." },
  { title: "Planejamento", text: "Definimos escopo, experiência de uso, arquitetura e integrações, por escrito e com prioridades claras." },
  { title: "Desenvolvimento", text: "Construímos em etapas, com entregas que você acompanha e consegue testar ao longo do caminho." },
  { title: "Validação", text: "Verificamos o funcionamento com o uso real, ajustamos o necessário e preparamos a publicação." },
  { title: "Evolução", text: "Quando contratado, seguimos com manutenção, melhorias e novas funcionalidades conforme o negócio cresce." },
];

export const products = [
  {
    name: "ByMec",
    tagline: "Gestão para oficinas mecânicas",
    status: { label: "MVP em fase final", tone: "near" },
    stage: 2,
    text: "CRM para oficinas mecânicas que centraliza o relacionamento com clientes e organiza atendimento e gestão. Feito a partir da rotina real do setor, em vez de obrigar a oficina a se adaptar a um software genérico.",
    note: {
      label: "planejado",
      highlight: "Toninho",
      text: ", assistente de IA pelo WhatsApp para a equipe consultar informações e realizar operações no sistema por conversa, conforme as funcionalidades e permissões implementadas.",
    },
  },
  {
    name: "Byllio",
    tagline: "Gestão financeira para desenvolvedores",
    status: { label: "Em desenvolvimento", tone: "dev" },
    stage: 1,
    text: "SaaS para desenvolvedores brasileiros que prestam serviços a clientes no exterior. A proposta é reunir em um só lugar faturamento, recebimentos internacionais, conversão cambial e estimativas tributárias.",
    note: {
      label: "observação",
      highlight: "",
      text: "Recursos fiscais e emissão de notas dependem de integrações, validação regulatória e do escopo efetivamente implementado.",
    },
  },
] as const;

// Linha do tempo exibida nos cards de produto; `stage` aponta a etapa atual.
export const productStages = ["Ideia", "Desenvolvimento", "MVP", "Lançamento"];

export const values = [
  { title: "Soluções personalizadas", text: "O software parte das necessidades do negócio." },
  { title: "Contato técnico direto", text: "Você conversa com quem entende e desenvolve a solução." },
  { title: "Tecnologia com propósito", text: "IA e automação quando resolvem um problema concreto, não para decorar apresentação." },
  { title: "Visão de produto", text: "Desenvolvimento pensado para uso, manutenção e evolução." },
  { title: "Continuidade", text: "Acompanhamento depois da entrega, conforme o contrato." },
];

export const faq = [
  {
    q: "Como funciona um projeto?",
    a: "Começa com uma conversa para entender o desafio. Em seguida fazemos um diagnóstico e uma proposta com escopo, etapas e prazos estimados. Aprovada a proposta, o desenvolvimento acontece em entregas que você acompanha e valida, até a publicação.",
  },
  {
    q: "Como é definido o orçamento?",
    a: "O orçamento depende do escopo: funcionalidades, integrações, complexidade e prazo. Depois do diagnóstico, você recebe uma proposta detalhada. Quando faz sentido, sugerimos começar por uma primeira versão menor e evoluir a partir do uso real.",
  },
  {
    q: "Quais tecnologias vocês utilizam?",
    a: "Escolhemos a tecnologia de acordo com o problema, não o contrário. No dia a dia trabalhamos com o ecossistema JavaScript/TypeScript (Next.js, React, Node.js, NestJS), bancos de dados relacionais, APIs e serviços de IA. Se você já tem sistemas em uso, avaliamos como integrar ou evoluir o que existe.",
  },
  {
    q: "Vocês oferecem suporte depois da entrega?",
    a: "Sim, quando contratado. Oferecemos manutenção, correções e desenvolvimento de novas funcionalidades conforme o negócio cresce. As condições ficam definidas em contrato.",
  },
  {
    q: "Atendem empresas de qualquer porte?",
    a: "Atendemos principalmente pequenas e médias empresas, empreendedores com ideias de produto e negócios que querem modernizar operações, desde um site profissional até sistemas e integrações mais complexas.",
  },
];
