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
  title: 'צחי חן | מערכות יחסים, דייטינג וזוגיות',
  description: 'צחי חן | מאמרים, ספר ותוכן מעשי על דפוסים, תקשורת ובחירות רגשיות.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'צחי חן | מערכות יחסים, דייטינג וזוגיות',
    description: 'מאמרים, ספר ותוכן מעשי על דפוסים, תקשורת ובחירות רגשיות.',
    url: 'https://zachi.co.il',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'צחי חן | מערכות יחסים, דייטינג וזוגיות',
    description: 'מאמרים, ספר ותוכן מעשי על דפוסים, תקשורת ובחירות רגשיות.',
  },
};

export default function Home() {
  const recentArticles = getAllArticles().slice(0, 3);

  return (
    <div>
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-[#fbf1e7]">
        <div className="absolute inset-0 bg-[#fbf1e7]" />
        <div className="absolute -top-10 right-0 w-80 h-80 bg-[#e6d5c2]/70 rounded-full blur-3xl" />

        <div className="container-main relative">
          <div className="grid gap-20 lg:grid-cols-[1.08fr_0.92fr] items-center">
            <div className="max-w-2xl lg:max-w-xl">
              <div className="relative border-l border-[#8b6e53]/20 pl-8 sm:pl-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#6b4a34]">
                  צחי חן | מערכות יחסים, דייטינג וזוגיות
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-[5.2rem] font-semibold text-[#1f1a16] leading-[0.96] tracking-[-0.04em] mb-8">
                  להבין מה באמת
                  <br />
                  מנהל מערכות יחסים.
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-[#4f453d] leading-[1.9] mb-10 max-w-2xl">
                  מאמרים, ספר ותוכן מעשי על דפוסים, תקשורת,
                  <br />
                  בחירות רגשיות והיכולת לבנות קשר בריא לאורך זמן.
                </p>

                <div className="signature-divider" />

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                  <CTAButton
                    href="/articles"
                    label="לקריאת המאמרים"
                    variant="primary"
                    className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg"
                  />
                  <CTAButton
                    href="/about"
                    label="להכיר את צחי"
                    variant="ghost"
                    className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[520px] h-[520px] hero-visual">
                {hasBookMockup ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src="/images/book-mockup.png"
                    alt="מדייטים לאהבה - ספר"
                    className="w-full h-full object-contain rounded-[2rem] shadow-[0_28px_70px_-40px_rgba(44,36,24,0.18)]"
                  />
                ) : (
                  <div className="relative h-full w-full">
                    <div className="absolute -right-10 -top-10 w-60 h-80 rounded-[2.5rem] bg-[#e6d5c2] shadow-[0_30px_70px_-44px_rgba(44,36,24,0.16)]" />
                    <div className="absolute left-0 top-0 w-full h-full rounded-[2.5rem] bg-[#fbf3ec] shadow-[0_30px_70px_-40px_rgba(44,36,24,0.16)] border border-[#e6d2bb]/60 overflow-hidden">
                      <div className="absolute left-8 top-8 w-16 h-16 rounded-full bg-[#d6b48a]/25" />
                      <div className="absolute left-10 top-10 w-24 h-1.5 rounded-full bg-[#d6b48a]" />
                      <div className="absolute left-10 top-16 w-32 h-1.5 rounded-full bg-[#d6b48a]" />
                      <div className="absolute inset-x-10 top-28 bottom-16 rounded-[1.75rem] bg-[#f4e8dd] p-8 flex flex-col justify-between">
                        <div>
                          <p className="text-sm uppercase tracking-[0.22em] text-[#6b4a34] mb-4">מדייטים לאהבה</p>
                          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2c2418] leading-[1.05]">
                            מדריך מעשי להבנת דפוסים, תקשורת וזוגיות.
                          </h2>
                        </div>
                        <div className="space-y-3 text-sm text-[#5c4b42] leading-[1.8]">
                          <p>מהדייט הראשון ועד לקשר שנשאר יציב לאורך זמן.</p>
                        </div>
                      </div>
                      <div className="absolute bottom-8 left-10 right-10 h-1 rounded-full bg-[#d6b48a]/40" />
                    </div>
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
      <section className="section-padding bg-[#f7eee5]">
        <div className="container-main">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="max-w-3xl">
              <span className="mb-6 text-sm font-semibold text-[#6b4a34] tracking-[0.16em] block">
                על צחי
              </span>
              <h2 className="section-title-left mb-8">
                העבודה שלי עוסקת ברגעים שבדרך כלל לא מדברים עליהם:
                <br />
                הפחדים, הדפוסים והבחירות שמעצבים מערכות יחסים מבפנים.
              </h2>
              <blockquote className="border-l-2 border-[#8b6e53] pl-6 italic text-[#2c2418] leading-[1.8] mb-8 max-w-2xl">
                “הבחירות הקטנות בשגרה הן אלה שמגדירות את הקשר שלכם.”
              </blockquote>
              <p className="text-lg text-[#4f453d] leading-[1.9] mb-8 max-w-2xl">
                לא טקטיקות. לא משחקים.
                <br />
                אלא הבנה אמיתית של מה שמנהל אנשים בתוך קשר.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/about" label="לקרוא עוד על צחי" variant="outline" />
                <CTAButton href={CONTACT_INFO.whatsapp} label="להתחיל לבחור אחרת" variant="primary" external />
              </div>
            </div>

            <div className="relative mx-auto max-w-md">
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

      <section className="section-padding bg-[#fbf1e7]">
        <div className="container-main max-w-4xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl text-[#4f453d] leading-[1.4] md:leading-[1.3] mb-4">
            אנשים לא מתאהבים בשיחות נעימות.
            <br />
            הם מתאהבים בהרגשה ששיחה מייצרת.
          </p>
        </div>
      </section>

      {/* Book Section */}
      <section className="section-padding-sm bg-[#fdf4eb]">
        <div className="container-narrow relative">
          <div className="max-w-3xl">
            <span className="block mb-6 text-sm font-semibold text-[#6b4a34]">
              מדייטים לאהבה
            </span>
            <h2 className="section-title-left mb-8 max-w-3xl">
              “מדייטים לאהבה” הוא מדריך מעשי להבנת דפוסים, תקשורת וזוגיות —
              מהדייט הראשון ועד לקשר שנשאר יציב לאורך זמן.
            </h2>

            <p className="text-lg text-[#4f453d] leading-[1.95] mb-10 max-w-2xl">
              טקסט שמנגיש נושאים מורכבים דרך תובנות אישיות וקרובות, בלי הבטחות ריקות.
            </p>

            <div className="space-y-4 text-[#5c4b42] text-lg leading-[1.95] mb-10 max-w-2xl">
              <p>לבנות מערכת יחסים מתוך הבחירות שלכם, לא מתוך פחד או ניחוש.</p>
              <p>לזהות דפוסים שהופכים חיבור לניסיון לחזור על עצמו.</p>
            </div>

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

      {/* What You'll Get */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="section-title mb-6">
              מה תקבלו כאן
            </h2>
            <p className="section-subtitle text-[#5c4b42]">
              כאן תמצאו שפה וכלים שיעזרו לכם להבין מה חוזר על עצמו בקשרים שלכם — ומה אפשר לעשות אחרת.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="insight-card text-center">
              <div className="mx-auto mb-6 h-1.5 w-14 rounded-full bg-[#d6b48a]"></div>
              <h3 className="text-xl font-semibold text-[#2c2418] mb-4">בהירות</h3>
              <p className="text-sm text-[#5c4b42] leading-[1.75]">
                להבין מה מפעיל את המשיכה שלכם, ומה משמר את הקשר. כלים שמביאים בהירות אמיתית, לא תשובות קלות.
              </p>
            </div>
            <div className="insight-card text-center">
              <div className="mx-auto mb-6 h-1.5 w-14 rounded-full bg-[#d6b48a]"></div>
              <h3 className="text-xl font-semibold text-[#2c2418] mb-4">כלים מעשיים</h3>
              <p className="text-sm text-[#5c4b42] leading-[1.75]">
                כלים לשיחה, לדייטים, להצבת גבולות ולקבלת החלטות רגשיות בצורה נקייה יותר.
              </p>
            </div>
            <div className="insight-card text-center">
              <div className="mx-auto mb-6 h-1.5 w-14 rounded-full bg-[#d6b48a]"></div>
              <h3 className="text-xl font-semibold text-[#2c2418] mb-4">הבנה של דפוסים</h3>
              <p className="text-sm text-[#5c4b42] leading-[1.75]">
                לזהות דפוסים שממשיכים להרוס בחירות ולהוציא אתכם מהמסלול. ללמוד מה שחוזר על עצמו כדי לשנות.
              </p>
            </div>
            <div className="insight-card text-center">
              <div className="mx-auto mb-6 h-1.5 w-14 rounded-full bg-[#d6b48a]"></div>
              <h3 className="text-xl font-semibold text-[#2c2418] mb-4">דרך לבחירה בוגרת</h3>
              <p className="text-sm text-[#5c4b42] leading-[1.75]">
                כדי לבחור מתוך עוצמה פנימית ולא מתוך פחד או שכנוע. לבנות קשרים שמחזיקים מעמד לאורך זמן.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="section-padding bg-gradient-to-br from-[#faf2e8] via-[#f8f0e4] to-[#f0e6d6]">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="section-title mb-6">
              למי האתר מתאים
            </h2>
            <p className="section-subtitle text-[#5c4b42]">
              מי שמוכן לקחת אחריות על הבחירות שלו, ומבין שההחלטות הרגשיות החשובות ביותר הן אלה שמתנהלות גם אחרי הצעדים הראשונים.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            <div className="story-card border-l-4 border-l-[#8b6e53]">
              <h3 className="text-2xl font-semibold text-[#2c2418] mb-4">רווקים ורווקות</h3>
              <p className="text-[#5c4b42] leading-[1.7]">
                מי שמרגישים שהם מתאמצים מדי, נמשכים למי שלא פנוי אליהם, או מתקשים להבין מתי קשר באמת נכון.
              </p>
            </div>
            <div className="story-card border-l-4 border-l-[#8b6e53]">
              <h3 className="text-2xl font-semibold text-[#2c2418] mb-4">גרושים וגרושות</h3>
              <p className="text-[#5c4b42] leading-[1.7]">
                מי שחוזרים לעולם הדייטינג ורוצים לבנות בחירה חדשה מתוך ניסיון, בהירות ובשלות.
              </p>
            </div>
            <div className="story-card border-l-4 border-l-[#8b6e53]">
              <h3 className="text-2xl font-semibold text-[#2c2418] mb-4">אנשים בתוך קשר</h3>
              <p className="text-[#5c4b42] leading-[1.7]">
                מי שרוצה לעבוד על הקשר שלו אחרי הריגוש, ולהפוך אותו ליציב יותר גם בימים רגילים.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Preview */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="section-title mb-6">
              מתוך הספר
            </h2>
            <p className="section-subtitle text-[#5c4b42]">
              מאמרים קצרים על דפוסים, תקשורת ובחירות רגשיות — בשפה פשוטה, ישירה ומעשית.
            </p>
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

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-[#2c2418] via-[#241e18] to-[#1f1913] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a140e]/30 via-transparent to-[#2c2418]/20" />
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#8b6e53]/10 to-transparent rounded-full blur-3xl" />
        <div className="container-narrow relative text-center">
          <h2 className="section-title text-white mb-8">
            אולי הגיע הזמן
            <br />
            להתחיל להבין את הדפוסים —
            <br />
            ולא רק את התוצאות.
          </h2>
          <p className="text-lg text-[#d4b48b] leading-[1.6] mb-12 max-w-2xl mx-auto">
            לא עוד טיפים. לא עוד הבטחות. התחלה של שפה שמאפשרת לכם לבחור אחרת.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/articles" label="לקריאת המאמרים" variant="primary" />
          </div>
        </div>
      </section>
    </div>
  );
}