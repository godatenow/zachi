import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { CONTACT_INFO } from '@/constants/config';

export const metadata: Metadata = {
  title: 'יצירת קשר - צחי חן',
  description: 'צרו איתי קשר לשאלות, הצעות, או כדי לתאם שיחה.',
};

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-l from-accent to-light">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              יצירת קשר
            </h1>
            <p className="text-xl text-gray-700">
              יש לך שאלה או רוצה לתאם שיחה? אנא השאר הודעה.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Info Cards */}
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-dark mb-2">טלפון</h3>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-primary hover:text-opacity-80 text-lg font-semibold"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-dark mb-2">WhatsApp</h3>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-opacity-80 text-lg font-semibold"
              >
                כתוב לי בWhatsApp
              </a>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-dark mb-2">דואר</h3>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-primary hover:text-opacity-80 text-lg font-semibold"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-dark mb-6 text-center">
              שלח הודעה
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Response Time Info */}
      <section className="section-padding bg-light">
        <div className="container-main max-w-2xl">
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-primary">
            <h3 className="text-xl font-bold text-dark mb-4">
              ⏱️ זמן תגובה
            </h3>
            <p className="text-gray-700 mb-3">
              אני משתדל להשיב על כל ההודעות תוך 24 שעות. אם יש לך שאלה דחופה, כתוב לי בWhatsApp.
            </p>
            <p className="text-gray-700">
              ודא שאתה משתמש בדרך הקשר הנוחה ביותר עבורך - אני בממשק בכל הערוצים.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
