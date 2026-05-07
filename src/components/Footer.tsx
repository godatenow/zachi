import Link from 'next/link';
import { SITE_CONFIG, CONTACT_INFO, NAVIGATION_LINKS } from '@/constants/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-cream">
      <div className="container-main py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-secondary">{SITE_CONFIG.name}</h3>
            <p className="text-sm leading-7 text-[#e8d7c7] max-w-md">
              מאמן ויועץ למערכות יחסים שמאמין בבחירות בוגרות, בקשרים שיש להם יציבות ובעבודה שמבוססת על ניסיון אמיתי.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">קישורים</h4>
            <ul className="space-y-3 text-sm text-[#d9c8b8]">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">יצירת קשר</h4>
            <ul className="space-y-3 text-sm text-[#d9c8b8]">
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#5B4A40] pt-8">
          <div className="flex flex-col md:flex-row justify-between gap-4 text-sm text-[#b7a68c]">
            <p>© {currentYear} {SITE_CONFIG.name}. כל הזכויות שמורות.</p>
            <div className="flex flex-wrap gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                תנאי שימוש
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                מדיניות פרטיות
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
