import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Link, useRoute } from "wouter";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  FileCheck2,
  Landmark,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import {
  ArrowLink,
  Eyebrow,
  FieldLines,
  Layout,
  NextPage,
  PageHero,
  SectionHeading,
  Seo,
} from "@/components/site";
import { articles, ASSETS, faq, steps, type Article } from "@/site-data";

function ContactBand({
  eyebrow = "Aquisição em análise",
  title = "O contexto vem antes da alternativa.",
  body = "Imóvel, valor, prazo e capital disponível formam o ponto de partida da conversa.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="contact-band dark-section">
      <FieldLines />
      <div className="container contact-band-inner">
        <div>
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <Link href="/contato" className="button button-gold">
          Apresentar uma aquisição <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

function EditorialSplit({
  image,
  imageAlt,
  eyebrow,
  title,
  children,
  reverse = false,
}: {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className={`editorial-split section-light ${reverse ? "is-reverse" : ""}`}>
      <div className="container editorial-grid">
        <div className="editorial-image">
          <img src={image} alt={imageAlt} loading="lazy" />
          <span aria-hidden="true">CONTEMPLA / RURAL</span>
        </div>
        <div className="editorial-copy">
          <SectionHeading eyebrow={eyebrow} title={title} />
          {children}
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <Layout>
      <Seo
        title="A Contempla Rural"
        path="/contempla-rural"
        description="Conheça o campo de atuação e os princípios da Contempla Rural na leitura de cartas contempladas para aquisição de patrimônio rural."
      />
      <PageHero
        eyebrow="A Contempla Rural"
        title={<>Especialização nasce de uma <em>realidade concreta.</em></>}
        intro="Terras estratégicas entram em negociação enquanto prazo, caixa, documentação e crédito ainda precisam ser conciliados. É dentro dessa realidade que a Contempla Rural atua."
        image={ASSETS.parcels}
      />

      <EditorialSplit
        image={ASSETS.road}
        imageAlt="Estrada que atravessa uma propriedade rural sob a luz da manhã"
        eyebrow="Campo de atuação"
        title={<>A aquisição rural é o <em>centro da leitura.</em></>}
      >
        <p>
          A Contempla Rural dedica sua comunicação e sua análise à participação de cartas contempladas na aquisição e expansão de patrimônio rural. O imóvel pretendido, o prazo do vendedor, a disponibilidade de capital e as condições da administradora entram na mesma conversa.
        </p>
        <p>
          Essa especialização permite organizar perguntas próprias desse mercado: qual propriedade está sendo adquirida, em que estágio se encontra a negociação, quanto capital deve permanecer na atividade e quais etapas ainda separam a contemplação da utilização.
        </p>
      </EditorialSplit>

      <section className="principles-section section-cream">
        <div className="container">
          <SectionHeading
            eyebrow="Princípios de atuação"
            title={<>Critério que pode ser <em>compreendido.</em></>}
            body="A decisão patrimonial precisa ser apresentada de maneira legível. Cada princípio orienta a forma de analisar e comunicar a operação."
          />
          <div className="principle-list">
            {[
              ["01", "Contexto", "A carta é observada dentro de uma aquisição real ou de um plano patrimonial definido."],
              ["02", "Compatibilidade", "Crédito, imóvel, prazo e capacidade financeira precisam formar uma estrutura coerente."],
              ["03", "Transparência", "Ágio, saldo devedor, parcelas, reajustes, dependências e responsabilidades permanecem visíveis."],
              ["04", "Condicionalidade", "Decisões da administradora e de terceiros são apresentadas como etapas sujeitas às regras aplicáveis."],
            ].map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="institutional-quote dark-section">
        <div className="topo-lines" aria-hidden="true" />
        <div className="container">
          <p>“A qualidade da estrutura começa pela qualidade das informações colocadas sobre a mesa.”</p>
          <small>PRINCÍPIO DE ANÁLISE / CONTEMPLA RURAL</small>
        </div>
      </section>

      <ContactBand />
      <NextPage number="02" label="Próxima página" title="Carta contemplada rural" href="/carta-contemplada-rural" />
    </Layout>
  );
}

export function LetterPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <Layout>
      <Seo
        title="Carta contemplada rural"
        path="/carta-contemplada-rural"
        description="Entenda contemplação, transferência, custos, análise, documentação e utilização da carta contemplada na aquisição de imóvel rural."
        schema={faqSchema}
      />
      <PageHero
        eyebrow="Carta contemplada rural"
        title={<>A contemplação resolve uma etapa. A aquisição ainda exige <em>leitura completa.</em></>}
        intro="Uma carta contemplada já passou pela contemplação do grupo. Sua transferência e utilização continuam ligadas ao contrato, às análises, à documentação e ao imóvel rural pretendido."
        image={ASSETS.hero}
      />

      <section className="definition-section section-light">
        <div className="container definition-grid">
          <div>
            <Eyebrow>Conceito</Eyebrow>
            <span className="definition-number" aria-hidden="true">01</span>
          </div>
          <div>
            <h2>O que a contemplação representa</h2>
            <p>
              No consórcio, a contemplação é o momento em que a cota passa a ter a possibilidade de utilizar o crédito, conforme as condições do grupo e da administradora. Quando uma carta já contemplada é negociada, a espera por sorteio ou lance daquela cota deixa de fazer parte do planejamento.
            </p>
            <p>
              Ainda existem verificações. A transferência, a análise das partes, a finalidade, a documentação e a aceitação do imóvel seguem o procedimento aplicável. A disponibilidade temporal deve ser avaliada a partir dessas dependências.
            </p>
          </div>
        </div>
      </section>

      <EditorialSplit
        image={ASSETS.operation}
        imageAlt="Mapa, pastas e calculadora organizados para análise"
        eyebrow="Composição econômica"
        title={<>O crédito disponível convive com um <em>saldo devedor.</em></>}
        reverse
      >
        <p>
          A aquisição da carta pode envolver o pagamento de ágio ao titular e a continuidade das parcelas do consórcio. Crédito, ágio, saldo devedor, quantidade de parcelas, reajustes e demais condições precisam ser lidos no mesmo documento de comparação.
        </p>
        <ul className="editorial-checks">
          <li><Check /> crédito disponível e finalidade;</li>
          <li><Check /> ágio e momento do desembolso;</li>
          <li><Check /> saldo devedor e cronograma;</li>
          <li><Check /> parcelas e critérios de reajuste;</li>
          <li><Check /> capital próprio preservado.</li>
        </ul>
      </EditorialSplit>

      <section className="journey-section dark-section">
        <div className="container">
          <SectionHeading
            light
            eyebrow="Etapas possíveis"
            title={<>Entre a carta e o imóvel existe um <em>percurso documental.</em></>}
            body="A sequência muda conforme a administradora e a operação. O mapa abaixo organiza as dependências que costumam exigir confirmação."
          />
          <div className="journey-track">
            {[
              ["01", "Carta", "Contrato, situação e dados atualizados"],
              ["02", "Transferência", "Procedimento e análise aplicável"],
              ["03", "Partes", "Comprador, vendedor e titular"],
              ["04", "Imóvel", "Documentação, avaliação e aceitação"],
              ["05", "Utilização", "Formalização conforme aprovação"],
            ].map(([n, title, text]) => (
              <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section section-cream">
        <div className="container faq-grid">
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title={<>Respostas diretas para decisões que pedem <em>cuidado.</em></>}
          />
          <div className="faq-list">
            {faq.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary><span>0{index + 1}</span>{item.question}<ChevronDown aria-hidden="true" /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactBand title="Existe uma propriedade e um prazo sobre a mesa?" />
      <NextPage number="03" label="Próxima página" title="Como atuamos" href="/como-atuamos" />
    </Layout>
  );
}

export function ProcessPage() {
  return (
    <Layout>
      <Seo
        title="Como atuamos"
        path="/como-atuamos"
        description="Conheça os critérios usados para compreender a aquisição, ler a estrutura financeira e organizar as etapas de uma carta contemplada rural."
      />
      <PageHero
        eyebrow="Como atuamos"
        title={<>A análise organiza as variáveis antes de comparar <em>alternativas.</em></>}
        intro="Aquisição, estrutura financeira, prazo, carta, administradora e imóvel são observados como partes relacionadas da mesma decisão."
        image={ASSETS.operation}
      />

      <section className="process-intro section-light">
        <div className="container process-intro-grid">
          <SectionHeading
            eyebrow="Leitura integrada"
            title={<>Cinco frentes para construir uma visão <em>completa.</em></>}
          />
          <p>
            O percurso abaixo descreve a lógica de trabalho da Contempla Rural. Ele não representa aprovação automática, prazo fixo ou procedimento único. Cada operação encontra condições específicas no comprador, na carta, na administradora e no imóvel.
          </p>
        </div>
      </section>

      <section className="process-steps section-cream">
        <div className="container process-list">
          {steps.map((step, index) => (
            <article key={step.number}>
              <div className="process-number"><span>{step.number}</span><i /></div>
              <div className="process-visual">
                <img
                  src={[ASSETS.road, ASSETS.document, ASSETS.operation, ASSETS.parcels, ASSETS.hero][index]}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
              </div>
              <div className="process-copy"><h2>{step.title}</h2><p>{step.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="responsibility-section dark-section">
        <div className="container responsibility-grid">
          <SectionHeading
            light
            eyebrow="Responsabilidades"
            title={<>Clareza também significa saber <em>quem decide.</em></>}
          />
          <div className="responsibility-cards">
            {[
              [ShieldCheck, "Contempla Rural", "Organiza informações, compara a estrutura conhecida e conduz a conversa dentro do escopo definido."],
              [Landmark, "Administradora", "Aplica suas regras, analisa participantes, documentos, garantias e a utilização do crédito."],
              [FileCheck2, "Profissionais competentes", "Executam verificações jurídicas, registrais, técnicas, fiscais ou outras que o caso exigir."],
            ].map(([Icon, title, text]) => {
              const IconComponent = Icon as typeof ShieldCheck;
              return <article key={title as string}><IconComponent /><h3>{title as string}</h3><p>{text as string}</p></article>;
            })}
          </div>
        </div>
      </section>

      <ContactBand title="A primeira leitura começa com dados concretos." />
      <NextPage number="04" label="Próxima página" title="Rafael Gois" href="/rafael-gois" />
    </Layout>
  );
}

export function RafaelPage() {
  return (
    <Layout>
      <Seo
        title="Rafael Gois"
        path="/rafael-gois"
        description="Conheça o papel de Rafael Gois na Contempla Rural e os princípios que orientam a análise de aquisições rurais com carta contemplada."
        schema={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Rafael Gois",
          worksFor: { "@type": "Organization", name: "Contempla Rural" },
        }}
      />
      <PageHero
        eyebrow="Rafael Gois"
        title={<>Perguntas precisas revelam a qualidade de uma <em>estrutura financeira.</em></>}
        intro="Rafael participa das leituras e das conversas estratégicas da Contempla Rural, relacionando o imóvel pretendido, o momento da negociação e as condições da carta."
        image={ASSETS.road}
        imageAlt="Estrada em uma propriedade rural"
      />

      <section className="rafael-profile section-light">
        <div className="container rafael-profile-grid">
          <div className="rafael-profile-visual">
            <img src={ASSETS.operation} alt="Ambiente de análise com mapa rural e documentos" />
            <div className="portrait-note"><span>FOTOGRAFIA OFICIAL</span><p>O retrato de Rafael será inserido neste quadro quando o material autoral estiver disponível.</p></div>
          </div>
          <div className="rafael-profile-copy">
            <Eyebrow>Papel na Contempla Rural</Eyebrow>
            <h2>Uma conversa conduzida a partir da aquisição.</h2>
            <p>
              A participação de Rafael começa pela compreensão do que está sendo negociado. O valor da propriedade, o prazo, a finalidade, o capital disponível e a situação documental ajudam a delimitar quais perguntas precisam ser respondidas.
            </p>
            <p>
              A carta contemplada entra depois dessa leitura inicial. Seus números e condições são comparados com a realidade do comprador e com as exigências conhecidas da aquisição rural.
            </p>
            <p className="data-note">
              A biografia profissional completa, formações, experiência e registros de atuação serão acrescentados após validação documental com Rafael.
            </p>
          </div>
        </div>
      </section>

      <section className="questions-section section-cream">
        <div className="container">
          <SectionHeading
            eyebrow="Princípios de análise"
            title={<>As perguntas que organizam uma <em>decisão patrimonial.</em></>}
          />
          <div className="question-wall">
            {[
              "Qual propriedade está em negociação?",
              "Por que essa área é estratégica?",
              "Qual prazo foi acordado com o vendedor?",
              "Quanto capital precisa permanecer na atividade?",
              "Como ágio, saldo e parcelas se distribuem?",
              "Quais condições ainda dependem da administradora?",
            ].map((question, index) => (
              <article key={question}><span>0{index + 1}</span><p>{question}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="rafael-content dark-section">
        <div className="container">
          <SectionHeading
            light
            eyebrow="Conteúdos assinados"
            title={<>Conhecimento organizado para quem avalia uma <em>aquisição rural.</em></>}
          />
          <div className="rafael-article-list">
            {articles.map((article, index) => (
              <Link key={article.slug} href={`/conteudos/${article.slug}`}>
                <span>0{index + 1}</span><div><small>{article.category}</small><h3>{article.title}</h3></div><ArrowUpRight />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactBand eyebrow="Conversa estratégica" title="Apresente a aquisição diretamente à Contempla Rural." />
      <NextPage number="05" label="Próxima página" title="Conteúdos" href="/conteudos" />
    </Layout>
  );
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <article className="library-card">
      <Link href={`/conteudos/${article.slug}`}>
        <div className="library-image"><img src={article.image} alt={article.alt} loading="lazy" /><span>0{index + 1}</span></div>
        <div><small>{article.category}</small><h2>{article.title}</h2><p>{article.summary}</p><span className="article-read">{article.readingTime}<ArrowUpRight size={15} /></span></div>
      </Link>
    </article>
  );
}

export function ContentPage() {
  return (
    <Layout>
      <Seo
        title="Conteúdos"
        path="/conteudos"
        description="Artigos sobre carta contemplada, aquisição rural, prazos, custos, documentação e estrutura financeira."
      />
      <PageHero
        eyebrow="Biblioteca de conhecimento"
        title={<>Informação para analisar terra, tempo, caixa e <em>crédito.</em></>}
        intro="Conteúdos escritos para responder perguntas reais de quem considera uma aquisição rural com participação de carta contemplada."
        image={ASSETS.document}
        imageAlt="Documento e amostra de solo organizados para análise"
      />
      <section className="library-section section-cream">
        <div className="container">
          <div className="library-filter" aria-label="Categorias disponíveis"><span>Todos os conteúdos</span><span>Aquisição rural</span><span>Carta contemplada</span><span>Estrutura financeira</span></div>
          <div className="library-list">{articles.map((article, index) => <ArticleCard key={article.slug} article={article} index={index} />)}</div>
        </div>
      </section>
      <ContactBand title="Sua aquisição traz uma pergunta diferente?" body="Compartilhe o contexto para que a conversa comece pelos dados do imóvel e da negociação." />
    </Layout>
  );
}

export function ArticlePage() {
  const [, params] = useRoute("/conteudos/:slug");
  const article = useMemo(() => articles.find((item) => item.slug === params?.slug), [params?.slug]);
  if (!article) return <MissingArticle />;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    author: { "@type": "Person", name: "Rafael Gois" },
    publisher: { "@type": "Organization", name: "Contempla Rural" },
    image: article.image,
  };

  return (
    <Layout>
      <Seo title={article.title} path={`/conteudos/${article.slug}`} description={article.summary} type="article" image={article.image} schema={articleSchema} />
      <article className="article-page">
        <header className="article-header dark-section">
          <div className="article-header-image"><img src={article.image} alt={article.alt} /></div>
          <div className="article-header-overlay" />
          <div className="container">
            <Link href="/conteudos" className="back-link"><ArrowLeft size={16} /> Biblioteca</Link>
            <Eyebrow light>{article.category}</Eyebrow>
            <h1>{article.title}</h1>
            <div className="article-byline"><span>Por Rafael Gois</span><span><Clock3 size={15} /> {article.readingTime}</span><span>Conteúdo educativo</span></div>
          </div>
        </header>
        <div className="container article-layout">
          <aside>
            <strong>Neste conteúdo</strong>
            {article.sections.map((section, index) => <a key={section.title} href={`#secao-${index + 1}`}>{String(index + 1).padStart(2, "0")} {section.title}</a>)}
          </aside>
          <div className="article-body">
            <p className="article-lead">{article.summary}</p>
            {article.sections.map((section, index) => (
              <section key={section.title} id={`secao-${index + 1}`}>
                <span>0{index + 1}</span><h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
            <div className="article-disclaimer"><ShieldCheck /><p>Este conteúdo é educativo. Condições de transferência, análise, aceitação do imóvel, utilização e prazo dependem da administradora, dos documentos e dos participantes de cada operação.</p></div>
          </div>
        </div>
      </article>
      <ContactBand title="Existe uma aquisição concreta por trás da pesquisa?" />
    </Layout>
  );
}

function MissingArticle() {
  return (
    <Layout>
      <Seo title="Conteúdo não encontrado" path="/conteudos" />
      <section className="simple-empty dark-section"><div className="container"><Eyebrow light>Biblioteca</Eyebrow><h1>Este conteúdo não foi encontrado.</h1><ArrowLink href="/conteudos" light>Voltar para a biblioteca</ArrowLink></div></section>
    </Layout>
  );
}

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", property: "", state: "", value: "", stage: "", deadline: "", message: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Aquisição rural em análise — ${form.name}`);
    const body = encodeURIComponent([
      `Nome: ${form.name}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.phone}`,
      `Tipo de aquisição: ${form.property}`,
      `Estado/região: ${form.state}`,
      `Faixa de valor: ${form.value}`,
      `Estágio: ${form.stage}`,
      `Prazo estimado: ${form.deadline}`,
      `Contexto: ${form.message}`,
    ].join("\n"));
    setSubmitted(true);
    window.location.href = `mailto:contato@contemplarural.com.br?subject=${subject}&body=${body}`;
  };

  return (
    <Layout>
      <Seo title="Apresentar uma aquisição" path="/contato" description="Apresente o contexto de uma aquisição rural para uma leitura inicial da Contempla Rural." />
      <PageHero
        eyebrow="Contato"
        title={<>Apresente a aquisição, o prazo e o <em>momento da negociação.</em></>}
        intro="As informações abaixo permitem uma primeira leitura do contexto. O preenchimento não representa aprovação, proposta ou reserva de carta."
        image={ASSETS.road}
      />
      <section className="contact-page section-cream">
        <div className="container contact-page-grid">
          <aside>
            <Eyebrow>Antes de enviar</Eyebrow>
            <h2>Informações úteis para a conversa inicial.</h2>
            <div className="contact-points">
              <p><span>01</span> Imóvel ou tipo de aquisição pretendida</p>
              <p><span>02</span> Valor e capital disponível</p>
              <p><span>03</span> Prazo informado pelo vendedor</p>
              <p><span>04</span> Estágio da negociação</p>
            </div>
            <div className="contact-direct"><Mail /><div><small>Contato institucional</small><a href="mailto:contato@contemplarural.com.br">contato@contemplarural.com.br</a></div></div>
          </aside>
          <form className="acquisition-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Nome completo<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" /></label>
              <label>Telefone<input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} autoComplete="tel" inputMode="tel" /></label>
            </div>
            <div className="form-row">
              <label>E-mail<input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} autoComplete="email" /></label>
              <label>Estado ou região<input required value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} /></label>
            </div>
            <div className="form-row">
              <label>Tipo de aquisição<select required value={form.property} onChange={(e) => setForm({ ...form, property: e.target.value })}><option value="" disabled>Selecione</option><option>Fazenda</option><option>Sítio ou chácara</option><option>Área vizinha</option><option>Outra propriedade rural</option><option>Imóvel ainda não definido</option></select></label>
              <label>Faixa de valor<select required value={form.value} onChange={(e) => setForm({ ...form, value: e.target.value })}><option value="" disabled>Selecione</option><option>Até R$ 500 mil</option><option>De R$ 500 mil a R$ 1 milhão</option><option>De R$ 1 milhão a R$ 3 milhões</option><option>De R$ 3 milhões a R$ 5 milhões</option><option>Acima de R$ 5 milhões</option></select></label>
            </div>
            <div className="form-row">
              <label>Estágio da negociação<select required value={form.stage} onChange={(e) => setForm({ ...form, stage: e.target.value })}><option value="" disabled>Selecione</option><option>Pesquisa inicial</option><option>Imóvel identificado</option><option>Conversa com o vendedor</option><option>Proposta em análise</option><option>Negociação com prazo definido</option></select></label>
              <label>Prazo estimado<input required placeholder="Ex.: 60 dias" value={form.deadline} onChange={(e) => setForm({ ...form, deadline: e.target.value })} /></label>
            </div>
            <label>Contexto da aquisição<textarea rows={5} required placeholder="Conte sobre o imóvel, a finalidade da compra e o momento da negociação." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label>
            <label className="consent"><input type="checkbox" required /><span>Autorizo o uso destas informações para retorno sobre a solicitação, conforme a Política de Privacidade.</span></label>
            <button className="button button-green" type="submit">Preparar mensagem <ArrowUpRight size={17} /></button>
            {submitted && <p className="form-status" role="status"><Check /> Uma mensagem foi preparada no seu aplicativo de e-mail. Revise e envie para concluir o contato.</p>}
          </form>
        </div>
      </section>
    </Layout>
  );
}

function LegalPage({ title, intro, children, path }: { title: string; intro: string; children: ReactNode; path: string }) {
  return (
    <Layout>
      <Seo title={title} path={path} description={intro} />
      <section className="legal-hero dark-section"><div className="container"><Eyebrow light>Informação institucional</Eyebrow><h1>{title}</h1><p>{intro}</p></div></section>
      <section className="legal-body section-light"><div className="container legal-layout"><aside><MapPin /><span>Contempla Rural</span><small>Documento institucional</small></aside><div>{children}</div></div></section>
    </Layout>
  );
}

export function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidade" path="/privacidade" intro="Como os dados enviados por visitantes são utilizados na comunicação com a Contempla Rural.">
      <h2>1. Dados enviados pelo visitante</h2><p>O formulário solicita informações de identificação, contato e contexto da aquisição. Esses dados são fornecidos voluntariamente para permitir o retorno e a leitura inicial da solicitação.</p>
      <h2>2. Finalidade</h2><p>As informações são utilizadas para responder ao contato, compreender a demanda apresentada e organizar as conversas relacionadas ao atendimento. Elas não autorizam consulta, contratação ou compartilhamento comercial fora dessa finalidade.</p>
      <h2>3. Compartilhamento</h2><p>Dados somente deverão ser compartilhados quando necessários ao atendimento, mediante informação adequada ao titular, obrigação legal ou consentimento aplicável. Informações sensíveis e documentos completos não devem ser enviados pelo formulário inicial.</p>
      <h2>4. Armazenamento e direitos</h2><p>O titular poderá solicitar confirmação, correção ou exclusão dos dados pelos canais institucionais. Prazos de armazenamento e controles operacionais serão atualizados nesta política conforme a infraestrutura definitiva do site e do atendimento.</p>
      <h2>5. Canal de contato</h2><p>Solicitações relacionadas à privacidade podem ser encaminhadas para <a href="mailto:contato@contemplarural.com.br">contato@contemplarural.com.br</a>.</p>
      <p className="legal-update">Versão inicial para validação institucional. Atualização: setembro de 2026.</p>
    </LegalPage>
  );
}

export function TermsPage() {
  return (
    <LegalPage title="Termos e transparência" path="/termos" intro="Limites da informação apresentada e responsabilidades envolvidas nas operações descritas neste site.">
      <h2>1. Natureza do conteúdo</h2><p>O site apresenta informações institucionais e educativas sobre cartas contempladas aplicadas à aquisição rural. O conteúdo não constitui promessa de aprovação, parecer jurídico, oferta pública, recomendação financeira individual ou garantia de prazo.</p>
      <h2>2. Condições variáveis</h2><p>Transferência, análise das partes, documentação, aceitação do imóvel, utilização do crédito, custos e prazos dependem do contrato, da administradora e dos demais participantes. As condições precisam ser confirmadas nos documentos atualizados de cada operação.</p>
      <h2>3. Papel da Contempla Rural</h2><p>A Contempla Rural organiza a leitura do contexto e da estrutura financeira dentro do escopo informado antes do atendimento. A empresa não substitui decisões da administradora nem análises jurídicas, registrais, contábeis, técnicas ou fiscais executadas por profissionais competentes.</p>
      <h2>4. Informações enviadas</h2><p>O visitante é responsável pela exatidão dos dados apresentados. O formulário inicial não deve receber senhas, documentos completos, dados bancários ou informações sensíveis que ainda não tenham sido solicitadas por canal adequado.</p>
      <h2>5. Atualizações</h2><p>Conteúdos e termos podem ser revisados para refletir mudanças operacionais, contratuais ou regulatórias. A data indicada identifica a versão disponível.</p>
      <p className="legal-update">Versão inicial para validação institucional. Atualização: setembro de 2026.</p>
    </LegalPage>
  );
}
