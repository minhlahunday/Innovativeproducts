  import { useNavigate } from "react-router-dom";
  import { ArrowLeft } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import HangmanDrawing from "@/components/hangman/HangmanDrawing";
  import WordDisplay from "@/components/hangman/WordDisplay";
  import Keyboard from "@/components/hangman/Keyboard";
  import GameStats from "@/components/hangman/GameStats";
  import QuestionProgress from "@/components/hangman/QuestionProgress";
  import RoundResultModal from "@/components/hangman/RoundResultModal";
  import FinalResultModal from "@/components/hangman/FinalResultModal";
  import { useHangmanGame } from "@/hooks/useHangmanGame";
  import { useLeaderboard } from "@/hooks/useLeaderboard";
  import { cn } from "@/lib/utils";

  const Game = () => {
    const navigate = useNavigate();
    const { addEntry } = useLeaderboard();
    const {
      currentWord,
      guessedLetters,
      correctLetters,
      wrongGuesses,
      lives,
      maxLives,
      timer,
      score,
      streak,
      currentQuestion,
      totalQuestions,
      correctAnswers,
      gameStatus,
      guess,
      nextQuestion,
      resetGame,
    } = useHangmanGame();

    const handleSaveScore = (name: string) => {
      addEntry(name, score);
    };

    return (
      <div className="min-h-screen p-4 md:p-6">
        <div className="max-w-4xl mx-auto space-y-6">
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
            <h1 className="font-display text-2xl md:text-3xl font-bold text-primary">
              Hangman
            </h1>
            <div className="w-20" /> {/* Spacer for centering */}
          </header>

          {/* Question Progress */}
          <QuestionProgress current={currentQuestion} total={totalQuestions} />

          {/* Game Stats */}
          <GameStats
            lives={lives}
            maxLives={maxLives}
            score={score}
            timer={timer}
            streak={streak}
          />

          {/* Game Area */}
          <div className="bg-card rounded-3xl shadow-xl p-6 md:p-8 space-y-6">
            {/* Hint */}
            <div className="flex items-center justify-center gap-2 bg-muted rounded-xl px-4 py-3">
              <p className="text-center">
                <span className="font-fredokaVN font-bold text-red-500 text-xl">Câu hỏi: </span>
                <span className="font-medium text-xl">{currentWord.hint}</span>
              </p>
            </div>

            {/* Category Badge */}
            {/* <div className="flex justify-center">
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                {currentWord.category}
              </span>
            </div> */}

            {/* Hangman Drawing */}
            <div
              className={cn(
                "flex justify-center transition-all duration-300",
                wrongGuesses > 0 && lives <= 2 && "animate-shake"
              )}
            >
              <HangmanDrawing wrongGuesses={wrongGuesses} />
            </div>

            {/* Word Display */}
            <WordDisplay
              word={currentWord.word}
              guessedLetters={guessedLetters}
              reveal={gameStatus === "lost"}
            />

            {/* Keyboard */}
            <Keyboard
              onGuess={guess}
              guessedLetters={guessedLetters}
              correctLetters={correctLetters}
              disabled={gameStatus !== "playing"}
            />
          </div>
        </div>

        {/* Round Result Modal */}
        {(gameStatus === "won" || gameStatus === "lost") && (
          <RoundResultModal
            isWin={gameStatus === "won"}
            word={currentWord.word}
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            earnedPoints={score}   // từ hook
            timeUsed={timer}                 // từ hook
            onNext={nextQuestion}
          />
        )}

        {/* Final Result Modal */}
        {gameStatus === "finished" && (
          <FinalResultModal
            score={score}
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
            onPlayAgain={resetGame}
            onSaveScore={handleSaveScore}
            onGoHome={() => navigate("/hangman")}
          />
        )}
      </div>
    );
  };

  export default Game;
