export const ASSETS = {
  hero: "/manus-storage/hero-fazenda_99b43c02.jpg",
  road: "/manus-storage/caminho-rural_16002f76.jpg",
  operation: "/manus-storage/mapa-operacao_7f39cbd9.jpg",
  parcels: "/manus-storage/glebas-aereas_bb20bf3e.jpg",
  document: "/manus-storage/solo-documento_db41fa0c.jpg",
} as const;

export const navigation = [
  { label: "Atuação", href: "/contempla-rural" },
  { label: "Carta contemplada", href: "/carta-contemplada-rural" },
  { label: "Como atuamos", href: "/como-atuamos" },
  { label: "Rafael Gois", href: "/rafael-gois" },
  { label: "Conteúdos", href: "/conteudos" },
] as const;

export type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  readingTime: string;
  image: string;
  alt: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "o-que-comparar-alem-do-agio",
    category: "Estrutura financeira",
    title: "O que precisa ser comparado além do ágio",
    summary:
      "Uma leitura da composição econômica da carta: saldo devedor, parcelas, reajustes, prazo e capital preservado na atividade.",
    readingTime: "6 min de leitura",
    image: ASSETS.document,
    alt: "Pasta de documentos, amostra de solo e instrumentos de medição sobre uma mesa verde",
    sections: [
      {
        title: "O ágio é uma parte da decisão",
        paragraphs: [
          "O ágio é o valor negociado para adquirir uma carta já contemplada. Ele costuma receber atenção imediata porque representa um desembolso inicial visível. Ainda assim, a operação continua depois desse pagamento: existe um saldo devedor, um cronograma de parcelas e regras de reajuste que precisam ser lidos em conjunto.",
          "Duas cartas com o mesmo crédito disponível podem produzir compromissos financeiros diferentes. A comparação só ganha utilidade quando considera a aquisição rural pretendida, o prazo da negociação e o caixa que precisa permanecer disponível para a atividade produtiva.",
        ],
      },
      {
        title: "Cinco números para colocar na mesma página",
        paragraphs: [
          "Antes de concluir que uma carta é adequada, vale organizar os principais números em uma visão única. A forma de cálculo e as condições variam entre administradoras e contratos; por isso, documentos e informações atualizadas devem orientar a análise.",
        ],
        bullets: [
          "crédito efetivamente disponível para a finalidade pretendida;",
          "valor do ágio e momento do pagamento;",
          "saldo devedor remanescente;",
          "valor, quantidade e periodicidade das parcelas;",
          "critério de reajuste previsto no contrato.",
        ],
      },
      {
        title: "A parcela precisa caber no ciclo da propriedade",
        paragraphs: [
          "No meio rural, entradas e saídas nem sempre se distribuem de maneira uniforme ao longo do ano. Safra, manutenção, insumos, equipe e investimentos competem pelo mesmo caixa. A parcela deve ser observada dentro desse calendário, e não apenas como um número isolado.",
          "Essa leitura também ajuda a definir quanto capital próprio pode participar da aquisição sem comprometer a continuidade da operação. A decisão responsável preserva margem para os custos que aparecem antes, durante e depois da compra do imóvel.",
        ],
      },
      {
        title: "A comparação termina no imóvel",
        paragraphs: [
          "O melhor conjunto de números perde relevância se a carta, a finalidade ou o imóvel não atenderem às condições aplicáveis. A administradora analisa participantes, documentação e bem oferecido conforme suas regras. Por isso, a avaliação financeira deve caminhar junto com a verificação operacional.",
        ],
      },
    ],
  },
  {
    slug: "entre-contemplacao-e-utilizacao",
    category: "Carta contemplada",
    title: "Quais etapas existem entre contemplação e utilização",
    summary:
      "Contemplação, transferência, análise e liberação são momentos diferentes. Entenda por que o cronograma precisa considerar cada dependência.",
    readingTime: "7 min de leitura",
    image: ASSETS.operation,
    alt: "Mãos analisando um mapa rural ao lado de pastas e calculadora",
    sections: [
      {
        title: "Contemplação não encerra o processo",
        paragraphs: [
          "Uma carta contemplada já passou pela etapa de contemplação do grupo. Isso elimina a espera por sorteio ou lance dentro daquele grupo, mas não significa utilização automática e imediata do crédito. Transferência, análise cadastral, documentação e avaliação do imóvel podem integrar o percurso.",
          "A sequência exata, os documentos e os prazos dependem da administradora, do contrato, das partes e do imóvel. Tratar todas as operações como idênticas cria expectativas que a realidade documental pode não sustentar.",
        ],
      },
      {
        title: "Um percurso que precisa ser confirmado",
        paragraphs: [
          "Em uma aquisição rural, algumas frentes costumam aparecer. Elas podem ocorrer em outra ordem ou exigir etapas adicionais. O ponto importante é verificar o procedimento aplicável antes de comprometer o prazo negociado com o vendedor.",
        ],
        bullets: [
          "leitura dos dados da carta e do contrato;",
          "verificação das condições de transferência;",
          "análise das partes pela administradora;",
          "reunião e conferência dos documentos do imóvel;",
          "avaliações e garantias eventualmente exigidas;",
          "formalização e utilização conforme aprovação.",
        ],
      },
      {
        title: "O imóvel rural traz documentos próprios",
        paragraphs: [
          "Além dos documentos pessoais e financeiros, a propriedade rural possui registros, cadastros e características que precisam ser observados conforme o caso. Matrícula, localização, situação registral, finalidade e aceitabilidade do bem podem influenciar o andamento.",
          "A análise documental deve ser conduzida pelos profissionais e participantes competentes. A Contempla Rural organiza a leitura da estrutura de crédito; decisões da administradora, verificações jurídicas e demais responsabilidades permanecem com quem efetivamente as executa.",
        ],
      },
      {
        title: "Prazo deve ser tratado como variável",
        paragraphs: [
          "Um cronograma responsável considera dependências conhecidas e reserva margem para exigências adicionais. Se o vendedor trabalha com uma data rígida, essa informação precisa entrar na análise desde o início. A contemplação reduz uma incerteza, mas não elimina as demais etapas da aquisição.",
        ],
      },
    ],
  },
  {
    slug: "prazo-do-vendedor-e-estrutura-de-credito",
    category: "Aquisição rural",
    title: "Como o prazo do vendedor interfere na estrutura de crédito",
    summary:
      "O tempo disponível para concluir a compra influencia a escolha da modalidade, a documentação e a margem de segurança da negociação.",
    readingTime: "5 min de leitura",
    image: ASSETS.road,
    alt: "Estrada rural cercada por pastagens sob luz suave da manhã",
    sections: [
      {
        title: "Toda negociação possui um relógio",
        paragraphs: [
          "Uma propriedade pode fazer sentido para expansão, acesso, logística ou continuidade familiar. Quando ela entra em negociação, o interesse estratégico passa a conviver com o prazo definido pelo vendedor e com as etapas necessárias para mobilizar o crédito.",
          "A primeira pergunta não deveria ser apenas quanto custa o imóvel. Também importa saber até quando a condição proposta permanece disponível e quais marcos precisam ocorrer dentro desse intervalo.",
        ],
      },
      {
        title: "Modalidades diferentes tratam o tempo de formas diferentes",
        paragraphs: [
          "No consórcio ainda não contemplado, o momento da contemplação permanece incerto. Em uma carta já contemplada, essa etapa ocorreu, mas transferência, análise, documentação e utilização ainda seguem regras aplicáveis. No financiamento, aprovação e condições também dependem da instituição e da operação.",
          "A comparação precisa partir da data real da compra. Uma estrutura pode ser economicamente interessante e, ao mesmo tempo, incompatível com o prazo contratual ou documental disponível.",
        ],
      },
      {
        title: "Informações que ajudam a construir o cronograma",
        paragraphs: [
          "Quanto antes essas informações forem reunidas, mais clara se torna a leitura da aquisição.",
        ],
        bullets: [
          "estágio da conversa com o vendedor;",
          "data esperada para assinatura e pagamento;",
          "situação dos documentos do comprador e do imóvel;",
          "capital próprio disponível para a composição;",
          "condições conhecidas da carta e da administradora;",
          "margem de tempo aceita pelas partes.",
        ],
      },
      {
        title: "Margem de segurança faz parte da estrutura",
        paragraphs: [
          "Cronogramas excessivamente justos ficam vulneráveis a uma exigência documental, atualização de informação ou análise adicional. Uma leitura prudente não promete datas que pertencem a terceiros. Ela identifica dependências e mostra ao comprador quais pontos precisam ser confirmados antes de assumir compromissos definitivos.",
        ],
      },
    ],
  },
];

export const faq = [
  {
    question: "O que é uma carta contemplada de consórcio?",
    answer:
      "É uma carta vinculada a uma cota que já passou pela contemplação do grupo. A utilização do crédito continua sujeita às condições contratuais, à análise das partes, à documentação e às regras da administradora.",
  },
  {
    question: "Uma carta contemplada pode ser usada na compra de imóvel rural?",
    answer:
      "Ela pode participar da aquisição quando a categoria, a finalidade, o imóvel e as condições da operação atendem às regras aplicáveis. A compatibilidade precisa ser verificada no caso concreto.",
  },
  {
    question: "A contemplação significa crédito liberado imediatamente?",
    answer:
      "Não. A contemplação é uma etapa relevante, mas transferência, análise, documentação, avaliação e formalização podem ser necessárias antes da utilização.",
  },
  {
    question: "O que precisa ser analisado além do valor da carta?",
    answer:
      "Ágio, saldo devedor, parcelas, reajustes, prazo, finalidade, condições da administradora, dados do comprador e características do imóvel fazem parte da leitura.",
  },
  {
    question: "Quem aprova o comprador e o imóvel?",
    answer:
      "A aprovação e a aceitação seguem o processo e as regras da administradora, além das responsabilidades de outros participantes competentes. A Contempla Rural não substitui essas decisões.",
  },
  {
    question: "Qual é o papel da Contempla Rural?",
    answer:
      "A empresa organiza as informações da aquisição e da estrutura financeira, compara condições conhecidas e orienta a leitura da carta dentro do contexto rural. O escopo de cada atendimento é definido na conversa inicial.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Compreensão da aquisição",
    text: "Imóvel, finalidade, valor, localização, estágio da conversa e prazo do vendedor entram na primeira leitura.",
  },
  {
    number: "02",
    title: "Leitura financeira",
    text: "Capital disponível, ágio, saldo devedor, parcelas e reajustes são organizados no mesmo quadro.",
  },
  {
    number: "03",
    title: "Verificações preliminares",
    text: "Comprador, finalidade, imóvel e condições conhecidas são observados antes de comparar alternativas.",
  },
  {
    number: "04",
    title: "Comparação da estrutura",
    text: "Cartas e condições com aderência inicial são comparadas dentro do prazo real da aquisição.",
  },
  {
    number: "05",
    title: "Condução das etapas",
    text: "As próximas ações são organizadas de acordo com as responsabilidades e exigências de cada participante.",
  },
] as const;
