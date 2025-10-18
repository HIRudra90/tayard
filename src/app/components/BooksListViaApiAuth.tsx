'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function BooksListViaApiAuth() {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session?.access_token) {
          setError('Not signed in');
          setLoading(false);
          return;
        }

        const res = await fetch('/api/books', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
          },
        });

        const payload = await res.json();
        if (!res.ok) {
          setError(payload?.error ?? `Request failed (${res.status})`);
        } else {
          setBooks(payload.books ?? []);
        }
      } catch (err: any) {
        setError(err?.message ?? String(err));
      } finally {
        setLoading(false);
      }
    }

    load();
    const { data: listener } = supabase.auth.onAuthStateChange(() => load());
    return () => listener?.subscription?.unsubscribe?.();
  }, []);

  if (loading) return <div>Loading…</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <ul>
      {books.map((b: any) => (
        <li key={b.id}>
          {b.title} — {b.author}
        </li>
      ))}
    </ul>
  );
}
