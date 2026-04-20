"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "Our Noodles",href: "#noodles" },
  { label: "Menu",       href: "#menu" },
  { label: "Locations",  href: "#locations" },
  { label: "Food Truck", href: "#food-truck" },
  { label: "FAQ",        href: "#faq" },
  { label: "Contact Us", href: "#contact" },
  { label: "Order Online",href: "https://pos.chowbus.com/online-ordering/store/21094", external: true },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMobileLink = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d]/95 backdrop-blur-md shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 lg:h-18"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 leading-tight group"
          aria-label="Kungfu Noodles — home"
        >
          <Image
            src="/images/kungfu-noodle-logo.jpg"
            alt=""
            width={40}
            height={40}
            className="rounded-full group-hover:drop-shadow-lg transition-all duration-200"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg text-[#f5efe6] tracking-wide group-hover:text-[#cc2200] transition-colors duration-200">
              Kungfu Noodles
            </span>
            <span className="font-serif text-xs text-[#c9843a] tracking-widest">功夫小面</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6 list-none m-0 p-0">
          {navLinks.map((link) =>
            link.label === "Order Online" ? null : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-[#a89888] hover:text-[#f5efe6] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://pos.chowbus.com/online-ordering/store/21094"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-4 py-2 bg-[#cc2200] hover:bg-[#e02500] text-[#f5efe6] text-sm font-semibold rounded transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#cc2200] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
          >
            Order Now
          </a>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc2200]"
          >
            <span
              className={`block h-0.5 w-6 bg-[#f5efe6] transition-transform duration-200 origin-center ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#f5efe6] transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#f5efe6] transition-transform duration-200 origin-center ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-[#0d0d0d]/98 backdrop-blur-md border-t border-[#2a2a2a]`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col py-4 px-6 gap-1 list-none m-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMobileLink}
                  className="block py-3 text-base font-medium text-[#cc2200] hover:text-[#e02500] border-b border-[#2a2a2a] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  onClick={handleMobileLink}
                  className="block py-3 text-base font-medium text-[#f5efe6] hover:text-[#cc2200] border-b border-[#2a2a2a] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li className="pt-3">
            <a
              href="https://pos.chowbus.com/online-ordering/store/21094"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMobileLink}
              className="block w-full text-center py-3 bg-[#cc2200] hover:bg-[#e02500] text-[#f5efe6] font-semibold rounded transition-colors duration-200"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
