import { cn } from "@/lib/utils";

interface QuestionProgressProps {
  current: number;
  total: number;
}

const QuestionProgress = ({ current, total }: QuestionProgressProps) => {
  const progress = (current / total) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm">
        <span className="text-muted-foreground">Tiến độ</span>
        <span className="font-display font-bold text-primary">
          Câu {current}/{total}
        </span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out rounded-full"
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default QuestionProgress;
