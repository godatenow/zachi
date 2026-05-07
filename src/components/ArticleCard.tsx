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
    <article className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      {/* Category & Read Time */}
      <div className="flex items-center justify-between gap-2 mb-3">
        {category && (
          <span className="text-sm font-semibold text-primary bg-light px-3 py-1 rounded-full">
            {category}
          </span>
        )}
        {readTime && (
          <span className="text-sm text-gray-600">
            {readTime} דקות קריאה
          </span>
        )}
      </div>

      {/* Title */}
      <Link href={`/articles/${id}`}>
        <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors mb-3 line-clamp-2">
          {title}
        </h3>
      </Link>

      {/* Excerpt */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <span className="text-xs text-gray-500">
          {formatDate(date)}
        </span>
        <Link
          href={`/articles/${id}`}
          className="text-sm font-semibold text-primary hover:text-opacity-80 transition-colors"
        >
          קרא עוד ←
        </Link>
      </div>
    </article>
  );
}
