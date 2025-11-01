// src/lib/supabaseAdmin.ts
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!url || !serviceKey) {
  throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY or URL for admin client.");
}

// Use this ONLY in trusted, server-side code (cron/jobs, backfills, webhooks)
export const supabaseAdmin = createClient(url, serviceKey, {
  auth: { persistSession: false },
});
