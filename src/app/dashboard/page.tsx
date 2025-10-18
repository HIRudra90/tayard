'use client';

import React, { useEffect, useRef, useState } from 'react';

type Book = {
  id: string;
  title: string;
  author?: string | null;
  status?: 'wishlist' | 'reading' | 'completed' | string;
  created_at?: string | null;
};

const STATUS_ORDER: Array<'wishlist' | 'reading' | 'completed'> = ['wishlist', 'reading', 'completed'];

function formatIsoTimestamp(iso?: string | null) {
  if (!iso) return '';
  return iso.replace('T', ' ').split('.')[0];
}

export default function DashboardPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'wishlist' | 'reading' | 'completed'>('all');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [addStatus, setAddStatus] = useState<'wishlist' | 'reading' | 'completed'>('wishlist');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const statusMeta: Record<string, { bg: string; text: string }> = {
    wishlist: { bg: '#60a5fa', text: '#041022' },
    reading: { bg: '#facc15', text: '#031527' },
    completed: { bg: '#10b981', text: '#031527' },
  };

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/books');
      if (!res.ok) throw new Error(await res.text());
      setBooks(await res.json());
    } catch {
      setError('Failed to load books.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    try {
      const stored = localStorage.getItem('booktracker_theme') as 'dark' | 'light' | null;
      if (stored) setTheme(stored);
    } catch {}
    fetchBooks();
    const clickHandler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, []);

  useEffect(() => {
    localStorage.setItem('booktracker_theme', theme);
  }, [theme]);

  const onAdd = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!title.trim()) return setError('Title required');
    setSaving(true);
    try {
      const res = await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author, status: addStatus }),
      });
      if (!res.ok) throw new Error(await res.text());
      setTitle('');
      setAuthor('');
      setAddStatus('wishlist');
      fetchBooks();
    } catch {
      setError('Failed to add book.');
    } finally {
      setSaving(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    setBooks((prev) => prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b)));
    setOpenMenuId(null);
    try {
      const res = await fetch(`/api/books/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error(await res.text());
    } catch {
      setError('Failed to update status.');
    }
  };

  const removeBook = async (id: string) => {
    if (!confirm('Delete this book?')) return;
    try {
      await fetch(`/api/books/${id}`, { method: 'DELETE' });
      setBooks((prev) => prev.filter((b) => b.id !== id));
    } catch {
      setError('Delete failed.');
    }
  };

  const visible = books
    .filter((b) => (filterStatus === 'all' ? true : b.status === filterStatus))
    .filter((b) =>
      (b.title ?? '').toLowerCase().includes(search.toLowerCase()) ||
      (b.author ?? '').toLowerCase().includes(search.toLowerCase())
    );

  const isDark = theme === 'dark';
  const borderColor = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(30,58,138,0.25)';
  const muted = isDark ? '#9aa7b6' : '#4b5563';
  const buttonBlue = isDark ? '#4f9bff' : '#2563eb';

  const buttonBase: React.CSSProperties = {
    padding: '10px 16px',
    height: 42,
    borderRadius: 6,
    border: `1px solid ${borderColor}`,
    cursor: 'pointer',
    fontWeight: 700,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buttonPrimary: React.CSSProperties = {
    ...buttonBase,
    background: buttonBlue,
    color: '#fff',
  };

  const inputBase: React.CSSProperties = {
    padding: '12px 14px',
    borderRadius: 6,
    border: `1px solid ${borderColor}`,
    background: isDark ? '#071727' : '#ffffff',
    color: isDark ? '#e6eef7' : '#05253f',
    fontSize: 14,
    flex: 1,
  };

  const page: React.CSSProperties = {
    minHeight: '100vh',
    background: isDark ? '#05070a' : 'linear-gradient(180deg,#e0f0ff,#f6faff)',
    color: isDark ? '#e6eef7' : '#05253f',
    fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial',
    padding: 18,
  };

  const wrapper: React.CSSProperties = { maxWidth: 1120, margin: '6px auto' };

  const cardStyle = (): React.CSSProperties => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: isDark ? '#0b2540' : '#ffffff',
    padding: '18px 20px',
    borderRadius: 10,
    border: `1px solid ${borderColor}`,
    boxShadow: isDark ? '0 6px 20px rgba(0,0,0,0.5)' : '0 4px 16px rgba(37,99,235,0.08)',
  });

  const pillButton = (bg: string, txt: string): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 14px',
    borderRadius: 6,
    background: bg,
    color: txt,
    fontWeight: 800,
    cursor: 'pointer',
    minWidth: 110,
    justifyContent: 'center',
  });

  return (
    <div style={page}>
      <div style={wrapper} ref={containerRef}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div>
            <h1>Your Books</h1>
            <p style={{ color: muted }}>Dashboard To Get Hired</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} style={buttonBase}>
              {isDark ? 'Lite' : 'Dark'}
            </button>
            <button onClick={fetchBooks} style={buttonBase}>Refresh</button>
          </div>
        </div>

        {/* Search */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input placeholder="Search by title or author" value={search} onChange={(e) => setSearch(e.target.value)} style={inputBase} />
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value as any)} style={{ ...inputBase, width: 160 }}>
            <option value="all">All statuses</option>
            <option value="wishlist">Wishlist</option>
            <option value="reading">Reading</option>
            <option value="completed">Completed</option>
          </select>
          <div style={{ marginLeft: 'auto' }}>
            <button onClick={() => { setSearch(''); setFilterStatus('all'); }} style={buttonBase}>Clear</button>
          </div>
        </div>

        {/* Add */}
        <form onSubmit={onAdd} style={{ display: 'flex', gap: 8, marginTop: 12, alignItems: 'center' }}>
          <input placeholder="Title (required)" value={title} onChange={(e) => setTitle(e.target.value)} style={inputBase} />
          <input placeholder="Author (optional)" value={author} onChange={(e) => setAuthor(e.target.value)} style={{ ...inputBase, width: 300 }} />
          <select value={addStatus} onChange={(e) => setAddStatus(e.target.value as any)} style={{ ...inputBase, width: 140 }}>
            <option value="wishlist">Wishlist</option>
            <option value="reading">Reading</option>
            <option value="completed">Completed</option>
          </select>

          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <button type="submit" disabled={saving} style={buttonPrimary}>{saving ? 'Adding…' : 'Add'}</button>
            <button type="button" onClick={() => { setTitle(''); setAuthor(''); setAddStatus('wishlist'); }} style={buttonBase}>Clear</button>
          </div>
        </form>

        {error && <div style={{ color: '#f87171', marginTop: 8 }}>{error}</div>}

        {/* Book list */}
        <div style={{ display: 'grid', gap: 14, marginTop: 20 }}>
          {loading ? (
            <p style={{ color: muted }}>Loading…</p>
          ) : visible.length ? (
            visible.map((b) => {
              const st = (b.status ?? 'wishlist') as 'wishlist' | 'reading' | 'completed';
              const meta = statusMeta[st];
              const isOpen = openMenuId === b.id;
              return (
                <div key={b.id} style={cardStyle()}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 18 }}>{b.title}</div>
                    <div style={{ color: muted, fontStyle: 'italic' }}>
                      {(b.author && `${b.author} • `) || ''}
                      {st}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative' }}>
                    <div style={{ position: 'relative' }}>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenMenuId(isOpen ? null : b.id);
                        }}
                        style={pillButton(meta.bg, meta.text)}
                      >
                        {st}
                      </div>

                      {isOpen && (
                        <div
                          style={{
                            position: 'absolute',
                            top: 'calc(100% + 8px)',
                            left: 0,
                            background: isDark ? '#071d2e' : '#fff',
                            border: `1px solid ${borderColor}`,
                            borderRadius: 6,
                            zIndex: 50,
                          }}
                        >
                          {STATUS_ORDER.map((s) => (
                            <div
                              key={s}
                              onClick={() => updateStatus(b.id, s)}
                              style={{
                                padding: '10px 14px',
                                cursor: 'pointer',
                                background: s === st ? meta.bg : isDark ? '#071d2e' : '#fff',
                                color: s === st ? meta.text : isDark ? '#e6eef7' : '#05253f',
                              }}
                            >
                              {s}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <button onClick={() => removeBook(b.id)} style={buttonPrimary}>Delete</button>
                    <div style={{ color: muted, fontSize: 12 }}>{formatIsoTimestamp(b.created_at)}</div>
                  </div>
                </div>
              );
            })
          ) : (
            <p style={{ color: muted }}>No books yet — add one above.</p>
          )}
        </div>
      </div>
    </div>
  );
}
