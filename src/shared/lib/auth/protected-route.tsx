'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { useAuth } from './auth-context';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  fallback,
}) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, router, user]);

  if (loading) {
    return (
      fallback || (
        <div className="flex h-screen items-center justify-center">
          <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-blue-600" />
        </div>
      )
    );
  }

  if (!user) {
    return null;
  }

  return children;
};
