'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAVIGATION_LINKS, CONTACT_INFO, CTA_LABELS } from '@/constants/config';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 border-b border-[#E7D9C9] backdrop-blur-sm">
      <div className="container-main flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-2xl font-semibold text-dark tracking-tight">
            צחי חן
          </Link>
          <span className="hidden md:inline-block text-sm text-gray-600">
            מאמן ויועץ למערכות יחסים | מחבר
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-dark">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
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
          className="md:hidden flex flex-col gap-2 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-dark block"></span>
          <span className="w-6 h-0.5 bg-dark block"></span>
          <span className="w-6 h-0.5 bg-dark block"></span>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t border-[#E7D9C9] bg-white">
          <div className="container-main py-4 flex flex-col gap-4 text-dark">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-2xl px-4 py-3 hover:bg-cream transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center mt-2"
            >
              {CTA_LABELS.scheduleCall}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
