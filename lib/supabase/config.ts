const DEFAULT_SUPABASE_URL = "https://eahogfbyorpqbpfltozs.supabase.co";
const DEFAULT_SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_r9a-fxQRZlk1wH7nO4XKmQ_R5SU87Wm";

export const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? DEFAULT_SUPABASE_URL;

export const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  DEFAULT_SUPABASE_PUBLISHABLE_KEY;

