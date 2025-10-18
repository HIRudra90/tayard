// src/app/dashboard/page.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

type Book = {
  id: string;
  title: string;
  author?: string | null;
  status?: "wishlist" | "reading" | "completed" | string;
  created_at?: string | null;
};

const STATUS_ORDER: Array<"wishlist" | "reading" | "completed"> = ["wishlist", "reading", "completed"];

function formatIsoTimestamp(iso?: string | null) {
  if (!iso) return "";
  return iso.replace("T", " ").split(".")[0];
}

export default function DashboardPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "wishlist" | "reading" | "completed">("all");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [addStatus, setAddStatus] = useState<"wishlist" | "reading" | "completed">("wishlist");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // default server-safe theme; loaded from localStorage on client
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const statusMeta: Record<"wishlist" | "reading" | "completed", { bg: string; text: string }> = {
    wishlist: { bg: "#60a5fa", text: "#041022" },
    reading: { bg: "#facc15", text: "#031527" },
    completed: { bg: "#10b981", text: "#031527" },
  };

  function logUnknownError(e: unknown, prefix = "") {
    if (e instanceof Error) {
      console.error(prefix, e.message, e);
    } else {
      console.error(prefix, e);
    }
  }

  const fetchBooks = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/books");
      if (!res.ok) {
        const txt = await res.text().catch(() => "Failed to read error body");
        throw new Error(txt || `Server responded ${res.status}`);
      }
      const data = await res.json();
      setBooks(Array.isArray(data) ? data : Array.isArray((data as any)?.books) ? (data as any).books : []);
    } catch (e: unknown) {
      logUnknownError(e, "fetchBooks error:");
      setError("Failed to load books (see console).");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    try {
      const stored = localStorage.getItem("booktracker_theme") as "dark" | "light" | null;
      if (stored && (stored === "dark" || stored === "light")) setTheme(stored);
    } catch {
      // ignore localStorage errors
    }

    fetchBooks();
    const clickHandler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("booktracker_theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const onAdd = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);
    const t = title.trim();
    if (!t) {
      setError("Title required");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: t, author: author.trim() || null, status: addStatus }),
      });
      if (!res.ok) {
        const txt = await res.text().catch(() => "server error");
        throw new Error(txt || `Server ${res.status}`);
      }
      setTitle("");
      setAuthor("");
      setAddStatus("wishlist");
      await fetchBooks();
    } catch (e: unknown) {
      logUnknownError(e, "onAdd error:");
      setError("Failed to add book (see console).");
    } finally {
      setSaving(false);
    }
  };

  const updateStatus = async (id: string, newStatus: "wishlist" | "reading" | "completed") => {
    setBooks((prev) => prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b)));
    setOpenMenuId(null);
    try {
      const res = await fetch(`/api/books/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) {
        const txt = await res.text().catch(() => "server error");
        throw new Error(txt || `Server ${res.status}`);
      }
    } catch (e: unknown) {
      logUnknownError(e, "updateStatus error:");
      setError("Failed to update status (see console).");
      fetchBooks();
    }
  };

  const removeBook = async (id: string) => {
    if (!confirm("Delete this book?")) return;
    try {
      const res = await fetch(`/api/books/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const txt = await res.text().catch(() => "server error");
        throw new Error(txt || `Server ${res.status}`);
      }
      setBooks((prev) => prev.filter((b) => b.id !== id));
    } catch (e: unknown) {
      logUnknownError(e, "removeBook error:");
      setError("Delete failed (see console).");
      fetchBooks();
    }
  };

  const visible = books
    .filter((b) => (filterStatus === "all" ? true : b.status === filterStatus))
    .filter((b) => {
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (b.title ?? "").toLowerCase().includes(q) || (b.author ?? "").toLowerCase().includes(q);
    });

  // ----- styling (kept same as previous) -----
  const isDark = theme === "dark";
  const borderColor = isDark ? "rgba(255,255,255,0.25)" : "rgba(30,58,138,0.25)";
  const muted = isDark ? "#9aa7b6" : "#4b5563";
  const buttonBlue = isDark ? "#4f9bff" : "#2563eb";

  const buttonBase: React.CSSProperties = {
    padding: "10px 16px",
    height: 42,
    borderRadius: 6,
    border: `1px solid ${borderColor}`,
    cursor: "pointer",
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonPrimary: React.CSSProperties = {
    ...buttonBase,
    background: buttonBlue,
    color: "#fff",
    boxShadow: isDark ? "0 4px 10px rgba(79,155,255,0.14)" : "0 4px 14px rgba(37,99,235,0.18)",
  };

  const buttonGhost: React.CSSProperties = {
    ...buttonBase,
    background: isDark ? "#0b1a29" : "#f2f6ff",
    color: isDark ? "#e6eef7" : "#05253f",
  };

  const inputBase: React.CSSProperties = {
    padding: "12px 14px",
    borderRadius: 6,
    border: `1px solid ${borderColor}`,
    background: isDark ? "#071727" : "#ffffff",
    color: isDark ? "#e6eef7" : "#05253f",
    fontSize: 14,
    boxSizing: "border-box",
    flex: 1,
  };

  const page: React.CSSProperties = {
    minHeight: "100vh",
    background: isDark ? "#05070a" : "linear-gradient(180deg,#e7f3ff,#f9fbff)",
    color: isDark ? "#e6eef7" : "#05253f",
    fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial',
    padding: 18,
  };

  const wrapper: React.CSSProperties = { maxWidth: 1120, margin: "6px auto" };

  const cardStyle = (_index: number): React.CSSProperties => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: isDark ? "#0b2540" : "#ffffff",
    padding: "18px 20px",
    borderRadius: 10,
    border: `1px solid ${borderColor}`,
    boxShadow: isDark ? "0 6px 20px rgba(0,0,0,0.5)" : "0 4px 16px rgba(37,99,235,0.08)",
    transition: "transform 160ms ease",
  });

  const pillButton = (bg: string, txt: string): React.CSSProperties => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 14px",
    borderRadius: 6,
    background: bg,
    color: txt,
    fontWeight: 800,
    cursor: "pointer",
    minWidth: 110,
    justifyContent: "center",
  });

  const menuStyle: React.CSSProperties = {
    position: "absolute",
    left: 0,
    top: "calc(100% + 8px)",
    background: isDark ? "#071d2e" : "#fff",
    border: `1px solid ${borderColor}`,
    borderRadius: 6,
    boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
    zIndex: 50,
    minWidth: 160,
  };

  return (
    <div style={page}>
      <div style={wrapper} ref={containerRef}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div>
            <h1>Your Books</h1>
            <p style={{ color: muted }}>Dashboard To Get Hired</p>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} style={buttonGhost}>
              {isDark ? "Lite" : "Dark"}
            </button>
            <button onClick={fetchBooks} style={buttonGhost}>
              Refresh
            </button>
          </div>
        </div>

        {/* Search Row */}
        <div style={{ display: "flex", gap: 8, marginTop: 12, alignItems: "center" }}>
          <input placeholder="Search by title or author" value={search} onChange={(e) => setSearch(e.target.value)} style={{ ...inputBase, flex: 1 }} />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as "all" | "wishlist" | "reading" | "completed")}
            style={{ ...inputBase, width: 160 }}
          >
            <option value="all">All statuses</option>
            <option value="wishlist">Wishlist</option>
            <option value="reading">Reading</option>
            <option value="completed">Completed</option>
          </select>
          <div style={{ marginLeft: "auto" }}>
            <button
              onClick={() => {
                setSearch("");
                setFilterStatus("all");
              }}
              style={buttonGhost}
            >
              Clear
            </button>
          </div>
        </div>

        {/* Add Row */}
        <form onSubmit={onAdd} style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 12 }}>
          <input placeholder="Title (required)" value={title} onChange={(e) => setTitle(e.target.value)} style={inputBase} />
          <input placeholder="Author (optional)" value={author} onChange={(e) => setAuthor(e.target.value)} style={{ ...inputBase, width: 320 }} />
          <select
            value={addStatus}
            onChange={(e) => setAddStatus(e.target.value as "wishlist" | "reading" | "completed")}
            style={{
              padding: "10px 14px",
              borderRadius: 6,
              border: "1px solid rgba(0,0,0,0.06)",
              background: statusMeta[addStatus].bg,
              color: statusMeta[addStatus].text,
              fontWeight: 800,
            }}
          >
            <option value="wishlist">Wishlist</option>
            <option value="reading">Reading</option>
            <option value="completed">Completed</option>
          </select>

          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <button type="submit" disabled={saving} style={buttonPrimary}>
              {saving ? "Adding…" : "Add"}
            </button>
            <button
              type="button"
              onClick={() => {
                setTitle("");
                setAuthor("");
                setAddStatus("wishlist");
                setError(null);
              }}
              style={buttonGhost}
            >
              Clear
            </button>
          </div>
        </form>

        {error && (
          <div style={{ color: "#ff8080", marginTop: 8 }}>
            {error}
          </div>
        )}

        <div style={{ display: "grid", gap: 14, marginTop: 12 }}>
          {loading ? (
            <div style={{ color: muted }}>Loading…</div>
          ) : visible.length ? (
            visible.map((b, i) => {
              const st = (b.status ?? "wishlist") as "wishlist" | "reading" | "completed";
              const meta = statusMeta[st] ?? statusMeta.wishlist;
              const isOpen = openMenuId === b.id;

              return (
                <div key={b.id} style={cardStyle(i)}>
                  <div style={{ maxWidth: "68%" }}>
                    <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 6 }}>{b.title}</div>
                    <div style={{ color: muted, fontStyle: "italic" }}>
                      {(b.author && `${b.author} • `) || ""}
                      <span style={{ textTransform: "capitalize" }}>{b.status ?? "—"}</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ position: "relative", display: "inline-block" }}>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenMenuId(isOpen ? null : b.id);
                        }}
                        style={{
                          ...pillButton(meta.bg, meta.text),
                          background: isDark ? meta.bg : meta.bg,
                          color: meta.text,
                        }}
                      >
                        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#ffffff55", display: "inline-block" }} />
                        <span style={{ textTransform: "capitalize" }}>{st}</span>
                      </div>

                      {isOpen && (
                        <div style={menuStyle} onClick={(e) => e.stopPropagation()}>
                          {STATUS_ORDER.map((s) => {
                            const m = statusMeta[s];
                            const itemBg = s === st ? (isDark ? "#0b2b3a" : "#f6fbff") : isDark ? "#06202e" : "#fff";
                            const textColor = s === st ? m.text : isDark ? "#e6eef7" : "#07203a";
                            return (
                              <div
                                key={s}
                                role="button"
                                onClick={() => updateStatus(b.id, s)}
                                style={{ padding: "12px 14px", cursor: "pointer", background: itemBg, color: textColor, fontWeight: 800 }}
                              >
                                <span style={{ width: 10, height: 10, borderRadius: 999, background: m.bg, display: "inline-block", marginRight: 10 }} />
                                <span style={{ textTransform: "capitalize" }}>{s}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <button onClick={() => removeBook(b.id)} style={{ padding: "10px 14px", borderRadius: 6, background: "#2563eb", color: "#fff", fontWeight: 700, border: "none" }}>
                      Delete
                    </button>

                    <div style={{ color: muted, fontSize: 12 }}>{b.created_at ? formatIsoTimestamp(b.created_at) : ""}</div>
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ color: muted }}>No books yet — add one above.</div>
          )}
        </div>

        <div style={{ marginTop: 12, color: muted, fontSize: 13 }}>
          Tip: click a colored pill to open the menu. If you see &quot;Unauthorized&quot; in console, ensure SUPABASE keys are set in <code>.env.local</code>.
        </div>
      </div>
    </div>
  );
}
