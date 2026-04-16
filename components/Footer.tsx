import Link from "next/link";

const shopLinks = [
  { label: "Pure Honey", href: "/products?category=pure" },
  { label: "Flavoured Honey", href: "/products?category=flavoured" },
  { label: "Gift Sets", href: "/products" },
  { label: "Bestsellers", href: "/products" },
];

const companyLinks = [
  { label: "Our Story", href: "#our-story" },
  { label: "Blog", href: "#" },
  { label: "Sustainability", href: "#" },
  { label: "Press", href: "#" },
];

const supportLinks = [
  { label: "FAQ", href: "#" },
  { label: "Shipping & Returns", href: "#" },
  { label: "Track Order", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid md:grid-cols-4 gap-10 py-16 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-display text-2xl font-bold">
              Symph<span className="text-gold">oney</span>
            </Link>
            <p className="text-cream/50 text-sm mt-3 leading-relaxed max-w-[200px]">
              Pure, small-batch honey from India&apos;s finest apiaries. Crafted
              with love. Bottled with care.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-honey transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-honey transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-honey transition-colors"
              >
                <XIcon />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-5 text-gold">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-cream/55 text-sm hover:text-honey transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-5 text-gold">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-cream/55 text-sm hover:text-honey transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-5 text-gold">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-cream/55 text-sm hover:text-honey transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[13px] text-cream/35">
          <p>&copy; 2024 Symphoney. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-honey transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-honey transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="14"
      height="14"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
