import Link from 'next/link';
import { CONTACT_INFO, NAVIGATION_LINKS } from '@/constants/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#2b1f18] via-[#241a14] to-[#1f1510] text-[#f5e8d9] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a120d]/20 via-transparent to-[#2b1f18]/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#cfa16f]/5 to-transparent rounded-full -translate-y-48 translate-x-48" />
      <div className="container-main py-16 lg:py-20 relative">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.85fr_0.85fr] mb-12">
          <div className="space-y-5">
            <h3 className="text-3xl font-semibold text-[#f7e5d6] tracking-tight">צחי חן</h3>
            <p className="max-w-md text-sm leading-7 text-[#d8c5ac]">
              מאמן ויועץ למערכות יחסים, מחבר ומלווה לאנשים שמחפשים לבנות מערכת יחסים משמעותית עם בחירות חכמות. אני מאמין שכל בחירה רומנטית היא הזדמנות לצמיחה אמיתית.
            </p>
            <p className="text-sm text-[#d2bda6] italic">
              &ldquo;הקשרים הטובים ביותר נבנים מתוך בחירה מודעת, לא מתוך תשוקה חולפת.&rdquo;
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-[#e6c89a] text-lg">קישורים</h4>
            <ul className="space-y-4 text-sm text-[#d2bda6]">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#f7e5d6] transition-all duration-300 hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-[#e6c89a] text-lg">יצירת קשר</h4>
            <ul className="space-y-4 text-sm text-[#d2bda6]">
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#f7e5d6] transition-all duration-300 hover:translate-x-1 inline-block">
                  📞 {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#f7e5d6] transition-all duration-300 hover:translate-x-1 inline-block">
                  ✉️ {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[#f7e5d6] transition-all duration-300 hover:translate-x-1 inline-block">
                  💬 WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3f3129]/50 pt-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between text-sm text-[#b7a68c]">
            <p>© {currentYear} צחי חן. כל הזכויות שמורות.</p>
            <div className="flex flex-wrap gap-6">
              <Link href="#" className="hover:text-[#f7e5d6] transition-colors">
                תנאי שימוש
              </Link>
              <Link href="#" className="hover:text-[#f7e5d6] transition-colors">
                מדיניות פרטיות
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
