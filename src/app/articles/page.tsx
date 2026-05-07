import { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import { getAllArticles } from '@/data/articles';

export const metadata: Metadata = {
  title: 'מאמרים - צחי חן',
  description: 'קרא מאמרים על דייטים, קשרים, ואהבה מצחי חן.',
};

export default function Articles() {
  const articles = getAllArticles();

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-l from-accent to-light">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              מאמרים ומשאבים
            </h1>
            <p className="text-xl text-gray-700">
              מחשבות ותובנות על דייטים, קשרים, ואהבה - כתובות כדי שתוכל בעצם להשתמש בהן.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          {articles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                אין מאמרים זמינים כרגע. בדוק בחזרה בקרוב!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
