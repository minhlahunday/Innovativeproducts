import { Trophy, Medal, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LeaderboardEntry {
  name: string;
  score: number;
  date: string; // Thời gian hoàn thành (mm:ss hoặc HH:mm:ss)
  correctAnswers: number;
  totalQuestions: number;
  completionTime?: number; // Thời gian tính bằng milliseconds
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

const Leaderboard = ({ entries }: LeaderboardProps) => {
  const sortedEntries = [...entries].sort((a, b) => b.score - a.score).slice(0, 10);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 0:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 1:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 2:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center font-bold text-muted-foreground">{rank + 1}</span>;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 0:
        return "bg-gradient-to-r from-yellow-100 to-yellow-50 dark:from-yellow-900/30 dark:to-yellow-800/20";
      case 1:
        return "bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800/30 dark:to-gray-700/20";
      case 2:
        return "bg-gradient-to-r from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-800/20";
      default:
        return "bg-card";
    }
  };

  if (entries.length === 0) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
        <p className="text-muted-foreground font-medium">Chưa có điểm nào!</p>
        <p className="text-sm text-muted-foreground/70">Hãy chơi để lên bảng xếp hạng</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {sortedEntries.map((entry, index) => (
        <div
          key={`${entry.name}-${entry.date}-${index}`}
          className={cn(
            "flex items-center gap-4 p-3 rounded-xl transition-all duration-200",
            "hover:scale-[1.02] animate-slide-up",
            getRankBg(index)
          )}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="flex-shrink-0">
            {getRankIcon(index)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display font-bold truncate">{entry.name}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-mono">{entry.date}</span>
              {entry.totalQuestions > 0 && (
                <>
                  <span>•</span>
                  <span className="font-medium">
                    {entry.correctAnswers}/{entry.totalQuestions} ({((entry.correctAnswers / entry.totalQuestions) * 100).toFixed(0)}%)
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="flex-shrink-0">
            <span className="font-mono font-bold text-lg text-primary">{entry.score}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
