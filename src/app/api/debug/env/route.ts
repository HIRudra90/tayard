import { NextResponse } from 'next/server';

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? null;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'LOADED' : 'MISSING';
  const sr = process.env.SUPABASE_SERVICE_ROLE_KEY ? 'LOADED' : 'MISSING';
  return NextResponse.json({ url, anon, sr });
}
