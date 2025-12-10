import { Heart, Trophy, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface GameStatsProps {
  lives: number;
  maxLives: number;
  score: number;
  streak: number;
}

const GameStats = ({ lives, maxLives, score, streak }: GameStatsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {/* Lives */}
      <div className="flex items-center gap-2 bg-card rounded-xl px-4 py-2 shadow-lg">
        <div className="flex gap-1">
          {Array.from({ length: maxLives }).map((_, i) => (
            <Heart
              key={i}
              className={cn(
                "w-5 h-5 md:w-6 md:h-6 transition-all duration-300 stroke-none",
                i < lives
                  ? "fill-destructive text-destructive animate-pulse-glow"
                  : "text-muted-foreground/30"
              )}
            />
          ))}
        </div>
      </div>

      {/* Score */}
      <div className="flex items-center gap-2 bg-card rounded-xl px-4 py-2 shadow-lg">
        <Trophy className="w-5 h-5 md:w-6 md:h-6 text-yellowsecondary" />
        <span className="font-display font-bold text-lg md:text-xl">{score}</span>
      </div>

      {/* Streak */}
      <div className="flex items-center gap-2 bg-card rounded-xl px-4 py-2 shadow-lg">
        <Target className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        <span className="font-display font-bold text-lg md:text-xl">x{streak}</span>
      </div>
    </div>
  );
};

export default GameStats;
