import { useState, useCallback, useEffect } from "react";
import { getRandomWord, WordData, words } from "@/data/words";
import { normalizeVietnamese } from "@/utils/normalize";  // adjust path nếu cần

const MAX_LIVES = 6;
const BASE_POINTS = 100;
const STREAK_MULTIPLIER = 50;
const TOTAL_QUESTIONS = 2;

export const useHangmanGame = () => {
  const [currentWord, setCurrentWord] = useState<WordData>(getRandomWord);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [timer, setTimer] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [gameStatus, setGameStatus] = useState<"loading" | "playing" | "won" | "lost" | "finished">("playing");
  const [remainingWords, setRemainingWords] = useState<WordData[]>(words);

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
      const timeInSeconds = timer / 1000;
      const timeBonus = Math.max(0, Math.floor(50 - timeInSeconds));
      // càng nhanh càng nhiều bonus, chậm quá = 0
      const points =
        BASE_POINTS +
        streak * STREAK_MULTIPLIER +
        lives * 20 +
        timeBonus;


      setScore((prev) => prev + points);
      setStreak((prev) => prev + 1);
      setCorrectAnswers((prev) => prev + 1);
      setGameStatus("won");
    } else if (isLost && gameStatus === "playing") {
      setStreak(0);
      setGameStatus("lost");
    }

    if (gameStatus !== "playing") return;

    const interval = setInterval(() => {
      setTimer((t) => t + 10); // tăng mỗi 10ms
    }, 10);

    return () => clearInterval(interval);

  }, [isWon, isLost, gameStatus, streak, lives]);

  const guess = useCallback(
    (letter: string) => {
      if (gameStatus !== "playing" || guessedLetters.has(letter)) return;
      setGuessedLetters((prev) => new Set([...prev, letter]));
    },
    [gameStatus, guessedLetters]
  );

  const getNextWord = useCallback(() => {
    if (remainingWords.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * remainingWords.length);
    const word = remainingWords[randomIndex];

    // Xoá khỏi danh sách
    setRemainingWords((prev) => prev.filter((_, i) => i !== randomIndex));

    return word;
  }, [remainingWords]);

  const nextQuestion = useCallback(() => {
    console.log(remainingWords)
    if (currentQuestion >= TOTAL_QUESTIONS) {
      setGameStatus("finished");
      return;
    }

    setGameStatus("loading");

    setTimeout(() => {
      const next = getNextWord();
      if (!next) return;

      setCurrentWord(next);
      setGuessedLetters(new Set());
      setCurrentQuestion((prev) => prev + 1);
      setTimer(0);
      setGameStatus("playing");

    }, 0);
  }, [currentQuestion, getNextWord]);


  const resetGame = useCallback(() => {
    const first = words[Math.floor(Math.random() * words.length)];

    setCurrentWord(first);
    setRemainingWords(words.filter(w => w.word !== first.word));
    setGuessedLetters(new Set());
    setScore(0);
    setStreak(0);
    setCurrentQuestion(1);
    setCorrectAnswers(0);
    setTimer(0);                // ← Reset Timer
    setGameStatus("playing");
  }, []);

  return {
    currentWord,
    guessedLetters,
    correctLetters,
    wrongGuesses,
    lives,
    maxLives: MAX_LIVES,
    timer,
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
