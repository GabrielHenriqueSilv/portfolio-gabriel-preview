// PORTFÓLIO / PROJETOS v02
// Conteúdo público: sem dados pessoais de colaboradores, URLs internas ou métricas não verificadas.
// Para atualizar um projeto, edite o objeto correspondente abaixo.
const projects = {
  portal: {
    index: '01', category: 'ECOSSISTEMA OPERACIONAL', phase: 'PROJETO EM EVOLUÇÃO', tone: 'portal',
    title: 'Portal RTS', strapline: 'UM PONTO DE ENCONTRO ENTRE OPERAÇÃO E TECNOLOGIA',
    intro: 'Um ecossistema digital desenhado para organizar consultas, conectar informações e dar mais contexto às decisões de uma operação 24 horas.',
    context: 'Em uma rotina operacional intensa, perguntas aparentemente simples podem exigir consultas a ferramentas e controles diferentes. O projeto nasceu da necessidade de aproximar essas informações em uma experiência mais clara para quem está na linha de frente.',
    problem: 'Dados de frota, movimentações de profissionais e registros de jornada seguem regras e ritmos diferentes. Quando são consultados separadamente, divergências podem passar despercebidas e a equipe perde tempo reconstruindo o contexto de cada situação.',
    solution: 'Estruturar um portal com visão consolidada, módulos especializados e consultas cruzadas. A estratégia é avançar em etapas: primeiro leitura e validação de dados; depois, fluxos mais amplos, sempre respeitando a origem e a confiabilidade de cada informação.',
    highlights: [
      {number:'01', title:'Visão operacional', text:'Página inicial com acesso a indicadores e pontos que exigem atenção, associados às fontes disponíveis.'},
      {number:'02', title:'Jornada', text:'Acompanhamento e prévia de importação de planilhas, separando registros completos, parciais e pendências antes de qualquer gravação.'},
      {number:'03', title:'Central CCO', text:'Leituras de divergências entre situação da frota e programação operacional, com indicação das origens.'},
      {number:'04', title:'NEXO CCO', text:'Assistente de consultas em modo somente leitura para ajudar a localizar e interpretar dados da operação.'}
    ],
    role: 'Atuo na identificação dos problemas reais, na definição das regras operacionais, na organização do escopo e no refinamento da experiência. Também participo da prototipação e da evolução técnica com apoio de ferramentas de desenvolvimento assistido por IA, revisando comportamentos, realizando testes e validando casos de uso.',
    methods: ['Mapeamento de processos', 'Regras de negócio', 'Experiência do usuário', 'Testes e validação', 'Desenvolvimento assistido por IA'],
    delivery: 'Módulos navegáveis, fluxos de consulta, prévias de importação e verificações entre fontes. O avanço é acompanhado por testes e validações incrementais; o nível de maturidade varia entre os módulos.',
    next: 'Aprimorar a consistência entre fontes, ampliar os casos de uso validados e amadurecer os fluxos de acesso e segurança antes de uma adoção mais ampla.',
    disclosure: 'Não apresento reduções de tempo ou ganhos percentuais sem medição validada. Telas e descrições aqui são públicas e ilustrativas.',
    tags: ['Produtos internos', 'Dados operacionais', 'UX', 'IA aplicada']
  },
  frota: {
    index: '02', category: 'GESTÃO DE FROTA', phase: 'PROJETO EM EVOLUÇÃO', tone: 'frota',
    title: 'Gestão de Frota', strapline: 'SITUAÇÃO ATUAL + HISTÓRICO, NO MESMO LUGAR',
    intro: 'Uma ferramenta de acompanhamento que transforma ocorrências dispersas em registros consultáveis e rastreáveis.',
    context: 'A gestão de veículos precisa responder tanto ao que acontece agora quanto ao que aconteceu antes. Sem um histórico estruturado, uma informação se perde entre mensagens, planilhas e atualizações pontuais.',
    problem: 'Acompanhar paradas, substituições, retornos e outras ocorrências sem uma base única gera retrabalho e dificulta reconstruir a trajetória de um veículo.',
    solution: 'Organizar cadastros e ocorrências em uma interface com busca por veículo, filtros, estado atual e linha do tempo. Regras de registro e revisão ajudam a reduzir duplicidades e manter o histórico inteligível.',
    highlights: [
      {number:'01', title:'Consulta por veículo', text:'Busca e filtros para encontrar rapidamente a situação de uma unidade da frota.'},
      {number:'02', title:'Histórico de eventos', text:'Registros e evolução de ocorrências para apoiar consultas retrospectivas.'},
      {number:'03', title:'Movimentos da frota', text:'Tratamento de entradas, saídas, substituições e desmobilizações conforme o contexto.'},
      {number:'04', title:'Qualidade do registro', text:'Revisões e justificativas para distinguir atualizações, recorrências e registros distintos.'}
    ],
    role: 'Participo do desenho da estrutura de dados, da definição dos fluxos de registro e consulta, das regras para ocorrências e da validação com situações reais da operação. A evolução da ferramenta é feita de forma iterativa, com desenvolvimento assistido por IA e revisão funcional.',
    methods: ['Modelagem operacional', 'Histórico e auditoria', 'Qualidade de dados', 'Validação funcional'],
    delivery: 'Uma visão estruturada de situação e histórico, com funcionalidades de consulta e registro, orientada ao uso diário da equipe.',
    next: 'Evoluir a integração com outras fontes e reforçar controles de consistência e governança dos registros.',
    disclosure: 'Não são divulgadas placas, prefixos reais, ocorrências identificáveis ou informações de clientes.',
    tags: ['Gestão operacional', 'Rastreabilidade', 'Dados', 'Melhoria contínua']
  },
  nexo: {
    index: '03', category: 'INTELIGÊNCIA OPERACIONAL', phase: 'MVP • SOMENTE LEITURA', tone: 'nexo',
    title: 'NEXO CCO', strapline: 'DA PERGUNTA AO CONTEXTO OPERACIONAL',
    intro: 'Um assistente de consulta que aproxima perguntas do cotidiano das informações já existentes nas ferramentas da operação.',
    context: 'Ter dados disponíveis não significa conseguir encontrar a resposta certa rapidamente. Um analista precisa entender a pergunta, conferir as fontes e interpretar o resultado antes de agir.',
    problem: 'Consultas repetitivas exigem alternar telas e combinar manualmente fontes diferentes. Uma resposta sem origem clara ou que confunda informação ausente com informação válida pode ser mais prejudicial do que útil.',
    solution: 'Criar uma camada de consulta orientada por perguntas operacionais, com fontes identificáveis e limites explícitos. Na primeira etapa, o assistente lê, organiza e apresenta informações — sem executar alterações ou decidir sozinho.',
    highlights: [
      {number:'01', title:'Perguntas do dia a dia', text:'Consultas sobre veículos, programação e pontos que precisam de atenção.'},
      {number:'02', title:'Cruzamento de fontes', text:'Leitura combinada de situação da frota e informações de movimentação.'},
      {number:'03', title:'Origem da resposta', text:'Ênfase em contexto, fonte consultada e distinção entre dado válido e indisponível.'},
      {number:'04', title:'Segurança por desenho', text:'Escopo somente leitura: sem gravações, comandos de operação ou decisões automáticas.'}
    ],
    role: 'Defino cenários de consulta, regras operacionais, casos de validação e limites de autonomia. Meu foco é garantir que a experiência corresponda às perguntas reais da equipe e que respostas potencialmente ambíguas sejam tratadas com cuidado.',
    methods: ['IA aplicada', 'Casos de uso', 'Confiabilidade de dados', 'Segurança e limites'],
    delivery: 'Um MVP de consultas operacionais conectado a fontes do ecossistema, com foco em leitura e conferência do contexto.',
    next: 'Evoluir qualidade das respostas, cobertura de perguntas e conhecimento procedural, preservando validação humana e rastreabilidade.',
    disclosure: 'NEXO não é apresentado aqui como agente autônomo em produção; o recorte demonstrado é de consulta em leitura.',
    tags: ['IA aplicada', 'Assistente operacional', 'Fontes reais', 'Somente leitura']
  },
  automacao: {
    index: '04', category: 'AUTOMAÇÃO DE PROCESSOS', phase: 'FLUXOS EM APRIMORAMENTO', tone: 'automacao',
    title: 'Automações operacionais', strapline: 'MENOS PASSOS MANUAIS, MAIS PADRÃO',
    intro: 'Formulários e fluxos de informação para dar estrutura a movimentações recorrentes do dia a dia operacional.',
    context: 'Mudanças de programação, substituições e eventos operacionais precisam ser comunicados de maneira consistente para que a informação seja útil em diferentes turnos.',
    problem: 'Quando cada pessoa registra o mesmo tipo de evento de forma diferente, ficam mais difíceis a conferência, o histórico e o acompanhamento das mudanças.',
    solution: 'Estruturar formulários e bases para coletar os dados certos, aplicar regras operacionais e encaminhar informações por fluxos automatizados, reduzindo dependência de mensagens livres.',
    highlights: [
      {number:'01', title:'Coleta estruturada', text:'Formulários com campos e motivos padronizados para eventos operacionais.'},
      {number:'02', title:'Bases organizadas', text:'Consolidação de registros em planilhas e estruturas de acompanhamento.'},
      {number:'03', title:'Regras de negócio', text:'Tratamento de datas, substitutos e situações excepcionais para interpretação coerente.'},
      {number:'04', title:'Fluxos conectados', text:'Uso de automações e notificações para apoiar circulação e conferência de informações.'}
    ],
    role: 'Desenho o processo a partir da rotina operacional, defino os campos e exceções, estruturo a lógica de acompanhamento e participo dos testes e ajustes com base no uso prático.',
    methods: ['Microsoft Forms', 'Excel', 'Power Automate', 'Regras de negócio'],
    delivery: 'Uma estrutura de registros e encaminhamentos mais consistente, preparada para acompanhamento e evolução. A mensuração de economia de tempo ainda depende de dados comparáveis.',
    next: 'Reforçar conciliação, auditoria de mudanças e qualidade de dados entre formulários e sistemas.',
    disclosure: 'Não afirmo economia percentual ou eliminação de erros sem medição objetiva.',
    tags: ['Formulários', 'Power Automate', 'Padronização', 'Processos']
  }
};

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  nav?.classList.toggle('open', open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
const progress = document.querySelector('.progress');
let frameRequested = false;
function updateProgress(){
  if(frameRequested || !progress) return;
  frameRequested = true;
  requestAnimationFrame(() => {
    const scrollable = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${scrollable > 0 ? (scrollY / scrollable) * 100 : 0}%`;
    frameRequested = false;
  });
}
addEventListener('scroll', updateProgress, {passive:true});
addEventListener('resize', updateProgress);
updateProgress();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }, {threshold:0.1, rootMargin:'0px 0px 35px 0px'});
  revealItems.forEach(el => observer.observe(el));
} else { revealItems.forEach(el => el.classList.add('visible')); }

const dialog = document.getElementById('project-dialog');
const fields = {
  category: document.getElementById('modal-category'), phase: document.getElementById('modal-phase'),
  strapline: document.getElementById('modal-strapline'), index: document.getElementById('modal-index'),
  title: document.getElementById('modal-title'), intro: document.getElementById('modal-intro'),
  context: document.getElementById('modal-context'), problem: document.getElementById('modal-problem'),
  solution: document.getElementById('modal-solution'), role: document.getElementById('modal-role'),
  delivery: document.getElementById('modal-delivery'), next: document.getElementById('modal-next'),
  disclosure: document.getElementById('modal-disclosure')
};

function fillTextList(container, items, className){
  container.replaceChildren();
  for (const item of items) {
    const span = document.createElement('span');
    span.className = className;
    span.textContent = item;
    container.append(span);
  }
}
function openCase(key){
  const data = projects[key];
  if(!data || !dialog) return;
  for(const [field, element] of Object.entries(fields)) element.textContent = data[field];
  const tags = document.getElementById('modal-tags');
  fillTextList(tags, data.tags, 'case-tag');
  const methods = document.getElementById('modal-methods');
  fillTextList(methods, data.methods, 'case-method');
  const highlights = document.getElementById('modal-highlights');
  highlights.replaceChildren();
  for(const item of data.highlights){
    const article = document.createElement('article');
    article.className = 'case-highlight';
    const number = document.createElement('span');
    number.className='case-highlight-number'; number.textContent=item.number;
    const title = document.createElement('h4'); title.textContent=item.title;
    const description = document.createElement('p'); description.textContent=item.text;
    article.append(number,title,description);
    highlights.append(article);
  }
  dialog.dataset.tone = data.tone;
  if(!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
}
function syncCaseFromUrl(){
  const match = location.hash.match(/^#case-(portal|frota|nexo|automacao)$/);
  if(match) openCase(match[1]);
  else if(dialog?.open) dialog.close();
}
document.querySelectorAll('[data-project]').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.project;
    if(!projects[key]) return;
    history.pushState({project:key}, '', `#case-${key}`);
    openCase(key);
  });
});
function closeCase(){
  if(dialog?.open) dialog.close();
  if(location.hash.startsWith('#case-')) history.replaceState(null, '', '#projetos');
}
dialog?.querySelector('.dialog-close')?.addEventListener('click',closeCase);
dialog?.querySelector('.case-back')?.addEventListener('click',closeCase);
dialog?.addEventListener('click',event => { if(event.target === dialog) closeCase(); });
dialog?.addEventListener('close',()=> {
  if(location.hash.startsWith('#case-')) history.replaceState(null, '', '#projetos');
});
addEventListener('popstate',syncCaseFromUrl);
addEventListener('hashchange',syncCaseFromUrl);
syncCaseFromUrl();
