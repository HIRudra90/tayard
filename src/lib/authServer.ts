import { supabaseAdmin } from "./supabaseServer";
import type { User } from "@supabase/supabase-js";

export async function getUserFromAuthHeader(authHeader?: string): Promise<User | null> {
  if (!authHeader) return null;
  const m = authHeader.match(/^Bearer (.+)$/);
  if (!m) return null;
  const token = m[1];

  try {
    // supabaseAdmin.auth.getUser expects an access token
    const { data, error } = await supabaseAdmin.auth.getUser(token);
    if (error || !data?.user) return null;
    return data.user;
  } catch (err) {
    console.error("getUserFromAuthHeader error", err);
    return null;
  }
}
