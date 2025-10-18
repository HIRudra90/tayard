// src/app/api/books/[id]/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("Missing SUPABASE env vars on server.");
  throw new Error("Missing SUPABASE env vars on server.");
}

const serverSupabase = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false } });

/** Resolve params which may be a plain object or a PromiseLike object. */
async function resolveParams(maybeParams: unknown): Promise<{ id?: string } | null> {
  if (!maybeParams) return null;
  // If it's promise-like, await it
  if (typeof maybeParams === "object" && maybeParams !== null && "then" in maybeParams) {
    try {
      const awaited = (maybeParams as PromiseLike<unknown>);
      const res = await awaited;
      return typeof res === "object" && res !== null ? (res as { id?: string }) : null;
    } catch {
      // fallthrough to treat as plain object
    }
  }
  return typeof maybeParams === "object" && maybeParams !== null ? (maybeParams as { id?: string }) : null;
}

export async function GET(_request: Request, context: { params?: unknown }) {
  try {
    const resolved = await resolveParams(context?.params);
    const id = resolved?.id;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const res = await serverSupabase.from("books").select("*").eq("id", id).maybeSingle();

    if (res.error) {
      console.error("Supabase GET by id error:", res.error);
      return NextResponse.json({ error: res.error.message }, { status: 500 });
    }

    if (!res.data) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(res.data, { status: 200 });
  } catch (err: unknown) {
    console.error("Unexpected error in /api/books/[id] GET:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function PATCH(request: Request, context: { params?: unknown }) {
  try {
    const resolved = await resolveParams(context?.params);
    const id = resolved?.id;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const raw = await request.json().catch(() => null);
    if (!raw || typeof raw !== "object") return NextResponse.json({ error: "Invalid body" }, { status: 400 });

    const body = raw as { status?: unknown; title?: unknown; author?: unknown };
    const updates: Record<string, unknown> = {};
    if (typeof body.status === "string") updates.status = body.status;
    if (typeof body.title === "string") updates.title = body.title;
    if (typeof body.author === "string") updates.author = body.author;

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
    }

    const res = await serverSupabase.from("books").update(updates).eq("id", id).select().maybeSingle();

    if (res.error) {
      console.error("Supabase PATCH error:", res.error);
      return NextResponse.json({ error: res.error.message }, { status: 500 });
    }

    return NextResponse.json(res.data ?? null, { status: 200 });
  } catch (err: unknown) {
    console.error("Unexpected error in /api/books/[id] PATCH:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: { params?: unknown }) {
  try {
    const resolved = await resolveParams(context?.params);
    const id = resolved?.id;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const res = await serverSupabase.from("books").delete().eq("id", id);

    if (res.error) {
      console.error("Supabase DELETE error:", res.error);
      return NextResponse.json({ error: res.error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: unknown) {
    console.error("Unexpected error in /api/books/[id] DELETE:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
