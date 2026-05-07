import { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import { BOOK_INFO, CONTACT_INFO, CTA_LABELS } from '@/constants/config';

export const metadata: Metadata = {
  title: 'הספר - צחי חן',
  description: `${BOOK_INFO.description}`,
};

export default function Book() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-l from-accent to-light">
        <div className="container-main max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Book Cover */}
            <div className="order-last md:order-first">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary to-secondary rounded-lg shadow-2xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <p className="text-6xl mb-4">📖</p>
                  <p className="text-3xl font-bold mb-4">{BOOK_INFO.title}</p>
                  {/* TODO: Replace with actual book cover image */}
                  <p className="text-lg opacity-90">{BOOK_INFO.titleEn}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                {BOOK_INFO.title}
              </h1>
              <p className="text-xl text-primary font-semibold mb-4">
                {BOOK_INFO.titleEn}
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {BOOK_INFO.description}
              </p>
              <p className="text-3xl font-bold text-primary mb-6">
                {BOOK_INFO.price}
              </p>
              <CTAButton
                href={CONTACT_INFO.bookPurchaseLink}
                label={CTA_LABELS.buyBook}
                variant="primary"
                external
              />
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
                הבנת דיוק
              </h3>
              <p className="text-gray-700">
                למה אתם נמשכים למי שלא זה לך? למה דייטים סטנדרטי? כל דבר יש סיבה, וכל סיבה יש פתרון.
              </p>
            </div>

            <div className="bg-light p-8 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-dark mb-3">
                תוכניות מעשיות
              </h3>
              <p className="text-gray-700">
                אין פה קורא קטן או פילוסופיה משעממת. חרס שאתה יכול בעצם להשתמש בה מחר בדייטים שלך.
              </p>
            </div>

            <div className="bg-light p-8 rounded-lg">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-dark mb-3">
                תדמה דוגמה של חיים אמיתיים
              </h3>
              <p className="text-gray-700">
                סיפורים מן האנשים שהיו שם בעצם. זה וותק עם הרקע שלהم, לא מבדוקי או בחדות קליפות.
              </p>
            </div>

            <div className="bg-light p-8 rounded-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-dark mb-3">
                שלבים סופרים
              </h3>
              <p className="text-gray-700">
                מן הראשונה דייט לגאון זיווג. כל סיפור של היכן צריך עברת וכיצד ללא להרוס זה שאפילו טוב.
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
              <p className="text-lg text-gray-700">
                לאנשים שזה עייף להם על דייטים שאינו עובד או על קשרים שנשברו עבור סיבות שהם לא מבינים
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl text-primary flex-shrink-0">✓</span>
              <p className="text-lg text-gray-700">
                למי שרוצים להבין את עצמם טוב יותר - מה הם רוצים, מה הם יכולים ברמה, למה הם צוברים את אנשים לא טובים
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
              <p className="text-lg text-gray-700">
                מישהו שרוצה הבנה גם כן יותר מדי אנשים - אבל זה גם אמין ומעשי
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
          <h2 className="text-3xl font-bold text-dark mb-4">
            שאלות לגבי הספר?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            צרו איתי קשר - אשמח לדבר עליו.
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
