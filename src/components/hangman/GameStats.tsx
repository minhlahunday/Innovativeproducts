import { Heart, Trophy, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface GameStatsProps {
  lives: number;
  maxLives: number;
  score: number;
  streak: number;
  timer?: number;
}

const formatTimer = (timeMs: number) => {
  const totalSeconds = Math.floor(timeMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const GameStats = ({ lives, maxLives, score, streak, timer }: GameStatsProps) => {
  return (
    <div className="w-full flex items-center justify-between px-4 md:px-8">

      {/* LEFT: Lives */}
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

      {/* CENTER: Timer */}
      <div className="flex items-center bg-card rounded-xl px-4 py-2 shadow-lg">
        <span className="font-display font-bold text-xl tabular-nums">
          ⏳ {formatTimer(timer ?? 0)}
        </span>
      </div>

      {/* RIGHT: Score + Streak */}
      <div className="flex  gap-2">

        {/* Score */}
        <div className="flex items-center self-end gap-2 bg-card rounded-xl px-4 py-2 shadow-lg">
          <Trophy className="w-5 h-5 md:w-6 md:h-6 text-yellowsecondary" />
          <span className="font-display font-bold text-lg md:text-xl">{score}</span>
        </div>

        {/* Streak */}
        <div className="flex items-center self-end gap-2 bg-card rounded-xl px-4 py-2 shadow-lg">
          <Target className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          <span className="font-display font-bold text-lg md:text-xl">x{streak}</span>
        </div>
      </div>

    </div>
  );
};

export default GameStats;
