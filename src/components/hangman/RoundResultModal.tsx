import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoundResultModalProps {
  isWin: boolean;
  word: string;
  currentQuestion: number;
  totalQuestions: number;
  earnedPoints: number;    // NEW
  timeUsed: number;
  onNext: () => void;
}

const formatTimer = (timeMs: number) => {
  const totalSeconds = Math.floor(timeMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const RoundResultModal = ({
  isWin,
  word,
  currentQuestion,
  totalQuestions,
  earnedPoints, 
  timeUsed,
  onNext,
}: RoundResultModalProps) => {
  const isLastQuestion = currentQuestion >= totalQuestions;

  return (
    <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-card rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl animate-bounce-in">
        <div className="text-center space-y-4">
          {/* Icon */}
          <div
            className={cn(
              "w-16 h-16 mx-auto rounded-full flex items-center justify-center",
              isWin
                ? "bg-success/20 text-success"
                : "bg-destructive/20 text-destructive"
            )}
          >
            {isWin ? (
              <CheckCircle className="w-8 h-8" />
            ) : (
              <XCircle className="w-8 h-8" />
            )}
          </div>

          {/* Title */}
          <h2 className="font-display text-2xl font-bold">
            {isWin ? "Chính xác!" : "Không chính xác!"}
          </h2>

          {/* Reveal score and time used if win */}
          {isWin && (
            <div className="bg-muted rounded-xl p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Điểm nhận được:</span>
                <span className="font-bold text-primary text-lg">{earnedPoints}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Thời gian hoàn thành:</span>
                <span className="font-bold text-primary text-lg">
                  {formatTimer(timeUsed)}
                </span>
              </div>
            </div>
          )}
          {/* Word reveal */}
          {isWin && (
            <div className="bg-muted rounded-xl p-4">
              <p className="text-sm text-muted-foreground mb-1">Đáp án:</p>
              <p className="font-fredokaVN text-xl font-bold text-primary">{word}</p>
            </div>
          )}


          {/* Progress info */}
          <p className="text-muted-foreground">
            Câu {currentQuestion}/{totalQuestions}
          </p>

          {/* Next button */}
          <Button variant="game" className="w-full" onClick={onNext}>
            {isLastQuestion ? "Xem kết quả" : "Câu tiếp theo"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoundResultModal;
