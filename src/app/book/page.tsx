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
      <section className="section-padding bg-gradient-to-l from-accent to-light">
        <div className="container-main max-w-5xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <span className="hero-label mb-6 inline-flex">ספר מעשי לבחירה בוגרת</span>
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#2c2418] mb-6 leading-tight">
                {BOOK_INFO.title}
              </h1>
              <p className="text-xl text-[#8b6e53] font-semibold mb-6">
                {BOOK_INFO.titleEn}
              </p>
              <p className="text-lg text-[#5c4b42] mb-8 leading-8">
                ספר שמוליך אתכם מההרגלים שמניעים דייטים זהים, אל בחירות שמרגישות אמיתיות גם אחרי השגרה.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 mb-10">
                <div className="story-card">
                  <h3 className="text-lg font-semibold text-[#2c2418] mb-3">להבין את הדפוסים שמחזיקים אתכם</h3>
                  <p className="text-sm text-[#5c4b42] leading-7">תרגילים שמביאים את הדינמיקה שלכם ליד השולחן ומאפשרים בחירה מודעת.</p>
                </div>
                <div className="story-card">
                  <h3 className="text-lg font-semibold text-[#2c2418] mb-3">להפסיק לבחור מתוך חרדה</h3>
                  <p className="text-sm text-[#5c4b42] leading-7">איך להבחין בין רצון להימנע מלהישאר לבד לבין הרצון לבחור קשר שמדבר אליכם באמת.</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <CTAButton
                  href={CONTACT_INFO.bookPurchaseLink}
                  label={`${CTA_LABELS.buyBook}`}
                  variant="primary"
                  external
                />
                <span className="text-sm text-[#5c4b42]">מחיר מומלץ: {BOOK_INFO.price}</span>
              </div>
            </div>

            <div className="hero-card">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#d4ac7d] to-[#c49a7a] p-10 text-white shadow-[0_32px_80px_-36px_rgba(44,36,24,0.28)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_40%)]" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="text-6xl mb-6">📘</div>
                  <h2 className="text-3xl font-semibold mb-4">{BOOK_INFO.title}</h2>
                  <p className="text-sm leading-7 text-[#f5e6d2]">
                    כאן תתווסף כריכת הספר. זו צריכה להרגיש כמו ספר שמזמין לקריאה משמעותית ובחירה בוגרת.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Highlights */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="section-title">מה יש בספר?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-light p-8 rounded-lg">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-dark mb-3">
                הבנת הדפוסים שמחזיקים אתכם
              </h3>
              <p className="text-[#5c4b42] leading-7">
                לזהות מה מושך אתכם לאותם אנשים ולתרגם את התובנה הזאת לבחירות שונות.
              </p>
            </div>

            <div className="bg-light p-8 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-dark mb-3">
                כלים לשיחה ולבחירה
              </h3>
              <p className="text-[#5c4b42] leading-7">
                כלים שתוכלו להתחיל ליישם כבר בדייט הבא ובשיחה הבאה.
              </p>
            </div>

            <div className="bg-light p-8 rounded-lg">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-dark mb-3">
                דוגמאות מהשטח
              </h3>
              <p className="text-[#5c4b42] leading-7">
                סיפורים של אנשים שבחרו אחרת, כדי שתראו איך הבחירה יכולה להיראות גם מחוץ לספר.
              </p>
            </div>

            <div className="bg-light p-8 rounded-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-dark mb-3">
                דרך מסודרת
              </h3>
              <p className="text-[#5c4b42] leading-7">
                שלבים שמנחים אתכם מתוך שקט, לא מתוך עוד חרדה לבצע את הצעד הנכון.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Read This */}
      <section className="section-padding bg-light">
        <div className="container-main">
          <h2 className="section-title">למי זה?</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex gap-4 items-start">
              <span className="text-2xl text-primary flex-shrink-0">✓</span>
              <p className="text-lg text-[#5c4b42]">
                לאנשים שמתעייפים ממערכות יחסים שלא נושאות את המקצועיות, ולא רוצות להישען על קסם רגעי.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl text-primary flex-shrink-0">✓</span>
              <p className="text-lg text-[#5c4b42]">
                למי שרוצים להבין את הבחירות שלהם לעומק — מה כן מתאים להם, ולא רק מה מעניין אותם כרגע.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl text-primary flex-shrink-0">✓</span>
              <p className="text-lg text-gray-700">
                לאנשים בקשר שרוצים להעמיק את זה או לתקן את זה כשזה טועה
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl text-primary flex-shrink-0">✓</span>
              <p className="text-lg text-[#5c4b42]">
                למי שמחפש תבונה אישית ולא פתרונות מקובעים — עם מילים שמדברות אל החיים האמיתיים.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Section */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="section-title">קטע מן הספר</h2>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border-r-4 border-primary">
            <p className="text-gray-600 text-sm mb-4 italic">
              {`מפרק 3: "אודישנים מ על"`}
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              אתה מגיע לדייט וחולק ממיד: האם אני מעניין מספיק? האם אני יפה מספיק? האם אני חכם מספיק?
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              אתה משחק תפקיד. אתה לא אתה - אתה גרסה משודרגת של עצמך, מלודה בדעות הטובות של אדם כלשהו שחד מזמן שמעת עליו. ודה זה עושה קשה כל דבר.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              דייטים צריך להיות טוב לך כמו שאתה צריך להיות טוב לך. אתה לא צריך אישור שלך. אתה צריך להבין אם זה מתאים.
            </p>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              רוצה להקרא יותר?
            </p>
            <CTAButton
              href={CONTACT_INFO.bookPurchaseLink}
              label={`הזמינו את הספר בעכשיו - ${BOOK_INFO.price}`}
              variant="primary"
              external
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-l from-accident to-light">
        <div className="container-main text-center">
          <h2 className="text-3xl font-semibold text-[#2c2418] mb-4">
            שאלות לגבי הספר?
          </h2>
          <p className="text-lg text-[#5c4b42] mb-8 leading-8">
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
