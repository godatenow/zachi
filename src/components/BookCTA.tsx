import { BOOK_INFO, CONTACT_INFO, CTA_LABELS } from '@/constants/config';
import CTAButton from './CTAButton';

interface BookCTAProps {
  showImage?: boolean;
}

export default function BookCTA({ showImage = true }: BookCTAProps) {
  return (
    <section className="section-padding bg-[#fff5eb]">
      <div className="container-main grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-[#E7D0B8] px-4 py-2 text-sm font-semibold text-[#6F4632]">
            הספר: מדייטים לאהבה
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold text-dark max-w-3xl leading-tight">
            איך לבחור נכון בדייטים, בלי לחכות לניצוץ או להסתמך על מזל.
          </h2>
          <p className="text-lg text-[#4f3d34] max-w-2xl leading-9">
            ספר שמביא את ההבנה והכלים מהשטח — בלי מילים מיותרות, בלי סוגיות רגשיות מפוזרות. מענה לאנשים שמחפשים לבנות קשר בריא מתוך חשיבה בוגרת.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="story-card">
              <h3 className="text-lg font-semibold text-dark mb-2">בהירות על הבחירה</h3>
              <p className="text-sm text-gray-600 leading-7">
                תרגילים שמציגים במהירות את הנטיות שלכם בבחירות רומנטיות.
              </p>
            </div>
            <div className="story-card">
              <h3 className="text-lg font-semibold text-dark mb-2">יישום מיידי</h3>
              <p className="text-sm text-gray-600 leading-7">
                כלים שניתן ליישם כבר בדייט הבא או בשיחה הקרובה.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <CTAButton
              href={CONTACT_INFO.bookPurchaseLink}
              label={`${CTA_LABELS.buyBook} - ${BOOK_INFO.price}`}
              variant="primary"
              external
            />
            <CTAButton
              href="/contact"
              label={CTA_LABELS.scheduleCall}
              variant="outline"
            />
          </div>
        </div>

        {showImage && (
          <div className="hero-card">
            <div className="rounded-[2rem] border border-[#e7d2bc] bg-[#fbf1e8] p-8 shadow-[0_24px_60px_-30px_rgba(112,76,48,0.22)]">
              <div className="aspect-[3/4] rounded-[1.75rem] bg-[#d4ac7d] flex items-center justify-center text-6xl text-white">
                📘
              </div>
              <div className="mt-6 text-sm text-[#6f5b4f]">
                עטיפה זמנית - החלף בתמונה רשמית של הספר כאשר תהיה זמינה.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
