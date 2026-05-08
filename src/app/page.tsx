import CTAButton from '@/components/CTAButton';
import ArticleCard from '@/components/ArticleCard';
import { CONTACT_INFO, CTA_LABELS } from '@/constants/config';
import { getAllArticles } from '@/data/articles';

export default function Home() {
  const recentArticles = getAllArticles().slice(0, 3);

  return (
    <div>
      {/* Premium Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[#faf2e8] via-[#f8f0e4] to-[#f0e6d6] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf2e8]/90 via-transparent to-[#f0e6d6]/70" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-[#cfa16f]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#8b6e53]/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#f0e6d6]/20 via-transparent to-[#e8d5b7]/15 rounded-full blur-3xl" />

        <div className="container-main relative">
          <div className="grid gap-20 lg:grid-cols-[1.3fr_0.7fr] items-center">
            {/* Hero Content */}
            <div className="max-w-5xl">
              <span className="hero-label">
                בחירות רגשיות בוגרות
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#2c2418] tracking-tight mb-10 leading-[1.05]">
                להפסיק לרדוף אחרי אהבה —
                <br />
                ולהתחיל לבחור נכון
              </h1>
              <p className="section-subtitle-left mb-8 text-[#5c4b42] max-w-3xl">
                צחי חן מלווה אנשים בדרך לקשרים בריאים, בוגרים ויציבים — דרך כלים מעשיים, בהירות רגשית והבנה עמוקה של דפוסי בחירה.
              </p>
              <p className="text-lg text-[#8a7a6c] leading-[1.6] mb-12 max-w-2xl font-medium">
                לא עוד אודישנים. לא עוד רדיפה. לא עוד בחירות מתוך פחד.
                <br />
                אלא דרך ברורה יותר לראות את עצמכם, להבין את הדפוסים שלכם, ולבחור קשר ממקום בוגר.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
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

            {/* Premium Author & Book Panel */}
            <div className="hero-panel">
              <div className="space-y-8">
                {/* Author Profile Card */}
                <div className="hero-card">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#8b6e53] to-[#6b4a34] rounded-full flex items-center justify-center text-3xl text-white shadow-lg border-4 border-white">
                      👤
                    </div>
                    <div className="flex-1">
                      <p className="text-sm uppercase tracking-[0.08em] text-[#6b4a34] font-semibold mb-1">
                        צחי חן
                      </p>
                      <p className="text-xl font-semibold text-[#2c2418] mb-3">
                        מאמן ויועץ למערכות יחסים
                      </p>
                      <p className="text-sm leading-[1.6] text-[#5c4b42]">
                        מחבר &ldquo;מדייטים לאהבה&rdquo; שמלווה אנשים ברגעים שהבחירה שלהם קובעת את מה שיקרה בהמשך. אני מאמין שכל בחירה רומנטית היא הזדמנות לצמיחה אמיתית.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge">ליווי רגשי ומעשי</span>
                    <span className="badge">דייטינג ובחירה זוגית</span>
                    <span className="badge">קשרים בריאים ויציבים</span>
                  </div>
                </div>

                {/* Book Preview Card */}
                <div className="hero-card">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-20 bg-gradient-to-br from-[#cfa16f] to-[#b8855a] rounded-lg flex items-center justify-center text-2xl text-white shadow-lg border-2 border-white">
                      📖
                    </div>
                    <div className="flex-1">
                      <p className="text-sm uppercase tracking-[0.08em] text-[#6b4a34] font-semibold mb-2">
                        הספר החדש
                      </p>
                      <p className="text-lg font-semibold text-[#2c2418] mb-2">
                        מדייטים לאהבה
                      </p>
                      <p className="text-sm text-[#5c4b42] leading-[1.5] mb-3">
                        ספר מעשי על הבחירות הלא מודעות שמנהלות את דרכנו לאהבה — ועל הדרך להתחיל לבחור אחרת.
                      </p>
                      <p className="text-lg font-bold text-[#8b6e53]">
                        89 ₪
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="hero-card">
                  <p className="text-xs uppercase tracking-[0.12em] text-[#6b4a34] font-semibold mb-4">
                    מה תקבלו כאן
                  </p>
                  <ul className="space-y-3 text-sm leading-[1.6] text-[#5c4b42]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#8b6e53] mt-1 text-lg">•</span>
                      בהירות רגשית על הדפוסים שמובילים לבחירות חוזרות
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#8b6e53] mt-1 text-lg">•</span>
                      כלים מעשיים לשיחה ובדייטים הבאים
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#8b6e53] mt-1 text-lg">•</span>
                      דרך ברורה לבחון אם הקשר יכול להחזיק לאורך זמן
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority / Positioning Strip */}
      <section className="py-12 bg-gradient-to-r from-[#8b6e53] to-[#6b4a34] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b6e53]/90 via-[#7a563e] to-[#6b4a34]/90" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="container-main relative">
          <div className="flex flex-wrap justify-center gap-12 text-base font-medium">
            <span className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white/60 rounded-full"></span>
              מאמן ויועץ למערכות יחסים
            </span>
            <span className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white/60 rounded-full"></span>
              מחבר &ldquo;מדייטים לאהבה&rdquo;
            </span>
            <span className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white/60 rounded-full"></span>
              מלווה תהליכי בחירה, זוגיות ובהירות רגשית
            </span>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-20 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="max-w-3xl">
              <h2 className="section-title-left mb-10">
                לא עוד עצות כלליות — אלא הבנה של הדפוס שחוזר אצלכם
              </h2>
              <p className="section-subtitle-left mb-10 text-[#5c4b42] leading-[1.6]">
                צחי חן עובד עם אנשים שמבינים שכבר לא מספיק &ldquo;לנסות שוב&rdquo;. הם רוצים להבין למה הם נמשכים לאותו סוג קשר, למה הם מתפשרים דווקא כשכואב להם, ואיך מתחילים לבחור מתוך ערך עצמי ולא מתוך פחד להישאר לבד.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/about" label="להכיר את צחי" variant="outline" />
                <CTAButton href={CONTACT_INFO.whatsapp} label="לתאם שיחה ראשונה" variant="primary" external />
              </div>
            </div>

            <div className="space-y-8">
              <div className="story-card">
                <h3 className="text-2xl font-semibold text-[#2c2418] mb-4">דפוסים במקום סתירות</h3>
                <p className="text-[#5c4b42] leading-[1.7] text-lg">
                  לא לוקחים את הקשר כעניין של מזל, אלא כקצה של דפוסים שמובילים אותנו בחזרה לאותם טעויות. אני עוזר לזהות את הדפוסים האלה ולשנות אותם — כדי שתוכלו לבחור אחרת בפעם הבאה.
                </p>
              </div>
              <div className="story-card">
                <h3 className="text-2xl font-semibold text-[#2c2418] mb-4">כלים שמרגישים אישיים</h3>
                <p className="text-[#5c4b42] leading-[1.7] text-lg">
                  לא טיפים גנריים, אלא שאלות ומשימות שמותאמות למה שקורה לכם בחיים הרומנטיים היום. כלים שעובדים כי הם נבנו מתוך ניסיון אמיתי עם אנשים במצבים דומים לשלכם.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="section-padding bg-gradient-to-br from-[#f8f0e4] via-[#f0e6d6] to-[#e8dcc8] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#cfa16f]/12 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#8b6e53]/8 to-transparent rounded-full blur-3xl" />
        <div className="container-main relative">
          <div className="grid gap-20 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="max-w-3xl">
              <span className="hero-label mb-6">הספר החדש</span>
              <h2 className="section-title-left mb-8">
                מדייטים לאהבה
              </h2>
              <p className="section-subtitle-left mb-10 text-[#5c4b42] leading-[1.6]">
                ספר מעשי ומעוצב לכל מי שרוצה להבין את דרכו לקשר בריא ואמיתי. לא עוד עצות רומנטיות — אלא כלים שיעבדו גם כשאתם לבד עם המחשבות שלכם.
              </p>

              <div className="grid gap-6 sm:grid-cols-2 mb-10">
                <div className="story-card">
                  <h3 className="text-xl font-semibold text-[#2c2418] mb-3">להבין למה אתם נמשכים למי שפוגע בכם</h3>
                  <p className="text-[#5c4b42] leading-[1.6]">
                    תרגילים שמציגים במהירות את הנטיות שלכם בבחירות רומנטיות — כדי שתוכלו לראות את הדפוס לפני שהוא חוזר.
                  </p>
                </div>
                <div className="story-card">
                  <h3 className="text-xl font-semibold text-[#2c2418] mb-3">להפסיק לעשות אודישנים בדייטים</h3>
                  <p className="text-[#5c4b42] leading-[1.6]">
                    כלים שניתן ליישם כבר בדייט הבא או בשיחה הקרובה — כדי שתרגישו יותר כמו עצמכם ופחות כמו מישהו אחר.
                  </p>
                </div>
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

            <div className="hero-card text-center">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#8b6e53] to-[#6b4a34] rounded-[1.5rem] flex items-center justify-center text-6xl text-white shadow-xl border-8 border-white mb-8">
                📖
              </div>
              <p className="text-base text-[#5c4b42] leading-[1.6] mb-6">
                כאן תתווסף כריכת הספר. ספר מעשי שמלווה אתכם מהבחירה הראשונה ועד לבניית קשר בריא ומשמעותי.
              </p>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#8b6e53] mb-2">89 ₪</p>
                <p className="text-sm text-[#8a7a6c]">כולל משלוח</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-title mb-6">
              מה תקבלו כאן
            </h2>
            <p className="section-subtitle text-[#5c4b42]">
              אני מציע לא רק תיאוריות. האתר הזה מוביל אתכם לכלים מעשיים, לדיוק ברגשות ולבחירות שמרגישות נכונות גם אחרי כמה חודשים.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="insight-card text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-[#8b6e53] to-[#6b4a34] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl shadow-lg">
                💡
              </div>
              <h3 className="text-xl font-semibold text-[#2c2418] mb-4">בהירות</h3>
              <p className="text-sm text-[#5c4b42] leading-[1.6]">
                להבין מה מפעיל את המשיכה שלכם, ומה משמר את הקשר. כלים שמביאים בהירות אמיתית, לא תשובות קלות.
              </p>
            </div>
            <div className="insight-card text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-[#8b6e53] to-[#6b4a34] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl shadow-lg">
                🛠️
              </div>
              <h3 className="text-xl font-semibold text-[#2c2418] mb-4">כלים מעשיים</h3>
              <p className="text-sm text-[#5c4b42] leading-[1.6]">
                התערבויות ברורות לשיחה, לדייטים ואף להחלטות חזרה אחריות. כלים שעובדים כי הם נבנו מתוך ניסיון.
              </p>
            </div>
            <div className="insight-card text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-[#8b6e53] to-[#6b4a34] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl shadow-lg">
                🔄
              </div>
              <h3 className="text-xl font-semibold text-[#2c2418] mb-4">הבנה של דפוסים</h3>
              <p className="text-sm text-[#5c4b42] leading-[1.6]">
                לזהות דפוסים שממשיכים להרוס בחירות ולהוציא אתכם מהמסלול. ללמוד מה שחוזר על עצמו כדי לשנות.
              </p>
            </div>
            <div className="insight-card text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-[#8b6e53] to-[#6b4a34] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl shadow-lg">
                🌱
              </div>
              <h3 className="text-xl font-semibold text-[#2c2418] mb-4">דרך לבחירה בוגרת</h3>
              <p className="text-sm text-[#5c4b42] leading-[1.6]">
                כדי לבחור מתוך עוצמה פנימית ולא מתוך פחד או שכנוע. לבנות קשרים שמחזיקים מעמד לאורך זמן.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="section-padding bg-gradient-to-br from-[#faf2e8] via-[#f8f0e4] to-[#f0e6d6]">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-title mb-6">
              למי האתר מתאים
            </h2>
            <p className="section-subtitle text-[#5c4b42]">
              מי שמוכן לקחת אחריות על הבחירות שלו, ומבין שההחלטות הרגשיות החשובות ביותר הן אלה שמתנהלות גם אחרי הצעדים הראשונים.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
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
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-title mb-6">
              מתוך המאמרים
            </h2>
            <p className="section-subtitle text-[#5c4b42]">
              תובנות מעשיות על דייטים, קשרים וצמיחה רגשית
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
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
      <section className="section-padding bg-gradient-to-br from-[#2c2418] via-[#241e18] to-[#1f1913] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a140e]/30 via-transparent to-[#2c2418]/20" />
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#8b6e53]/10 to-transparent rounded-full blur-3xl" />
        <div className="container-narrow relative text-center">
          <span className="badge bg-[#8b6e53]/20 text-[#d4b48b] border-[#8b6e53]/30 mb-8">
            רגע לפני שאתם שוב בוחרים אותו דבר
          </span>
          <h2 className="section-title text-white mb-8">
            לפעמים שינוי לא מתחיל בעוד דייט, בעוד שיחה או בעוד ניסיון להרשים.
          </h2>
          <p className="text-lg text-[#d4b48b] leading-[1.6] mb-12 max-w-2xl mx-auto">
            הוא מתחיל ברגע שבו אתם עוצרים, רואים את הדפוס, ובוחרים אחרת.
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