import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { CONTACT_INFO } from '@/constants/config';

export const metadata: Metadata = {
  title: 'יצירת קשר - צחי חן',
  description: 'קבע שיחה או שלח הודעה לצחי חן לקבלת תמיכה בבחירת מערכת יחסים טובה יותר.',
};

export default function Contact() {
  return (
    <div>
      <section className="section-padding bg-[radial-gradient(circle_at_top_left,_rgba(183,134,96,0.14),_transparent_32%),linear-gradient(180deg,_#fbf6ef_0%,_#f7e8d8_100%)]">
        <div className="container-main text-center max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-[#E7D0B8] px-4 py-2 text-sm font-semibold text-[#6F4632] mb-4">
            כאן כדי להקשיב ולכוון
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold text-dark mb-6">
            בוא נדבר על הבחירות שמתקדמות את החיים שלך
          </h1>
          <p className="section-subtitle text-gray-700">
            אפשר לתאם שיחה לדיוק אישי, או לשלוח הודעה עם שאלות ספציפיות לגבי דייטים, קשרים ובריאות רגשית.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="rounded-[2rem] border border-[#E4D4C4] bg-white p-10 shadow-soft">
            <h2 className="text-2xl font-semibold text-dark mb-6">דרכים ליצירת קשר</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-dark mb-2">שיחה ב-WhatsApp</h3>
                <p className="leading-7">הדרך הקלה ביותר להתחיל. כתוב לי ואחזור אליך מהיר ככל האפשר.</p>
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary mt-2 inline-block">
                  {CONTACT_INFO.whatsapp}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-dark mb-2">טלפון</h3>
                <p className="leading-7">אם אתה מעדיף לשוחח ישירות, זה המקום להשתמש במספר.
</p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-primary hover:text-secondary mt-2 inline-block">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-dark mb-2">מייל</h3>
                <p className="leading-7">שלח הודעה עם פרטיך והנושא, ואחזור אליך בהקדם.</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:text-secondary mt-2 inline-block">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#E4D4C4] bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-dark mb-6">הודעה ישירה</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-main max-w-3xl mx-auto rounded-[2rem] border border-[#E4D4C4] bg-white p-10 shadow-soft">
          <h3 className="text-xl font-semibold text-dark mb-4">מה קורה אחרי השליחה?</h3>
          <p className="text-gray-700 leading-7 mb-4">
            נבחן יחד את השאלה שלך, נבין איפה אתה נמצא, ונראה אם כדאי להמשיך לשיחה ממוקדת שתתקדם לבחירות ברורות יותר.
          </p>
          <p className="text-gray-700 leading-7">
            אני שולח תשובה לכל פנייה בזמן סביר. אם זה דחוף, ווטסאפ הוא הערוץ המהיר ביותר.
          </p>
        </div>
      </section>
    </div>
  );
}
