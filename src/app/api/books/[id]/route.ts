// src/app/api/books/[id]/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { serverSupabase } from "@/lib/supabaseServer";

type RouteCtx = { params: Promise<{ id: string }> };
type JsonError = { error: string };
type AllowedStatus = "wishlist" | "reading" | "completed";

function fallbackId(req: Request): string | null {
  try {
    const url = new URL(req.url);
    const q = url.searchParams.get("id");
    if (q) return q;
    const hdr = req.headers.get("x-book-id");
    if (hdr) return hdr;
    const last = url.pathname.split("/").filter(Boolean).pop();
    if (last && last.toLowerCase() !== "books") return last;
  } catch {}
  return null;
}

// PATCH /api/books/:id  -> update status
export async function PATCH(req: Request, ctx: RouteCtx) {
  try {
    const { id: pathId } = await ctx.params;          // ⬅️ await the promise
    const id = pathId || fallbackId(req);
    if (!id) return NextResponse.json<JsonError>({ error: "Missing id" }, { status: 400 });

    const body = (await req.json().catch(() => ({}))) as Partial<{ status: AllowedStatus }>;
    const allowed: AllowedStatus[] = ["wishlist", "reading", "completed"];
    if (!body.status || !allowed.includes(body.status)) {
      return NextResponse.json<JsonError>({ error: "Invalid status" }, { status: 400 });
    }

    const { error } = await serverSupabase.from("books").update({ status: body.status }).eq("id", id);
    if (error) return NextResponse.json<JsonError>({ error: error.message }, { status: 500 });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown server error";
    return NextResponse.json<JsonError>({ error: msg }, { status: 500 });
  }
}

// DELETE /api/books/:id  -> delete a book
export async function DELETE(req: Request, ctx: RouteCtx) {
  try {
    const { id: pathId } = await ctx.params;          // ⬅️ await the promise
    const id = pathId || fallbackId(req);
    if (!id) return NextResponse.json<JsonError>({ error: "Missing id" }, { status: 400 });

    const { error } = await serverSupabase.from("books").delete().eq("id", id);
    if (error) return NextResponse.json<JsonError>({ error: error.message }, { status: 500 });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown server error";
    return NextResponse.json<JsonError>({ error: msg }, { status: 500 });
  }
}
