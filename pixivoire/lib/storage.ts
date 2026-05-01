import { supabaseAdmin, STORAGE_BUCKET, THUMBNAILS_BUCKET } from './supabase'

// Upload une photo vers Supabase Storage
export async function uploadPhoto(
  file: Buffer,
  path: string,
  contentType: string
): Promise<string> {
  const { error } = await supabaseAdmin.storage
    .from(STORAGE_BUCKET)
    .upload(path, file, { contentType, upsert: false })

  if (error) throw new Error(`Échec de l'upload : ${error.message}`)

  const { data } = supabaseAdmin.storage.from(STORAGE_BUCKET).getPublicUrl(path)
  return data.publicUrl
}

// Upload un thumbnail vers Supabase Storage
export async function uploadThumbnail(
  file: Buffer,
  path: string
): Promise<string> {
  const { error } = await supabaseAdmin.storage
    .from(THUMBNAILS_BUCKET)
    .upload(path, file, { contentType: 'image/jpeg', upsert: true })

  if (error) throw new Error(`Échec de l'upload thumbnail : ${error.message}`)

  const { data } = supabaseAdmin.storage.from(THUMBNAILS_BUCKET).getPublicUrl(path)
  return data.publicUrl
}

// Supprime une photo de Supabase Storage
export async function deletePhoto(path: string): Promise<void> {
  await supabaseAdmin.storage.from(STORAGE_BUCKET).remove([path])
}

// Supprime un thumbnail de Supabase Storage
export async function deleteThumbnail(path: string): Promise<void> {
  await supabaseAdmin.storage.from(THUMBNAILS_BUCKET).remove([path])
}

// Extrait le chemin relatif depuis une URL publique Supabase
export function extractPathFromUrl(url: string, bucket: string): string {
  const marker = `/storage/v1/object/public/${bucket}/`
  const idx = url.indexOf(marker)
  if (idx === -1) return url
  return url.slice(idx + marker.length)
}
