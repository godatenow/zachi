'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAVIGATION_LINKS, CONTACT_INFO, CTA_LABELS } from '@/constants/config';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e8d5b7]/40 shadow-[0_2px_16px_-8px_rgba(44,36,24,0.08)]">
      <div className="container-main flex items-center justify-between gap-6 py-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-semibold text-[#2c2418] tracking-tight hover:text-[#8b6e53] transition-colors">
            צחי חן
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-base font-medium text-[#2c2418]">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative hover:text-[#8b6e53] transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#8b6e53] before:transition-all before:duration-300 hover:before:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {CTA_LABELS.scheduleCall}
          </a>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-3 rounded-lg hover:bg-[#f8f0e4] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-[#2c2418] block transition-all duration-300" style={{ transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}></span>
          <span className="w-6 h-0.5 bg-[#2c2418] block transition-all duration-300" style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
          <span className="w-6 h-0.5 bg-[#2c2418] block transition-all duration-300" style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}></span>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden border-t border-[#e8d5b7]/40 bg-white/98 backdrop-blur-sm shadow-lg">
          <div className="container-main py-6 flex flex-col gap-4 text-[#2c2418]">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-4 py-3 hover:bg-[#f8f0e4] transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center mt-4"
            >
              {CTA_LABELS.scheduleCall}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
