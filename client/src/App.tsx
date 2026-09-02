import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const loadPage = (name: keyof typeof import("./pages/InstitutionalPages")) =>
  lazy(() => import("./pages/InstitutionalPages").then((module) => ({ default: module[name] })));

const AboutPage = loadPage("AboutPage");
const LetterPage = loadPage("LetterPage");
const ProcessPage = loadPage("ProcessPage");
const RafaelPage = loadPage("RafaelPage");
const ContentPage = loadPage("ContentPage");
const ArticlePage = loadPage("ArticlePage");
const ContactPage = loadPage("ContactPage");
const PrivacyPage = loadPage("PrivacyPage");
const TermsPage = loadPage("TermsPage");

function PageLoader() {
  return (
    <div className="route-loader" role="status" aria-live="polite">
      <span />
      <small>Organizando o conteúdo</small>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/contempla-rural" component={AboutPage} />
        <Route path="/carta-contemplada-rural" component={LetterPage} />
        <Route path="/como-atuamos" component={ProcessPage} />
        <Route path="/rafael-gois" component={RafaelPage} />
        <Route path="/conteudos" component={ContentPage} />
        <Route path="/conteudos/:slug" component={ArticlePage} />
        <Route path="/contato" component={ContactPage} />
        <Route path="/privacidade" component={PrivacyPage} />
        <Route path="/termos" component={TermsPage} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
