import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoundResultModalProps {
  isWin: boolean;
  word: string;
  currentQuestion: number;
  totalQuestions: number;
  onNext: () => void;
}

const RoundResultModal = ({
  isWin,
  word,
  currentQuestion,
  totalQuestions,
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

          {/* Word reveal */}
          {isWin && (
            <div className="bg-muted rounded-xl p-4">
              <p className="text-sm text-muted-foreground mb-1">Đáp án:</p>
              <p className="font-fredokaVN font-display text-xl font-bold text-primary">{word}</p>
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
