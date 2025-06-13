'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/navigation';

import { auth } from '@shared/config/firebase';
import { signInWithGoogle } from '@shared/services/auth';
import {
  signOut as firebaseSignOut,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<User>;
  signInWithEmail: (email: string, password: string) => Promise<User>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const token = await user.getIdToken();

        document.cookie = `auth-token=${token}; path=/`;
      } else {
        document.cookie =
          'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
      }
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithEmail = async (email: string, password: string) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    return user;
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
    router.push('/login');
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      signInWithGoogle,
      signInWithEmail,
      signOut,
    }),
    [user, loading, router],
  );

  return (
    <AuthContext.Provider value={value as AuthContextType}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
