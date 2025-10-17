'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Book = {
  id: string;
  title: string;
  author: string;
  status: 'reading' | 'completed' | 'wishlist' | null;
  created_at?: string | null;
  user_id?: string | null;
};

export default function Dashboard() {
  const [books, setBooks] = useState<Book[]>([]);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  async function loadBooks() {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (query) params.set('q', query);
      if (statusFilter) params.set('status', statusFilter);

      const res = await fetch(`/api/books?${params.toString()}`);
      if (!res.ok) {
        console.error('Failed to fetch books', await res.text());
        setBooks([]);
        return;
      }

      const payload = (await res.json()) as { books?: Book[] };
      setBooks(Array.isArray(payload.books) ? payload.books : []);
    } catch (err) {
      console.error('Error loading books:', err);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // load on first render
    loadBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // typed handlers
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => setStatusFilter(e.target.value);

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await loadBooks();
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Your Books</h1>
        <div className="flex gap-2">
          <button
            onClick={() => router.push('/signup')}
            className="px-3 py-1 border rounded"
            type="button"
          >
            Add Book
          </button>
        </div>
      </div>

      <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-4">
        <input
          value={query}
          onChange={handleQueryChange}
          placeholder="Search title or author"
          className="flex-1 p-2 border rounded"
          type="search"
        />
        <select value={statusFilter} onChange={handleStatusChange} className="p-2 border rounded">
          <option value="">All</option>
          <option value="reading">Reading</option>
          <option value="completed">Completed</option>
          <option value="wishlist">Wishlist</option>
        </select>
        <button type="submit" className="px-4 py-2 border rounded">
          Search
        </button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : books.length === 0 ? (
        <p className="text-gray-600">No books found.</p>
      ) : (
        <ul className="space-y-3">
          {books.map((b) => (
            <li key={b.id} className="p-3 border rounded flex justify-between items-start">
              <div>
                <div className="font-semibold">{b.title}</div>
                <div className="text-sm text-gray-600">by {b.author}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {b.status ?? 'none'} • {b.created_at ? new Date(b.created_at).toLocaleString() : ''}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => router.push(`/dashboard/${b.id}`)}
                  className="px-3 py-1 border rounded text-sm"
                  type="button"
                >
                  View
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
