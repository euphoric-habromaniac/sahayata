import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Landing from "@/pages/landing";
import RoleSelection from "@/pages/role-selection";
import Auth from "@/pages/auth";
import AgeSelection from "@/pages/age-selection";
import Questionnaire from "@/pages/questionnaire";
import Results from "@/pages/results";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";
import GettingStarted from "@/pages/getting-started";
import FAQ from "@/pages/faq";
import SupportCenters from "@/pages/support-centers";
import ProfessionalDirectory from "@/pages/professional-directory";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import Disclaimer from "@/pages/disclaimer";
import ContactUs from "@/pages/contact-us";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/role-selection" component={RoleSelection} />
      <Route path="/auth" component={Auth} />
      <Route path="/age-selection" component={AgeSelection} />
      <Route path="/questionnaire" component={Questionnaire} />
      <Route path="/results" component={Results} />
      <Route path="/about" component={About} />
      <Route path="/getting-started" component={GettingStarted} />
      <Route path="/faq" component={FAQ} />
      <Route path="/support-centers" component={SupportCenters} />
      <Route path="/professional-directory" component={ProfessionalDirectory} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/contact-us" component={ContactUs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
