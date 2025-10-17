"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Book = { id: string; title: string; author: string; status: string | null; created_at: string };

const STATUS_LABEL = (s: string | null) =>
  s === "reading" ? "Reading" : s === "completed" ? "Completed" : s === "wishlist" ? "Wishlist" : "None";

const STATUS_COLORS: Record<string, string> = {
  reading: "bg-blue-600",
  completed: "bg-green-600",
  wishlist: "bg-yellow-600",
  none: "bg-gray-600",
};

export default function Dashboard() {
  const router = useRouter();
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [actionLoading, setActionLoading] = useState<string | null>(null); // id of book doing an action
  const [globalLoading, setGlobalLoading] = useState(false);

  useEffect(() => {
    // initial fetch
    fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getToken() {
    if (typeof window === "undefined") return "";
    return localStorage.getItem("sb_token") ?? "";
  }

  async function fetchBooks() {
    const token = getToken();
    if (!token) return router.push("/login");

    setGlobalLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.set("q", search);
      if (statusFilter) params.set("status", statusFilter);
      const res = await fetch(`/api/books?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 401) {
        // not authorized, redirect to login
        localStorage.removeItem("sb_token");
        return router.push("/login");
      }

      const data = await res.json().catch(() => ({}));
      setBooks(data.books ?? []);
    } catch (err: any) {
      console.error("fetchBooks error:", err);
      alert("Failed to load books. Check console for details.");
    } finally {
      setGlobalLoading(false);
    }
  }

  async function addBook(e: React.FormEvent) {
    e.preventDefault();
    const token = getToken();
    if (!token) return router.push("/login");

    if (!title.trim() || !author.trim()) return alert("Please provide title and author");

    setActionLoading("add");
    try {
      const res = await fetch("/api/books", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ title: title.trim(), author: author.trim(), status: "reading" }),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        console.error("Add book failed", res.status, j);
        alert(j.error ?? `Failed to add book (status ${res.status})`);
        return;
      }

      setTitle("");
      setAuthor("");
      await fetchBooks();
    } catch (err: any) {
      console.error("addBook exception:", err);
      alert("Unexpected error adding book. See console.");
    } finally {
      setActionLoading(null);
    }
  }

  async function deleteBook(id: string) {
    if (!confirm("Delete this book?")) return;
    const token = getToken();
    if (!token) return router.push("/login");

    setActionLoading(id);
    try {
      const res = await fetch(`/api/books/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 204) {
        // success
        await fetchBooks();
        return;
      }

      // try parse JSON error
      let body = null;
      try {
        body = await res.json();
      } catch (e) {
        /* ignore */
      }

      console.error("Delete failed", res.status, body);
      alert(body?.error ?? `Delete failed (status ${res.status})`);
    } catch (err: any) {
      console.error("deleteBook exception:", err);
      alert("Unexpected error deleting book. See console.");
    } finally {
      setActionLoading(null);
    }
  }

  async function updateStatus(id: string, newStatus: string) {
    const token = getToken();
    if (!token) return router.push("/login");

    setActionLoading(id);
    try {
      const res = await fetch(`/api/books/${id}`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        await fetchBooks();
        return;
      }

      let body = null;
      try {
        body = await res.json();
      } catch (e) {
        /* ignore */
      }

      console.error("Update status failed", res.status, body);
      alert(body?.error ?? `Update failed (status ${res.status})`);
    } catch (err: any) {
      console.error("updateStatus exception:", err);
      alert("Unexpected error updating status. See console.");
    } finally {
      setActionLoading(null);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Your Books</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                localStorage.removeItem("sb_token");
                router.push("/login");
              }}
              className="px-3 py-1 border rounded"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title or author"
            className="col-span-2 p-2 border bg-gray-900"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 border bg-gray-900"
          >
            <option value="">All statuses</option>
            <option value="reading">Reading</option>
            <option value="completed">Completed</option>
            <option value="wishlist">Wishlist</option>
          </select>
          <div className="col-span-3 flex gap-2">
            <button onClick={fetchBooks} className="px-4 py-2 border" disabled={globalLoading}>
              {globalLoading ? "Loading…" : "Apply"}
            </button>
            <button
              onClick={() => {
                setSearch("");
                setStatusFilter("");
                fetchBooks();
              }}
              className="px-4 py-2 border"
            >
              Clear
            </button>
          </div>
        </div>

        <form onSubmit={addBook} className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="p-2 border bg-gray-900"
          />
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            className="p-2 border bg-gray-900"
          />
          <button type="submit" className="px-4 py-2 border" disabled={actionLoading === "add"}>
            {actionLoading === "add" ? "Adding…" : "Add"}
          </button>
        </form>

        {loading || globalLoading ? (
          <div>Loading…</div>
        ) : (
          <ul className="space-y-3">
            {books.length === 0 && <li className="p-4 border bg-gray-900">No books yet.</li>}
            {books.map((b) => {
              const isBusy = actionLoading === b.id;
              return (
                <li key={b.id} className="p-4 border rounded bg-gray-900 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${STATUS_COLORS[b.status ?? "none"] ?? "bg-gray-600"}`}
                        aria-hidden
                      />
                      <div className="font-semibold text-lg">{b.title}</div>
                    </div>
                    <div className="text-sm text-gray-300">
                      {b.author} • <span className="italic">{STATUS_LABEL(b.status ?? "none")}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Added: {new Date(b.created_at).toLocaleString()}</div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <select
                      value={b.status ?? "none"}
                      onChange={(e) => updateStatus(b.id, e.target.value)}
                      className="p-1 border bg-black"
                      disabled={isBusy}
                    >
                      <option value="none">None</option>
                      <option value="reading">Reading</option>
                      <option value="completed">Completed</option>
                      <option value="wishlist">Wishlist</option>
                    </select>
                    <button onClick={() => deleteBook(b.id)} className="px-3 py-1 border" disabled={isBusy}>
                      {isBusy ? "Working…" : "Delete"}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
