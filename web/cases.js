const cases = {
  "01": {
    title: "Integração de catálogo com marketplace",
    summary:
      "Evolução de uma integração existente para sincronizar produtos e preservar comportamentos específicos por filial.",
    tags: ["Java", "APIs", "Banco de dados", "Views", "Integrações"],
    context:
      "Uma integração já existente conectava fontes de dados internas a um marketplace. A entrada no projeto exigiu entender rapidamente uma base em Java, o caminho percorrido pelos dados e as operações usadas para manter o catálogo atualizado.",
    challenge:
      "Ajustar o fluxo sem perder regras já existentes, incluindo operações de criação e atualização, reset por filial e views utilizadas como fontes da integração.",
    contributions: [
      "Investigação do fluxo entre banco, aplicação e API.",
      "Ajustes nas operações de produtos e no reset por filial.",
      "Adaptação de views e diagnóstico de falhas.",
      "Trabalho em dupla, com autoria compartilhada explicitada."
    ],
    result:
      "Os ajustes permitiram restabelecer o funcionamento esperado da integração. Não há métricas públicas confirmadas, e a versão atual preserva apenas o recorte técnico necessário para contar o desafio.",
    learning:
      "Capacidade de entrar em uma tecnologia ainda desconhecida, compreender um sistema preexistente e contribuir de forma responsável para um problema real de integração."
  },
  "02": {
    title: "Portal de dados para parceiros",
    summary:
      "Portal em produção para consulta e exportação de dados, com áreas externa e administrativa apoiadas por publicação controlada.",
    tags: [
      "Backend",
      "Dados",
      "Regras de negócio",
      "Exportação",
      "Traefik",
      "Cloudflare Tunnel",
      "Infraestrutura",
      "Sustentação"
    ],
    context:
      "O produto atende usuários externos que precisam consultar e exportar informações relacionadas ao próprio contexto, além de uma equipe interna responsável pela administração e pela sustentação da operação.",
    challenge:
      "Disponibilizar dados úteis a públicos diferentes, sustentar uma aplicação publicada externamente e evoluir uma arquitetura inicialmente enxuta sem expor a infraestrutura interna.",
    contributions: [
      "Backend, banco de dados e regras de negócio.",
      "Área administrativa e funções de exportação.",
      "Publicação controlada, troubleshooting e sustentação.",
      "Frontend e autenticação atribuídos a outro integrante da equipe."
    ],
    result:
      "O portal permanece como um produto real de consulta e exportação para parceiros e equipe interna. A versão pública não apresenta endereço, nomes, volumes ou dados comerciais.",
    learning:
      "A experiência consolidou responsabilidade operacional sobre backend, dados, infraestrutura e publicação de um produto usado fora da equipe de desenvolvimento."
  },
  "03": {
    title: "Sistema de Chamados + Samara",
    summary:
      "Atuação no sistema corporativo de chamados e criação posterior da Samara para automatizar avisos de prazo e finalizações.",
    tags: [
      "Backend",
      "Banco de dados",
      "Infraestrutura",
      "Requisitos",
      "Regras de negócio",
      "Automação",
      "Sincronização",
      "Mensageria",
      "Samara"
    ],
    context:
      "O Sistema de Chamados era uma solução corporativa preexistente para abertura, acompanhamento e gestão de solicitações. Nesse sistema original, Joyce foi responsável por backend, banco de dados e infraestrutura, além de participar da coleta de requisitos e da definição de regras de negócio.",
    challenge:
      "Sustentar e evoluir as camadas técnicas do sistema a partir das necessidades operacionais e, em uma etapa posterior, automatizar o acompanhamento de prazos e o encerramento de chamados conforme as regras do processo.",
    contributions: [
      "Responsabilidade pelo backend, banco de dados e infraestrutura do sistema corporativo original.",
      "Participação na coleta de requisitos e na definição de regras de negócio.",
      "Documentação técnica concentrada em comentários JSDoc no código e testes básicos de services e controllers.",
      "Criação da Samara: estrutura do serviço, regras de automação, rotinas de sincronização, camada de banco e mecanismo de avisos e mensageria."
    ],
    result:
      "Como evolução posterior do sistema, a Samara passou a avisar chamados a dois dias do vencimento e a finalizar automaticamente aqueles com status “pendente de finalização”, conforme a regra do processo.",
    learning:
      "A experiência conectou backend, dados, infraestrutura e regras de negócio à criação de uma automação com responsabilidades próprias, mantendo clara a diferença entre contribuir para um sistema preexistente e desenvolver sua evolução posterior."
  },
  "04": {
    title: "Plataforma de conteúdo digital para lojas",
    summary:
      "Distribuição centralizada de mídias e experiências digitais para telas, dispositivos e painéis com diferentes formatos.",
    tags: [
      "Backend",
      "Banco de dados",
      "PWA",
      "WebSocket",
      "Cache local",
      "Sincronização",
      "Tempo real",
      "Dispositivos",
      "Sustentação"
    ],
    context:
      "A solução organiza conteúdos digitais para diferentes pontos das lojas, incluindo telas verticais e horizontais, dispositivos dedicados, telões e uma experiência integrada de busca de preços.",
    challenge:
      "Padronizar mídias, sincronizar atualizações e manter a exibição contínua mesmo com conectividade variável, alinhando tecnologia, Marketing e operação.",
    contributions: [
      "Backend, banco de dados e aplicação web progressiva.",
      "WebSocket, cache local e mecanismos de sincronização.",
      "Padronização de mídias e integração com dispositivos.",
      "Definição de fluxos, troubleshooting e sustentação."
    ],
    result:
      "A plataforma reuniu distribuição de conteúdo, atualização em tempo real, continuidade local e suporte a diferentes superfícies em um mesmo ecossistema. Não há métricas públicas confirmadas.",
    learning:
      "Experiência com aplicações distribuídas, comunicação em tempo real, comportamento offline e decisões construídas na fronteira entre Tecnologia, Marketing e operação."
  },
  "05": {
    title: "Plataforma de NPS em tempo real",
    summary:
      "Reconstrução orientada a eventos com correção do cálculo de NPS e um indicador de adesão das avaliações.",
    tags: [
      "API",
      "Backend",
      "Banco de dados",
      "Kafka",
      "Debezium",
      "Redis",
      "WebSocket",
      "CDC",
      "Infraestrutura",
      "Monitoramento"
    ],
    context:
      "A reconstrução de uma plataforma de experiência do cliente integrou eventos de dados, processamento em tempo real e atualização das interfaces para apoiar a leitura do NPS e a operação da solução.",
    challenge:
      "Tornar o fluxo distribuído mais confiável e observável, corrigir uma regra central de cálculo e mostrar quanto das vendas estava efetivamente representado pelas avaliações.",
    contributions: [
      "Reconstrução do backend e da camada de dados.",
      "CDC com Debezium e processamento de eventos com Kafka.",
      "Redis, WebSocket, infraestrutura e monitoramento.",
      "Correção do cálculo de NPS e criação do indicador de adesão."
    ],
    result:
      "A nova base conectou captura, processamento e entrega de atualizações em tempo real. O NPS passou a usar a regra corrigida e ganhou contexto com o indicador de adesão, sem divulgar números internos.",
    learning:
      "O case consolidou arquitetura orientada a eventos, observabilidade e diagnóstico de sistemas distribuídos, conectando decisões técnicas à confiabilidade de indicadores de negócio."
  },
  "06": {
    title: "Integração de pedidos e pré-faturamento",
    summary:
      "Camada intermediária para validar pedidos externos, direcionar pendências por filial e gerar pré-faturas em um ERP.",
    tags: [
      "APIs",
      "ERP",
      "JSON",
      "Autenticação",
      "Validação",
      "Rastreabilidade",
      "Regras de negócio",
      "Transformação de dados",
      "Integração externa"
    ],
    context:
      "Pedidos recebidos por uma plataforma externa precisavam seguir o fluxo operacional das filiais e chegar ao ERP em um formato compatível com as estruturas e regras internas.",
    challenge:
      "Identificar corretamente a filial, validar informações do pedido, associar o vendedor e traduzir modelos diferentes sem misturar operações entre unidades.",
    contributions: [
      "Recebimento e validação dos pedidos externos.",
      "Identificação e segregação do contexto por filial.",
      "Área de pendências e associação do vendedor.",
      "Transformação de dados, integração com ERP e rastreabilidade."
    ],
    result:
      "O fluxo passou a conectar pedido externo, tratamento pela filial e geração de pré-fatura de forma controlada. A camada intermediária concentrou validações, transformação e rastreabilidade.",
    learning:
      "Integração não é apenas transporte de dados: frequentemente exige traduzir modelos, regras e contexto operacional entre sistemas com responsabilidades distintas."
  }
};

const params = new URLSearchParams(window.location.search);
const currentId = params.get("id") ?? "01";
const currentCase = cases[currentId];

const caseViews = document.querySelectorAll("[data-case-view]");
const errorView = document.querySelector("[data-case-error]");

const setMetaContent = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) {
    element.content = value;
  }
};

if (!currentCase) {
  caseViews.forEach((element) => {
    element.hidden = true;
  });
  errorView.hidden = false;
  document.title = "Case não encontrado | Three Lenses";
  const errorDescription = "O case solicitado não está disponível neste portfólio.";
  setMetaContent('meta[name="description"]', errorDescription);
  setMetaContent('meta[property="og:title"]', document.title);
  setMetaContent('meta[property="og:description"]', errorDescription);
  setMetaContent('meta[name="twitter:title"]', document.title);
  setMetaContent('meta[name="twitter:description"]', errorDescription);
  document.querySelector("[data-case-breadcrumb]").textContent = "Case não encontrado";
} else {
  const setText = (selector, value) => {
    document.querySelector(selector).textContent = value;
  };

  document.title = `Case ${currentId} — ${currentCase.title} | Three Lenses`;
  setMetaContent('meta[name="description"]', currentCase.summary);
  setMetaContent('meta[property="og:title"]', document.title);
  setMetaContent('meta[property="og:description"]', currentCase.summary);
  setMetaContent('meta[name="twitter:title"]', document.title);
  setMetaContent('meta[name="twitter:description"]', currentCase.summary);

  setText("[data-case-kicker]", `case // ${currentId}`);
  setText("[data-case-breadcrumb]", `Case ${currentId}`);
  setText("[data-case-title]", currentCase.title);
  setText("[data-case-summary]", currentCase.summary);
  setText("[data-case-context]", currentCase.context);
  setText("[data-case-challenge]", currentCase.challenge);
  setText("[data-case-result]", currentCase.result);
  setText("[data-case-learning]", currentCase.learning);

  const tags = document.querySelector("[data-case-tags]");
  currentCase.tags.forEach((tag) => {
    const item = document.createElement("li");
    item.textContent = tag;
    tags.append(item);
  });

  const contributions = document.querySelector("[data-case-contributions]");
  currentCase.contributions.forEach((contribution) => {
    const item = document.createElement("li");
    item.textContent = contribution;
    contributions.append(item);
  });

  const ids = Object.keys(cases);
  const currentIndex = ids.indexOf(currentId);
  const previousLink = document.querySelector("[data-previous-case]");
  const nextLink = document.querySelector("[data-next-case]");

  if (currentIndex > 0) {
    previousLink.href = `./case.html?id=${ids[currentIndex - 1]}`;
    previousLink.hidden = false;
  }

  if (currentIndex < ids.length - 1) {
    nextLink.href = `./case.html?id=${ids[currentIndex + 1]}`;
    nextLink.hidden = false;
  }
}
