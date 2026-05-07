import CTAButton from '@/components/CTAButton';
import ArticleCard from '@/components/ArticleCard';
import BookCTA from '@/components/BookCTA';
import { SITE_CONFIG, CONTACT_INFO, CTA_LABELS } from '@/constants/config';
import { getAllArticles } from '@/data/articles';

export default function Home() {
  const recentArticles = getAllArticles().slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-l from-accent to-light">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-primary font-semibold mb-4">
              ברוכים הבאים
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              {SITE_CONFIG.title}
            </p>
            <p className="text-lg text-gray-600 mb-10">
              {SITE_CONFIG.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <CTAButton
                href={CONTACT_INFO.whatsapp}
                label={CTA_LABELS.scheduleCall}
                variant="primary"
                external
              />
              <CTAButton
                href={CONTACT_INFO.bookPurchaseLink}
                label={CTA_LABELS.buyBook}
                variant="secondary"
                external
              />
              <CTAButton
                href="/articles"
                label={CTA_LABELS.readArticles}
                variant="outline"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="section-title md:text-right">
                מי אני?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                אני צחי חן. במשך יותר מעשור עבדתי עם אנשים בקשרים וקשיים. ראיתי דפוסים. ראיתי דברים שעובדים. ראיתי דברים שלא עובדים.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                אחר כך כתבתי עליו, ועכשיו אני מלמד אותו. זה בשביל אנשים שרוצים אהבה בעצם - לא הגרסה של הוליווד, אלא הגרסה שמשך באמת.
              </p>
              <CTAButton
                href="/about"
                label="עקוב לסיפור המלא שלי"
                variant="outline"
              />
            </div>

            {/* Image Placeholder */}
            <div className="order-first md:order-last">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary to-secondary rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <p className="text-6xl mb-4">👤</p>
                  <p className="text-lg font-semibold">
                    {/* TODO: Replace with actual author photo */}
                    צחי חן
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="section-padding bg-light">
        <div className="container-main">
          <h2 className="section-title">מאמרים אחרונים</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
          <div className="text-center">
            <CTAButton
              href="/articles"
              label="ראה את כל המאמרים"
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* Book CTA Section */}
      <BookCTA />

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-l from-light to-white">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title">רוצה לדבר?</h2>
            <p className="text-lg text-gray-700 mb-8">
              זמינה השיחה הראשונה שלך. בואו נראה אם אנחנו יכולים לעבוד ביחד.
            </p>
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              {CTA_LABELS.scheduleCall}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
