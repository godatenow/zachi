import { Metadata } from 'next';
import BookCTA from '@/components/BookCTA';
import CTAButton from '@/components/CTAButton';
import { CONTACT_INFO, CTA_LABELS } from '@/constants/config';

export const metadata: Metadata = {
  title: 'אודות צחי חן',
  description: 'להכיר את הגישה, הניסיון והכוח שמאחורי הליווי של צחי חן בבחירות רומנטיות בוגרות ובריאות.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'אודות צחי חן - מאמן יחסים',
    description: 'להכיר את הגישה, הניסיון והכוח שמאחורי הליווי של צחי חן בבחירות רומנטיות בוגרות ובריאות.',
    url: 'https://zachi.co.il/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'אודות צחי חן - מאמן יחסים',
    description: 'להכיר את הגישה, הניסיון והכוח שמאחורי הליווי של צחי חן בבחירות רומנטיות בוגרות ובריאות.',
  },
};

export default function About() {
  return (
    <div>
      <section className="section-padding bg-[radial-gradient(circle_at_top_right,_rgba(183,134,96,0.18),_transparent_30%),linear-gradient(180deg,_#fbf6ef_0%,_#f3e8db_100%)]">
        <div className="container-main grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div>
            <span className="inline-flex rounded-full bg-[#E7D0B8] px-4 py-2 text-sm font-semibold text-[#6F4632] mb-4">
              אודות אישית ומקצועית
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold text-[#2c2418] leading-tight mb-6">
              צחי חן — מלווה בחירות רגשיות לכיוון בריא ובוגר יותר
            </h1>
            <p className="text-lg text-[#5c4b42] leading-9 max-w-3xl">
              אני עוזר לאנשים לעצור את המחזור של דייטים נטולי משמעות, לזכות בבחירה ברורה יותר, ולהתחיל לבנות מערכות יחסים שמחזיקות גם אחרי השגרה.
            </p>
          </div>

          <div className="premium-card p-10">
            <h2 className="text-2xl font-semibold text-[#2c2418] mb-4">יותר מעשור של ליווי</h2>
            <p className="text-[#5c4b42] leading-7 mb-6">
              אני עובד עם רווקים, זוגות וגרושים שרוצים להבין מדוע הם חוזרים לאותן בחירות, וכיצד להוציא מהן בחירות שישרתו אותם לאורך זמן.
            </p>
            <div className="space-y-4">
              <div className="story-card">
                <strong className="block text-[#2c2418] mb-2">גישה שקופה וממוקדת</strong>
                <p className="text-[#5c4b42] leading-7">בלי המלצות ריקות, בלי פרדיגמות מעורפלות. קו ברור שמוביל לפעולה רגשית ומעשית.</p>
              </div>
              <div className="story-card">
                <strong className="block text-[#2c2418] mb-2">מיקוד בדפוסים</strong>
                <p className="text-[#5c4b42] leading-7">חיבור בין מה שאתם מרגישים לבין מה שבוחרים. זה לא רק מי מגיע, אלא איך אתם מגיעים לבחירה.</p>
              </div>
              <div className="story-card">
                <strong className="block text-[#2c2418] mb-2">תוצאה שמורגשת</strong>
                <p className="text-[#5c4b42] leading-7">יותר שיחות שמובילות, פחות ספקות אחרי הרגע הרומנטי, ובחירה שמרגישה יציבה לא רק בהתחלה.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-4xl mx-auto">
          <h2 className="section-title">איך העבודה מתרחשת</h2>
          <div className="space-y-8 text-[#5c4b42] leading-8">
            <p>
              העבודה מתחילה ממש מהבחירות הקטנות: מי אתם נמשכים אליו, מה יוצר את המעגל של הכאב, ואיך מתחלפים רגשות של רצון ותקווה בבחירה מודעת.
            </p>
            <p>
              אני לא מנסה לשכנע אתכם להרגיש אחרת. אני עוזר לכם להבין את הדפוס, לזהות את המקומות שהרגלים פועלים בהם, ולהשאיר מקום לבחירות שמרגישות נכונות גם אחרי חודש, שלושה שנה.
            </p>
            <p>
              במפגש הבא תוכלו לצאת עם הבנה ברורה יותר על מה עצם הבחירה שלכם אומרת, ואילו צעדים אפשר לקחת כדי שהקשר הבא יתמוך בכם באמת.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-main max-w-5xl mx-auto grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft border border-[#E4D4C4]">
            <h3 className="text-xl font-semibold text-[#2c2418] mb-3">כוונה במקום לחץ</h3>
            <p className="text-[#5c4b42] leading-7">לעבוד על הבחירה עצמה, ולא על תחושת ההצלחה הזמנית בדייטים.</p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-soft border border-[#E4D4C4]">
            <h3 className="text-xl font-semibold text-[#2c2418] mb-3">בהירות עמוקה</h3>
            <p className="text-[#5c4b42] leading-7">להבין מה מפעיל את המשיכה שלכם ומה שומר על בחירה בריאה לאורך זמן.</p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-soft border border-[#E4D4C4]">
            <h3 className="text-xl font-semibold text-[#2c2418] mb-3">שיחה עם טעם אחר</h3>
            <p className="text-[#5c4b42] leading-7">ליצור מקום שבו השאלה היא לא מה אתה רוצה לשמוע, אלא מה אתה רוצה לבחור.</p>
          </div>
        </div>
      </section>

      <BookCTA />

      <section className="section-padding bg-light">
        <div className="container-main text-center">
          <h2 className="section-title">המשך הדרך</h2>
          <p className="text-base text-[#5c4b42] max-w-2xl mx-auto leading-7 mb-8">
            אם אתם מוכנים לשים כוונה בבחירות שלכם, אפשר להתחיל בשיחה שמסכמת את מה שקורה היום ומשקפת את מה שיכולה להיות ההמשך.
          </p>
          <CTAButton href={CONTACT_INFO.whatsapp} label={CTA_LABELS.scheduleCall} variant="primary" external />
        </div>
      </section>
    </div>
  );
}
