'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      console.log('supabase signIn response:', { data, error });

      if (error) {
        alert('Login error: ' + error.message);
        return;
      }

      const token = data.session?.access_token;
      if (!token) {
        alert('No token in response. Check credentials.');
        return;
      }

      localStorage.setItem('sb_token', token);
      router.push('/dashboard');
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Login exception:', err.message);
        alert('Unexpected login error: ' + err.message);
      } else {
        console.error('Login exception:', err);
        alert('Unexpected login error occurred.');
      }
    }
  }

  return (
    <main className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl mb-4">Log in</h2>
      <form onSubmit={handleLogin} className="space-y-3">
        <input
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          placeholder="Email"
          className="p-2 border w-full"
        />
        <input
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="p-2 border w-full"
        />
        <button className="px-4 py-2 border">Log in</button>
      </form>
    </main>
  );
}
