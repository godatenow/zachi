import { Metadata } from 'next';
import BookCTA from '@/components/BookCTA';
import CTAButton from '@/components/CTAButton';
import { CONTACT_INFO, CTA_LABELS } from '@/constants/config';

export const metadata: Metadata = {
  title: 'אודות - צחי חן',
  description: 'להכיר את צחי חן: מאמן יחסים עם גישה ישרה, פרקטית ומנוסה לבחירות רומנטיות טובות יותר.',
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
            <h1 className="text-4xl sm:text-5xl font-semibold text-dark leading-tight mb-6">
              צחי חן — הבטחה לבחור נכון, לא רק להרגיש נכון
            </h1>
            <p className="text-lg text-gray-700 leading-8 max-w-3xl">
              אני עוזר לאנשים לראות את הבחירה מאחוריה ולא רק את ההתרגשות. זה אומר להבין את הדפוסים, לבחור מתוך בהירות, ולבנות קשרים שלא נופלים בשלב הבא.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#D6B48F] bg-white p-10 shadow-soft">
            <h2 className="text-2xl font-semibold text-dark mb-4">יותר מעשור של ניסיון</h2>
            <p className="text-gray-600 leading-7 mb-6">
              לאורך השנים עבדתי עם רווקים, זוגות וגרושים שחיפשו דרך להפוך מערכת יחסים דינמית ובריאה למציאות יומיומית.
            </p>
            <div className="space-y-4">
              <div className="rounded-3xl border border-[#E5D0B8] bg-[#FBF2E6] p-5">
                <strong className="block text-dark mb-1">גישה ברורה</strong>
                <p className="text-sm text-gray-600 leading-6">בלי קלישאות, בלי הבטחות אלא על פעולה.</p>
              </div>
              <div className="rounded-3xl border border-[#E5D0B8] bg-[#FBF2E6] p-5">
                <strong className="block text-dark mb-1">מיקוד בדפוסים</strong>
                <p className="text-sm text-gray-600 leading-6">זה לא רק מי מגיע אליכם, אלא מה אתם מאפשרים לעצמכם לבחור.</p>
              </div>
              <div className="rounded-3xl border border-[#E5D0B8] bg-[#FBF2E6] p-5">
                <strong className="block text-dark mb-1">תוצאה בשטח</strong>
                <p className="text-sm text-gray-600 leading-6">כיוון שמניב שיחות טובות יותר ובחירות שקיימות גם ביום שאחרי.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-4xl mx-auto">
          <h2 className="section-title">הדרך שלי</h2>
          <div className="space-y-8 text-gray-700 leading-8">
            <p>
              אני לא בא כדי לספר לך מה צריך להרגיש. אני בא כדי להראות איך להגדיר בדייקנות מה חשוב לך, ובאיזה שיחה או דייט לא כדאי לך לבזבז את הזמן.
            </p>
            <p>
              זה מתחיל בהבנה מעמיקה של הבחירות שלך: מה מושך אותך, מה משקף דפוסים ישנים, ומה יכול להוביל לשותפות שמרגישה בטוחה גם בשגרה.
            </p>
            <p>
              הטיפול שלי הוא פרקטי. זה אומר שאחרי כל מפגש אתה יודע מה לצעוד הלאה, ואיפה כדאי לעצור. זה גם אומר שמי שרוצה יכול לקבל ליווי אישי שמבוסס על מקרים אמיתיים, לא על תיאוריות רחוקות.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-main max-w-5xl mx-auto grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft border border-[#E4D4C4]">
            <h3 className="text-xl font-semibold text-dark mb-3">בחירות שקיימות</h3>
            <p className="text-gray-600 leading-7">גישה שמאפשרת לבחור לא רק מתוך חשק, אלא מתוך סדר פרקטי שמחזיק גם אחרי הרגע הרומנטי.</p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-soft border border-[#E4D4C4]">
            <h3 className="text-xl font-semibold text-dark mb-3">בהירות רגשית</h3>
            <p className="text-gray-600 leading-7">לפתח בהירות על מה באמת מוביל אותך היום ולמה זה לא תמיד מה שנראה בתמונה.</p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-soft border border-[#E4D4C4]">
            <h3 className="text-xl font-semibold text-dark mb-3">השפעה על יחס</h3>
            <p className="text-gray-600 leading-7">להתחבר לדרך חדשה של שיחות שמייצרות אמון, ולא רק ריגוש רגעי.</p>
          </div>
        </div>
      </section>

      <BookCTA />

      <section className="section-padding bg-light">
        <div className="container-main text-center">
          <h2 className="section-title">רוצה לבדוק אם זה מתאים לך?</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-7 mb-8">
            השיחה הראשונה היא הזדמנות לגלות אם הדרך שלי יכולה לתת לך יותר בהירות ובחירות חכמות יותר.
          </p>
          <CTAButton href={CONTACT_INFO.whatsapp} label={CTA_LABELS.scheduleCall} variant="primary" external />
        </div>
      </section>
    </div>
  );
}
