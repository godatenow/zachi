import { Metadata } from 'next';
import BookCTA from '@/components/BookCTA';
import { CONTACT_INFO, CTA_LABELS } from '@/constants/config';

export const metadata: Metadata = {
  title: 'אודות - צחי חן',
  description: 'קחו להכיר את צחי חן - מאמן יחסים, מחבר ודוד לאהבה וקשרים בריאים.',
};

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-l from-accent to-light">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              אודות צחי חן
            </h1>
            <p className="text-xl text-gray-700">
              מאמן יחסים, מחבר, ודוד לקשרים בריאים
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-dark mb-6">הסיפור שלי</h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              זה לא התחיל בטיפול או בהכשרה רשמית. זה התחיל בסערות שלי.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              כמו כולם, ראיתי דייטים מהווים משהו דיו לשמחה. ראיתי קשרים שנשברו על דברים שאני חושב היו צריכים להיות פשוטים יותר. ראיתי עצמי עושה את אותם דברים שגויים שוב ושוב.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אז התחלתי ללמוד. אמיתי. נתתי מעבר על הסלט - פסיכולוגיה של קשרים, כימיה, הפסיכוטיזם של אנשים, איך להיות מתוך עצמך כשאתה פחוד מעשות. כל דבר.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              וכשהתחלתי לשנות את הדרך שלי? כל דבר השתנה. הדייטים היו פחות דיוק. הקשרים היו עמוקים יותר. ההיכול שלי להיות לבדי למעשה היה טוב יותר.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              בשנים הבאות, זה נעשה אולם. אנשים התחילו לשאול אותי עצות. אני התחלתי לשאול ועשית עביד לאנשים שאני יודע. ושוב ושוב, אותם דפוסים צפו למעלה. אותם דברים עבדו.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              לכן כתבתי ספר. לא כי אני גניוס... כי עברתי את כל זה בעצמי, וזה עבד.
            </p>

            <h2 className="text-3xl font-bold text-dark mb-6 mt-12">מה אני עושה עכשיו</h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              עכשיו אני עובד עם אנשים שרוצים להבין את קשרים שלהם. לא כשהם משוגע. לא כשהם בדיוני שקר. כשהם מוכנים בעצם להשתנות.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              אני עוזר לאנשים לראות דפוסים בהם הם לא יכלו לראות את עצמם. אני עוזר להם להמנע מאנשים שאינם טובים לך. אני עוזר להם למצוא מישהו וקשר שאפילו בימים רעים, בסדר.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              וזה בדיוק מה שאני רוצה לעשות מעכשיו ואילך.
            </p>

            <h2 className="text-3xl font-bold text-dark mb-6 mt-12">הערכים שלי</h2>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <span className="text-2xl text-primary flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-bold text-lg text-dark mb-1">כנות</h3>
                  <p className="text-gray-700">אני לא מאמין בחלקתו מים על ידי או בעיסוקי בעתיד. המציאות היא המציאות.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl text-primary flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-bold text-lg text-dark mb-1">פרקטיקה</h3>
                  <p className="text-gray-700">אני מלמד דברים שאתה יכול בעצם להשתמש. לא עיוני, לא בדונים מלמלים.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl text-primary flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-bold text-lg text-dark mb-1">יעיל הגנה</h3>
                  <p className="text-gray-700">קשרים צריכים להיות טובים לך. חיים צריכים להיות טובים לך. אני כאן כדי לעזור בכך.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <BookCTA />

      {/* CTA Section */}
      <section className="section-padding bg-light">
        <div className="container-main text-center">
          <h2 className="section-title">הבה נעבוד ביחד</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            זמינה השיחה הראשונה שלך כדי לדבר על מה שקורה בחיים הרומנטיים שלך.
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
