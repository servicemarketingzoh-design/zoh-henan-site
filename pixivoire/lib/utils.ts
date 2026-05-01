import slugify from 'slugify'

// Génère un slug unique à partir d'un titre
export function genererSlug(titre: string): string {
  const base = slugify(titre, { lower: true, strict: true, locale: 'fr' })
  const suffixe = Math.random().toString(36).substring(2, 8)
  return `${base}-${suffixe}`
}

// Formate une taille en octets vers un format lisible
export function formaterTaille(bytes: bigint | number): string {
  const b = typeof bytes === 'bigint' ? Number(bytes) : bytes
  if (b < 1024) return `${b} o`
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} Ko`
  if (b < 1024 * 1024 * 1024) return `${(b / (1024 * 1024)).toFixed(1)} Mo`
  return `${(b / (1024 * 1024 * 1024)).toFixed(2)} Go`
}

// Calcule le pourcentage de stockage utilisé
export function calcPourcentageStockage(utilise: bigint | number, limite: number): number {
  const u = typeof utilise === 'bigint' ? Number(utilise) : utilise
  return Math.min(100, Math.round((u / limite) * 100))
}

// Formate une date en français
export function formaterDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// Valide qu'un fichier est une image acceptée
export function estImageValide(type: string): boolean {
  return ['image/jpeg', 'image/png', 'image/webp'].includes(type)
}

// Retourne la couleur CSS du badge plan
export function couleurPlan(plan: string): string {
  switch (plan) {
    case 'PRO': return 'bg-blue-500 text-white'
    case 'STUDIO': return 'bg-purple-600 text-white'
    default: return 'bg-gray-400 text-white'
  }
}
