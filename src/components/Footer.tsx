import Link from 'next/link';
import { CONTACT_INFO, NAVIGATION_LINKS } from '@/constants/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-text-primary via-[#2a1f18] to-[#1f1813] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-text-primary/30 via-transparent to-text-primary/20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-brown/8 to-transparent rounded-full blur-3xl" />
      <div className="container-main py-20 lg:py-24 relative">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr] mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-white tracking-tight">צחי חן</h3>
            <p className="max-w-md text-base leading-[1.6] text-soft-gold">
              עוזר לאנשים להבין דפוסים, לדייק בחירות ולבנות קשרים יציבים יותר.
            </p>
            <p className="text-soft-gold/80 italic text-sm leading-[1.5]">
              &ldquo;הקשרים הטובים ביותר נבנים מתוך בחירה מודעת, לא מתוך תשוקה חולפת.&rdquo;
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-8 text-soft-gold text-xl">קישורים</h4>
            <ul className="space-y-4 text-base text-soft-gold/70">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-8 text-soft-gold text-xl">יצירת קשר</h4>
            <ul className="space-y-4 text-base text-soft-gold/70">
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block flex items-center gap-3">
                  <span className="text-lg">📞</span>
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block flex items-center gap-3">
                  <span className="text-lg">✉️</span>
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block flex items-center gap-3">
                  <span className="text-lg">💬</span>
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-soft-border/30 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between text-sm text-soft-gold/60">
            <p>© {currentYear} צחי חן. כל הזכויות שמורות.</p>
            <div className="flex flex-wrap gap-8 text-soft-gold/60">
              <span className="transition-colors">תנאי שימוש</span>
              <span className="transition-colors">מדיניות פרטיות</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
