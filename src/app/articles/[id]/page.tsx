import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticleById, getAllArticles } from '@/data/articles';
import { formatDate } from '@/lib/utils';
import CTAButton from '@/components/CTAButton';
import { CONTACT_INFO, CTA_LABELS } from '@/constants/config';

interface ArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleById(resolvedParams.id);

  if (!article) {
    return {
      title: 'מאמר לא נמצא',
    };
  }

  return {
    title: `${article.title} - צחי חן`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const article = getArticleById(resolvedParams.id);

  if (!article) {
    notFound();
  }

  return (
    <div>
      {/* Article Header */}
      <section className="section-padding bg-gradient-to-l from-accent to-light">
        <div className="container-main max-w-3xl">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-primary hover:text-opacity-80 mb-6 font-semibold"
          >
            ← חזרה לכל המאמרים
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <span className="inline-block px-3 py-1 bg-light rounded-full text-sm font-semibold text-primary">
              {article.category}
            </span>
            <span>{formatDate(article.date)}</span>
            <span>•</span>
            <span>{article.readTime} דקות קריאה</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="prose-headings:text-dark prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-dark prose-strong:font-bold"
            />
          </div>
        </div>
      </section>

      {/* Author Info */}
      <section className="section-padding bg-light">
        <div className="container-main max-w-3xl">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl flex-shrink-0">
              👤
            </div>
            <div>
              <h3 className="text-2xl font-bold text-dark mb-2">
                {article.author}
              </h3>
              <p className="text-gray-700 mb-4">
                מאמן יחסים, מחבר, ודוד לאהבה וקשרים בריאים. יותר מעשור של ניסיון כדי לעזור לאנשים לבנות קשרים שמשך.
              </p>
              <CTAButton
                href={CONTACT_INFO.whatsapp}
                label={CTA_LABELS.scheduleCall}
                variant="primary"
                external
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles / CTA */}
      <section className="section-padding">
        <div className="container-main text-center">
          <h2 className="section-title">רוצה לדבר על זה?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            אם המאמר הזה מצא אתך, וברצונך דיון יותר עמוק, זמינה לי שיחה.
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
