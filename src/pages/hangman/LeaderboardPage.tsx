import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Leaderboard from "@/components/hangman/Leaderboard";
import { useLeaderboard } from "@/hooks/useLeaderboard";

const LeaderboardPage = () => {
  const navigate = useNavigate();
  const { entries, clearAll } = useLeaderboard();

  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/hangman")}
            className="gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Quay lại</span>
          </Button>

          <h1 className="font-fredokaVN text-2xl md:text-3xl font-bold text-primary">
            Bảng Xếp Hạng
          </h1>
{/* 
          <Button
            variant="ghost"
            size="icon"
            onClick={clearAll}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
            title="Xóa tất cả"
          >
            <Trash2 className="w-5 h-5" />
          </Button> */}
        </header>

        {/* Leaderboard Card */}
        <div className="bg-card rounded-3xl shadow-xl p-6 md:p-8">
          <Leaderboard entries={entries} />
        </div>

        {/* Play Button */}
        <div className="flex justify-center">
          <Button
            variant="game"
            size="xl"
            onClick={() => navigate("/game")}
            className="w-full max-w-xs"
          >
            Chơi ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
