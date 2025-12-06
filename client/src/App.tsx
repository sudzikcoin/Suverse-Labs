import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Founder from "@/pages/Founder";
import Projects from "@/pages/Projects";
import PingPoint from "@/pages/projects/PingPoint";
import FleetCarbonDashboard from "@/pages/projects/FleetCarbonDashboard";
import CarbonVault from "@/pages/projects/CarbonVault";
import AgentOS from "@/pages/projects/AgentOS";
import Validators from "@/pages/projects/Validators";
import Technology from "@/pages/Technology";
import Sustainability from "@/pages/Sustainability";
import Partners from "@/pages/Partners";
import News from "@/pages/News";
import NewsArticle from "@/pages/NewsArticle";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/founder" component={Founder} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/pingpoint" component={PingPoint} />
      <Route path="/projects/fleet-carbon-dashboard" component={FleetCarbonDashboard} />
      <Route path="/projects/carbon-vault" component={CarbonVault} />
      <Route path="/projects/agentos" component={AgentOS} />
      <Route path="/projects/validators" component={Validators} />
      <Route path="/technology" component={Technology} />
      <Route path="/sustainability" component={Sustainability} />
      <Route path="/partners" component={Partners} />
      <Route path="/news" component={News} />
      <Route path="/news/:slug" component={NewsArticle} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout>
          <Router />
        </Layout>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
