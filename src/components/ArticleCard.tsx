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
    <article className="article-card group">
      <div className="flex flex-col gap-4 mb-6">
        {category && (
          <span className="badge w-fit">
            {category}
          </span>
        )}
        {readTime && (
          <span className="text-sm text-[#8a7a6c] font-medium">{readTime} דקות קריאה</span>
        )}
      </div>

      <Link href={`/articles/${id}`}>
        <h3 className="text-2xl font-semibold text-[#2c2418] mb-4 transition-all duration-300 group-hover:text-[#8b6e53] leading-[1.3]">
          {title}
        </h3>
      </Link>

      <p className="text-[#5c4b42] leading-[1.6] mb-6 max-h-[7.5rem] overflow-hidden">
        {excerpt}
      </p>

      <div className="flex items-center justify-between border-t border-[#e8d5b7]/50 pt-4">
        <span className="text-sm text-[#8a7a6c] font-medium">{formatDate(date)}</span>
        <Link
          href={`/articles/${id}`}
          className="text-sm font-semibold text-[#8b6e53] hover:text-[#6b4a34] transition-colors flex items-center gap-2"
        >
          לקריאה
          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">←</span>
        </Link>
      </div>
    </article>
  );
}
