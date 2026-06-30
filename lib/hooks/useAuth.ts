"use client";
import { useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

export function useAuth() {
  const [user, setUser]       = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setError(null);
      setLoading(false);
    });
    return unsub;
  }, []);

  async function signIn() {
    setError(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Sign-in failed.";
      if (!msg.includes("popup-closed")) setError(msg);
    }
  }

  async function signOut() {
    await firebaseSignOut(auth);
  }

  return { user, loading, error, signIn, signOut };
}
