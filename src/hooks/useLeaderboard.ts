import { useState, useEffect } from "react";
import { LeaderboardEntry } from "@/components/hangman/Leaderboard";

const STORAGE_KEY = "hangman_leaderboard";

export const useLeaderboard = () => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setEntries(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse leaderboard:", e);
      }
    }
  }, []);

  const addEntry = (name: string, score: number) => {
    const newEntry: LeaderboardEntry = {
      name,
      score,
      date: new Date().toLocaleDateString("vi-VN"),
    };

    const updated = [...entries, newEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 100);

    setEntries(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const clearLeaderboard = () => {
    setEntries([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { entries, addEntry, clearLeaderboard };
};
