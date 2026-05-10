import { existsSync } from 'fs';
import { join } from 'path';
import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import ArticleCard from '@/components/ArticleCard';
import { CONTACT_INFO, CTA_LABELS } from '@/constants/config';
import { getAllArticles } from '@/data/articles';

const bookMockupPath = join(process.cwd(), 'public', 'images', 'book-mockup.png');
const hasBookMockup = existsSync(bookMockupPath);

export const metadata: Metadata = {
  title: 'צחי חן | מערכות יחסים',
  description: 'מאמרים וספר על דפוסים, תקשורת ובחירות רגשיות.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'צחי חן | מערכות יחסים',
    description: 'מאמרים וספר על דפוסים, תקשורת ובחירות רגשיות.',
    url: 'https://zachi.co.il',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'צחי חן | מערכות יחסים',
    description: 'מאמרים וספר על דפוסים, תקשורת ובחירות רגשיות.',
  },
};

export default function Home() {
  const recentArticles = getAllArticles().slice(0, 3);

  return (
    <div>
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-[#fbf1e7] min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[#fbf1e7]" />
        <div className="absolute -top-10 right-0 w-80 h-80 bg-[#e6d5c2]/70 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d6b48a]/20 rounded-full blur-3xl" />

        <div className="container-main relative">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center min-h-[80vh]">
            <div className="max-w-3xl lg:max-w-2xl">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#8b6e53]/30" />
                <div className="pl-8 sm:pl-12">
                  <p className="mb-8 text-xs font-semibold uppercase tracking-[0.32em] text-[#6b4a34] opacity-80">
                    צחי חן
                  </p>
                  <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-bold text-[#1f1a16] leading-[0.9] tracking-[-0.06em] mb-16">
                    להבין מה באמת
                    <br />
                    מנהל
                    <br />
                    מערכות יחסים.
                  </h1>

                  <div className="signature-divider mb-16" />

                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <CTAButton
                      href="/articles"
                      label="לקריאת המאמרים"
                      variant="primary"
                      className="px-10 py-5 text-lg font-semibold"
                    />
                    <CTAButton
                      href="/about"
                      label="להכיר את צחי"
                      variant="ghost"
                      className="px-10 py-5 text-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[600px] h-[600px] hero-visual cinematic-frame">
                {hasBookMockup ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src="/images/book-mockup.png"
                    alt="מדייטים לאהבה - ספר"
                    className="w-full h-full object-contain rounded-[2.5rem] shadow-[0_32px_80px_-50px_rgba(44,36,24,0.25)]"
                  />
                ) : (
                  <div className="relative h-full w-full rounded-[2.5rem] bg-gradient-to-br from-[#fff9f2] to-[#f8f0e4] shadow-[0_32px_80px_-50px_rgba(44,36,24,0.25)] border border-[#e6d2bb]/40 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#f4e8dd]/60 via-transparent to-[#fff9f2]/40" />
                    <div className="absolute left-12 top-12 w-20 h-20 rounded-full bg-[#d6b48a]/20" />
                    <div className="absolute left-16 top-16 w-32 h-2 rounded-full bg-[#d6b48a]/60" />
                    <div className="absolute left-16 top-24 w-28 h-2 rounded-full bg-[#d6b48a]/40" />
                    <div className="absolute inset-x-16 top-40 bottom-20 rounded-[2rem] bg-[#f4e8dd]/80 p-10 flex flex-col justify-between">
                      <div>
                        <p className="text-base uppercase tracking-[0.24em] text-[#6b4a34] mb-6 font-semibold">מדייטים לאהבה</p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#2c2418] leading-[1.02] mb-6">
                          מדריך מעשי להבנת דפוסים,
                          <br />
                          תקשורת וזוגיות.
                        </h2>
                        <p className="text-base text-[#5c4b42] leading-[1.7] max-w-sm">
                          מהדייט הראשון ועד לקשר שנשאר יציב לאורך זמן.
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-12 left-16 right-16 h-1.5 rounded-full bg-[#d6b48a]/50" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#fbf1e7]">
        <div className="container-main max-w-4xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl text-[#4f453d] leading-[1.4] md:leading-[1.3] mb-4">
            דייטינג הוא חיפוש. אהבה היא בנייה.
          </p>
        </div>
      </section>

      {/* About Zachi Section */}
      <section className="section-padding bg-[#f7eee5] texture-overlay">
        <div className="container-main">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="max-w-3xl animate-fade-in-up">
              <span className="mb-6 text-sm font-semibold text-[#6b4a34] tracking-[0.16em] block">
                על צחי
              </span>
              <h2 className="section-title-left mb-8">
                העבודה שלי עוסקת ברגעים שבדרך כלל לא מדברים עליהם:
                <br />
                הפחדים, הדפוסים והבחירות שמעצבים מערכות יחסים מבפנים.
              </h2>
              <blockquote className="quote-block mb-10 max-w-2xl">
                “הבחירות הקטנות בשגרה הן אלה שמגדירות את הקשר שלכם.”
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/about" label="לקרוא עוד על צחי" variant="outline" />
                <CTAButton href={CONTACT_INFO.whatsapp} label="להתחיל לבחור אחרת" variant="primary" external />
              </div>
            </div>

            <div className="relative mx-auto max-w-md animate-subtle-float">
              <div className="rounded-[2rem] bg-[#e8ddd1] p-10 shadow-[0_18px_40px_-24px_rgba(44,36,24,0.12)]">
                <div className="text-[#2c2418] space-y-6">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#6b4a34]">צחי חן</p>
                  <h3 className="text-3xl font-semibold">לא ‘הכרה’, אלא ניסיון</h3>
                  <p className="text-base leading-[1.8] text-[#5c4b42]">
                    שנים של שיחות עם אנשים שרצו זוגיות, אבל מצאו את עצמם שוב ושוב באותה נקודה — זה מה שמביא את השפה של הספר.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-[#fbf1e7]">
        <div className="container-narrow">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="quote-block max-w-3xl mx-auto">
              אנשים לא מתאהבים בשיחות נעימות.
              <br />
              הם מתאהבים בהרגשה ששיחה מייצרת.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="section-padding-sm bg-[#fdf4eb] texture-overlay">
        <div className="container-narrow relative">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="block mb-6 text-sm font-semibold text-[#6b4a34]">
              מדייטים לאהבה
            </span>
            <h2 className="section-title-left mb-8 max-w-3xl">
              מדריך להבנת דפוסים, תקשורת וזוגיות.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                href={CONTACT_INFO.bookPurchaseLink}
                label={`${CTA_LABELS.buyBook} - 89 ₪`}
                variant="primary"
                external
              />
              <CTAButton
                href="/book"
                label="לדעת עוד על הספר"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Preview */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title mb-6">
              מתוך הספר
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {recentArticles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                category={article.category}
                readTime={article.readTime}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <CTAButton href="/articles" label="לקריאת כל המאמרים" variant="primary" />
          </div>
        </div>
      </section>
    </div>
  );
}