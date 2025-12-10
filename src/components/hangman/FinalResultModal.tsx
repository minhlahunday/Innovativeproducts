import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trophy, RotateCcw, Home, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface FinalResultModalProps {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  onPlayAgain: () => void;
  onSaveScore: (name: string) => void;
  onGoHome: () => void;
}

const FinalResultModal = ({
  score,
  correctAnswers,
  totalQuestions,
  onPlayAgain,
  onSaveScore,
  onGoHome,
}: FinalResultModalProps) => {
  const [playerName, setPlayerName] = useState("");
  const [saved, setSaved] = useState(false);

  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const isGreat = percentage >= 80;
  const isGood = percentage >= 50;

  const handleSave = () => {
    if (playerName.trim()) {
      onSaveScore(playerName.trim());
      setSaved(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-card rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl animate-bounce-in">
        <div className="text-center space-y-4">
          {/* Icon */}
          <div
            className={cn(
              "w-20 h-20 mx-auto rounded-full flex items-center justify-center",
              isGreat
                ? "bg-success/20 text-success"
                : isGood
                ? "bg-secondary/20 text-yellowsecondary"
                : "bg-destructive/20 text-destructive"
            )}
          >
            {isGreat ? (
              <Trophy className="w-10 h-10" />
            ) : isGood ? (
              <Star className="w-10 h-10" />
            ) : (
              <span className="text-4xl">😢</span>
            )}
          </div>

          {/* Title */}
          <h2 className="font-display text-3xl font-bold">
            {isGreat ? "Xuất sắc!" : isGood ? "Tốt lắm!" : "Cố gắng thêm nhé!"}
          </h2>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-muted rounded-xl p-4">
              <p className="text-sm text-muted-foreground mb-1">Đúng</p>
              <p className="font-display text-2xl font-bold text-success">
                {correctAnswers}/{totalQuestions}
              </p>
            </div>
            <div className="bg-muted rounded-xl p-4">
              <p className="text-sm text-muted-foreground mb-1">Tỷ lệ</p>
              <p className="font-display text-2xl font-bold text-primary">
                {percentage}%
              </p>
            </div>
          </div>

          {/* Score */}
          <div className="bg-primary/10 rounded-xl p-4">
            <p className="text-sm text-muted-foreground mb-1">Tổng điểm</p>
            <p className="font-display text-4xl font-bold text-primary">{score}</p>
          </div>

          {/* Save score */}
          {!saved ? (
            <div className="space-y-3">
              <Input
                placeholder="Nhập tên của bạn..."
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="text-center font-medium"
                maxLength={20}
              />
              <Button
                variant="game"
                className="w-full"
                onClick={handleSave}
                disabled={!playerName.trim()}
              >
                Lưu điểm vào bảng xếp hạng
              </Button>
            </div>
          ) : (
            <p className="text-success font-medium animate-pop">✓ Đã lưu điểm!</p>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button variant="outline" className="flex-1" onClick={onGoHome}>
              <Home className="w-4 h-4 mr-2" />
              Trang chủ
            </Button>
            <Button variant="game" className="flex-1" onClick={onPlayAgain}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Chơi lại
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalResultModal;
