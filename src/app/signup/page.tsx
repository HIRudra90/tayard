"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) return alert(error.message);
    alert("Signed up — check your email or log in.");
    router.push("/login");
  }

  return (
    <main className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl mb-4">Sign up</h2>
      <form onSubmit={handleSignup} className="space-y-3">
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="p-2 border w-full" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className="p-2 border w-full" />
        <button className="px-4 py-2 border">Sign up</button>
      </form>
    </main>
  );
}
