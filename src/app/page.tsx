import Link from "next/link";

export const metadata = {
  title: "Book Tracker Home",
  description: "Dashboard To Get Hired — Book Tracking App",
};

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #dbeafe 0%, #f1f5f9 100%)",
        color: "#0f172a",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "10px" }}>
          Welcome to <span style={{ color: "#2563eb" }}>Book Tracker</span>
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#334155", marginBottom: "24px" }}>
          Dashboard To Get Hired — Track, Add, and Manage Your Reading Journey.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          <Link
            href="/dashboard"
            style={{
              padding: "12px 24px",
              background: "#2563eb",
              color: "white",
              borderRadius: "8px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            Go to Dashboard
          </Link>

          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "12px 24px",
              border: "2px solid #2563eb",
              color: "#2563eb",
              borderRadius: "8px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            Deploy on Vercel
          </a>
        </div>
      </div>
    </main>
  );
}
