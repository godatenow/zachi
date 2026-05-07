import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'צחי חן | מאמן יחסים ומחבר "מדייטים לאהבה"',
  description: 'צחי חן מלווה אנשים לקשרים בריאים, בוגרים ויציבים עם כלים מעשיים, בהירות רגשית והבנה עמוקה של דפוסי בחירה.',
  keywords: 'צחי חן, מאמן יחסים, מערכות יחסים, דייטים, אהבה, ספר יחסים, בריאות רגשית',
  openGraph: {
    title: 'צחי חן | מאמן יחסים ומחבר "מדייטים לאהבה"',
    description: 'הכוונה מקצועית לבחירות רומנטיות בוגרות ובריאות.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-cream text-dark">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
