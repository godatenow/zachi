import { BOOK_INFO, CONTACT_INFO, CTA_LABELS } from '@/constants/config';
import CTAButton from './CTAButton';

interface BookCTAProps {
  showImage?: boolean;
  fullWidth?: boolean;
}

export default function BookCTA({ showImage = true, fullWidth = false }: BookCTAProps) {
  return (
    <section className={`section-padding bg-gradient-to-l from-light to-white ${fullWidth ? '' : 'container-main'}`}>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Book Image */}
        {showImage && (
          <div className="w-full md:w-1/3 flex-shrink-0">
            {/* TODO: Replace with actual book cover image - placeholder for now */}
            <div className="aspect-[3/4] bg-gradient-to-br from-primary to-secondary rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center text-white p-6">
                <p className="text-2xl font-bold mb-4">📖</p>
                <p className="font-semibold">{BOOK_INFO.title}</p>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            הספר שלי: {BOOK_INFO.title}
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {BOOK_INFO.description}
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold text-2xl">✓</span>
              <div>
                <p className="font-semibold text-dark">מעשי היישום</p>
                <p className="text-gray-600 text-sm">טיפים וכלים שניתן ליישם מיד בחיים האמיתיים</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold text-2xl">✓</span>
              <div>
                <p className="font-semibold text-dark">בנוי על ניסיון</p>
                <p className="text-gray-600 text-sm">חוכמה מעשור של עבודה עם קשרים וקשיים</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold text-2xl">✓</span>
              <div>
                <p className="font-semibold text-dark">לקוראים חכמים</p>
                <p className="text-gray-600 text-sm">בלא קליות, בלא שטויות, בלא דברים מובנים</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <CTAButton
              href={CONTACT_INFO.bookPurchaseLink}
              label={`${CTA_LABELS.buyBook} - ${BOOK_INFO.price}`}
              variant="primary"
              external
            />
            <p className="text-sm text-gray-600">
              📚 זמין בכל חנויות הספרים הגדולות בישראל
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
