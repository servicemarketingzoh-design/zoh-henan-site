import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Placeholder pour éviter les erreurs au build quand les env vars ne sont pas définies
const PLACEHOLDER_URL = 'https://placeholder.supabase.co'
const PLACEHOLDER_KEY = 'placeholder-key'

function getUrl() { return process.env.NEXT_PUBLIC_SUPABASE_URL || PLACEHOLDER_URL }
function getAnonKey() { return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || PLACEHOLDER_KEY }
function getServiceKey() { return process.env.SUPABASE_SERVICE_ROLE_KEY || PLACEHOLDER_KEY }

// Client public (côté navigateur)
let _supabase: SupabaseClient | null = null
function getSupabaseClient() {
  if (!_supabase) _supabase = createClient(getUrl(), getAnonKey())
  return _supabase
}

// Proxy public utilisable dans les composants client
export const supabase = new Proxy({} as SupabaseClient, {
  get(_, prop) {
    return (getSupabaseClient() as unknown as Record<string | symbol, unknown>)[prop]
  },
})

// Client admin avec droits étendus (côté serveur uniquement)
let _supabaseAdmin: SupabaseClient | null = null
function getAdmin() {
  if (!_supabaseAdmin) {
    _supabaseAdmin = createClient(getUrl(), getServiceKey(), {
      auth: { autoRefreshToken: false, persistSession: false },
    })
  }
  return _supabaseAdmin
}

export const supabaseAdmin = new Proxy({} as SupabaseClient, {
  get(_, prop) {
    return (getAdmin() as unknown as Record<string | symbol, unknown>)[prop]
  },
})

export const STORAGE_BUCKET = 'photos'
export const THUMBNAILS_BUCKET = 'thumbnails'

// Limites de stockage par plan (en octets)
export const STORAGE_LIMITS = {
  FREE: 2 * 1024 * 1024 * 1024,    // 2 Go
  PRO: 20 * 1024 * 1024 * 1024,    // 20 Go
  STUDIO: 60 * 1024 * 1024 * 1024, // 60 Go
}

// Génère l'URL publique d'un fichier dans Supabase Storage
export function getPublicUrl(bucket: string, path: string): string {
  const { data } = getAdmin().storage.from(bucket).getPublicUrl(path)
  return data.publicUrl
}
