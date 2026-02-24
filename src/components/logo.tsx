import { cn } from '@/lib/utils';
import Image from 'next/image';
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
      <Image
        src="/logo.png"
        alt="FN Tax Solution Logo"
        width={180}
        height={45}
        priority
      />
    </Link>
  );
}
