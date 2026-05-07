import Link from 'next/link';
import { SITE_CONFIG, CONTACT_INFO, NAVIGATION_LINKS, SOCIAL_LINKS } from '@/constants/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container-main py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">{SITE_CONFIG.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">קישורים מהירים</h4>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">יצירת קשר</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-accent transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">עקבו אחרינו</h4>
            <div className="flex gap-4">
              {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors capitalize text-sm"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} {SITE_CONFIG.name}. כל הזכויות שמורות.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-accent transition-colors">
                תנאי שימוש
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                מדיניות פרטיות
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
