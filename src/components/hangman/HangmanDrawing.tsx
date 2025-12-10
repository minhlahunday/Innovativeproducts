import { cn } from "@/lib/utils";

interface HangmanDrawingProps {
  wrongGuesses: number;
}

const HangmanDrawing = ({ wrongGuesses }: HangmanDrawingProps) => {
  const parts = [
    // Head
    <circle
      key="head"
      cx="150"
      cy="70"
      r="25"
      className="stroke-hangman-stroke fill-none animate-draw"
      strokeWidth="4"
    />,
    // Body
    <line
      key="body"
      x1="150"
      y1="95"
      x2="150"
      y2="160"
      className="stroke-hangman-stroke animate-draw"
      strokeWidth="4"
      strokeLinecap="round"
    />,
    // Left Arm
    <line
      key="leftArm"
      x1="150"
      y1="110"
      x2="110"
      y2="140"
      className="stroke-hangman-stroke animate-draw"
      strokeWidth="4"
      strokeLinecap="round"
    />,
    // Right Arm
    <line
      key="rightArm"
      x1="150"
      y1="110"
      x2="190"
      y2="140"
      className="stroke-hangman-stroke animate-draw"
      strokeWidth="4"
      strokeLinecap="round"
    />,
    // Left Leg
    <line
      key="leftLeg"
      x1="150"
      y1="160"
      x2="115"
      y2="210"
      className="stroke-hangman-stroke animate-draw"
      strokeWidth="4"
      strokeLinecap="round"
    />,
    // Right Leg
    <line
      key="rightLeg"
      x1="150"
      y1="160"
      x2="185"
      y2="210"
      className="stroke-hangman-stroke animate-draw"
      strokeWidth="4"
      strokeLinecap="round"
    />,
  ];

  return (
    <div className="flex items-center justify-center">
      <svg
        viewBox="0 0 250 250"
        className="w-48 h-48 md:w-64 md:h-64"
      >
        {/* Gallows */}
        <line
          x1="20"
          y1="230"
          x2="100"
          y2="230"
          className="stroke-hangman-stroke"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="60"
          y1="230"
          x2="60"
          y2="20"
          className="stroke-hangman-stroke"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="60"
          y1="20"
          x2="150"
          y2="20"
          className="stroke-hangman-stroke"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="150"
          y1="20"
          x2="150"
          y2="45"
          className="stroke-hangman-stroke"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Body parts based on wrong guesses */}
        {parts.slice(0, wrongGuesses)}

        {/* Sad face when game over */}
        {wrongGuesses >= 6 && (
          <>
            <circle cx="140" cy="65" r="3" className="fill-hangman-stroke animate-fade-in" />
            <circle cx="160" cy="65" r="3" className="fill-hangman-stroke animate-fade-in" />
            <path
              d="M 140 80 Q 150 72 160 80"
              className="stroke-hangman-stroke fill-none animate-fade-in"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default HangmanDrawing;
