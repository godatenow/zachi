import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'צחי חן | מאמן יחסים ומחבר "מדייטים לאהבה"',
  description: 'צחי חן מלווה אנשים לקשרים בריאים, בוגרים ויציבים — דרך כלים מעשיים, בהירות רגשית והבנה עמוקה של דפוסי בחירה. הכוונה מקצועית לבחירות רומנטיות בוגרות ובריאות.',
  keywords: 'צחי חן, מאמן יחסים, מערכות יחסים, דייטים, אהבה, ספר יחסים, בריאות רגשית, בחירה רומנטית, דפוסי יחסים',
  authors: [{ name: 'צחי חן' }],
  creator: 'צחי חן',
  publisher: 'צחי חן',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zachi-hen.com'), // TODO: Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'צחי חן | מאמן יחסים ומחבר "מדייטים לאהבה"',
    description: 'הכוונה מקצועית לבחירות רומנטיות בוגרות ובריאות. כלים מעשיים לקשרים משמעותיים.',
    url: 'https://zachi-hen.com', // TODO: Replace with actual domain
    siteName: 'צחי חן - מאמן יחסים',
    locale: 'he_IL',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // TODO: Add Open Graph image
        width: 1200,
        height: 630,
        alt: 'צחי חן - מאמן יחסים ומחבר',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'צחי חן | מאמן יחסים ומחבר "מדייטים לאהבה"',
    description: 'הכוונה מקצועית לבחירות רומנטיות בוגרות ובריאות.',
    images: ['/og-image.jpg'], // TODO: Add Twitter image
    creator: '@zachi_hen', // TODO: Replace with actual Twitter handle
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
  verification: {
    google: 'TODO: Add Google verification code',
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
      </head>
      <body className="min-h-screen bg-[#faf2e8] text-[#2c2418] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
