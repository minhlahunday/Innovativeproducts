import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { LeaderboardEntry } from "@/components/hangman/Leaderboard";

export const useLeaderboard = () => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const colRef = collection(db, "leaderboard");

  // Load leaderboard from Firestore
  useEffect(() => {
    const fetchLeaderboard = async () => {
      const q = query(colRef, orderBy("score", "desc"));
      const snapshot = await getDocs(q);

      const list = snapshot.docs.map((d) => {
        const data = d.data();
        return {
          name: data.name || "Unknown",
          score: data.score || 0,
          date: data.date || "",
          correctAnswers: data.correctAnswers ?? 0,
          totalQuestions: data.totalQuestions ?? 0,
          completionTime: data.completionTime ?? 0,
        } as LeaderboardEntry;
      });
      setEntries(list);
    };

    fetchLeaderboard();
  }, []);

  // Add new entry
  const addEntry = async (name: string, score: number, correctAnswers: number = 0, totalQuestions: number = 0, completionTime: number = 0) => {
    const now = new Date();
    const newEntry: LeaderboardEntry = {
      name,
      score,
      date: now.toLocaleString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }),
      correctAnswers,
      totalQuestions,
      completionTime,
    };

    await addDoc(colRef, newEntry);

    // cập nhật UI ngay lập tức
    setEntries((prev) =>
      [...prev, newEntry].sort((a, b) => b.score - a.score)
    );
  };

  // Clear ALL leaderboard
  const clearAll = async () => {
    const snapshot = await getDocs(colRef);

    const deletePromises = snapshot.docs.map((d) =>
      deleteDoc(doc(db, "leaderboard", d.id))
    );

    await Promise.all(deletePromises);

    // reset UI
    setEntries([]);
  };

  return { entries, addEntry, clearAll };
};
