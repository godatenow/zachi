import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  external?: boolean;
}

export default function CTAButton({
  href,
  label,
  variant = 'primary',
  className = '',
  external = false,
}: CTAButtonProps) {
  const baseStyles =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'secondary'
        ? 'btn-secondary'
        : 'btn-outline';

  const commonClasses = `inline-block text-center font-semibold rounded-lg px-6 py-3 transition-all duration-300 ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${commonClasses}`}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseStyles} ${commonClasses}`}>
      {label}
    </Link>
  );
}
