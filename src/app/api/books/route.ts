import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseServer";
import { getUserFromAuthHeader } from "@/lib/authServer";

export async function GET(req: Request) {
  try {
    const user = await getUserFromAuthHeader(req.headers.get("authorization") ?? undefined);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(req.url);
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
  } catch (err: any) {
    console.error("GET /api/books error:", err);
    return NextResponse.json({ error: String(err?.message ?? err) }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const user = await getUserFromAuthHeader(req.headers.get("authorization") ?? undefined);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json().catch(() => null);
    const { title, author, status } = body ?? {};

    if (!title || !author) {
      return NextResponse.json({ error: "Missing title or author" }, { status: 400 });
    }

    const payload: any = {
      user_id: user.id,
      title: String(title).trim(),
      author: String(author).trim(),
      status: status === "none" ? null : status ?? "reading",
    };

    const { data, error } = await supabaseAdmin.from("books").insert(payload).select().single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ book: data }, { status: 201 });
  } catch (err: any) {
    console.error("POST /api/books error:", err);
    return NextResponse.json({ error: String(err?.message ?? err) }, { status: 500 });
  }
}
