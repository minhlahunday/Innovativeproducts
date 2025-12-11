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

      const list = snapshot.docs.map((d) => d.data() as LeaderboardEntry);
      setEntries(list);
    };

    fetchLeaderboard();
  }, []);

  // Add new entry
  const addEntry = async (name: string, score: number) => {
    const newEntry: LeaderboardEntry = {
      name,
      score,
      date: new Date().toLocaleDateString("vi-VN"),
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
