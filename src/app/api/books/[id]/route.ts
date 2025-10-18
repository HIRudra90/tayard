// src/app/api/books/[id]/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error('Missing SUPABASE env vars on server. Ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set.');
}

const serverSupabase = supabaseUrl && serviceRoleKey
  ? createClient(supabaseUrl, serviceRoleKey)
  : null;

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  if (!serverSupabase) {
    return NextResponse.json({ error: 'Server configuration error: missing Supabase keys' }, { status: 500 });
  }
  try {
    const body = await req.json();
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json({ error: 'No update payload provided' }, { status: 400 });
    }

    // allow only certain fields
    const allowed: Record<string, any> = {};
    if (body.status) allowed.status = body.status;
    if (body.title) allowed.title = body.title;
    if ('author' in body) allowed.author = body.author;

    if (Object.keys(allowed).length === 0) {
      return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 });
    }

    const { data, error, status } = await serverSupabase
      .from('books')
      .update(allowed)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error(`Supabase PATCH /books/${id} error`, error);
      return NextResponse.json({ error: error.message || 'Supabase update error' }, { status: status ?? 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    console.error(`Unexpected PATCH /api/books/${id} error`, err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  if (!serverSupabase) {
    return NextResponse.json({ error: 'Server configuration error: missing Supabase keys' }, { status: 500 });
  }
  try {
    const { data, error, status } = await serverSupabase.from('books').delete().eq('id', id);

    if (error) {
      console.error(`Supabase DELETE /books/${id} error`, error);
      return NextResponse.json({ error: error.message || 'Supabase delete error' }, { status: status ?? 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    console.error(`Unexpected DELETE /api/books/${id} error`, err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
