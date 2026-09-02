import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";
import { ASSETS, navigation } from "@/site-data";

const SITE_NAME = "Contempla Rural";
const DEFAULT_DESCRIPTION =
  "Cartas contempladas aplicadas à aquisição e expansão de patrimônio rural, com leitura do imóvel, prazo, capital e condições da operação.";

export function Logo({ light = false }: { light?: boolean }) {
  const ink = light ? "#F2EFE7" : "#083D34";
  const gold = "#B8A67A";
  return (
    <Link href="/" className="brand" aria-label="Contempla Rural — início">
      <svg className="brand-mark" viewBox="0 0 72 72" aria-hidden="true">
        <circle cx="36" cy="36" r="31" fill="none" stroke={gold} strokeWidth="1.5" />
        <path d="M12 43c10-11 20-17 33-20" fill="none" stroke={gold} strokeWidth="3" strokeLinecap="round" />
        <path d="M15 49c12-9 23-13 42-13" fill="none" stroke={gold} strokeWidth="3" strokeLinecap="round" />
        <path d="M21 56c10-6 21-8 38-7" fill="none" stroke={gold} strokeWidth="3" strokeLinecap="round" />
        <path d="M36 8v18M47 10l-6 17M57 17 46 30M63 28l-15 7" fill="none" stroke={gold} strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="brand-type" style={{ color: ink }}>
        <span>CONTEMPLA</span>
        <small><i /> RURAL <i /></small>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header className={`site-header ${solid ? "is-solid" : ""}`}>
        <div className="header-inner">
          <Logo light={!solid} />
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={location === item.href ? "is-active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link href="/contato" className="header-cta">
              Apresentar uma aquisição <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="menu-toggle"
              aria-label="Abrir menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Menu aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mobile-menu-top">
          <Logo light />
          <button
            ref={closeRef}
            type="button"
            aria-label="Fechar menu"
            onClick={() => {
              setOpen(false);
              toggleRef.current?.focus();
            }}
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Navegação móvel">
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} tabIndex={open ? 0 : -1}>
              <span>0{index + 1}</span>
              {item.label}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <p>Cartas contempladas para aquisição e expansão de patrimônio rural.</p>
          <Link href="/contato" className="button button-gold" tabIndex={open ? 0 : -1}>
            Apresentar uma aquisição <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="topo-lines" aria-hidden="true" />
      <div className="footer-main container">
        <div className="footer-brand">
          <Logo light />
          <p>
            Leitura da aquisição, da estrutura financeira e das condições aplicáveis à carta contemplada no contexto rural.
          </p>
        </div>
        <div className="footer-column">
          <strong>Institucional</strong>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </div>
        <div className="footer-column">
          <strong>Informações</strong>
          <Link href="/contato">Contato</Link>
          <Link href="/privacidade">Privacidade</Link>
          <Link href="/termos">Termos e transparência</Link>
        </div>
        <div className="footer-note">
          <span>ANÁLISE RESPONSÁVEL</span>
          <p>
            Aprovação, transferência, aceitação do imóvel, utilização e prazos dependem das condições aplicáveis e dos participantes da operação.
          </p>
        </div>
      </div>
      <div className="footer-bottom container">
        <small>© {new Date().getFullYear()} Contempla Rural.</small>
        <small>Patrimônio rural exige contexto, prazo e critério.</small>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo">{children}</main>
      <Footer />
    </div>
  );
}

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

export function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
  image = ASSETS.hero,
  schema,
}: SeoProps) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Carta contemplada para aquisição rural`;
    document.title = fullTitle;
    const setMeta = (selector: string, attr: string, value: string) => {
      let node = document.head.querySelector<HTMLMetaElement>(selector);
      if (!node) {
        node = document.createElement("meta");
        const [key, keyValue] = attr.split("=");
        node.setAttribute(key, keyValue.replaceAll('"', ""));
        document.head.appendChild(node);
      }
      node.setAttribute("content", value);
    };
    setMeta('meta[name="description"]', 'name="description"', description);
    setMeta('meta[property="og:title"]', 'property="og:title"', fullTitle);
    setMeta('meta[property="og:description"]', 'property="og:description"', description);
    setMeta('meta[property="og:type"]', 'property="og:type"', type);
    setMeta('meta[property="og:image"]', 'property="og:image"', image);
    setMeta('meta[name="twitter:card"]', 'name="twitter:card"', "summary_large_image");
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${path}`;

    const scriptId = "page-schema";
    document.getElementById(scriptId)?.remove();
    if (schema) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
    return () => document.getElementById(scriptId)?.remove();
  }, [title, description, path, type, image, schema]);
  return null;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "is-light" : ""}`}><span />{children}</p>;
}

export function ArrowLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link href={href} className={`arrow-link ${light ? "is-light" : ""}`}>
      {children}<ArrowUpRight size={16} aria-hidden="true" />
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image = ASSETS.parcels,
  imageAlt = "Vista aérea de uma propriedade rural",
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="page-hero dark-section">
      <div className="page-hero-image" aria-hidden="true">
        <img src={image} alt="" />
      </div>
      <div className="page-hero-overlay" />
      <div className="topo-lines" aria-hidden="true" />
      <div className="container page-hero-inner">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <div className="page-hero-caption" aria-hidden="true">{imageAlt}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "is-light" : ""}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

export function NextPage({ number, label, title, href }: { number: string; label: string; title: string; href: string }) {
  return (
    <section className="next-page-section">
      <Link href={href} className="container next-page-link">
        <div><span>{number}</span><small>{label}</small></div>
        <h2>{title}</h2>
        <ChevronRight size={34} aria-hidden="true" />
      </Link>
    </section>
  );
}

export function FieldLines({ className = "" }: { className?: string }) {
  const id = useId().replaceAll(":", "");
  return (
    <svg className={`field-lines ${className}`} viewBox="0 0 800 420" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#B8A67A" stopOpacity="0" />
          <stop offset="0.5" stopColor="#B8A67A" stopOpacity=".55" />
          <stop offset="1" stopColor="#B8A67A" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4, 5].map((n) => (
        <path
          key={n}
          d={`M${-40 + n * 18} ${360 - n * 18} C 170 ${220 - n * 14}, 310 ${300 - n * 16}, 450 ${140 - n * 12} S 680 ${60 + n * 17}, 850 ${45 + n * 5}`}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
