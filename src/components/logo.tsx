import { cn } from '@/lib/utils';
import { HandCoins } from 'lucide-react';
import Link from 'next/link';

type LogoProps = {
  className?: string;
  isIcon?: boolean;
};

export function Logo({ className, isIcon = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-foreground font-headline text-xl font-bold',
        className
      )}
    >
      <div className="rounded-lg bg-primary/20 p-2 text-primary">
        <HandCoins className="h-6 w-6" />
      </div>
      {!isIcon && <span>FN Tax Solution</span>}
    </Link>
  );
}
