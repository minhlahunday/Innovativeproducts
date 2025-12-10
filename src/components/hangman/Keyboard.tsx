import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface KeyboardProps {
  onGuess: (letter: string) => void;
  guessedLetters: Set<string>;
  correctLetters: Set<string>;
  disabled?: boolean;
}

const KEYBOARD_ROWS = [
  ["A","B","C","D","E","F","G","H","I"],
  ["J","K","L","M","N","O","P","Q","R"],
  ["S","T","U","V","W","X","Y","Z"]
];

const Keyboard = ({ onGuess, guessedLetters, correctLetters, disabled }: KeyboardProps) => {
  const getButtonVariant = (letter: string) => {
    if (!guessedLetters.has(letter)) return "letter";
    if (correctLetters.has(letter)) return "letterCorrect";
    return "letterWrong";
  };

  return (
    <div className="space-y-3">
      {/* Standard keyboard */}
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1 md:gap-1.5">
          {row.map((letter) => (
            <Button
              key={letter}
              variant={getButtonVariant(letter)}
              size="letter"
              onClick={() => onGuess(letter)}
              disabled={disabled || guessedLetters.has(letter)}
              className={cn(
                "font-fredoka text-lg md:text-xl transition-all duration-200",
                guessedLetters.has(letter) && "transform-none"
              )}
            >
              {letter}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
