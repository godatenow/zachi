import { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import { getAllArticles } from '@/data/articles';

export const metadata: Metadata = {
  title: 'מאמרים ומשאבים - צחי חן',
  description: 'תוכן ממוקד על דייטים, קשרים ובחירה רומנטית שקיימת גם אחרי הריגוש הראשוני.',
};

export default function Articles() {
  const articles = getAllArticles();

  return (
    <div>
      <section className="section-padding bg-[radial-gradient(circle_at_top_left,_rgba(183,134,96,0.12),_transparent_30%),linear-gradient(180deg,_#fbf6ef_0%,_#f8eee4_100%)]">
        <div className="container-main text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-semibold text-dark mb-6">מאמרים ומשאבים</h1>
          <p className="section-subtitle text-gray-700">
            כתבות קצרות וחדות על בחירת בן/בת זוג, דפוסים רגשיים ודרך לנהל מערכות יחסים שאין מה להסתיר מהן.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              excerpt={article.excerpt}
              date={article.date}
              category={article.category}
              readTime={article.readTime}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
