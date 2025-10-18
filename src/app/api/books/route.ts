import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  // fail fast so we don't try to call Supabase with undefined keys
  console.error('Missing SUPABASE env vars on server. Ensure SUPABASE_SERVICE_ROLE_KEY and NEXT_PUBLIC_SUPABASE_URL are set.');
  // It's better to throw here so that the dev server shows the problem immediately.
  throw new Error('Missing SUPABASE env vars on server. Check SUPABASE_SERVICE_ROLE_KEY and NEXT_PUBLIC_SUPABASE_URL.');
}

// create server-side supabase client (do not persist sessions)
const serverSupabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});

export async function GET() {
  try {
    const { data, error } = await serverSupabase
      .from('books')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase server error (GET /api/books):', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data ?? [], { status: 200 });
  } catch (err: unknown) {
    console.error('Unexpected error in /api/books GET:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body?.title) return NextResponse.json({ error: 'Missing title' }, { status: 400 });

    const insertPayload = {
      title: body.title,
      author: body.author ?? null,
      status: body.status ?? 'wishlist',
    };

    // Insert and return the inserted row (use select() to get inserted row back)
    const { data, error } = await serverSupabase
      .from('books')
      .insert([insertPayload])
      .select()
      .maybeSingle();

    if (error) {
      console.error('Insert error (POST /api/books):', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (err: unknown) {
    console.error('Unexpected error in /api/books POST:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
