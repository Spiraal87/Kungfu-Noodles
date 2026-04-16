import Link from "next/link";

const navLinks = [
  { label: "Menu",         href: "#menu" },
  { label: "Locations",    href: "#locations" },
  { label: "Food Truck",   href: "#food-truck" },
  { label: "Order Online", href: "https://pos.chowbus.com/online-ordering/store/21094", external: true },
  { label: "Instagram",    href: "https://www.instagram.com/kungfuarizona/", external: true },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#0d0d0d] border-t border-[#2a2a2a] pt-14 pb-8 px-4 sm:px-6"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand column */}
          <div className="sm:col-span-1">
            <Link
              href="/"
              className="inline-flex flex-col leading-tight mb-4 group"
              aria-label="Kungfu Noodles home"
            >
              <span className="font-serif font-bold text-xl text-[#f5efe6] group-hover:text-[#cc2200] transition-colors duration-200">
                Kungfu Noodles
              </span>
              <span
                className="font-serif text-xs text-[#c9843a] tracking-widest mt-0.5"
                lang="zh"
              >
                功夫小面
              </span>
            </Link>
            <p className="text-[#a89888] text-sm leading-relaxed max-w-xs">
              Hand-pulled lamian noodles. Every bowl a master&apos;s touch. Two Valley locations in
              Tempe &amp; Chandler, AZ.
            </p>
            <p className="text-[#a89888] text-xs mt-3">
              Gear available in store.
            </p>
          </div>

          {/* Nav links column */}
          <div>
            <h3 className="text-[#f5efe6] text-sm font-semibold mb-4 tracking-wide uppercase">
              Navigate
            </h3>
            <ul className="space-y-2 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a89888] hover:text-[#f5efe6] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[#a89888] hover:text-[#f5efe6] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Social column */}
          <div>
            <h3 className="text-[#f5efe6] text-sm font-semibold mb-4 tracking-wide uppercase">
              Connect
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-[#a89888] text-xs mb-0.5 uppercase tracking-widest">Tempe</p>
                <address className="not-italic text-[#a89888] text-sm leading-snug">
                  1845 E Broadway Rd Unit 127<br />
                  Tempe, AZ 85282
                </address>
                <a
                  href="tel:4802687331"
                  className="text-[#a89888] text-sm hover:text-[#f5efe6] transition-colors duration-200 block mt-1"
                >
                  (480) 268-7331
                </a>
              </div>

              <div>
                <p className="text-[#a89888] text-xs mb-0.5 uppercase tracking-widest">Chandler</p>
                <p className="text-[#a89888] text-sm">
                  Details coming soon
                </p>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/kungfuarizona/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Kungfu Noodles on Instagram @kungfuarizona"
                className="w-9 h-9 flex items-center justify-center border border-[#2a2a2a] rounded-lg text-[#a89888] hover:text-[#f5efe6] hover:border-[#cc2200] transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2a2a2a] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#a89888]">
          <p>
            &copy; 2026 Kungfu Noodles{" "}
            <span lang="zh">功夫小面</span>
            {" "}&nbsp;·&nbsp; Tempe &amp; Chandler AZ
          </p>
          <p>Every Bowl a Master&apos;s Touch</p>
        </div>
      </div>
    </footer>
  );
}
