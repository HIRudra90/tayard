// src/app/api/books/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseServer";
import { getUserFromAuthHeader } from "@/lib/authServer";

// replace these two lines at the top of the file
// type EmptyParamsLike = {} | Promise<{}>;
// type ContextWithEmptyParams = { params: EmptyParamsLike };

// with these:
type EmptyParamsLike = object | Promise<object>;
type ContextWithEmptyParams = { params: EmptyParamsLike };


export async function GET(request: NextRequest, _context: ContextWithEmptyParams) {
  try {
    const authHeader = request.headers.get("authorization") ?? undefined;
    const user = await getUserFromAuthHeader(authHeader);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") ?? "";
    const statusFilter = searchParams.get("status") ?? "";

    let query = supabaseAdmin
      .from("books")
      .select("id, title, author, status, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (q) {
      query = query.or(`title.ilike.%${q}%,author.ilike.%${q}%`);
    }
    if (statusFilter && ["reading", "completed", "wishlist"].includes(statusFilter)) {
      query = query.eq("status", statusFilter);
    }

    const { data, error } = await query;
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ books: data ?? [] });
  } catch (err: unknown) {
    console.error("GET /api/books error:", err);
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function POST(request: NextRequest, _context: ContextWithEmptyParams) {
  try {
    const authHeader = request.headers.get("authorization") ?? undefined;
    const user = await getUserFromAuthHeader(authHeader);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = (await request.json().catch(() => null)) as
      | { title?: unknown; author?: unknown; status?: unknown }
      | null;

    const title = body?.title ? String(body.title).trim() : "";
    const author = body?.author ? String(body.author).trim() : "";
    const status = body?.status ? String(body.status) : undefined;

    if (!title || !author) {
      return NextResponse.json({ error: "Missing title or author" }, { status: 400 });
    }

    const payload = {
      user_id: user.id,
      title,
      author,
      status: status === "none" ? null : status ?? "reading",
    };

    const { data, error } = await supabaseAdmin.from("books").insert(payload).select().single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ book: data }, { status: 201 });
  } catch (err: unknown) {
    console.error("POST /api/books error:", err);
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
