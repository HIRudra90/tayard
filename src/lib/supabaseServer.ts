import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error("Missing SUPABASE env vars on server (URL or SERVICE_ROLE_KEY).");
}

export const serverSupabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});
