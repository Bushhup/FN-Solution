import { cn } from '@/lib/utils';
import Link from 'next/link';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center',
        className
      )}
    >
      <img src="/logo.png" alt="FN Tax Solution Logo" className="h-12 w-auto" />
    </Link>
  );
}
