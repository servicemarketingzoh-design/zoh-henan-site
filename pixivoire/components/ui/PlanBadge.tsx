const planConfig = {
  FREE: { label: 'Gratuit', bg: '#6B7280' },
  PRO: { label: 'Pro', bg: '#2563EB' },
  STUDIO: { label: 'Studio', bg: '#7C3AED' },
}

export function PlanBadge({ plan, size = 'sm' }: { plan: 'FREE' | 'PRO' | 'STUDIO'; size?: 'sm' | 'md' }) {
  const config = planConfig[plan]
  const padding = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
  return (
    <span className={`inline-flex items-center rounded-full font-semibold text-white ${padding}`} style={{ backgroundColor: config.bg }}>
      {config.label}
    </span>
  )
}
