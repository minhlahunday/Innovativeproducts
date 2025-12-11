import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { normalizeVietnamese } from "@/utils/normalize";

interface WordDisplayProps {
  word: string;
  guessedLetters: Set<string>;
  reveal?: boolean;
}

const WordDisplay = ({ word, guessedLetters, reveal = false }: WordDisplayProps) => {
  const [blockRender, setBlockRender] = useState(true);

  useEffect(() => {
    setBlockRender(true);
    const timeout = setTimeout(() => {
      setBlockRender(false);
    }, 80); // Ẩn trong 80ms để chống flash
    return () => clearTimeout(timeout);
  }, [word]);

  const letters = word.split("");

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {letters.map((letter, index) => {
        const normalized = normalizeVietnamese(letter);
        const isSpace = normalized === " ";
        const isGuessed = guessedLetters.has(normalized.toUpperCase());
        const shouldShow = reveal || isGuessed || isSpace;

        if (isSpace) return <div key={index} className="w-4 md:w-6" />;

        return (
          <div
            key={index}
            className="w-10 h-12 md:w-14 md:h-16 flex items-center justify-center border-b-4 border-primary"
          >
            <span
              className={cn(
                "font-display text-2xl md:text-4xl font-bold transition-all duration-0",
                blockRender ? "opacity-0" : "",
                !shouldShow && "opacity-0",
                reveal && !isGuessed && "text-destructive"
              )}
            >
              {normalized.toUpperCase()}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default WordDisplay;
