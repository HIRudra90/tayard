import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">Book Tracker</h1>
        <p className="mb-6">Sign up or log in to manage your books.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/signup" className="px-4 py-2 border rounded">Sign up</Link>
          <Link href="/login" className="px-4 py-2 border rounded">Log in</Link>
          <Link href="/dashboard" className="px-4 py-2 border rounded">Dashboard</Link>
        </div>
      </div>
    </main>
  );
}
