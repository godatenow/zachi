import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import ArticleCard from '@/components/ArticleCard';
import { CONTACT_INFO } from '@/constants/config';
import { getAllArticles } from '@/data/articles';

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
      <section className="min-h-screen flex items-center bg-background">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary opacity-80">
                צחי חן
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] tracking-[-0.02em]">
                חשיבה עמוקה
                <br />
                על מערכות יחסים
              </h1>
              <p className="text-xl text-secondary leading-[1.6] max-w-2xl mx-auto font-light">
                מאמרים וספר על דפוסים, תקשורת ובחירות רגשיות — 
                מתוך ניסיון של שנים בחשיבה על מה שמנהל אנשים בתוך קשר.
              </p>

              <div className="pt-8 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center sm:rtl:space-x-reverse">
                <CTAButton
                  href="/articles"
                  label="לקריאת המאמרים"
                  variant="primary"
                  className="px-8 py-4 text-lg"
                />
                <CTAButton
                  href={CONTACT_INFO.whatsapp}
                  label="לשיחה אישית"
                  variant="outline"
                  className="px-8 py-4 text-lg"
                  external
                />
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

      {/* About Section */}
      <section className="py-24 bg-background texture-overlay animate-fade-in">
        <div className="container-main">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="max-w-3xl animate-fade-in-up">
              <span className="mb-6 text-sm font-semibold text-secondary tracking-[0.16em] block">
                על העבודה שלי
              </span>
              <h2 className="text-3xl font-semibold text-primary mb-8 leading-[1.3]">
                אני עובד עם אנשים שרוצים להבין את הדפוסים שמנהלים אותם במערכות יחסים
              </h2>
              <p className="text-lg text-secondary leading-[1.8] mb-8">
                לא עצות קלות או טיפים מהירים, אלא חשיבה עמוקה על מה שקורה מתחת לפני השטח.
              </p>
              <blockquote className="text-xl italic text-primary border-l-4 border-accent pl-6 mb-8">
                “הבחירות הקטנות בשגרה הן אלה שמגדירות את הקשר שלכם.”
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/about" label="לקרוא עוד על העבודה שלי" variant="outline" />
                <CTAButton href={CONTACT_INFO.whatsapp} label="לשיחה" variant="primary" external />
              </div>
            </div>

            <div className="relative mx-auto max-w-md">
              <div className="bg-white p-8 rounded-lg border border-border">
                <div className="text-primary space-y-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium">צחי חן</p>
                  <h3 className="text-2xl font-semibold">חשיבה על דפוסים</h3>
                  <p className="text-base leading-[1.7] text-secondary">
                    שנים של שיחות עם אנשים על הדפוסים שחוזרים על עצמם במערכות יחסים — זה מה שמביא את התובנות בספר ובמאמרים.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background border-t border-border">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl italic text-primary leading-[1.4]">
              אנשים לא מתאהבים בשיחות נעימות.
              <br />
              הם מתאהבים בהרגשה ששיחה מייצרת.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-24 bg-background animate-fade-in">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
              הספר
            </span>
            <h2 className="text-3xl font-semibold text-primary">
              מדייטים לאהבה
            </h2>
            <p className="text-lg text-secondary leading-[1.8]">
              ספר שנכתב מתוך השנים האלה של חשיבה על דפוסים ותקשורת במערכות יחסים.
              לא מדריך &ldquo;איך למצוא אהבה&rdquo;, אלא ניסיון להבין מה מנהל אנשים בתוך קשר.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <CTAButton
                href={CONTACT_INFO.bookPurchaseLink}
                label="לרכישת הספר - 89 ₪"
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

      {/* Articles Section */}
      <section className="py-24 bg-background animate-fade-in">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-primary mb-4">
                מאמרים
              </h2>
              <p className="text-lg text-secondary leading-[1.8]">
                כתיבה על דפוסים, תקשורת ובחירות רגשיות — מתוך הניסיון של השנים האחרונות.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

            <div className="text-center mt-12">
              <CTAButton href="/articles" label="לקריאת כל המאמרים" variant="primary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}