'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAVIGATION_LINKS, CONTACT_INFO, CTA_LABELS } from '@/constants/config';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container-main flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-primary hover:text-opacity-80">
          צחי חן
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-dark hover:text-primary font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-dark block"></span>
          <span className="w-6 h-0.5 bg-dark block"></span>
          <span className="w-6 h-0.5 bg-dark block"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-gray-200">
          <div className="container-main py-4 flex flex-col gap-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark hover:text-primary font-medium transition-colors"
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
