import { useState } from "react";
import { Link } from "wouter";
import { ArrowDown, ArrowUpRight, Clock3, Map, Ruler, WalletCards } from "lucide-react";
import { ArrowLink, Eyebrow, FieldLines, Layout, Logo, SectionHeading, Seo } from "@/components/site";
import { articles, ASSETS } from "@/site-data";

const lenses = [
  {
    id: "aquisicao",
    number: "01",
    icon: Map,
    title: "Aquisição",
    short: "Imóvel, finalidade, valor e estágio da negociação.",
    detail:
      "A análise começa pela terra pretendida: o que será adquirido, por qual razão, em que região e em qual momento da conversa com o vendedor.",
  },
  {
    id: "estrutura",
    number: "02",
    icon: WalletCards,
    title: "Estrutura financeira",
    short: "Capital disponível, ágio, saldo devedor e parcelas.",
    detail:
      "A carta entra no mesmo quadro do capital próprio e das obrigações futuras. A leitura considera o que a aquisição exige e o que a atividade precisa preservar.",
  },
  {
    id: "tempo",
    number: "03",
    icon: Clock3,
    title: "Tempo",
    short: "Prazo do vendedor e dependências conhecidas.",
    detail:
      "O cronograma da compra orienta a comparação. Contemplação, transferência, documentação e utilização são momentos diferentes da operação.",
  },
  {
    id: "condicoes",
    number: "04",
    icon: Ruler,
    title: "Condições",
    short: "Regras aplicáveis, documentos e aceitação do imóvel.",
    detail:
      "Comprador, finalidade e propriedade precisam conversar com o contrato e com as exigências da administradora. Essas condições são verificadas antes do avanço.",
  },
] as const;

export default function Home() {
  const [activeLens, setActiveLens] = useState<(typeof lenses)[number]["id"]>("aquisicao");
  const active = lenses.find((item) => item.id === activeLens) ?? lenses[0];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Contempla Rural",
    description:
      "Empresa dedicada à leitura e estruturação de cartas contempladas para aquisição e expansão de patrimônio rural.",
    founder: { "@type": "Person", name: "Rafael Gois" },
  };

  return (
    <Layout>
      <Seo schema={organizationSchema} />

      <section className="home-hero dark-section" id="inicio">
        <img
          className="home-hero-image"
          src={ASSETS.hero}
          alt="Extensa propriedade rural atravessada por uma estrada sob a luz da manhã"
          fetchPriority="high"
        />
        <div className="home-hero-shade" />
        <FieldLines className="hero-field-lines" />
        <div className="container home-hero-inner">
          <div className="home-hero-copy reveal-up">
            <Eyebrow light>Aquisição e patrimônio rural</Eyebrow>
            <h1>
              Cartas contempladas para <em>aquisição e expansão</em> de patrimônio rural.
            </h1>
            <p>
              A Contempla Rural analisa a aquisição, o prazo da negociação, o capital disponível e as condições conhecidas para avaliar estruturas compatíveis com o imóvel pretendido.
            </p>
          </div>
          <div className="hero-meta" aria-hidden="true">
            <span>Horizonte rural</span>
            <span>Estrutura de crédito</span>
            <span>Decisão patrimonial</span>
          </div>
        </div>
        <a className="scroll-cue" href="#contexto" aria-label="Avançar para o contexto">
          <ArrowDown size={18} aria-hidden="true" />
        </a>
      </section>

      <section className="context-section section-light" id="contexto">
        <div className="container context-grid">
          <div className="context-intro">
            <Eyebrow>O ponto de partida</Eyebrow>
            <p className="context-statement">
              Uma área estratégica pode entrar em negociação antes de a estrutura financeira estar definida.
            </p>
            <p>
              O vendedor trabalha com prazo. O imóvel possui condições próprias. O capital disponível precisa continuar atendendo à atividade rural. A análise organiza essas informações antes que a carta seja tratada como resposta pronta.
            </p>
          </div>
          <div className="lens-panel">
            <div className="lens-tabs" role="tablist" aria-label="Critérios observados">
              {lenses.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={activeLens === item.id}
                    aria-controls={`panel-${item.id}`}
                    id={`tab-${item.id}`}
                    onClick={() => setActiveLens(item.id)}
                    className={activeLens === item.id ? "is-active" : ""}
                  >
                    <span>{item.number}</span>
                    <Icon size={18} aria-hidden="true" />
                    <strong>{item.title}</strong>
                    <small>{item.short}</small>
                  </button>
                );
              })}
            </div>
            <div
              id={`panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${active.id}`}
              className="lens-detail"
            >
              <span>{active.number}</span>
              <div>
                <h3>{active.title}</h3>
                <p>{active.detail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="video-section dark-section" aria-labelledby="video-title">
        <div className="container video-shell">
          <div className="video-frame">
            <img src={ASSETS.road} alt="Estrada entre pastagens em uma propriedade rural" loading="lazy" />
            <div className="video-wash" />
            <div className="video-placeholder">
              <div className="video-icon" aria-hidden="true"><Clock3 size={22} /></div>
              <div>
                <span>VÍDEO INSTITUCIONAL</span>
                <strong>Em produção</strong>
              </div>
            </div>
            <small>O filme de apresentação de Rafael Gois será incorporado a este espaço.</small>
          </div>
          <div className="video-copy">
            <Eyebrow light>Visão institucional</Eyebrow>
            <h2 id="video-title">A Contempla Rural, por Rafael Gois</h2>
            <p>
              Neste vídeo, Rafael apresentará o contexto das aquisições rurais, o papel possível da carta contemplada e os critérios que orientam uma conversa estratégica.
            </p>
            <div className="video-status"><span /> Conteúdo em preparação</div>
          </div>
        </div>
      </section>

      <section className="letter-section section-cream">
        <div className="container letter-grid">
          <div className="letter-image-wrap">
            <img src={ASSETS.parcels} alt="Vista aérea de glebas rurais e seus caminhos" loading="lazy" />
            <div className="image-index"><span>04</span><small>Escala, limite e percurso</small></div>
          </div>
          <div className="letter-copy">
            <SectionHeading
              eyebrow="Carta contemplada"
              title={<>Uma alternativa que precisa <em>caber na aquisição.</em></>}
              body="A contemplação já ocorreu dentro do grupo. Transferência, análise das partes, documentação, aceitação do imóvel e utilização do crédito seguem as condições da administradora e da operação."
            />
            <ol className="compact-path">
              <li><span>01</span> Aquisição identificada</li>
              <li><span>02</span> Leitura da operação</li>
              <li><span>03</span> Comparação da estrutura</li>
              <li><span>04</span> Verificações aplicáveis</li>
            </ol>
            <ArrowLink href="/carta-contemplada-rural">Entenda a carta contemplada rural</ArrowLink>
          </div>
        </div>
      </section>

      <section className="rafael-section section-light">
        <div className="container rafael-grid">
          <div className="rafael-copy">
            <SectionHeading
              eyebrow="À frente da Contempla Rural"
              title={<>Rafael Gois participa de cada <em>leitura estratégica.</em></>}
              body="A conversa relaciona a estrutura da carta às características do imóvel, às condições do comprador e ao prazo da negociação."
            />
            <p className="rafael-note">
              A autoridade aparece na qualidade das perguntas, na precisão das comparações e na transparência sobre o que depende de cada participante.
            </p>
            <ArrowLink href="/rafael-gois">Conheça Rafael Gois</ArrowLink>
          </div>
          <div className="rafael-visual">
            <img src={ASSETS.operation} alt="Mapa rural e documentos analisados sobre uma mesa de trabalho" loading="lazy" />
            <div className="rg-monogram" aria-hidden="true"><span>RG</span></div>
            <div className="rafael-caption"><span>IMÓVEL</span><i /><span>CAIXA</span><i /><span>PRAZO</span></div>
          </div>
        </div>
      </section>

      <section className="knowledge-section section-cream">
        <div className="container">
          <div className="knowledge-head">
            <SectionHeading
              eyebrow="Conhecimento aplicado"
              title={<>Aquisição rural explicada com <em>clareza.</em></>}
            />
            <ArrowLink href="/conteudos">Acessar todos os conteúdos</ArrowLink>
          </div>
          <div className="article-grid">
            {articles.map((article, index) => (
              <article className={`article-card article-card-${index + 1}`} key={article.slug}>
                <Link href={`/conteudos/${article.slug}`} aria-label={`Ler: ${article.title}`}>
                  <div className="article-image">
                    <img src={article.image} alt={article.alt} loading="lazy" />
                    <span>0{index + 1}</span>
                  </div>
                  <div className="article-card-body">
                    <small>{article.category}</small>
                    <h3>{article.title}</h3>
                    <p>{article.summary}</p>
                    <span className="article-read">{article.readingTime} <ArrowUpRight size={15} /></span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section dark-section">
        <img src={ASSETS.hero} alt="" aria-hidden="true" loading="lazy" />
        <div className="closing-overlay" />
        <FieldLines />
        <div className="container closing-inner">
          <Logo light />
          <div>
            <h2>Você possui uma aquisição rural em análise?</h2>
            <p>
              Apresente o imóvel, o valor pretendido e o estágio da negociação. A leitura inicial indicará se há elementos suficientes para avançar.
            </p>
            <Link href="/contato" className="button button-gold">
              Apresentar uma aquisição <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
