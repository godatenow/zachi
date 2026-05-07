import Link from 'next/link';
import { SITE_CONFIG, CONTACT_INFO, NAVIGATION_LINKS } from '@/constants/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2b1f18] text-[#f5e8d9]">
      <div className="container-main py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.85fr_0.85fr] mb-12">
          <div className="space-y-5">
            <h3 className="text-3xl font-semibold text-[#f7e5d6]">{SITE_CONFIG.name}</h3>
            <p className="max-w-md text-sm leading-7 text-[#d8c5ac]">
              מאמן ויועץ למערכות יחסים, מחבר ומלווה לאנשים שמחפשים לבנות מערכת יחסים משמעותית עם בחירות חכמות.
            </p>
            <p className="text-sm text-[#d2bda6]">
              אני מאמין בקשר שמתחיל בבחירה נכונה, ושומר על עצמו גם ברגעים הפחות רומנטיים.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#e6c89a]">קישורים</h4>
            <ul className="space-y-3 text-sm text-[#d2bda6]">
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
            <h4 className="font-semibold mb-4 text-[#e6c89a]">יצירת קשר</h4>
            <ul className="space-y-3 text-sm text-[#d2bda6]">
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

        <div className="border-t border-[#3f3129] pt-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between text-sm text-[#b7a68c]">
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
