// src/app/api/books/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { serverSupabase } from "@/lib/supabaseServer";

// Define the shape of a row in your "books" table
interface BookRow {
  id: string;
  title: string;
  author: string | null;
  status: "wishlist" | "reading" | "completed";
  created_at: string;
}

interface PostBody {
  title?: string;
  author?: string | null;
  status?: string;
}

interface JsonError {
  error: string;
}

// GET /api/books — fetch all books
export async function GET(): Promise<NextResponse<BookRow[] | JsonError>> {
  try {
    const { data, error } = await serverSupabase
      .from("books")
      .select("id, title, author, status, created_at")
      .order("created_at", { ascending: false })
      .returns<BookRow[]>();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data ?? []);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown server error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

// POST /api/books — insert a new book
export async function POST(req: Request): Promise<NextResponse<BookRow | JsonError>> {
  try {
    const body: PostBody = await req.json().catch(() => ({}));

    const titleRaw = (body.title ?? "").trim();
    if (!titleRaw) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const authorRaw = body.author?.trim?.() ?? null;
    const allowed = ["wishlist", "reading", "completed"] as const;
    const status =
      allowed.includes(body.status as (typeof allowed)[number])
        ? (body.status as (typeof allowed)[number])
        : "wishlist";

    const { data, error } = await serverSupabase
      .from("books")
      .insert({ title: titleRaw, author: authorRaw, status })
      .select("id, title, author, status, created_at")
      .single()
      .returns<BookRow>();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown server error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
