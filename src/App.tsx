import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Flipbook from "./pages/Flipbook";
import NotFound from "./pages/NotFound";
import HangmanIndex from "./pages/hangman/HangmanIndex";
import LeaderboardPage from "./pages/hangman/LeaderboardPage";
import HowToPlay from "./pages/hangman/HowToPlay";
import Game from "./pages/hangman/Game";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/flipbook" element={<Flipbook />} />
          <Route path="/hangman" element={<HangmanIndex />} />
          <Route path="/game" element={<Game />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
