import { formaterTaille, calcPourcentageStockage } from '@/lib/utils'
import { STORAGE_LIMITS } from '@/lib/supabase'

export function StorageBar({ utilise, plan }: { utilise: bigint | number; plan: 'FREE' | 'PRO' | 'STUDIO' }) {
  const limite = STORAGE_LIMITS[plan]
  const pourcentage = calcPourcentageStockage(utilise, limite)
  const couleur = pourcentage >= 90 ? '#EF4444' : pourcentage >= 70 ? '#F59E0B' : 'var(--color-primary)'

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span style={{ color: 'var(--text-secondary)' }}>Stockage utilisé</span>
        <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
          {formaterTaille(utilise)} / {formaterTaille(limite)}
        </span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--border-color)' }}
        role="progressbar" aria-valuenow={pourcentage} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pourcentage}%`, backgroundColor: couleur }} />
      </div>
      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{pourcentage}% utilisé</p>
    </div>
  )
}
