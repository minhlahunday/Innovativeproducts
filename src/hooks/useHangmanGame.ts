import { useState, useCallback, useEffect } from "react";
import { getRandomWord, WordData } from "@/data/words";
import { normalizeVietnamese } from "@/utils/normalize";  // adjust path nếu cần

const MAX_LIVES = 6;
const BASE_POINTS = 100;
const STREAK_MULTIPLIER = 50;
const TOTAL_QUESTIONS = 2;

export const useHangmanGame = () => {
  const [currentWord, setCurrentWord] = useState<WordData>(getRandomWord);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost" | "finished">("playing");

  // Khi lấy wordLetters: normalize từng ký tự
  const wordLetters = new Set(
    normalizeVietnamese(currentWord.word)
      .split("")
      .filter(char => char !== " ")
  );

  const normalizedGuessed = new Set(
    Array.from(guessedLetters)
      .map(letter => normalizeVietnamese(letter))
  );

  const correctLetters = new Set(
    [...normalizedGuessed].filter(letter => wordLetters.has(letter))
  );

  const wrongGuesses = [...normalizedGuessed].filter(
    letter => !wordLetters.has(letter)
  ).length;

  const lives = MAX_LIVES - wrongGuesses;

  const isWon = [...wordLetters].every((letter) => guessedLetters.has(letter));
  const isLost = wrongGuesses >= MAX_LIVES;

  useEffect(() => {
    if (isWon && gameStatus === "playing") {
      const points = BASE_POINTS + streak * STREAK_MULTIPLIER + lives * 20;
      setScore((prev) => prev + points);
      setStreak((prev) => prev + 1);
      setCorrectAnswers((prev) => prev + 1);
      setGameStatus("won");
    } else if (isLost && gameStatus === "playing") {
      setStreak(0);
      setGameStatus("lost");
    }
  }, [isWon, isLost, gameStatus, streak, lives]);

  const guess = useCallback(
    (letter: string) => {
          console.log(guessedLetters)
      if (gameStatus !== "playing" || guessedLetters.has(letter)) return;
      setGuessedLetters((prev) => new Set([...prev, letter]));
    },
    [gameStatus, guessedLetters]
  );

  const nextQuestion = useCallback(() => {
    if (currentQuestion >= TOTAL_QUESTIONS) {
      setGameStatus("finished");
    } else {
      setCurrentWord(getRandomWord());
      setGuessedLetters(new Set());
      setCurrentQuestion((prev) => prev + 1);
      setGameStatus("playing");
    }
  }, [currentQuestion]);

  const resetGame = useCallback(() => {
    setCurrentWord(getRandomWord());
    setGuessedLetters(new Set());
    setScore(0);
    setStreak(0);
    setCurrentQuestion(1);
    setCorrectAnswers(0);
    setGameStatus("playing");
  }, []);

  return {
    currentWord,
    guessedLetters,
    correctLetters,
    wrongGuesses,
    lives,
    maxLives: MAX_LIVES,
    score,
    streak,
    currentQuestion,
    totalQuestions: TOTAL_QUESTIONS,
    correctAnswers,
    gameStatus,
    guess,
    nextQuestion,
    resetGame,
  };
};
