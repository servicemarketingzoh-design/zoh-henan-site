import Image from "next/image";
import { login } from "../actions";

const errors: Record<string, string> = {
  identifiants: "Adresse e-mail ou mot de passe incorrect.",
  acces: "Ce compte n'est pas autorisé à gérer les actualités.",
};

export default async function AdminLoginPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { locale } = await params;
  const { error } = await searchParams;

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <Image src="/images/logo.png" alt="Zoh-Henan Immobilier" width={150} height={55} className="mx-auto mb-8 object-contain" priority />
        <p className="text-center text-xs font-bold uppercase tracking-[3px] text-[#1e5d2e] mb-2">Administration</p>
        <h1 className="text-2xl font-black text-gray-900 text-center mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Gestion des actualités</h1>
        <p className="text-sm text-gray-500 text-center mb-8">Connectez-vous pour ajouter et publier un article.</p>
        {error && errors[error] && <p className="mb-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{errors[error]}</p>}
        <form action={login} className="space-y-5">
          <input type="hidden" name="locale" value={locale} />
          <label className="block text-sm font-semibold text-gray-700">Adresse e-mail
            <input name="email" type="email" required autoComplete="email" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#1e5d2e] focus:ring-2 focus:ring-[#1e5d2e]/15" />
          </label>
          <label className="block text-sm font-semibold text-gray-700">Mot de passe
            <input name="password" type="password" required autoComplete="current-password" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#1e5d2e] focus:ring-2 focus:ring-[#1e5d2e]/15" />
          </label>
          <button type="submit" className="w-full rounded-xl bg-[#1e5d2e] px-5 py-3.5 font-bold text-white transition hover:bg-[#174923]">Se connecter</button>
        </form>
      </div>
    </main>
  );
}

