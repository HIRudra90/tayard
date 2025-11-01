"use client";

export default function Dashboard() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      background: "linear-gradient(180deg,#060606 0%, #0b0b0b 100%)",
      color: "#fff",
      fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial"
    }}>
      <div style={{
        width: "min(900px, 92vw)",
        background: "#0f1720",
        borderRadius: 16,
        padding: 36,
        boxShadow: "0 12px 40px rgba(2,6,23,0.7)"
      }}>
        <h1 style={{ margin: 0, fontSize: 36, fontWeight: 800 }}>📚 Dashboard</h1>
        <p style={{ marginTop: 12, color: "#cbd5e1" }}>
          Auth temporarily skipped. This page is public for debugging.
        </p>
        <ul style={{ marginTop: 18, lineHeight: 1.8, color: "#e6eef8" }}>
          <li>If you see this, routing is OK.</li>
          <li>When youre ready, well re-enable middleware and real auth checks.</li>
        </ul>
      </div>
    </main>
  );
}
