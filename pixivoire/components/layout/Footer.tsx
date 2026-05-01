import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-auto border-t py-10 px-4" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <span className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-primary)' }}>PIXIVOIRE</span>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              La plateforme ivoirienne de galerie photo pour les photographes professionnels.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Produit</h3>
            <ul className="space-y-2">
              {[{ href: '/tarifs', label: 'Tarifs' }, { href: '/inscription', label: 'Créer un compte' }, { href: '/connexion', label: 'Connexion' }].map(({ href, label }) => (
                <li key={href}><Link href={href} className="text-sm hover:opacity-70" style={{ color: 'var(--text-secondary)' }}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Légal</h3>
            <ul className="space-y-2">
              {[{ href: '/mentions-legales', label: 'Mentions légales' }, { href: '/confidentialite', label: 'Confidentialité' }, { href: '/cgu', label: 'CGU' }].map(({ href, label }) => (
                <li key={href}><Link href={href} className="text-sm hover:opacity-70" style={{ color: 'var(--text-secondary)' }}>{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: 'var(--border-color)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>© {new Date().getFullYear()} Pixivoire. Fait avec ❤️ en Côte d'Ivoire.</p>
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Paiement sécurisé via CinetPay</span>
        </div>
      </div>
    </footer>
  )
}
