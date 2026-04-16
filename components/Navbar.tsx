"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream shadow-sm border-b border-border-warm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-honey rounded-full flex items-center justify-center flex-shrink-0">
              <HexIcon />
            </div>
            <span
              className={`font-display text-2xl font-bold tracking-tight transition-colors ${
                scrolled ? "text-charcoal" : "text-charcoal"
              }`}
            >
              Symph<span className="text-honey">oney</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Products", href: "/products" },
              { label: "Pure Honey", href: "/products?category=pure" },
              { label: "Flavoured Honey", href: "/products?category=flavoured" },
              { label: "Our Story", href: "#our-story" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium text-warm-brown hover:text-honey transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Action icons */}
          <div className="flex items-center gap-4">
            <button
              className="text-warm-brown hover:text-honey transition-colors"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
            <button
              className="relative text-warm-brown hover:text-honey transition-colors"
              aria-label="Cart"
            >
              <CartIcon />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-honey text-cream text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-warm-brown hover:text-honey transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-border-warm bg-cream">
            {[
              { label: "Products", href: "/products" },
              { label: "Pure Honey", href: "/products?category=pure" },
              { label: "Flavoured Honey", href: "/products?category=flavoured" },
              { label: "Our Story", href: "#our-story" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="block py-3 text-base font-medium text-warm-brown hover:text-honey transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function HexIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" x2="21" y1="6" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
