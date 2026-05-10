import Link from 'next/link';
import { formatDate } from '@/lib/utils';

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category?: string;
  readTime?: number;
}

export default function ArticleCard({
  id,
  title,
  excerpt,
  date,
  category,
  readTime,
}: ArticleCardProps) {
  return (
    <article className="bg-white border border-border rounded-lg p-6 hover:shadow-sm transition-shadow">
      <div className="flex flex-col gap-3 mb-4">
        {category && (
          <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
            {category}
          </span>
        )}
        {readTime && (
          <span className="text-sm text-secondary font-medium">{readTime} דקות קריאה</span>
        )}
      </div>

      <Link href={`/articles/${id}`}>
        <h3 className="text-xl font-semibold text-primary mb-3 hover:text-secondary transition-colors leading-[1.3]">
          {title}
        </h3>
      </Link>

      <p className="text-secondary leading-[1.6] mb-4 line-clamp-3">
        {excerpt}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-sm text-secondary font-medium">{formatDate(date)}</span>
        <Link
          href={`/articles/${id}`}
          className="text-sm font-semibold text-accent hover:text-secondary transition-colors flex items-center gap-2"
        >
          לקריאה
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
