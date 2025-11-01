// src/app/api/books/[id]/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { serverSupabase } from "@/lib/supabaseServer";
import { getUserFromAuthHeader } from "@/lib/authServer";

type RouteCtx = { params: Promise<{ id: string }> };
type JsonError = { error: string };
type AllowedStatus = "wishlist" | "reading" | "completed";

// PATCH /api/books/:id
export async function PATCH(req: Request, ctx: RouteCtx) {
  try {
    const user = await getUserFromAuthHeader(req.headers.get("authorization") ?? undefined);
    if (!user) return NextResponse.json<JsonError>({ error: "Unauthorized" }, { status: 401 });

    const { id } = await ctx.params;
    if (!id) return NextResponse.json<JsonError>({ error: "Missing id" }, { status: 400 });

    const body = (await req.json().catch(() => ({}))) as Partial<{ status: AllowedStatus }>;
    const allowed: AllowedStatus[] = ["wishlist", "reading", "completed"];
    if (!body.status || !allowed.includes(body.status)) {
      return NextResponse.json<JsonError>({ error: "Invalid status" }, { status: 400 });
    }

    const { error } = await serverSupabase
      .from("books")
      .update({ status: body.status })
      .eq("id", id)
      .eq("user_id", user.id);

    if (error) return NextResponse.json<JsonError>({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown server error";
    return NextResponse.json<JsonError>({ error: msg }, { status: 500 });
  }
}

// DELETE /api/books/:id
export async function DELETE(req: Request, ctx: RouteCtx) {
  try {
    const user = await getUserFromAuthHeader(req.headers.get("authorization") ?? undefined);
    if (!user) return NextResponse.json<JsonError>({ error: "Unauthorized" }, { status: 401 });

    const { id } = await ctx.params;
    if (!id) return NextResponse.json<JsonError>({ error: "Missing id" }, { status: 400 });

    const { error } = await serverSupabase
      .from("books")
      .delete()
      .eq("id", id)
      .eq("user_id", user.id);

    if (error) return NextResponse.json<JsonError>({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown server error";
    return NextResponse.json<JsonError>({ error: msg }, { status: 500 });
  }
}
