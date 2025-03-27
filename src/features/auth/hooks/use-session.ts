// src/features/auth/hooks/use-session.ts
'use client';
import { useEffect, useState } from 'react';

export function useSession() {
  const [session, setSession] = useState<{ userId?: string }>({});

  useEffect(() => {
    fetch('/api/auth/session')
      .then(res => res.json())
      .then(setSession);
  }, []);

  return session;
}