// src/lib/supabaseServer.ts

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Fail fast (optional, but helpful)
if (!supabaseUrl || !serviceRoleKey) {
  console.error("Missing SUPABASE env vars on server (URL or SERVICE_ROLE_KEY).");
  throw new Error("Missing SUPABASE env vars on server (URL or SERVICE_ROLE_KEY).");
}

// Named export used by authServer.ts
export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});

export const serverSupabase = supabaseAdmin;