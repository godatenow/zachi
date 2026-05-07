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
        <div className="container-main grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-[#E7D0B8] px-4 py-2 text-sm font-semibold text-[#6F4632] mb-6">
              מדריך לבחירות רומנטיות בוגרות
            </span>
            <h1 className="text-4xl sm:text-5xl xl:text-[4.75rem] font-semibold text-dark leading-tight tracking-tight mb-6">
              להפסיק לרדוף אחרי אהבה — ולהתחיל לבחור נכון
            </h1>
            <p className="section-subtitle text-gray-700 mb-10">
              צחי חן מלווה אנשים בדרך לקשרים בריאים, בוגרים ויציבים — דרך כלים מעשיים, בהירות רגשית והבנה עמוקה של דפוסי בחירה.
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

          <div className="rounded-[2rem] border border-[#D6B48F] bg-white p-10 shadow-soft">
            <div className="rounded-[1.75rem] bg-[#F3E6D8] p-8 text-center">
              <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#C79A75]/20 text-4xl">
                👤
              </div>
              <p className="text-lg font-semibold text-dark mb-3">
                צחי חן
              </p>
              <p className="text-sm text-gray-600 leading-7">
                מאמן ויועץ למערכות יחסים. מחבר הספר {`"מדייטים לאהבה"`}. עובד עם רווקים, גרושים וזוגות שמחפשים בחירות שקיימות גם אחרי השלב הרומנטי.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <h2 className="section-title text-left">מי עומד מאחורי זה</h2>
              <p className="text-lg text-gray-700 leading-8 max-w-3xl mb-8">
                אחרי עשור של עבודה עם אנשים ויחסים, אני מתמקד בסיבה האמיתית שמביאה אותנו לבחור יחד עם כאב שוב ושוב. אין פה קלישאות, רק מפתח בר קיימא לשם שינוי.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-[#E4D4C4] bg-white p-6 shadow-soft">
                  <h3 className="font-semibold text-dark mb-2">בחירה מודעת</h3>
                  <p className="text-sm text-gray-600 leading-6">
                    להבין מה מרגש אתכם באמת, במקום למה אתם נמשכים באופן אוטומטי.
                  </p>
                </div>
                <div className="rounded-3xl border border-[#E4D4C4] bg-white p-6 shadow-soft">
                  <h3 className="font-semibold text-dark mb-2">גישה ישירה</h3>
                  <p className="text-sm text-gray-600 leading-6">
                    שפה ברורה, פתרונות מעשיים ותרגילים שניתן ליישם בלי מילים מיותרות.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#D6B48F] bg-[#F9F2E8] p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-dark mb-4">איך זה עובד</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="rounded-3xl bg-white p-5 border border-[#E5D0B8]">
                  <strong className="block mb-2">שיחה ראשונית</strong>
                  דיון ישיר על הקשיים שלכם והדפוסים שחוזרים על עצמם.
                </li>
                <li className="rounded-3xl bg-white p-5 border border-[#E5D0B8]">
                  <strong className="block mb-2">החלטות ברורות</strong>
                  כלים כדי להבחין בין משיכה רגשית לבין קריטריונים שנשארים לאורך זמן.
                </li>
                <li className="rounded-3xl bg-white p-5 border border-[#E5D0B8]">
                  <strong className="block mb-2">דרך שממשיכה</strong>
                  ליווי שמבוסס על תרגול אמיתי, לא על דיאטות רגשיות או טרנדים.
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
            <p className="text-base text-gray-600 leading-7">
              האתר מיועד לאנשים שמבינים שזוגיות טובה מתחילה בבחירות נכונות, לא ברומנטיקה של התחלה בלבד.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-[#E4D4C4] bg-white p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-dark mb-3">רווקים ורווקות</h3>
              <p className="text-gray-600 leading-7">
                מי שרוצה להפסיק לסגור את העיניים ולוודא שהוא בוחר נכון כבר מתחילה הדרך.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#E4D4C4] bg-white p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-dark mb-3">גרושים וגרושות</h3>
              <p className="text-gray-600 leading-7">
                מי שרוצה לבנות מחדש את הדרך הרגשית שלו, בלי לחזור באופן אוטומטי לדפוסים ישנים.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#E4D4C4] bg-white p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-dark mb-3">אנשים בתוך קשר</h3>
              <p className="text-gray-600 leading-7">
                מי שרוצה לגרום לקשר שלו לתפקד טוב יותר, לא רק להרגיש טוב לרגע.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="section-title">מה תקבלו כאן</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            <div className="rounded-[2rem] bg-white p-6 text-gray-700 shadow-soft border border-[#E4D4C4]">
              <h3 className="font-semibold text-dark mb-3">בהירות</h3>
              <p className="text-sm leading-6">להבין מה כוחות ומגבלות הזוגיות שלך, בלי עוד שעונים פנימה.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 text-gray-700 shadow-soft border border-[#E4D4C4]">
              <h3 className="font-semibold text-dark mb-3">כלים מעשיים</h3>
              <p className="text-sm leading-6">מה לעשות ושלא לעשות בשיחות, בדייטים ובבחירות הבאות שלך.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 text-gray-700 shadow-soft border border-[#E4D4C4]">
              <h3 className="font-semibold text-dark mb-3">הבנה של דפוסים</h3>
              <p className="text-sm leading-6">לזהות דפוסים שחוזרים על עצמם ולשבור את המעגל שוב ושוב.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 text-gray-700 shadow-soft border border-[#E4D4C4]">
              <h3 className="font-semibold text-dark mb-3">דרך לבחירה בוגרת יותר</h3>
              <p className="text-sm leading-6">בחירה שאינה מתבססת רק על תחושה רגעית, אלא על מה שיכול להחזיק לאורך זמן.</p>
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
