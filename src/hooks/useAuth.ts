"use client";

import { useCallback, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getFirebaseAuth();
    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = useCallback(
    (email: string, password: string) =>
      signInWithEmailAndPassword(getFirebaseAuth(), email, password),
    []
  );

  const logout = useCallback(() => signOut(getFirebaseAuth()), []);

  return { user, loading, login, logout };
}
