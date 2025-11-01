// src/lib/authServer.ts
import type { User } from "@supabase/supabase-js";
import { supabaseAdmin } from "./supabaseServer";

/**
 * Reads "Authorization: Bearer <access_token>" and returns the Supabase user.
 * Returns null if missing/invalid.
 */
export async function getUserFromAuthHeader(authHeader?: string): Promise<User | null> {
  if (!authHeader?.toLowerCase().startsWith("bearer ")) return null;
  const jwt = authHeader.slice(7).trim();
  if (!jwt) return null;

  try {
    const { data, error } = await supabaseAdmin.auth.getUser(jwt);
    if (error) return null;
    return data.user ?? null;
  } catch {
    return null;
  }
}
