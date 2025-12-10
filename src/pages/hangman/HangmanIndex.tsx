import { useNavigate } from "react-router-dom";
import { Play, Trophy, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

const HangmanIndex = () => {
  const navigate = useNavigate();

  return (
    <div className="font-fredokaVN min-h-screen flex flex-col items-center justify-center p-4 md:p-6">
      <Header />
      <div className="max-w-lg w-full text-center space-y-8">
        {/* Logo/Title */}
        <div className="space-y-4 animate-fade-in">
          <div className="relative inline-block">
            <h1 className="font-display text-6xl md:text-8xl font-bold text-primary">
              Hangman
            </h1>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center animate-bounce-in" style={{ animationDelay: "0.3s" }}>
              <span className="text-2xl">🎮</span>
            </div>
          </div>
          <p className="text-xl text-muted-foreground font-medium">
            Đoán từ vựng tiếng Việt
          </p>
        </div>

        {/* Hangman Preview */}
        <div className="bg-card rounded-3xl shadow-xl p-8 animate-slide-up">
          <svg viewBox="0 0 200 180" className="w-40 h-36 mx-auto">
            {/* Gallows */}
            <line x1="20" y1="160" x2="80" y2="160" className="stroke-hangman-stroke" strokeWidth="4" strokeLinecap="round" />
            <line x1="50" y1="160" x2="50" y2="20" className="stroke-hangman-stroke" strokeWidth="4" strokeLinecap="round" />
            <line x1="50" y1="20" x2="120" y2="20" className="stroke-hangman-stroke" strokeWidth="4" strokeLinecap="round" />
            <line x1="120" y1="20" x2="120" y2="40" className="stroke-hangman-stroke" strokeWidth="4" strokeLinecap="round" />
            
            {/* Happy face */}
            <circle cx="120" cy="60" r="20" className="stroke-primary fill-none" strokeWidth="3" />
            <circle cx="113" cy="55" r="2" className="fill-primary" />
            <circle cx="127" cy="55" r="2" className="fill-primary" />
            <path d="M 112 68 Q 120 76 128 68" className="stroke-primary fill-none" strokeWidth="2" strokeLinecap="round" />
            
            {/* Body */}
            <line x1="120" y1="80" x2="120" y2="120" className="stroke-primary" strokeWidth="3" strokeLinecap="round" />
            <line x1="120" y1="90" x2="100" y2="110" className="stroke-primary" strokeWidth="3" strokeLinecap="round" />
            <line x1="120" y1="90" x2="140" y2="110" className="stroke-primary" strokeWidth="3" strokeLinecap="round" />
            <line x1="120" y1="120" x2="100" y2="150" className="stroke-primary" strokeWidth="3" strokeLinecap="round" />
            <line x1="120" y1="120" x2="140" y2="150" className="stroke-primary" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* Buttons */}
        <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Button
            variant="game"
            size="xl"
            onClick={() => navigate("/game")}
            className="w-full group"
          >
            <Play className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
            Bắt đầu chơi
          </Button>

          <div className="flex gap-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate("/leaderboard")}
              className="flex-1"
            >
              <Trophy className="w-5 h-5 mr-2" />
              Xếp hạng
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/how-to-play")}
              className="flex-1"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              Hướng dẫn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HangmanIndex;
