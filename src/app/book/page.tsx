import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import { BOOK_INFO, CONTACT_INFO, CTA_LABELS } from '@/constants/config';

export const metadata: Metadata = {
  title: 'הספר - מדייטים לאהבה | צחי חן',
  description: 'ספר מעשי שמפרק את הבחירות הרגשיות, מסביר את הדפוסים החוזרים ומציע דרך ברורה לבחירה בוגרת.',
};

export default function Book() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-main-bg via-[#faf8f3] to-card-bg">
        <div className="container-main max-w-5xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <span className="hero-label mb-6 inline-flex">ספר מעשי לבחירה בוגרת</span>
              <h1 className="text-4xl sm:text-5xl font-semibold text-text-primary mb-6 leading-tight">
                {BOOK_INFO.title}
              </h1>
              <p className="text-xl text-brand-brown font-semibold mb-6">
                {BOOK_INFO.subtitle}
              </p>
              <p className="text-lg text-text-secondary mb-8 leading-8">
                ספר שמוליך אתכם מההרגלים שמניעים דייטים זהים, אל בחירות שמרגישות אמיתיות גם אחרי השגרה.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 mb-10">
                <div className="story-card">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">להבין את הדפוסים שמחזיקים אתכם</h3>
                  <p className="text-sm text-text-secondary leading-7">תרגילים שמביאים את הדינמיקה שלכם ליד השולחן ומאפשרים בחירה מודעת.</p>
                </div>
                <div className="story-card">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">להפסיק לבחור מתוך חרדה</h3>
                  <p className="text-sm text-text-secondary leading-7">איך להבחין בין רצון להימנע מלהישאר לבד לבין הרצון לבחור קשר שמדבר אליכם באמת.</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <CTAButton
                  href={CONTACT_INFO.whatsapp}
                  label={CTA_LABELS.scheduleCall}
                  variant="primary"
                  external
                />
                <span className="text-sm text-text-secondary">מחיר מומלץ: {BOOK_INFO.price}</span>
              </div>
            </div>

            <div className="hero-card">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-soft-gold to-brand-brown p-10 text-white shadow-[0_32px_80px_-36px_rgba(44,36,24,0.28)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_40%)]" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="text-6xl mb-6">📘</div>
                  <h2 className="text-3xl font-semibold mb-4">{BOOK_INFO.title}</h2>
                  <p className="text-sm leading-7 text-[#f5e6d2]">
                    כריכה שמביאה את החוויה של קריאה מעשית, בוגרת וממוקדת.
                  </p>
                </div>
                {/* Add a real book cover image here when available, e.g. /public/book-cover.png or /public/book-cover.jpg */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Highlights */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="section-title">מה יש בספר?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-secondary-bg p-8 rounded-lg">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">
                הבנת הדפוסים שמחזיקים אתכם
              </h3>
              <p className="text-text-secondary leading-7">
                לזהות מה מושך אתכם לאותם אנשים ולתרגם את התובנה הזאת לבחירות שונות.
              </p>
            </div>

            <div className="bg-secondary-bg p-8 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">
                כלים לשיחה ולבחירה
              </h3>
              <p className="text-text-secondary leading-7">
                כלים שתוכלו להתחיל ליישם כבר בדייט הבא ובשיחה הבאה.
              </p>
            </div>

            <div className="bg-secondary-bg p-8 rounded-lg">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">
                דוגמאות מהשטח
              </h3>
              <p className="text-text-secondary leading-7">
                סיפורים של אנשים שבחרו אחרת, כדי שתראו איך הבחירה יכולה להיראות גם מחוץ לספר.
              </p>
            </div>

            <div className="bg-secondary-bg p-8 rounded-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">
                דרך מסודרת
              </h3>
              <p className="text-text-secondary leading-7">
                שלבים שמנחים אתכם מתוך שקט, לא מתוך עוד חרדה לבצע את הצעד הנכון.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Read This */}
      <section className="section-padding bg-secondary-bg">
        <div className="container-main">
          <h2 className="section-title">למי זה?</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex gap-4 items-start">
              <span className="text-2xl text-brand-brown flex-shrink-0">✓</span>
              <p className="text-lg text-text-secondary">
                לאנשים שמתעייפים ממערכות יחסים שלא נושאות את המקצועיות, ולא רוצות להישען על קסם רגעי.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl text-brand-brown flex-shrink-0">✓</span>
              <p className="text-lg text-text-secondary">
                למי שרוצים להבין את הבחירות שלהם לעומק — מה כן מתאים להם, ולא רק מה מעניין אותם כרגע.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl text-brand-brown flex-shrink-0">✓</span>
              <p className="text-lg text-text-secondary">
                לאנשים בקשר שרוצים להעמיק את זה או לתקן את זה כשזה טועה
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl text-brand-brown flex-shrink-0">✓</span>
              <p className="text-lg text-text-secondary">
                למי שמחפש תבונה אישית ולא פתרונות מקובעים — עם מילים שמדברות אל החיים האמיתיים.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="section-title">קטע מן הספר</h2>

          <div className="max-w-3xl mx-auto bg-card-bg p-8 rounded-lg shadow-md border-r-4 border-burgundy">
            <p className="text-text-secondary text-sm mb-4 italic">
              {`מפרק 3: "אודישנים מ על"`}
            </p>

            <p className="text-lg text-text-primary leading-relaxed mb-4">
              אתה מגיע לדייט וחולק ממיד: האם אני מעניין מספיק? האם אני יפה מספיק? האם אני חכם מספיק?
            </p>

            <p className="text-lg text-text-primary leading-relaxed mb-4">
              אתה משחק תפקיד. אתה לא אתה - אתה גרסה משודרגת של עצמך, מלודה בדעות הטובות של אדם כלשהו שחד מזמן שמעת עליו. ודה זה עושה קשה כל דבר.
            </p>

            <p className="text-lg text-text-primary leading-relaxed">
              דייטים צריך להיות טוב לך כמו שאתה צריך להיות טוב לך. אתה לא צריך אישור שלך. אתה צריך להבין אם זה מתאים.
            </p>
          </div>

          <div className="text-center mt-8">
            <p className="text-text-secondary mb-4">
              רוצה להקרא יותר?
            </p>
            <CTAButton
              href={CONTACT_INFO.whatsapp}
              label={CTA_LABELS.scheduleCall}
              variant="primary"
              external
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-br from-soft-gold/10 via-secondary-bg to-brand-brown/8">
        <div className="container-main text-center">
          <h2 className="text-3xl font-semibold text-text-primary mb-4">
            שאלות לגבי הספר?
          </h2>
          <p className="text-lg text-text-secondary mb-8 leading-8">
            אם אתה רוצה להבין איך הספר מתאים לך, אני כאן לשיחה קצרה שתבהיר את הדרך הבאה.
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
      </section>
    </div>
  );
}
