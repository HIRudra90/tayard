"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function HomePage() {
  const [sessionInfo, setSessionInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSessionInfo(data.session ?? null);
      if (data.session) router.push("/dashboard");
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessionInfo(session ?? null);
      if (session) router.push("/dashboard");
    });

    return () => {
      if (listener && listener.subscription) listener.subscription.unsubscribe();
    };
  }, [router]);

  const handleSignInWithGoogle = async () => {
    setError(null);
    setLoading(true);
    try {
      const redirectTo =
        (process.env.NEXT_PUBLIC_REDIRECT_URL ?? window.location.origin) + "/dashboard";
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo },
      });
      if (error) throw error;
    } catch (err) {
      setError(err?.message ?? String(err));
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setSessionInfo(null);
  };

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(180deg,#060606 0%, #0b0b0b 100%)",
      fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial"
    }}>
      <div style={{
        width: "min(680px, 92vw)",
        background: "#0f1720",
        color: "#fff",
        borderRadius: 16,
        padding: 36,
        boxShadow: "0 12px 40px rgba(2,6,23,0.7)",
        textAlign: "center"
      }}>
        <h1 style={{ margin: 0, fontSize: 36, fontWeight: 800 }}>Welcome back</h1>
        <p style={{ marginTop: 12, color: "#cbd5e1", fontSize: 16 }}>
          Sign in with your Google account to continue to Book Tracker.
        </p>

        {sessionInfo ? (
          <div style={{ marginTop: 20 }}>
            <p style={{ color: "#e6eef8", marginBottom: 8 }}>
              Signed in as <strong>{sessionInfo?.user?.email}</strong>
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <button
                onClick={() => router.push("/dashboard")}
                style={{
                  background: "#2563eb",
                  color: "#fff",
                  padding: "10px 18px",
                  borderRadius: 10,
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 700
                }}
              >
                Go to Dashboard
              </button>
              <button
                onClick={handleSignOut}
                style={{
                  background: "transparent",
                  color: "#cbd5e1",
                  padding: "10px 18px",
                  borderRadius: 10,
                  border: "1px solid rgba(203,213,225,0.12)",
                  cursor: "pointer",
                  fontWeight: 600
                }}
              >
                Sign out
              </button>
            </div>
          </div>
        ) : (
          <div style={{ marginTop: 24 }}>
            <button
              onClick={handleSignInWithGoogle}
              disabled={loading}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#fff",
                color: "#111",
                padding: "12px 18px",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: 16,
                boxShadow: "0 8px 24px rgba(2,6,23,0.5)"
              }}
            >
              {loading ? "Opening" : "Sign in with Google"}
            </button>

            {error && <div style={{ color: "#ff7b7b", marginTop: 12 }}>{error}</div>}
          </div>
        )}

        <div style={{ marginTop: 22, fontSize: 13, color: "#94a3b8" }}> Book Tracker</div>
      </div>
    </main>
  );
}
