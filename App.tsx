import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Onboarding from "./pages/Onboarding";
import WriterDashboard from "./pages/WriterDashboard";
import WriterScripts from "./pages/WriterScripts";
import WriterAnalytics from "./pages/WriterAnalytics";
import UploadScript from "./pages/UploadScript";
import ProducerDashboard from "./pages/ProducerDashboard";
import ProducerDiscover from "./pages/ProducerDiscover";
import ScriptDetail from "./pages/ScriptDetail";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Trending from "./pages/Trending";
import Collections from "./pages/Collections";
import RecommendedScripts from "./pages/RecommendedScripts";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/writer/dashboard" element={<WriterDashboard />} />
          <Route path="/writer/scripts" element={<WriterScripts />} />
          <Route path="/writer/scripts/new" element={<UploadScript />} />
          <Route path="/writer/analytics" element={<WriterAnalytics />} />
          <Route path="/writer/messages" element={<Messages />} />
          <Route path="/writer/profile" element={<Profile />} />
          <Route path="/producer/dashboard" element={<ProducerDashboard />} />
          <Route path="/producer/discover" element={<ProducerDiscover />} />
          <Route path="/producer/scripts/:id" element={<ScriptDetail />} />
          <Route path="/producer/messages" element={<Messages />} />
          <Route path="/producer/profile" element={<Profile />} />
          <Route path="/producer/collections" element={<Collections />} />
          <Route path="/producer/recommendations" element={<RecommendedScripts />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/community" element={<Community />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
