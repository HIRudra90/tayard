// src/lib/authServer.ts
import type { User } from "@supabase/supabase-js";
import { supabaseAdmin } from "./supabaseServer";

// Accepts either "Bearer <jwt>" or a raw token string
export async function getUserFromAuthHeader(authHeader?: string | null): Promise<User | null> {
  if (!authHeader) return null;

  let token = authHeader.trim();
  const parts = token.split(" ");
  if (parts.length === 2 && /^bearer$/i.test(parts[0])) {
    token = parts[1];
  }

  if (!token) return null;
  try {
    const { data, error } = await supabaseAdmin.auth.getUser(token);
    if (error || !data?.user) return null;
    return data.user;
  } catch {
    return null;
  }
}

// Lightweight cookie parser for server Request
function getCookie(header: string | null, key: string): string | undefined {
  if (!header) return;
  const cookies = header.split(";").map((c) => c.trim());
  for (const c of cookies) {
    const eq = c.indexOf("=");
    if (eq === -1) continue;
    const name = decodeURIComponent(c.slice(0, eq));
    if (name === key) return decodeURIComponent(c.slice(eq + 1));
  }
  return;
}

// Prefer header; fall back to Supabase cookies
export async function getUserFromRequest(req: Request): Promise<User | null> {
  // 1) Try Authorization header
  const byHeader = await getUserFromAuthHeader(req.headers.get("authorization"));
  if (byHeader) return byHeader;

  // 2) Try Supabase cookies
  const cookieHeader = req.headers.get("cookie");
  const token =
    getCookie(cookieHeader, "sb-access-token") ??
    getCookie(cookieHeader, "access_token");
  if (!token) return null;

  try {
    const { data, error } = await supabaseAdmin.auth.getUser(token);
    if (error || !data?.user) return null;
    return data.user;
  } catch {
    return null;
  }
}
