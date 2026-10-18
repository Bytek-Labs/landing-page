// Conteúdo das páginas de serviço (/servicos/<slug>), uma por termo de busca principal.

export type ServicePage = {
  slug: string;
  name: string; // nome curto, usado em links e breadcrumbs
  metaTitle: string; // até ~60 caracteres
  metaDescription: string; // até ~155 caracteres
  h1: string;
  lead: string;
  intro: string[];
  signs: string[];
  deliverables: { title: string; text: string }[];
  faq: { q: string; a: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "desenvolvimento-de-sistemas-sob-medida",
    name: "Sistemas sob medida",
    metaTitle: "Desenvolvimento de sistemas sob medida | Bytek Labs",
    metaDescription:
      "Sistemas web, CRMs e painéis administrativos desenvolvidos sob medida para o processo da sua empresa. Atendimento remoto em todo o Brasil.",
    h1: "Desenvolvimento de sistemas sob medida",
    lead: "Sistemas web, CRMs, painéis administrativos e plataformas internas construídos a partir do jeito que a sua empresa trabalha, e não o contrário.",
    intro: [
      "Quando a operação cresce, planilhas e ferramentas genéricas começam a custar caro: informação espalhada, retrabalho, dependência de pessoas específicas e pouca visibilidade do que está acontecendo. Um sistema sob medida reúne esses dados em um só lugar, com as regras e os fluxos que fazem sentido para o seu negócio.",
      "A Bytek Labs desenvolve o sistema do diagnóstico à publicação, com contato direto com quem está construindo a solução e entregas em etapas que você acompanha e valida.",
    ],
    signs: [
      "A equipe controla clientes, pedidos ou ordens de serviço em planilhas que não conversam entre si.",
      "Os softwares prontos do mercado exigem adaptações demais ou cobram por recursos que vocês não usam.",
      "Informações importantes dependem de uma pessoa específica ou se perdem entre mensagens.",
      "Os relatórios e indicadores do negócio são montados à mão.",
      "Existe um processo próprio, que diferencia a empresa, e nenhuma ferramenta genérica atende bem.",
    ],
    deliverables: [
      { title: "CRM e gestão de clientes", text: "Cadastro centralizado, histórico de atendimento, funil comercial e acompanhamento de cada cliente." },
      { title: "Sistemas de gestão", text: "Pedidos, estoque, ordens de serviço, agendamentos e financeiro organizados conforme o seu fluxo." },
      { title: "Painéis e dashboards", text: "Indicadores do negócio atualizados, sem precisar montar relatórios manualmente." },
      { title: "Plataformas internas e portais", text: "Áreas para equipe, clientes ou parceiros, com controle de acesso por perfil." },
      { title: "MVPs e produtos SaaS", text: "A primeira versão de um produto digital, com escopo enxuto para validar a ideia com usuários reais." },
    ],
    faq: [
      {
        q: "Quanto custa desenvolver um sistema sob medida?",
        a: "Depende do escopo: quantidade de telas e funcionalidades, integrações necessárias e prazo. Depois de uma conversa de diagnóstico, você recebe uma proposta detalhada. Muitas vezes vale começar por uma primeira versão com o essencial e evoluir a partir do uso real.",
      },
      {
        q: "Quanto tempo leva para desenvolver um sistema?",
        a: "Varia conforme o escopo. Sistemas maiores são entregues em etapas, para que a equipe comece a usar as partes principais mais cedo. O prazo estimado de cada etapa faz parte da proposta.",
      },
      {
        q: "O código e os dados ficam com a minha empresa?",
        a: "As condições de propriedade do código, dos dados e da hospedagem são definidas em contrato, de forma clara, antes do início do projeto.",
      },
      {
        q: "Vocês atendem empresas de outras cidades?",
        a: "Sim. O trabalho é remoto e atendemos empresas de todo o Brasil, com reuniões por vídeo e acompanhamento das entregas online.",
      },
    ],
  },
  {
    slug: "criacao-de-sites-e-aplicacoes-web",
    name: "Sites e aplicações web",
    metaTitle: "Criação de sites profissionais e aplicações web | Bytek Labs",
    metaDescription:
      "Sites institucionais, landing pages e aplicações web rápidas, responsivas e preparadas para o Google. Desenvolvimento para empresas de todo o Brasil.",
    h1: "Criação de sites profissionais e aplicações web",
    lead: "Sites institucionais, landing pages e aplicações web pensados para carregar rápido, funcionar bem no celular e transformar visitas em contatos.",
    intro: [
      "O site costuma ser o primeiro contato de um cliente com a sua empresa. Se ele demora a carregar, não funciona bem no celular ou não deixa claro o que você faz, a oportunidade vai embora antes da conversa começar.",
      "Desenvolvemos sites com código próprio, sem depender de templates pesados: estrutura clara, boa performance, acessibilidade e a base técnica de SEO para que o Google entenda o seu negócio.",
    ],
    signs: [
      "Sua empresa ainda não tem site, ou tem um site desatualizado que não representa o negócio.",
      "O site atual é lento ou difícil de usar no celular.",
      "Os visitantes não encontram como entrar em contato ou pedir um orçamento.",
      "Você precisa de uma página específica para uma campanha, produto ou lançamento.",
      "O projeto exige mais do que um site: área do cliente, formulários com regras ou integrações.",
    ],
    deliverables: [
      { title: "Sites institucionais", text: "Apresentação da empresa, serviços e canais de contato, com estrutura e textos pensados para o seu público." },
      { title: "Landing pages", text: "Páginas focadas em uma oferta ou campanha, com um objetivo claro de conversão." },
      { title: "Aplicações web", text: "Sistemas acessados pelo navegador, com login, cadastros e regras de negócio." },
      { title: "SEO técnico", text: "Velocidade, metatags, dados estruturados, sitemap e boas práticas para indexação no Google." },
      { title: "Contato pelo WhatsApp e formulários", text: "Pedidos de orçamento chegando direto no canal que a sua equipe já usa." },
    ],
    faq: [
      {
        q: "O site vai funcionar bem no celular?",
        a: "Sim. Todo site é desenvolvido e testado para celular, tablet e computador.",
      },
      {
        q: "Vocês fazem o site aparecer no Google?",
        a: "O site é entregue com a base técnica de SEO: velocidade, estrutura de títulos, metatags, dados estruturados e sitemap. A posição nos resultados também depende de conteúdo, concorrência e tempo, então não prometemos primeira página, mas o site sai preparado para ser bem indexado.",
      },
      {
        q: "Posso atualizar os textos depois?",
        a: "Sim. Combinamos no início como será a manutenção: atualizações feitas por nós, sob demanda, ou uma área para a sua equipe editar o conteúdo, quando o projeto pedir.",
      },
      {
        q: "Onde o site fica hospedado?",
        a: "A hospedagem é escolhida conforme o projeto. Sites estáticos podem ser publicados em plataformas como a Cloudflare, com bom desempenho e custo baixo.",
      },
    ],
  },
  {
    slug: "automacao-de-processos-e-inteligencia-artificial",
    name: "Automação e inteligência artificial",
    metaTitle: "Automação de processos e IA para empresas | Bytek Labs",
    metaDescription:
      "Automação de tarefas repetitivas, assistentes no WhatsApp e inteligência artificial integrada aos processos da sua empresa, com foco em problemas reais.",
    h1: "Automação de processos e inteligência artificial para empresas",
    lead: "Menos trabalho manual e repetitivo: automações, assistentes conversacionais e IA aplicada onde ela resolve um problema concreto.",
    intro: [
      "Muitas empresas perdem horas por semana copiando dados entre sistemas, respondendo as mesmas perguntas e conferindo informações à mão. Boa parte desse trabalho pode ser automatizada, liberando a equipe para o que exige atenção humana.",
      "Usamos inteligência artificial quando ela é a melhor ferramenta para o problema, e não como enfeite. Às vezes a solução certa é uma IA que entende mensagens em linguagem natural; outras vezes, uma automação simples e confiável já resolve.",
    ],
    signs: [
      "A equipe repete as mesmas tarefas todos os dias: copiar dados, gerar documentos, enviar avisos.",
      "O atendimento recebe muitas perguntas parecidas pelo WhatsApp ou por e-mail.",
      "Informações chegam em mensagens, PDFs ou planilhas e precisam ser digitadas em outro sistema.",
      "Vocês querem usar IA, mas não sabem por onde começar nem onde ela realmente ajuda.",
    ],
    deliverables: [
      { title: "Automação de tarefas e fluxos", text: "Rotinas que rodam sozinhas: envio de avisos, geração de documentos, atualização de cadastros." },
      { title: "Assistentes no WhatsApp", text: "Assistentes que consultam informações do sistema e executam operações autorizadas, conforme as permissões definidas." },
      { title: "Extração de dados com IA", text: "Leitura de mensagens, documentos e formulários para organizar as informações automaticamente." },
      { title: "IA integrada aos seus sistemas", text: "Recursos de inteligência artificial dentro das ferramentas que a equipe já usa." },
    ],
    faq: [
      {
        q: "A inteligência artificial vai substituir minha equipe?",
        a: "Não é esse o objetivo. A automação tira da equipe as tarefas repetitivas e deixa com as pessoas as decisões, o atendimento mais delicado e as exceções.",
      },
      {
        q: "A IA pode errar?",
        a: "Pode, como qualquer sistema. Por isso definimos limites claros: o que o assistente pode fazer sozinho, o que precisa de confirmação e quais operações ficam bloqueadas. As permissões fazem parte do projeto.",
      },
      {
        q: "Dá para automatizar o atendimento no WhatsApp?",
        a: "Sim. É possível criar assistentes que respondem dúvidas frequentes, consultam dados do seu sistema e encaminham para uma pessoa quando necessário. O escopo é definido conforme o seu atendimento.",
      },
      {
        q: "Por onde começar a automatizar?",
        a: "Por um diagnóstico: mapeamos as tarefas que mais consomem tempo e escolhemos as que trazem mais retorno com menos complexidade.",
      },
    ],
  },
  {
    slug: "integracao-de-sistemas-e-apis",
    name: "Integração de sistemas e APIs",
    metaTitle: "Integração de sistemas e desenvolvimento de APIs | Bytek Labs",
    metaDescription:
      "Integração entre ERPs, CRMs, e-commerce e canais de atendimento, desenvolvimento de APIs e modernização de sistemas. Atendimento em todo o Brasil.",
    h1: "Integração de sistemas e desenvolvimento de APIs",
    lead: "Ferramentas que conversam entre si: menos dados duplicados, menos retrabalho e informação atualizada em todos os lugares.",
    intro: [
      "É comum uma empresa usar vários sistemas que não se conectam: o financeiro em um lugar, as vendas em outro, o atendimento em um terceiro. O resultado é digitação duplicada, informações divergentes e tempo perdido conferindo dados.",
      "Conectamos essas ferramentas por meio de APIs e integrações, desenvolvemos APIs para que o seu sistema converse com parceiros e evoluímos aplicações existentes sem precisar começar tudo do zero.",
    ],
    signs: [
      "A mesma informação é digitada em dois ou mais sistemas.",
      "Os dados de vendas, estoque ou atendimento ficam desatualizados entre as ferramentas.",
      "Seu sistema precisa se conectar a um parceiro, marketplace ou plataforma de pagamento.",
      "Uma aplicação antiga funciona, mas está difícil de manter ou de evoluir.",
    ],
    deliverables: [
      { title: "Integrações entre plataformas", text: "Conexão entre ERP, CRM, e-commerce, planilhas e canais de atendimento." },
      { title: "Desenvolvimento de APIs", text: "APIs documentadas para expor dados e operações do seu sistema com segurança." },
      { title: "Sincronização de dados", text: "Rotinas que mantêm as informações iguais entre os sistemas, com registro do que foi sincronizado." },
      { title: "Modernização de sistemas", text: "Evolução de aplicações existentes em etapas, preservando o que já funciona." },
    ],
    faq: [
      {
        q: "Dá para integrar com qualquer sistema?",
        a: "Depende de como o sistema permite acesso aos dados, geralmente por API. No diagnóstico verificamos o que cada ferramenta oferece e qual o caminho mais seguro para a integração.",
      },
      {
        q: "Preciso trocar os sistemas que já uso?",
        a: "Na maioria dos casos, não. A ideia é conectar o que já funciona e substituir apenas o que realmente atrapalha.",
      },
      {
        q: "O que acontece se uma integração falhar?",
        a: "As integrações são desenvolvidas com tratamento de erros, registros e avisos, para que falhas sejam identificadas e corrigidas em vez de passarem despercebidas.",
      },
      {
        q: "Vocês atendem empresas de outras cidades?",
        a: "Sim. O trabalho é remoto e atendemos empresas de todo o Brasil.",
      },
    ],
  },
];

export const servicePath = (slug: string) => `/servicos/${slug}/`;
