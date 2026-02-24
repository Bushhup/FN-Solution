import { cn } from '@/lib/utils';
import { Landmark } from 'lucide-react';
import Link from 'next/link';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 font-headline text-xl font-bold text-glow',
        className
      )}
    >
      <Landmark className="h-6 w-6 text-primary" />
      <span>FN Tax Solution</span>
    </Link>
  );
}
