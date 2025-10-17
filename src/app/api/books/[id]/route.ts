import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseServer";
import { getUserFromAuthHeader } from "@/lib/authServer";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await getUserFromAuthHeader(req.headers.get("authorization") ?? undefined);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const id = params.id;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const { data: book, error: fetchErr } = await supabaseAdmin
      .from("books")
      .select("user_id")
      .eq("id", id)
      .single();

    if (fetchErr) return NextResponse.json({ error: fetchErr.message }, { status: 500 });
    if (!book) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (book.user_id !== user.id) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const { error } = await supabaseAdmin.from("books").delete().eq("id", id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return new NextResponse(null, { status: 204 });
  } catch (err: any) {
    console.error("DELETE /api/books/[id] error:", err);
    return NextResponse.json({ error: String(err?.message ?? err) }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await getUserFromAuthHeader(req.headers.get("authorization") ?? undefined);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const id = params.id;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const body = await req.json().catch(() => null);
    const { status } = body ?? {};

    const allowed = ["reading", "completed", "wishlist", "none"];
    if (!allowed.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const { data: book, error: fetchErr } = await supabaseAdmin
      .from("books")
      .select("user_id")
      .eq("id", id)
      .single();

    if (fetchErr) return NextResponse.json({ error: fetchErr.message }, { status: 500 });
    if (!book) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (book.user_id !== user.id) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const payload: any = { status: status === "none" ? null : status };
    const { error } = await supabaseAdmin.from("books").update(payload).eq("id", id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("PATCH /api/books/[id] error:", err);
    return NextResponse.json({ error: String(err?.message ?? err) }, { status: 500 });
  }
}
