import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticleById, getAllArticles } from '@/data/articles';
import { formatDate } from '@/lib/utils';
import CTAButton from '@/components/CTAButton';
import { CONTACT_INFO, CTA_LABELS } from '@/constants/config';

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({ id: article.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    return { title: 'מאמר לא נמצא' };
  }

  return {
    title: `${article.title} - צחי חן`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <section className="section-padding bg-gradient-to-l from-accent to-light">
        <div className="container-main max-w-4xl">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-[#8b6e53] hover:text-[#6b4a34] mb-6 font-semibold"
          >
            ← חזרה לכל המאמרים
          </Link>

          <h1 className="text-4xl md:text-5xl font-semibold text-[#2c2418] mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-[#5c4b42]">
            <span className="inline-block px-3 py-1 bg-[#f0e6d6] rounded-full text-sm font-semibold text-[#6b4a34]">
              {article.category}
            </span>
            <span>{formatDate(article.date)}</span>
            <span>•</span>
            <span>{article.readTime} דקות קריאה</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="prose-headings:text-[#2c2418] prose-headings:font-semibold prose-p:text-[#5c4b42] prose-p:leading-8 prose-strong:text-[#2c2418] prose-strong:font-semibold"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-main max-w-3xl mx-auto premium-card border border-[#e8d5b7] p-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#8b6e53] to-[#6b4a34] rounded-full flex items-center justify-center text-4xl text-white">
                👤
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#2c2418] mb-2">{article.author}</h3>
                <p className="text-[#5c4b42] leading-7">מאמן יחסים ומחבר שמלווה אנשים ליצירת קשרים משמעותיים ובחירות רגשיות חדשות.</p>
              </div>
            </div>
            <CTAButton
              href={CONTACT_INFO.whatsapp}
              label={CTA_LABELS.scheduleCall}
              variant="primary"
              external
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main text-center">
          <h2 className="section-title">רוצה לדבר על זה?</h2>
          <p className="text-lg text-[#5c4b42] mb-8 max-w-2xl mx-auto leading-8">
            אם המאמר הזה נגע בך, בוא נפתח שיחה על איך להניע את הבחירות שלך קדימה לכיוון בריא ובוגר.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {CTA_LABELS.scheduleCall}
            </a>
            <Link href="/articles" className="btn-outline">
              ראה מאמרים אחרים
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
