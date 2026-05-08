import CTAButton from '@/components/CTAButton';
import ArticleCard from '@/components/ArticleCard';
import { BOOK_INFO, CONTACT_INFO, CTA_LABELS } from '@/constants/config';
import { getAllArticles } from '@/data/articles';

export default function Home() {
  const recentArticles = getAllArticles().slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-main-bg via-secondary-bg to-card-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-main-bg/80 via-transparent to-secondary-bg/60" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-soft-gold/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-brand-brown/6 to-transparent rounded-full blur-3xl" />

        <div className="container-main relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-text-primary tracking-tight mb-6 leading-[1.05]">
              להפסיק לרדוף אחרי אהבה —
              <br />
              ולהתחיל לבחור נכון
            </h1>
            <p className="text-xl text-text-secondary leading-[1.6] mb-10 max-w-3xl mx-auto">
              צחי חן מלווה אנשים בדרך לקשרים בריאים, בוגרים ויציבים — דרך כלים מעשיים, בהירות רגשית והבנה עמוקה של דפוסי בחירה.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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

            {/* Author/Book Visual Panel */}
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="hero-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-brown to-burgundy rounded-full flex items-center justify-center text-2xl text-white shadow-lg">
                    צחי
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.08em] text-brand-brown font-semibold">
                      צחי חן
                    </p>
                    <p className="text-lg font-semibold text-text-primary">
                      מאמן ויועץ למערכות יחסים
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-[1.6] text-text-secondary">
                  מחבר &quot;מדייטים לאהבה&quot; • מלווה אנשים ברגעים שהבחירה שלהם קובעת את הכל • מאמין שכל בחירה רומנטית היא הזדמנות לצמיחה אמיתית.
                </p>
              </div>

              <div className="hero-card">
                <div className="aspect-[3/4] bg-gradient-to-br from-soft-gold to-brand-brown rounded-[1.25rem] flex flex-col items-center justify-center text-white shadow-inner mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/20 to-transparent" />
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-2">📖</div>
                    <p className="text-lg font-semibold">{BOOK_INFO.title}</p>
                    <p className="text-sm opacity-90">{BOOK_INFO.subtitle}</p>
                  </div>
                </div>
                <p className="text-xs text-text-secondary leading-[1.5]">
                  ספר שמסייע לבחור נכון, לא להתפשר, ולבנות אהבה שמחזיקה.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short About Preview */}
      <section className="section-padding bg-secondary-bg">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-6">
              הבנה של הדפוס שחוזר אצלכם
            </h2>
            <p className="section-subtitle text-text-secondary mb-8">
              אני עובד עם אנשים שרוצים להבין למה הם נמשכים לאותו סוג קשר, למה הם מתפשרים כשכואב להם, ואיך מתחילים לבחור מתוך ערך עצמי ולא מתוך פחד.
            </p>
            <CTAButton href="/about" label="להכיר את צחי" variant="outline" />
          </div>
        </div>
      </section>

      {/* Short Book Preview */}
      <section className="section-padding bg-gradient-to-br from-main-bg via-secondary-bg to-card-bg">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-6">
              &quot;{BOOK_INFO.title}&quot; — הדרך לבחור אחרת
            </h2>
            <p className="section-subtitle text-text-secondary mb-8">
              ספר שמפרק את הבחירות הרגשיות, מסביר את הדפוסים החוזרים ומציע כלים ברורים לשיחה, לדייטים ולדרך שעומדת לנסות אתכם.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <CTAButton
                href={CONTACT_INFO.bookPurchaseLink}
                label={`${CTA_LABELS.buyBook}`}
                variant="primary"
                external
              />
              <span className="text-sm text-text-secondary">
                מחיר מומלץ: {BOOK_INFO.price}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="section-padding bg-gradient-to-br from-secondary-bg via-main-bg to-card-bg">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-title mb-6">
              למי זה מתאים
            </h2>
            <p className="section-subtitle text-text-secondary">
              למי שמוכן להפסיק לחזור על אותן בחירות, ולראות את הדרך שבה הבחירה שלו בונה או מפחיתה את האפשרות לקשר בריא ומאוזן.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="story-card border-l-4 border-l-burgundy">
              <p className="text-xs uppercase tracking-[0.2em] text-burgundy mb-3">לומדים מחדש</p>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">רווקים ורווקות</h3>
              <p className="text-text-secondary leading-[1.7]">
                אתם חשים כאילו כל דייט הוא ניסיון נוסף להוכיח את עצמכם. העבודה כאן היא לבחון למה אתם מביאים לאותה מסגרת את אותן תקוות והאכזבות.
              </p>
            </div>
            <div className="story-card border-l-4 border-l-burgundy">
              <p className="text-xs uppercase tracking-[0.2em] text-burgundy mb-3">בחירה מחודשת</p>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">גרושים וגרושות</h3>
              <p className="text-text-secondary leading-[1.7]">
                אתם כבר מכירים את הכאב של פרידה, ואתם רוצים לבנות בחירה חדשה מתוך ידע, חוסן וניסיון — לא מתוך חרדה לחזור להיות לבד.
              </p>
            </div>
            <div className="story-card border-l-4 border-l-burgundy">
              <p className="text-xs uppercase tracking-[0.2em] text-burgundy mb-3">לא רק רומנטיקה</p>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">אנשים בתוך קשר</h3>
              <p className="text-text-secondary leading-[1.7]">
                כבר יש לכם קשר, אבל אתם מבינים שיש כאן יותר מסתם ריגוש. זה הזמן להשקיע בבחירות היומיומיות שמשמרות מחויבות ואמון.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Preview */}
      <section className="section-padding bg-main-bg">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="badge mb-6 inline-flex">מאמרים שנועדו להזיז</span>
            <h2 className="section-title mb-6">
              מתוך המאמרים
            </h2>
            <p className="section-subtitle text-text-secondary">
              תובנות שמקלות לראות את הקשרים שלכם בצורה אחרת, עם התמקדות בדפוסים, בבחירות ובדרך להרגיש בטוח יותר.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
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
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-burgundy via-burgundy-hover to-brand-brown text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/30 via-transparent to-burgundy/20" />
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-tr from-soft-gold/10 to-transparent rounded-full blur-3xl" />
        <div className="container-narrow relative text-center">
          <span className="badge bg-soft-gold/20 text-soft-gold border-soft-gold/30 mb-8">
            רגע לפני שאתם שוב בוחרים אותו דבר
          </span>
          <h2 className="section-title text-white mb-8">
            לפעמים שינוי לא מתחיל בעוד דייט, בעוד שיחה או בעוד ניסיון להרשים.
          </h2>
          <p className="text-lg text-soft-gold leading-[1.6] mb-12 max-w-2xl mx-auto">
            הוא מתחיל ברגע שבו אתם עוצרים, רואים את הדפוס, ובוחרים אחרת. אני כאן כדי שהבחירה הזו תהיה ברורה יותר, רגועה יותר, ובוגרת יותר.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href={CONTACT_INFO.whatsapp} label={CTA_LABELS.scheduleCall} variant="primary" external />
            <CTAButton href="/articles" label={CTA_LABELS.readArticles} variant="outline" />
          </div>
        </div>
      </section>
    </div>
  );
}