import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseServer";
import { getUserFromAuthHeader } from "@/lib/authServer";

type ParamsLike = { id: string } | Promise<{ id: string }>;
type ContextWithParams = { params: ParamsLike };

export async function GET(request: NextRequest, context: ContextWithParams) {
  try {
    const authHeader = request.headers.get("authorization") ?? undefined;
    const user = await getUserFromAuthHeader(authHeader);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = (await context.params) as { id: string };

    const { data, error } = await supabaseAdmin
      .from("books")
      .select("id, title, author, status, created_at, user_id")
      .eq("id", id)
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 404 });
    if (!data || data.user_id !== user.id) return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json({ book: data });
  } catch (err: unknown) {
    console.error("GET /api/books/[id] error:", err);
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, context: ContextWithParams) {
  try {
    const authHeader = request.headers.get("authorization") ?? undefined;
    const user = await getUserFromAuthHeader(authHeader);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = (await context.params) as { id: string };

    const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
    if (!body) return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });

    const updates: Record<string, unknown> = {};
    if ("title" in body) updates.title = String(body.title ?? "").trim();
    if ("author" in body) updates.author = String(body.author ?? "").trim();
    if ("status" in body) updates.status = body.status === "none" ? null : String(body.status);

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: "No fields to update" }, { status: 400 });
    }

    const { data: existing, error: selErr } = await supabaseAdmin
      .from("books")
      .select("id, user_id")
      .eq("id", id)
      .single();

    if (selErr) return NextResponse.json({ error: selErr.message }, { status: 400 });
    if (!existing || existing.user_id !== user.id) return NextResponse.json({ error: "Not found or unauthorized" }, { status: 404 });

    const { data, error } = await supabaseAdmin
      .from("books")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 400 });

    return NextResponse.json({ ok: true, book: data });
  } catch (err: unknown) {
    console.error("PATCH /api/books/[id] error:", err);
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, context: ContextWithParams) {
  try {
    const authHeader = request.headers.get("authorization") ?? undefined;
    const user = await getUserFromAuthHeader(authHeader);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = (await context.params) as { id: string };

    const { data: existing, error: selErr } = await supabaseAdmin
      .from("books")
      .select("id, user_id")
      .eq("id", id)
      .single();

    if (selErr) return NextResponse.json({ error: selErr.message }, { status: 400 });
    if (!existing || existing.user_id !== user.id) return NextResponse.json({ error: "Not found or unauthorized" }, { status: 404 });

    const { error } = await supabaseAdmin.from("books").delete().eq("id", id);
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("DELETE /api/books/[id] error:", err);
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
