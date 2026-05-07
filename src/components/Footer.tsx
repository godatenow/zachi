import Link from 'next/link';
import { CONTACT_INFO, NAVIGATION_LINKS } from '@/constants/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#2c2418] via-[#241e18] to-[#1f1913] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a140e]/30 via-transparent to-[#2c2418]/20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#8b6e53]/8 to-transparent rounded-full blur-3xl" />
      <div className="container-main py-20 lg:py-24 relative">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr] mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-white tracking-tight">צחי חן</h3>
            <p className="max-w-md text-base leading-[1.6] text-[#d4b48b]">
              מאמן ויועץ למערכות יחסים, מחבר ומלווה לאנשים שמחפשים לבנות מערכת יחסים משמעותית עם בחירות חכמות. אני מאמין שכל בחירה רומנטית היא הזדמנות לצמיחה אמיתית.
            </p>
            <p className="text-[#c4a484] italic text-sm leading-[1.5]">
              &ldquo;הקשרים הטובים ביותר נבנים מתוך בחירה מודעת, לא מתוך תשוקה חולפת.&rdquo;
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-8 text-[#d4b48b] text-xl">קישורים</h4>
            <ul className="space-y-4 text-base text-[#c4a484]">
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
            <h4 className="font-semibold mb-8 text-[#d4b48b] text-xl">יצירת קשר</h4>
            <ul className="space-y-4 text-base text-[#c4a484]">
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block flex items-center gap-3">
                  <span className="text-lg">📞</span>
                  <span>TODO: הוסף מספר טלפון</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block flex items-center gap-3">
                  <span className="text-lg">✉️</span>
                  <span>TODO: הוסף כתובת אימייל</span>
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block flex items-center gap-3">
                  <span className="text-lg">💬</span>
                  <span>TODO: הוסף קישור WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3f3129]/50 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between text-sm text-[#b7a68c]">
            <p>© {currentYear} צחי חן. כל הזכויות שמורות.</p>
            <div className="flex flex-wrap gap-8">
              <Link href="#" className="hover:text-[#d4b48b] transition-colors">
                תנאי שימוש
              </Link>
              <Link href="#" className="hover:text-[#d4b48b] transition-colors">
                מדיניות פרטיות
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
