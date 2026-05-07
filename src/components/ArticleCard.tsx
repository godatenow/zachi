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
    <article className="group rounded-[2rem] border border-[#E4D4C4] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-secondary">
      <div className="flex flex-col gap-3 mb-4">
        {category && (
          <span className="inline-flex rounded-full bg-[#F5E5D6] px-3 py-1 text-xs font-semibold text-[#8B5A3C]">
            {category}
          </span>
        )}
        {readTime && (
          <span className="text-xs text-gray-500">{readTime} דקות קריאה</span>
        )}
      </div>

      <Link href={`/articles/${id}`}>
        <h3 className="text-2xl font-semibold text-dark mb-4 transition-colors group-hover:text-primary">
          {title}
        </h3>
      </Link>

      <p className="text-gray-600 leading-7 mb-6">
        {excerpt}
      </p>

      <div className="flex items-center justify-between border-t border-[#E6D7C7] pt-4 text-sm text-gray-500">
        <span>{formatDate(date)}</span>
        <Link href={`/articles/${id}`} className="font-semibold text-secondary hover:text-dark">
          קרא עוד ←
        </Link>
      </div>
    </article>
  );
}
