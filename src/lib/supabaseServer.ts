// src/lib/supabaseServer.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("Missing SUPABASE env vars on server (URL or SERVICE_ROLE_KEY).");
  throw new Error("Missing SUPABASE env vars on server (URL or SERVICE_ROLE_KEY).");
}

// Full-power server client (bypasses RLS). We must implement our own user scoping.
export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});

// For convenience if you referenced serverSupabase previously:
export const serverSupabase = supabaseAdmin;
