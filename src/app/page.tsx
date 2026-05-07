import CTAButton from '@/components/CTAButton';
import ArticleCard from '@/components/ArticleCard';
import BookCTA from '@/components/BookCTA';
import { CONTACT_INFO, CTA_LABELS } from '@/constants/config';
import { getAllArticles } from '@/data/articles';

export default function Home() {
  const recentArticles = getAllArticles().slice(0, 4);

  return (
    <div>
      <section className="section-padding bg-[radial-gradient(circle_at_top_left,_rgba(184,141,104,0.16),_transparent_35%),linear-gradient(180deg,_#fbf6ef_0%,_#f2e9dd_100%)]">
        <div className="container-main grid gap-12 lg:grid-cols-[1.25fr_0.9fr] items-center">
          <div className="max-w-3xl">
            <span className="hero-label">
              ליווי אישי לקשרים בוגרים ויציבים
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-semibold text-dark leading-tight tracking-tight mb-6 max-w-3xl">
              להפסיק לרדוף אחרי אהבה — ולהתחיל לבחור נכון
            </h1>
            <p className="section-subtitle mb-10">
              עם ניסיון של שנים בעבודה אישית וקריאה של דפוסים, אני מלווה אנשים שנמאס להם לחזור על אותן בחירות רגשיות ומחפשים דרך ברורה יותר ליציבות.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
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

          <div className="rounded-[2.5rem] border border-[#D6B48F] bg-[#fff7ed] p-10 shadow-soft">
            <div className="rounded-[2rem] bg-white border border-[#E5D0B8] p-8 shadow-sm">
              <div className="mb-8 mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#D4B18D] bg-[#F5E1C8] text-5xl">
                👤
              </div>
              <p className="text-xl font-semibold text-dark mb-2">
                צחי חן
              </p>
              <p className="text-sm text-gray-600 leading-7 mb-5">
                מאמן ויועץ למערכות יחסים | מחבר הספר {`"מדייטים לאהבה"`}
              </p>
              <div className="space-y-4 text-sm text-gray-700 leading-7">
                <p>
                  עוזר לרווקים, גרושים וזוגות לייצר בחירות חדשות שנשארות גם כשהרגשות מתמתנים.
                </p>
                <p>
                  לא רק להסביר מה לא עובד, אלא למצוא יחד דרך לשנות את האופן שבו אתם בוחרים אדם ובן זוג.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <h2 className="section-title text-left">מי עומד מאחורי זה</h2>
              <p className="text-lg text-gray-700 leading-8 max-w-3xl mb-8">
                שמי צחי חן, ואני עוזר לאנשים למצוא יציבות בקשרים מבלי לוותר על עצמם. לא מדובר ברעיונות או בהבטחות — מדובר בעבודה על הבחירות שלכם, פעם אחר פעם.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-[#E4D4C4] bg-white p-7 shadow-soft">
                  <h3 className="font-semibold text-dark mb-3">מבט על דפוסים</h3>
                  <p className="text-sm text-gray-600 leading-7">
                    לזהות את הדפוסים שמובילים לדייטים לא מתאימים ולזוגיות שמרגישה לא כנה.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-[#E4D4C4] bg-white p-7 shadow-soft">
                  <h3 className="font-semibold text-dark mb-3">כלים להתמודדות</h3>
                  <p className="text-sm text-gray-600 leading-7">
                    כלים פשוטים וברורים שניתן להשתמש בהם בשיחה, בדייט או ברגעים של החלטה.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-[#D6B48F] bg-[#F9F2E8] p-10 shadow-soft">
              <h3 className="text-xl font-semibold text-dark mb-5">איך זה נראה בעבודה</h3>
              <ul className="space-y-5 text-gray-700">
                <li className="rounded-[1.75rem] bg-white p-6 border border-[#E5D0B8] shadow-sm">
                  <strong className="block mb-2">שיחה ראשונית ממוקדת</strong>
                  לגלות מה חוזר על עצמו בבחירות שלכם, ואיפה טמונה ההזדמנות לשינוי.
                </li>
                <li className="rounded-[1.75rem] bg-white p-6 border border-[#E5D0B8] shadow-sm">
                  <strong className="block mb-2">בהירות על הקריטריונים</strong>
                  להבחין בין רגשות עוצמתיים לבין קווים אדומים שיכולים לבנות קשר יציב.
                </li>
                <li className="rounded-[1.75rem] bg-white p-6 border border-[#E5D0B8] shadow-sm">
                  <strong className="block mb-2">כתיבה של דרך חדשה</strong>
                  לבנות בחירות שמרגישות אותנטיות, אבל גם ממשיות לאורך זמן.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="section-title">למי האתר מתאים</h2>
            <p className="text-base text-gray-700 leading-8">
              לאלה שמרגישים שהם צריכים דרך ברורה יותר בבחירות רגשיות, ורוצים עזרה שמבוססת על ניסיון ולא על סיסמאות.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-[#E4D4C4] bg-white p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-dark mb-3">רווקים ורווקות</h3>
              <p className="text-gray-700 leading-7">
                מי שמחפש להפסיק להתאים את עצמו לדייטים ולהתחיל לבחור בביטחון את מי שליבו רוצה באמת.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#E4D4C4] bg-white p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-dark mb-3">גרושים וגרושות</h3>
              <p className="text-gray-700 leading-7">
                מי שרוצה לבנות קשר חדש על בסיס של חופש ורצון אמיתי, בלי לחזור אוטומטית על מה שכשל בעבר.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#E4D4C4] bg-white p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-dark mb-3">אנשים בתוך קשר</h3>
              <p className="text-gray-700 leading-7">
                מי שמחפש לקשר שלו עומק ושקט, לא רק ריגוש זמני או הבטחות מרוממות.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="section-title">מה תקבלו כאן</h2>
            <p className="text-base text-gray-700 leading-8 max-w-2xl mx-auto">
              לא עוד טיפים כלליים. פה תקבלו דרך עבודה שמכוונת לעמוד של הבחירה, לא רק של הרגש הרגעי.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            <div className="rounded-[2rem] bg-white p-8 text-gray-700 shadow-soft border border-[#E4D4C4]">
              <h3 className="font-semibold text-dark mb-4">בהירות</h3>
              <p className="text-sm leading-7">לזהות בבהירות מה משפיע על התשוקה שלכם ומה באמת יכול לשמור על קשר לאורך זמן.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 text-gray-700 shadow-soft border border-[#E4D4C4]">
              <h3 className="font-semibold text-dark mb-4">כלים מעשיים</h3>
              <p className="text-sm leading-7">צעדים מוגדרים לשיחה ברורה, מבט על דייטים והחלטות שלא נשענות על חרדה.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 text-gray-700 shadow-soft border border-[#E4D4C4]">
              <h3 className="font-semibold text-dark mb-4">הבנה של דפוסים</h3>
              <p className="text-sm leading-7">לזהות דפוסים מוכרים ולשבור אותם לפני שהם מכתיבים את הבחירה הבאה.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 text-gray-700 shadow-soft border border-[#E4D4C4]">
              <h3 className="font-semibold text-dark mb-4">דרך לבחירה בוגרת יותר</h3>
              <p className="text-sm leading-7">בחירה מתוך עוצמה ולא מתוך תחושת חוסר — כך שתוכל להרגיש בטוח גם אחרי ההתחלה.</p>
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
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-7 mb-8">
            תיאום שיחה מאפשר להבין איפה עומדים, מה שומר עליכם מאחור ואיך לצאת לדרך אחרת עם בטחון.
          </p>
          <CTAButton href={CONTACT_INFO.whatsapp} label={CTA_LABELS.scheduleCall} variant="primary" external />
        </div>
      </section>
    </div>
  );
}
