"use client";

import React, { useEffect, useState } from "react";

type Book = {
  id: string;
  title: string;
  author?: string | null;
  status?: string | null;
};

function safeLog(e: unknown, prefix = "") {
  if (e instanceof Error) {
    // eslint-disable-next-line no-console
    console.error(prefix, e.message, e);
  } else {
    // eslint-disable-next-line no-console
    console.error(prefix, e);
  }
}

export default function BooksListViaApiAuth() {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch("/api/books");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as Book[];
        if (mounted) setBooks(Array.isArray(data) ? data : []);
      } catch (e: unknown) {
        safeLog(e, "BooksListViaApiAuth load error:");
        if (mounted) setError("Failed to load books");
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  if (error) return <div style={{ color: "#f87171" }}>{error}</div>;

  return (
    <div>
      {books.map((b) => (
        <div key={b.id} style={{ padding: 8, borderBottom: "1px solid #eee" }}>
          <div style={{ fontWeight: 700 }}>{b.title}</div>
          <div style={{ color: "#6b7280" }}>{b.author}</div>
          <div style={{ fontSize: 12, marginTop: 6 }}>{b.status}</div>
        </div>
      ))}
    </div>
  );
}
