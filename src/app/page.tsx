import CTAButton from '@/components/CTAButton';
import ArticleCard from '@/components/ArticleCard';
import BookCTA from '@/components/BookCTA';
import { CONTACT_INFO, CTA_LABELS } from '@/constants/config';
import { getAllArticles } from '@/data/articles';

export default function Home() {
  const recentArticles = getAllArticles().slice(0, 4);

  return (
    <div>
      <section className="section-padding overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(184,141,104,0.18),_transparent_30%),linear-gradient(180deg,_#fbf6ef_0%,_#f8e8da_100%)]">
        <div className="container-main relative">
          <div className="pointer-events-none absolute right-0 top-10 hidden h-80 w-80 rounded-full bg-[#d7b48a]/20 blur-3xl lg:block" />
          <div className="pointer-events-none absolute left-0 bottom-0 hidden h-72 w-72 rounded-full bg-[#cfa16f]/20 blur-3xl lg:block" />

          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.95fr] items-center">
            <div className="max-w-3xl">
              <span className="hero-label">
                בחירות רגשיות בוגרות
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[4.8rem] leading-[1.03] font-semibold text-dark tracking-tight mb-6 max-w-3xl">
                להפסיק לרדוף אחרי אהבה —
                <br />
                ולהתחיל לבחור נכון
              </h1>
              <p className="section-subtitle mb-12 text-[#4f3d34]">
                אני צחי חן. אני מלווה אנשים שמעוניינים ביחסים שמרגישים חזקים גם אחרי הלהט הראשוני — עם בהירות, החלטות ברורות ועבודה שמכבדת את הנשמה.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
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

            <div className="hero-panel">
              <div className="hero-card">
                <div className="grid gap-8">
                  <div className="rounded-[2rem] bg-gradient-to-br from-[#f6e6d6] to-[#f0dcc4] p-6 border border-[#e8d5b7] shadow-[0_16px_32px_-12px_rgba(112,76,48,0.15)]">
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#cfa16f] to-[#b8855a] text-4xl text-white shadow-lg">
                        👤
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-[#7a5a3f] font-medium">
                          צחי חן
                        </p>
                        <p className="text-lg font-semibold text-dark">
                          מאמן ויועץ למערכות יחסים
                        </p>
                      </div>
                    </div>
                    <p className="text-sm leading-7 text-[#52433f]">
                      מחבר {`"מדייטים לאהבה"`} שמלווה אנשים ברגעים שהבחירה שלהם קובעת אכן את מה שיקרה בהמשך. אני מאמין שכל בחירה רומנטית היא הזדמנות לצמיחה אמיתית.
                    </p>
                  </div>

                  <div className="rounded-[2rem] bg-white p-6 shadow-[0_20px_40px_-20px_rgba(112,76,48,0.18)] border border-[#ecd9c4] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#f8e8d6]/30 to-transparent rounded-full -translate-y-16 translate-x-16" />
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8f6c4e] mb-3 font-medium relative z-10">
                      מה אפשר לקבל
                    </p>
                    <ul className="space-y-4 text-sm leading-7 text-[#5c4b42] relative z-10">
                      <li className="flex items-start gap-3">
                        <span className="text-[#cfa16f] mt-1">•</span>
                        בהירות רגשית על הדפוסים שמובילים לבחירות חוזרות.
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#cfa16f] mt-1">•</span>
                        כלים מעשיים לשיחה ובדייטים הבאים.
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#cfa16f] mt-1">•</span>
                        דרך ברורה לבחון אם הקשר יכול להחזיק לאורך זמן.
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-[2rem] bg-gradient-to-br from-[#fbf1e8] to-[#f5e6d4] p-6 border border-[#e8d3b8] shadow-[0_16px_32px_-12px_rgba(112,76,48,0.12)] relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#d5b48b]/20 to-transparent rounded-full translate-y-12 -translate-x-12" />
                    <p className="text-sm font-semibold text-dark mb-3 relative z-10">צחי חן - מאמן מערכות יחסים</p>
                    <div className="aspect-[4/5] rounded-[1.75rem] bg-gradient-to-br from-[#d5b48b] to-[#c49a7a] flex items-center justify-center text-5xl text-white shadow-inner relative z-10">
                      👤
                    </div>
                    <p className="mt-4 text-xs text-[#6f5b4f] leading-6 relative z-10">
                      צחי חן, מאמן מקצועי עם ניסיון של עשור בעבודה עם זוגות ואנשים בודדים. מתמחה בבניית קשרים בריאים ומשמעותיים.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#fff5eb] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fff5eb]/50 to-transparent" />
        <div className="container-main relative">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_0.95fr] items-center">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.22em] text-[#8b6e53] mb-4 font-medium">
                אודות צחי
              </p>
              <h2 className="section-title text-left">
                ניסיון שנבנה על קשרים אמיתיים, לא על תיאוריות יפות
              </h2>
              <p className="text-lg text-[#4f3d34] leading-9 mb-8">
                אחרי עשור בעבודה אישית וזוגית, אני יודע להבדיל בין ריגוש לרצון אמיתי. אני עובד עם אנשים שמחפשים לא רק אהבה, אלא גם יציבות, הבנה ודרך שמרגישה נכונה בכל יום. הקשרים שאני מלווה נבנים על בסיס של בחירה מודעת ולא על תשוקה חולפת.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="story-card group hover:shadow-[0_24px_48px_-16px_rgba(112,76,48,0.15)] transition-all duration-300">
                  <h3 className="text-lg font-semibold text-dark mb-3 group-hover:text-[#8b6e53] transition-colors">דפוסים במקום סתירות</h3>
                  <p className="text-sm text-gray-600 leading-7">
                    לא לוקחים את הקשר כעניין של מזל, אלא כקצה של דפוסים שמובילים אותנו בחזרה לאותם טעויות. אני עוזר לזהות את הדפוסים האלה ולשנות אותם.
                  </p>
                </div>
                <div className="story-card group hover:shadow-[0_24px_48px_-16px_rgba(112,76,48,0.15)] transition-all duration-300">
                  <h3 className="text-lg font-semibold text-dark mb-3 group-hover:text-[#8b6e53] transition-colors">כלים שמרגישים אישיים</h3>
                  <p className="text-sm text-gray-600 leading-7">
                    לא טיפים גנריים, אלא שאלות ומשימות שמותאמות למה שקורה לכם בחיים הרומנטיים היום. כלים שעובדים כי הם נבנו מתוך ניסיון אמיתי.
                  </p>
                </div>
              </div>
            </div>

            <div className="hero-card">
              <div className="rounded-[2rem] border border-[#e7d2bc] bg-gradient-to-br from-[#fff8ee] to-[#f8f0e4] p-8 shadow-[0_20px_60px_-30px_rgba(112,76,48,0.2)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#f0dcc4]/40 to-transparent rounded-full -translate-y-20 -translate-x-20" />
                <div className="text-sm uppercase tracking-[0.22em] text-[#8b6e53] mb-4 font-medium relative z-10">
                  למי זה מתאים
                </div>
                <div className="space-y-4 relative z-10">
                  <div className="rounded-[1.75rem] bg-white p-6 border border-[#e9d7c3] shadow-[0_12px_24px_-8px_rgba(112,76,48,0.1)] hover:shadow-[0_16px_32px_-12px_rgba(112,76,48,0.15)] transition-all duration-300">
                    <h3 className="font-semibold text-dark mb-2">רצינות במקום ריגוש</h3>
                    <p className="text-sm text-gray-600 leading-7">
                      לאנשים שמחפשים לבחור מתוך שיקול דעת ולא מתוך תחושת קיץ רגעית. מי שמוכן להשקיע בבחירה שתחזיק מעמד.
                    </p>
                  </div>
                  <div className="rounded-[1.75rem] bg-white p-6 border border-[#e9d7c3] shadow-[0_12px_24px_-8px_rgba(112,76,48,0.1)] hover:shadow-[0_16px_32px_-12px_rgba(112,76,48,0.15)] transition-all duration-300">
                    <h3 className="font-semibold text-dark mb-2">בחירה שחוזרת</h3>
                    <p className="text-sm text-gray-600 leading-7">
                      מי שרוצה לדעת איך לא לחזור על אותם סרטים עם אנשים לא מתאימים. אני מלווה את התהליך הזה עם כלים מעשיים ותמיכה אמיתית.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf6ef]/30 via-transparent to-[#f8e8da]/30" />
        <div className="container-main relative">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-[0.22em] text-[#8b6e53] mb-4 font-medium">למידע מקצועי</p>
            <h2 className="section-title">למי האתר מתאים</h2>
            <p className="text-base text-[#4f3d34] leading-8 max-w-2xl mx-auto">
              מי שמוכן לקחת אחריות על הבחירות שלו, ומבין שההחלטות הרגשיות החשובות ביותר הן אלה שמתנהלות גם אחרי הצעדים הראשונים. אנשים שמחפשים קשר שמחזיק מעמד, לא רק ריגוש זמני.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="story-card group hover:shadow-[0_24px_48px_-16px_rgba(112,76,48,0.15)] hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-[#cfa16f]">
              <h3 className="text-xl font-semibold text-dark mb-3 group-hover:text-[#8b6e53] transition-colors">רווקים ורווקות</h3>
              <p className="text-gray-700 leading-7">
                מי שחושב שהסיפור שלו יכול להרגיש אחרת, ושמוכן לשנות את הקריטריונים שלו לדייטים. אנשים שרוצים לבנות קשר שיתבסס על בחירה נכונה, לא על תקווה.
              </p>
            </div>
            <div className="story-card group hover:shadow-[0_24px_48px_-16px_rgba(112,76,48,0.15)] hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-[#cfa16f]">
              <h3 className="text-xl font-semibold text-dark mb-3 group-hover:text-[#8b6e53] transition-colors">גרושים וגרושות</h3>
              <p className="text-gray-700 leading-7">
                מי שמבין שהקשר הבא יכול להיבנות על מסגרת אחרת, ובהירות רגשית בריאה יותר. אנשים שרוצים ללמוד מהעבר בלי לחזור על אותן טעויות.
              </p>
            </div>
            <div className="story-card group hover:shadow-[0_24px_48px_-16px_rgba(112,76,48,0.15)] hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-[#cfa16f]">
              <h3 className="text-xl font-semibold text-dark mb-3 group-hover:text-[#8b6e53] transition-colors">אנשים בתוך קשר</h3>
              <p className="text-gray-700 leading-7">
                מי שרוצה לעבוד על הקשר שלו אחרי הריגוש, ולהפוך אותו ליציב יותר גם בימים רגילים. זוגות שרוצים לבנות קשר שמחזיק מעמד לאורך זמן.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#fff5eb] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff5eb] via-[#f8f0e4]/50 to-[#fff5eb]" />
        <div className="container-main relative">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-[0.22em] text-[#8b6e53] mb-4 font-medium">מה תפגשו כאן</p>
            <h2 className="section-title">מה תקבלו כאן</h2>
            <p className="text-base text-[#4f3d34] leading-8 max-w-2xl mx-auto">
              אני מציע לא רק תיאוריות. האתר הזה מוביל אתכם לכלים מעשיים, לדיוק ברגשות ולבחירות שמרגישות נכונות גם אחרי כמה חודשים. כל מה שאני כותב נבנה מניסיון אמיתי עם אנשים אמיתיים.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            <div className="story-card group hover:shadow-[0_20px_40px_-16px_rgba(112,76,48,0.12)] hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#cfa16f] to-[#b8855a] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl shadow-lg">💡</div>
              <h3 className="font-semibold text-dark mb-4 group-hover:text-[#8b6e53] transition-colors">בהירות</h3>
              <p className="text-sm leading-7 text-gray-700">להבין מה מפעיל את המשיכה שלכם, ומה משמר את הקשר. כלים שמביאים בהירות אמיתית, לא תשובות קלות.</p>
            </div>
            <div className="story-card group hover:shadow-[0_20px_40px_-16px_rgba(112,76,48,0.12)] hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#cfa16f] to-[#b8855a] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl shadow-lg">🛠️</div>
              <h3 className="font-semibold text-dark mb-4 group-hover:text-[#8b6e53] transition-colors">כלים מעשיים</h3>
              <p className="text-sm leading-7 text-gray-700">התערבויות ברורות לשיחה, לדייטים ואף להחלטות חזרה אחריות. כלים שעובדים כי הם נבנו מתוך ניסיון.</p>
            </div>
            <div className="story-card group hover:shadow-[0_20px_40px_-16px_rgba(112,76,48,0.12)] hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#cfa16f] to-[#b8855a] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl shadow-lg">🔄</div>
              <h3 className="font-semibold text-dark mb-4 group-hover:text-[#8b6e53] transition-colors">הבנה של דפוסים</h3>
              <p className="text-sm leading-7 text-gray-700">לזהות דפוסים שממשיכים להרוס בחירות ולהוציא אתכם מהמסלול. ללמוד מה שחוזר על עצמו כדי לשנות.</p>
            </div>
            <div className="story-card group hover:shadow-[0_20px_40px_-16px_rgba(112,76,48,0.12)] hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#cfa16f] to-[#b8855a] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl shadow-lg">🌱</div>
              <h3 className="font-semibold text-dark mb-4 group-hover:text-[#8b6e53] transition-colors">דרך לבחירה בוגרת</h3>
              <p className="text-sm leading-7 text-gray-700">כדי לבחור מתוך עוצמה פנימית ולא מתוך פחד או שכנוע. לבנות קשרים שמחזיקים מעמד לאורך זמן.</p>
            </div>
          </div>
        </div>
      </section>

      <BookCTA />

      <section className="section-padding bg-light">
        <div className="container-main">
          <div className="flex flex-col gap-10">
            <div className="grid gap-6 lg:grid-cols-2">
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
              <CTAButton href="/articles" label="לקריאת מאמרים" variant="primary" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[linear-gradient(180deg,_#fbf6ef_0%,_#f7ede2_100%)]">
        <div className="container-main text-center">
          <span className="inline-flex rounded-full bg-[#E7D0B8] px-4 py-2 text-sm font-semibold text-[#6F4632] mb-4">
            החלטה שמתחילה ברגע הזה
          </span>
          <h2 className="section-title">לשיחה שמכוונת את הבחירה שלך</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-8 mb-8">
            תיאום שיחה מאפשר להבין איפה עומדים, מה שומר עליכם מאחור ואיך לצאת לדרך אחרת עם בטחון.
          </p>
          <CTAButton href={CONTACT_INFO.whatsapp} label={CTA_LABELS.scheduleCall} variant="primary" external />
        </div>
      </section>
    </div>
  );
}
