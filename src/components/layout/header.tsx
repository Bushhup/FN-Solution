'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Sidebar } from '@/components/layout/sidebar';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-4">
          <Sidebar />
          <Logo />
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild className="btn-gradient" size="sm">
            <Link href="/register">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
