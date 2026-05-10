import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f7eee5] border-t border-[#e6d5c2]/50">
      <div className="container-main py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between text-sm text-[#6b4a34]">
          <p>© {currentYear} צחי חן</p>
          <div className="flex flex-wrap gap-8">
            <Link href="/about" className="hover:text-[#2c2418] transition-colors">
              על צחי
            </Link>
            <Link href="/contact" className="hover:text-[#2c2418] transition-colors">
              יצירת קשר
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
