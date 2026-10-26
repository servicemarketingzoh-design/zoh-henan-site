"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartContext";

type NavLink = {
  href: string;
  label: string;
  dropdown?: { href: string; label: string }[];
};

const navLinks: NavLink[] = [
  { href: "/", label: "Accueil" },
  {
    href: "/mission",
    label: "Chez Zoh",
    dropdown: [
      { href: "/mission#histoire", label: "Notre histoire" },
      { href: "/mission#mission", label: "Notre mission" },
      { href: "/mission#valeurs", label: "Nos valeurs" },
      { href: "/mission#vision", label: "Notre vision" },
      { href: "/mission#slogan", label: "Notre slogan" },
    ],
  },
  { href: "/proprietes", label: "Nos Propriétés" },
  { href: "/galerie", label: "Galerie" },
  { href: "/actualites", label: "Actualités" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  // Le chemin contient la langue (/fr/mission) : on la retire pour comparer aux liens.
  const { locale = "fr" } = useParams<{ locale?: string }>();
  // Préfixe la langue pour éviter la redirection (qui ferait perdre l'ancre #section).
  const withLocale = (href: string) => `/${locale}${href === "/" ? "/accueil" : href}`;
  const pathname = usePathname().replace(/^\/(fr|en)(?=\/|$)/, "") || "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between pb-12 pt-10 px-10 h-[70px] bg-white border-b-[3px] border-[#1e5d2e] transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      {/* LOGO — remplace /public/logo.png par ton image */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Zoh-Henan Immobilier"
          width={140}
          height={50}
          className="object-contain"
          priority
        />
      </Link>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map(({ href, label, dropdown }) => {
          const isActive = href === "/" ? pathname === "/" || pathname === "/accueil" : pathname.startsWith(href);

          if (dropdown) {
            const isParentActive = isActive;
            return (
              <div
                key={href}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  className={`relative flex items-center gap-1 text-[12.5px] font-semibold tracking-wide uppercase px-3 py-2 rounded transition-all duration-200 cursor-pointer bg-transparent border-none ${
                    isParentActive ? "text-[#1e5d2e]" : "text-gray-500 hover:text-[#1e5d2e] hover:bg-[#1e5d2e]/10"
                  }`}
                >
                  {label}
                  <span style={{ display: "inline-block", transition: "transform 0.2s", transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)", fontSize: 10 }}>▾</span>
                  {isParentActive && <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#1e5d2e] rounded" />}
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 pt-1 w-56 z-50">
                  <div className="bg-white shadow-xl border-t-2 border-[#1e5d2e] rounded-b-lg overflow-hidden">
                    {dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={withLocale(item.href)}
                        onClick={() => setDropdownOpen(false)}
                        className={`block px-5 py-3 text-[12.5px] font-medium transition-colors duration-150 border-b border-gray-50 last:border-0 ${
                          "text-gray-600 hover:bg-[#1e5d2e]/10 hover:text-[#1e5d2e]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={href}
              href={withLocale(href)}
              className={`relative text-[12.5px] font-semibold tracking-wide uppercase px-3 py-2 rounded transition-all duration-200 ${
                isActive ? "text-[#1e5d2e]" : "text-gray-500 hover:text-[#1e5d2e] hover:bg-[#1e5d2e]/10"
              }`}
            >
              {label}
              {isActive && <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#1e5d2e] rounded" />}
            </Link>
          );
        })}
      </nav>

      {/* ICÔNE PANIER */}
      <Link href="/panier" className="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#1e5d2e]/10 transition-colors duration-200 mr-1">
        <ShoppingBag size={20} strokeWidth={1.8} className="text-[#1e5d2e]" />
        {count > 0 && (
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#1e5d2e] text-white text-[9px] font-black rounded-full flex items-center justify-center">
            {count}
          </span>
        )}
      </Link>

      {/* BURGER MOBILE */}
      <button className="md:hidden flex flex-col gap-[5px] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span className={`block w-6 h-[2px] bg-[#1e5d2e] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block w-6 h-[2px] bg-[#1e5d2e] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-[2px] bg-[#1e5d2e] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 right-0 bg-white shadow-xl border-t border-gray-100 md:hidden">
          {navLinks.map(({ href, label, dropdown }) => (
            <div key={href}>
              <Link
                href={withLocale(href)}
                onClick={() => setMenuOpen(false)}
                className={`block px-8 py-4 text-sm font-semibold tracking-wide uppercase border-b border-gray-50 ${
                  pathname === href ? "text-[#1e5d2e] bg-[#1e5d2e]/10" : "text-gray-600"
                }`}
              >
                {label}
              </Link>
              {dropdown && dropdown.map((item) => (
                <Link
                  key={item.href}
                  href={withLocale(item.href)}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-12 py-3 text-sm border-b border-gray-50 ${
                    "text-gray-500"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
