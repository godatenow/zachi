import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { CONTACT_INFO } from '@/constants/config';

export const metadata: Metadata = {
  title: 'יצירת קשר - צחי חן',
  description: 'קבע שיחה או שלח הודעה לצחי חן לקבלת תמיכה בבחירת מערכת יחסים טובה, בוגרת ובריאה.',
};

export default function Contact() {
  return (
    <div>
      <section className="section-padding bg-gradient-to-br from-main-bg via-secondary-bg to-card-bg">
        <div className="container-main text-center max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-gradient-to-r from-soft-gold to-brand-brown text-white px-4 py-2 text-sm font-semibold mb-6">
            כאן כדי להקשיב ולהדריך
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold text-text-primary mb-6">
            בוא נדבר על הבחירות שמובילות אותך הלאה
          </h1>
          <p className="section-subtitle text-text-secondary">
            שיחה ממוקדת תעזור לך לראות את מה שקורה מאחורי הבחירות הרומנטיות, ולברר אם הדרך שלך זקוקה לדיוק נוסף.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="premium-card border border-soft-border bg-card-bg p-10 shadow-soft">
            <h2 className="text-2xl font-semibold text-text-primary mb-6">דרכי יצירת קשר</h2>
            <div className="space-y-6 text-text-secondary leading-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">ווטסאפ</h3>
                <p>הערוץ המהיר ביותר להתחיל. שלח הודעה ותוכל לקבל מענה ראשוני בזמן הקרוב.</p>
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-brand-brown hover:text-burgundy">
                  {CONTACT_INFO.whatsapp}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">טלפון</h3>
                <p>אם אתה מעדיף שיחה ישירה, זה המקום להתחיל.</p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="inline-block mt-2 text-brand-brown hover:text-burgundy">
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-2">דואר אלקטרוני</h3>
                <p>שלח פרטים כלליים וקצר על מה שאתה מחפש, ונחזור אליך בהקדם.</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="inline-block mt-2 text-brand-brown hover:text-burgundy">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          <div className="premium-card border border-soft-border bg-card-bg p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-text-primary mb-6">הודעה ישירה</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-bg">
        <div className="container-main max-w-3xl mx-auto premium-card border border-soft-border bg-card-bg p-10 shadow-soft">
          <h3 className="text-xl font-semibold text-text-primary mb-4">מה קורה אחרי השליחה?</h3>
          <p className="text-text-secondary leading-7 mb-4">
            אני אבדוק את הפנייה שלך, אזהה את הצורך המרכזי, ואציע לך את הדרך הבאה שתעזור לך לקבל בחירה מדויקת יותר.
          </p>
          <p className="text-text-secondary leading-7">
            אם זה דחוף, ווטסאפ הוא הערוץ המהיר ביותר. בכל מקרה, כל פנייה מטופלת ברצינות ובמהירות.
          </p>
        </div>
      </section>
    </div>
  );
}
