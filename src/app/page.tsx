import CTAButton from '@/components/CTAButton';
import ArticleCard from '@/components/ArticleCard';
import { CONTACT_INFO, CTA_LABELS } from '@/constants/config';
import { getAllArticles } from '@/data/articles';

export default function Home() {
  const recentArticles = getAllArticles().slice(0, 4);

  return (
    <div>
      {/* Premium Header */}
      <section className="section-padding bg-gradient-to-br from-[#faf2e8] via-[#f8f0e4] to-[#f0e6d6] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf2e8]/80 via-transparent to-[#f0e6d6]/60" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-[#cfa16f]/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#8b6e53]/6 to-transparent rounded-full blur-3xl" />

        <div className="container-main relative">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="max-w-4xl">
              <span className="hero-label">
                בחירות רגשיות בוגרות
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#2c2418] tracking-tight mb-8 leading-[1.05]">
                להפסיק לרדוף אחרי אהבה —
                <br />
                ולהתחיל לבחור נכון
              </h1>
              <p className="section-subtitle text-center lg:text-left mb-10 text-[#5c4b42]">
                צחי חן מלווה אנשים בדרך לקשרים בריאים, בוגרים ויציבים — דרך כלים מעשיים, בהירות רגשית והבנה עמוקה של דפוסי בחירה.
              </p>
              <p className="text-base text-[#8a7a6c] leading-[1.6] mb-12 max-w-2xl text-center lg:text-left">
                לא עוד אודישנים. לא עוד רדיפה. לא עוד בחירות מתוך פחד.
                <br />
                אלא דרך ברורה יותר לראות את עצמכם, להבין את הדפוסים שלכם, ולבחור קשר ממקום בוגר.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
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
              <div className="space-y-8">
                {/* Author Card */}
                <div className="hero-card">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8b6e53] to-[#6b4a34] rounded-full flex items-center justify-center text-2xl text-white shadow-lg">
                      👤
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.08em] text-[#6b4a34] font-semibold">
                        צחי חן
                      </p>
                      <p className="text-lg font-semibold text-[#2c2418]">
                        מאמן ויועץ למערכות יחסים
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-[1.6] text-[#5c4b42] mb-4">
                    מחבר {`"מדייטים לאהבה"`} שמלווה אנשים ברגעים שהבחירה שלהם קובעת אכן את מה שיקרה בהמשך. אני מאמין שכל בחירה רומנטית היא הזדמנות לצמיחה אמיתית.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge">ליווי רגשי ומעשי</span>
                    <span className="badge">דייטינג ובחירה זוגית</span>
                    <span className="badge">קשרים בריאים ויציבים</span>
                  </div>
                </div>

                {/* What You'll Get */}
                <div className="hero-card">
                  <p className="text-xs uppercase tracking-[0.12em] text-[#6b4a34] font-semibold mb-4">
                    מה אפשר לקבל כאן
                  </p>
                  <ul className="space-y-3 text-sm leading-[1.6] text-[#5c4b42]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#8b6e53] mt-1 text-lg">•</span>
                      בהירות רגשית על הדפוסים שמובילים לבחירות חוזרות.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#8b6e53] mt-1 text-lg">•</span>
                      כלים מעשיים לשיחה ובדייטים הבאים.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#8b6e53] mt-1 text-lg">•</span>
                      דרך ברורה לבחון אם הקשר יכול להחזיק לאורך זמן.
                    </li>
                  </ul>
                </div>

                {/* Author Photo Placeholder */}
                <div className="hero-card">
                  <p className="text-sm font-semibold text-[#2c2418] mb-4">צחי חן - מאמן מערכות יחסים</p>
                  <div className="aspect-[4/5] bg-gradient-to-br from-[#cfa16f] to-[#b8855a] rounded-[1rem] flex items-center justify-center text-4xl text-white shadow-inner mb-4">
                    👤
                  </div>
                  <p className="text-xs text-[#8a7a6c] leading-[1.5] text-center">
                    כאן תתווסף תמונת המחבר. צחי חן, מאמן מקצועי עם ניסיון של עשור בעבודה עם זוגות ואנשים בודדים.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority / Positioning Strip */}
      <section className="py-8 bg-gradient-to-r from-[#8b6e53] to-[#6b4a34] text-white">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            <span>מאמן ויועץ למערכות יחסים</span>
            <span className="hidden sm:inline">•</span>
            <span>מחבר &ldquo;מדייטים לאהבה&rdquo;</span>
            <span className="hidden sm:inline">•</span>
            <span>מלווה תהליכי בחירה, זוגיות ובהירות רגשית</span>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="max-w-2xl">
              <h2 className="section-title-left mb-8">
                לא עוד עצות כלליות — אלא הבנה של הדפוס שחוזר אצלכם
              </h2>
              <p className="section-subtitle-left mb-8 text-[#5c4b42]">
                צחי חן עובד עם אנשים שמבינים שכבר לא מספיק &ldquo;לנסות שוב&rdquo;. הם רוצים להבין למה הם נמשכים לאותו סוג קשר, למה הם מתפשרים דווקא כשכואב להם, ואיך מתחילים לבחור מתוך ערך עצמי ולא מתוך פחד להישאר לבד.
              </p>
              <CTAButton href="/about" label="להכיר את צחי" variant="outline" />
            </div>

            <div className="hero-card">
              <div className="space-y-6">
                <div className="story-card">
                  <h3 className="text-lg font-semibold text-[#2c2418] mb-3">דפוסים במקום סתירות</h3>
                  <p className="text-sm text-[#5c4b42] leading-[1.6]">
                    לא לוקחים את הקשר כעניין של מזל, אלא כקצה של דפוסים שמובילים אותנו בחזרה לאותם טעויות. אני עוזר לזהות את הדפוסים האלה ולשנות אותם.
                  </p>
                </div>
                <div className="story-card">
                  <h3 className="text-lg font-semibold text-[#2c2418] mb-3">כלים שמרגישים אישיים</h3>
                  <p className="text-sm text-[#5c4b42] leading-[1.6]">
                    לא טיפים גנריים, אלא שאלות ומשימות שמותאמות למה שקורה לכם בחיים הרומנטיים היום. כלים שעובדים כי הם נבנו מתוך ניסיון אמיתי.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="section-padding bg-gradient-to-br from-[#f8f0e4] via-[#f0e6d6] to-[#e8dcc8] relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#cfa16f]/10 to-transparent rounded-full blur-3xl" />
        <div className="container-main relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="max-w-2xl">
              <h2 className="section-title-left mb-6">
                מדייטים לאהבה
              </h2>
              <p className="section-subtitle-left mb-8 text-[#5c4b42]">
                ספר מעשי על הבחירות הלא מודעות שמנהלות את דרכנו לאהבה — ועל הדרך להתחיל לבחור אחרת.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 mb-8">
                <div className="story-card">
                  <h3 className="text-base font-semibold text-[#2c2418] mb-2">להבין למה אתם נמשכים למי שפוגע בכם</h3>
                  <p className="text-sm text-[#5c4b42] leading-[1.6]">
                    תרגילים שמציגים במהירות את הנטיות שלכם בבחירות רומנטיות.
                  </p>
                </div>
                <div className="story-card">
                  <h3 className="text-base font-semibold text-[#2c2418] mb-2">להפסיק לעשות אודישנים בדייטים</h3>
                  <p className="text-sm text-[#5c4b42] leading-[1.6]">
                    כלים שניתן ליישם כבר בדייט הבא או בשיחה הקרובה.
                  </p>
                </div>
              </div>

              <CTAButton
                href={CONTACT_INFO.bookPurchaseLink}
                label={`${CTA_LABELS.buyBook} - מחיר: TODO`}
                variant="primary"
                external
              />
            </div>

            <div className="hero-card">
              <div className="text-center">
                <div className="aspect-[3/4] bg-gradient-to-br from-[#8b6e53] to-[#6b4a34] rounded-[1.25rem] flex items-center justify-center text-5xl text-white shadow-inner mb-6">
                  📘
                </div>
                <p className="text-sm text-[#8a7a6c] leading-[1.6]">
                  כאן תתווסף כריכת הספר. ספר מעשי שמלווה אתכם מהבחירה הראשונה ועד לבניית קשר בריא ומשמעותי.
                </p>
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
              <p className="text-[#5c4b42] leading-[1.6]">
                מי שמרגישים שהם מתאמצים מדי, נמשכים למי שלא פנוי אליהם, או מתקשים להבין מתי קשר באמת נכון.
              </p>
            </div>
            <div className="story-card border-l-4 border-l-[#8b6e53]">
              <h3 className="text-2xl font-semibold text-[#2c2418] mb-4">גרושים וגרושות</h3>
              <p className="text-[#5c4b42] leading-[1.6]">
                מי שחוזרים לעולם הדייטינג ורוצים לבנות בחירה חדשה מתוך ניסיון, בהירות ובשלות.
              </p>
            </div>
            <div className="story-card border-l-4 border-l-[#8b6e53]">
              <h3 className="text-2xl font-semibold text-[#2c2418] mb-4">אנשים בתוך קשר</h3>
              <p className="text-[#5c4b42] leading-[1.6]">
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
