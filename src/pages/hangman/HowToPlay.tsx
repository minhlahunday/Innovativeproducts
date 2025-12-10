import { useNavigate } from "react-router-dom";
import { ArrowLeft, Target, Heart, Trophy, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowToPlay = () => {
  const navigate = useNavigate();

  const rules = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Đoán từ",
      description: "Chọn các chữ cái để đoán từ bí ẩn. Mỗi từ sẽ có gợi ý và thể loại để giúp bạn.",
    },
    {
      icon: <Heart className="w-8 h-8 text-destructive" />,
      title: "Mạng sống",
      description: "Bạn có 6 mạng. Mỗi lần đoán sai, bạn mất 1 mạng. Hết mạng = Game Over!",
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellowsecondary" />,
      title: "Điểm số",
      description: "Đoán đúng để ghi điểm. Streak càng cao, điểm càng nhiều. Mạng còn lại cũng tính thêm điểm!",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      title: "Mẹo chơi",
      description: "Bắt đầu với các nguyên âm (A, E, I, O, U) để tìm cấu trúc từ nhanh hơn.",
    },
  ];

  return (
    <div className="font-fredokaVN min-h-screen p-4 md:p-6">
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
            Hướng Dẫn
          </h1>
          <div className="w-20" />
        </header>

        {/* Rules */}
        <div className="space-y-4">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-lg p-6 flex gap-4 items-start animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-muted rounded-xl p-3 flex-shrink-0">
                {rule.icon}
              </div>
              <div>
                <h3 className="font-fredokaVN text-xl font-bold mb-1">
                  {rule.title}
                </h3>
                <p className="text-muted-foreground">{rule.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Play Button */}
        <div className="flex justify-center pt-4">
          <Button
            variant="game"
            size="xl"
            onClick={() => navigate("/game")}
            className="w-full max-w-xs"
          >
            Chơi ngay!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
