import { cn } from "@/lib/utils";
import { normalizeVietnamese } from "@/utils/normalize";

interface WordDisplayProps {
  word: string;
  guessedLetters: Set<string>;
  reveal?: boolean;
}

const WordDisplay = ({ word, guessedLetters, reveal = false }: WordDisplayProps) => {
  const letters = word.split("");

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {letters.map((letter, index) => {
        const normalizeLetter = normalizeVietnamese(letter);
        const isSpace = normalizeLetter === " ";
        const isGuessed = guessedLetters.has(normalizeLetter.toUpperCase());
        const shouldShow = reveal || isGuessed || isSpace;

        if (isSpace) {
          return <div key={index} className="w-4 md:w-6" />;
        }

        return (
          <div
            key={index}
            className={cn(
              "w-10 h-12 md:w-14 md:h-16 flex items-center justify-center",
              "border-b-4 border-primary font-display text-2xl md:text-4xl font-bold",
              "transition-all duration-300",
              shouldShow && "animate-pop"
            )}
          >
            <span
              className={cn(
                "transition-all duration-300",
                !shouldShow && "opacity-0",
                reveal && !isGuessed && "text-destructive"
              )}
            >
              {normalizeLetter.toUpperCase()}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default WordDisplay;
