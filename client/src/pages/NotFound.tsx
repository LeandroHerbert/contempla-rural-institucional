import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Eyebrow, FieldLines, Layout, Seo } from "@/components/site";

export default function NotFound() {
  return (
    <Layout>
      <Seo title="Página não encontrada" path="/404" />
      <section className="not-found dark-section">
        <FieldLines />
        <div className="container">
          <Eyebrow light>Erro 404</Eyebrow>
          <span aria-hidden="true">404</span>
          <h1>Este caminho não leva a uma página publicada.</h1>
          <Link href="/" className="button button-gold"><ArrowLeft size={17} /> Voltar ao início</Link>
        </div>
      </section>
    </Layout>
  );
}
