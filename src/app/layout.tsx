import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'צחי חן | מאמן יחסים',
  description: 'אתר של צחי חן - מאמן ויועץ למערכות יחסים, מחבר ודוד לאהבה וקשרים בריאים',
  keywords: 'צחי חן, מאמן יחסים, מנטור דייטים, קשרים בריאים, אהבה',
  openGraph: {
    title: 'צחי חן | מאמן יחסים',
    description: 'אתר של צחי חן - מאמן ויועץ למערכות יחסים',
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
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
