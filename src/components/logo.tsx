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
        'flex items-center gap-2',
        className
      )}
    >
      <img src="/logo.png" alt="FN Tax Solution Logo" className="h-10" />
      <span className="hidden font-headline text-lg font-bold sm:inline-block">
        FN Tax Solution
      </span>
    </Link>
  );
}
