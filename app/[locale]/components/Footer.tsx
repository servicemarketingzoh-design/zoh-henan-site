"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LOGO + PRÉSENTATION */}
        <div className="lg:col-span-1">
          <Image
            src="/images/logo.png"
            alt="Zoh-Henan Immobilier"
            width={130}
            height={45}
            className="object-contain mb-4 brightness-0 invert"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            Promoteur immobilier ivoirien<br />Constructeur agréé
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Navigation</h4>
          <ul className="space-y-2">
            {[
              { href: "/accueil", label: "Accueil" },
              { href: "/mission", label: "Notre Mission" },
              { href: "/proprietes", label: "Nos Propriétés" },
              { href: "/galerie", label: "Galerie" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-400 text-sm hover:text-[#1e5d2e] transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-gray-400 text-sm">
              <Phone size={15} className="text-[#1e5d2e] mt-0.5 shrink-0" />
              <span>(+225) 27 22 49 67 39<br />(+225) 07 16 17 17 17</span>
            </li>
            <li className="flex items-start gap-2 text-gray-400 text-sm">
              <Mail size={15} className="text-[#1e5d2e] mt-0.5 shrink-0" />
              <a href="mailto:contact@zoh-henan.com" className="hover:text-[#1e5d2e] transition-colors">
                contact@zoh-henan.com
              </a>
            </li>
            <li className="flex items-start gap-2 text-gray-400 text-sm">
              <MapPin size={15} className="text-[#1e5d2e] mt-0.5 shrink-0" />
              <span>Abidjan, Cocody<br />Faya-Cité SIR</span>
            </li>
          </ul>
        </div>

        {/* WHATSAPP + PROJET */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Nous écrire</h4>
          <p className="text-gray-400 text-sm mb-4">Disponibles du lundi au vendredi, de 8h à 18h.</p>
          <a
            href="https://wa.me/2250716171717"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white text-sm font-semibold px-4 py-3 rounded transition-colors duration-200"
          >
            <MessageCircle size={16} />
            Écrire sur WhatsApp
          </a>
        </div>
      </div>

      {/* BAS DU FOOTER */}
      <div className="border-t border-gray-800 px-6 sm:px-12 lg:px-20 py-5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} ZOH-HENAN Immobilier. Tous droits réservés.</p>
          <p>Abidjan, Côte d'Ivoire</p>
        </div>
      </div>
    </footer>
  );
}
