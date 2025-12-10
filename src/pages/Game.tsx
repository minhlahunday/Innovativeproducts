import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { sampleQuestions, Question } from "@/data/questions";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Gamepad2, RefreshCw, Trophy, XCircle, Zap } from "lucide-react";
import { useState, useMemo, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

interface GameState {
  currentQuestionIndex: number;
  score: number;
  answeredQuestions: string[];
  selectedAnswer: string | null;
  isAnswered: boolean;
  isCorrect: boolean | null;
  streak: number;
  gameOver: boolean;
}

const initialState: GameState = {
  currentQuestionIndex: 0,
  score: 0,
  answeredQuestions: [],
  selectedAnswer: null,
  isAnswered: false,
  isCorrect: null,
  streak: 0,
  gameOver: false,
};

export default function Game() {
  const { toast } = useToast();
  const [gameState, setGameState] = useState<GameState>(initialState);
  const [gameStarted, setGameStarted] = useState(false);

  const questionsWithOptions = useMemo(() => {
    return sampleQuestions.filter(q => q.options && q.options.length > 0);
  }, []);

  const shuffledQuestions = useMemo(() => {
    return [...questionsWithOptions].sort(() => Math.random() - 0.5).slice(0, 10);
  }, [questionsWithOptions, gameStarted]);

  const currentQuestion = shuffledQuestions[gameState.currentQuestionIndex];
  const progress = ((gameState.currentQuestionIndex + 1) / shuffledQuestions.length) * 100;

  const handleStartGame = () => {
    setGameStarted(true);
    setGameState(initialState);
  };

  const handleAnswer = useCallback((answer: string) => {
    if (gameState.isAnswered) return;

    const isCorrect = answer === currentQuestion.answer;
    
    setGameState(prev => ({
      ...prev,
      selectedAnswer: answer,
      isAnswered: true,
      isCorrect,
      score: isCorrect ? prev.score + (10 + prev.streak * 2) : prev.score,
      streak: isCorrect ? prev.streak + 1 : 0,
    }));

    if (isCorrect) {
      toast({
        title: "🎉 Chính xác!",
        description: gameState.streak >= 2 ? `Chuỗi ${gameState.streak + 1} câu đúng liên tiếp!` : "Tuyệt vời, tiếp tục nào!",
      });
    } else {
      toast({
        title: "❌ Sai rồi!",
        description: "Đừng nản, hãy thử câu tiếp theo!",
        variant: "destructive",
      });
    }
  }, [gameState.isAnswered, gameState.streak, currentQuestion, toast]);

  const handleNextQuestion = () => {
    if (gameState.currentQuestionIndex >= shuffledQuestions.length - 1) {
      setGameState(prev => ({ ...prev, gameOver: true }));
    } else {
      setGameState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
        isAnswered: false,
        isCorrect: null,
      }));
    }
  };

  const handleRestart = () => {
    setGameStarted(false);
    setGameState(initialState);
  };

  // Start Screen
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto max-w-2xl text-center"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl hero-gradient flex items-center justify-center shadow-lg">
              <Gamepad2 className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Trò Chơi Ôn Tập
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Kiểm tra kiến thức về giai đoạn 1975-1981 qua 10 câu hỏi thú vị. 
              Trả lời đúng liên tiếp để nhận thêm điểm!
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <Card variant="elevated">
                <CardContent className="py-4 text-center">
                  <div className="text-2xl font-heading font-bold text-primary">10</div>
                  <div className="text-sm text-muted-foreground">Câu hỏi</div>
                </CardContent>
              </Card>
              <Card variant="elevated">
                <CardContent className="py-4 text-center">
                  <div className="text-2xl font-heading font-bold text-accent">+2</div>
                  <div className="text-sm text-muted-foreground">Điểm streak</div>
                </CardContent>
              </Card>
              <Card variant="elevated">
                <CardContent className="py-4 text-center">
                  <div className="text-2xl font-heading font-bold text-olive">∞</div>
                  <div className="text-sm text-muted-foreground">Chơi lại</div>
                </CardContent>
              </Card>
            </div>

            <Button variant="hero" size="xl" onClick={handleStartGame}>
              Bắt đầu chơi
              <Zap className="w-5 h-5" />
            </Button>
          </motion.div>
        </main>
      </div>
    );
  }

  // Game Over Screen
  if (gameState.gameOver) {
    const maxScore = shuffledQuestions.length * 10 + (shuffledQuestions.length - 1) * 2 * Math.floor(shuffledQuestions.length / 2);
    const percentage = Math.round((gameState.score / (shuffledQuestions.length * 10)) * 100);

    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="container mx-auto max-w-2xl text-center"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-accent flex items-center justify-center shadow-glow">
              <Trophy className="w-12 h-12 text-accent-foreground" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Hoàn thành!
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Bạn đã hoàn thành trò chơi ôn tập
            </p>

            <Card variant="feature" className="mb-8">
              <CardContent className="py-8">
                <div className="text-6xl font-heading font-bold text-gradient mb-2">
                  {gameState.score}
                </div>
                <div className="text-muted-foreground">Điểm số</div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-olive/10 rounded-lg">
                    <div className="text-2xl font-bold text-olive">{percentage}%</div>
                    <div className="text-sm text-muted-foreground">Tỷ lệ đúng</div>
                  </div>
                  <div className="p-4 bg-accent/20 rounded-lg">
                    <div className="text-2xl font-bold text-accent-foreground">{gameState.streak}</div>
                    <div className="text-sm text-muted-foreground">Streak cao nhất</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={handleRestart}>
                Chơi lại
                <RefreshCw className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="lg" onClick={() => window.location.href = "/questions"}>
                Xem lại câu hỏi
              </Button>
            </div>
          </motion.div>
        </main>
      </div>
    );
  }

  // Game Screen
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Câu {gameState.currentQuestionIndex + 1}/{shuffledQuestions.length}
              </span>
              <div className="flex items-center gap-4">
                {gameState.streak > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-1 text-accent"
                  >
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-medium">{gameState.streak} streak</span>
                  </motion.div>
                )}
                <span className="text-sm font-semibold text-primary">
                  Điểm: {gameState.score}
                </span>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </motion.div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card variant="elevated" className="mb-6">
                <CardContent className="p-6 sm:p-8">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                    {currentQuestion.category}
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                    {currentQuestion.question}
                  </h2>
                </CardContent>
              </Card>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options?.map((option, index) => {
                  const isSelected = gameState.selectedAnswer === option;
                  const isCorrectAnswer = option === currentQuestion.answer;
                  
                  let variant: "quiz" | "quizCorrect" | "quizWrong" = "quiz";
                  if (gameState.isAnswered) {
                    if (isCorrectAnswer) {
                      variant = "quizCorrect";
                    } else if (isSelected && !isCorrectAnswer) {
                      variant = "quizWrong";
                    }
                  }

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Button
                        variant={variant}
                        className={cn(
                          "w-full justify-start text-left h-auto py-4 px-5",
                          gameState.isAnswered && "cursor-default"
                        )}
                        onClick={() => handleAnswer(option)}
                        disabled={gameState.isAnswered}
                      >
                        <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center mr-3 flex-shrink-0 font-medium">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="flex-1">{option}</span>
                        {gameState.isAnswered && isCorrectAnswer && (
                          <CheckCircle2 className="w-5 h-5 text-olive flex-shrink-0" />
                        )}
                        {gameState.isAnswered && isSelected && !isCorrectAnswer && (
                          <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                        )}
                      </Button>
                    </motion.div>
                  );
                })}
              </div>

              {/* Next Button */}
              <AnimatePresence>
                {gameState.isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mt-8 text-center"
                  >
                    <Button variant="hero" size="lg" onClick={handleNextQuestion}>
                      {gameState.currentQuestionIndex >= shuffledQuestions.length - 1
                        ? "Xem kết quả"
                        : "Câu tiếp theo"}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
