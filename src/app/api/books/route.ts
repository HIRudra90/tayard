// src/app/api/books/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { serverSupabase } from "@/lib/supabaseServer";
import { getUserFromAuthHeader } from "@/lib/authServer";

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

type JsonError = { error: string };

// GET /api/books — fetch books for current user
export async function GET(req: Request): Promise<NextResponse<BookRow[] | JsonError>> {
  const user = await getUserFromAuthHeader(req.headers.get("authorization") ?? undefined);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { data, error } = await serverSupabase
      .from("books")
      .select("id, title, author, status, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .returns<BookRow[]>();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data ?? []);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown server error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

// POST /api/books — insert a new book for current user
export async function POST(req: Request): Promise<NextResponse<BookRow | JsonError>> {
  const user = await getUserFromAuthHeader(req.headers.get("authorization") ?? undefined);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body: PostBody = await req.json().catch(() => ({}));
    const title = (body.title ?? "").trim();
    if (!title) return NextResponse.json({ error: "Title is required" }, { status: 400 });

    const author = body.author?.trim?.() ?? null;
    const allowed = ["wishlist", "reading", "completed"] as const;
    const status = allowed.includes(body.status as (typeof allowed)[number])
      ? (body.status as (typeof allowed)[number])
      : "wishlist";

    const { data, error } = await serverSupabase
      .from("books")
      .insert({ title, author, status, user_id: user.id })
      .select("id, title, author, status, created_at")
      .single()
      .returns<BookRow>();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data, { status: 201 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown server error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
