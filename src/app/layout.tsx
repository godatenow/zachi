import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'צחי חן | מערכות יחסים',
  description: 'מאמרים וספר על דפוסים, תקשורת ובחירות רגשיות.',
  keywords: 'צחי חן, מערכות יחסים, דייטים, אהבה, ספר יחסים, בריאות רגשית, בחירה רומנטית, דפוסי יחסים',
  authors: [{ name: 'צחי חן' }],
  creator: 'צחי חן',
  publisher: 'צחי חן',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zachi.co.il'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'צחי חן | מערכות יחסים',
    description: 'מאמרים וספר על דפוסים, תקשורת ובחירות רגשיות.',
    url: 'https://zachi.co.il',
    siteName: 'צחי חן',
    locale: 'he_IL',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'צחי חן - מאמן יחסים ומחבר',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'צחי חן | מאמן יחסים ומחבר "מדייטים לאהבה"',
    description: 'כלים מעשיים ליחסים בריאים ובחירות רגשיות בוגרות.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <meta name="theme-color" content="#8b6e53" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background text-primary antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
