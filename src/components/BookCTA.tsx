import { BOOK_INFO, CONTACT_INFO, CTA_LABELS } from '@/constants/config';
import CTAButton from './CTAButton';

interface BookCTAProps {
  showImage?: boolean;
}

export default function BookCTA({ showImage = true }: BookCTAProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-[#fff5eb] via-[#f8f0e4] to-[#f0e6d6] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#d7b48a]/10 to-transparent rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#cfa16f]/8 to-transparent rounded-full translate-y-40 -translate-x-40" />
      <div className="container-main relative">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-gradient-to-r from-[#E7D0B8] to-[#d4ac7d] px-4 py-2 text-sm font-semibold text-[#6F4632] shadow-sm">
              הספר: מדייטים לאהבה
            </span>
            <h2 className="text-4xl lg:text-5xl font-semibold text-dark max-w-3xl leading-tight">
              איך לבחור נכון בדייטים, בלי לחכות לניצוץ או להסתמך על מזל.
            </h2>
            <p className="text-lg text-[#4f3d34] max-w-2xl leading-9">
              ספר שמביא את ההבנה והכלים מהשטח — בלי מילים מיותרות, בלי סוגיות רגשיות מפוזרות. מענה לאנשים שמחפשים לבנות קשר בריא מתוך חשיבה בוגרת. כל פרק נכתב מתוך ניסיון אמיתי עם מאות אנשים.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="story-card group hover:shadow-[0_20px_40px_-16px_rgba(112,76,48,0.15)] transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-[#cfa16f] to-[#b8855a] rounded-full flex items-center justify-center mb-3 text-white text-lg shadow-md">📊</div>
                <h3 className="text-lg font-semibold text-dark mb-2 group-hover:text-[#8b6e53] transition-colors">בהירות על הבחירה</h3>
                <p className="text-sm text-gray-600 leading-7">
                  תרגילים שמציגים במהירות את הנטיות שלכם בבחירות רומנטיות. כלים שמביאים תובנות אמיתיות על הדפוסים שלכם.
                </p>
              </div>
              <div className="story-card group hover:shadow-[0_20px_40px_-16px_rgba(112,76,48,0.15)] transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-[#cfa16f] to-[#b8855a] rounded-full flex items-center justify-center mb-3 text-white text-lg shadow-md">⚡</div>
                <h3 className="text-lg font-semibold text-dark mb-2 group-hover:text-[#8b6e53] transition-colors">יישום מיידי</h3>
                <p className="text-sm text-gray-600 leading-7">
                  כלים שניתן ליישם כבר בדייט הבא או בשיחה הקרובה. לא תיאוריה — כלים שעובדים במציאות.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <CTAButton
                href={CONTACT_INFO.whatsapp}
                label={CTA_LABELS.scheduleCall}
                variant="primary"
                external
              />
              <CTAButton
                href={CONTACT_INFO.bookPurchaseLink}
                label={`${CTA_LABELS.buyBook} - ${BOOK_INFO.price}`}
                variant="secondary"
                external
              />
            </div>
          </div>

          {showImage && (
            <div className="hero-card">
              <div className="rounded-[2rem] border border-[#e7d2bc] bg-gradient-to-br from-[#fbf1e8] to-[#f5e6d4] p-8 shadow-[0_24px_60px_-30px_rgba(112,76,48,0.22)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#f0dcc4]/30 to-transparent rounded-full -translate-y-16 translate-x-16" />
                <div className="aspect-[3/4] rounded-[1.75rem] bg-gradient-to-br from-[#d4ac7d] to-[#c49a7a] flex items-center justify-center text-6xl text-white shadow-inner relative z-10">
                  📘
                </div>
                <div className="mt-6 text-sm text-[#6f5b4f] relative z-10">
                  <p className="font-medium text-dark mb-2">מדייטים לאהבה</p>
                  <p className="leading-6">ספר מעשי שמלווה אתכם מהבחירה הראשונה ועד לבניית קשר בריא ומשמעותי. כל פרק מבוסס על ניסיון אמיתי עם מאות אנשים.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
