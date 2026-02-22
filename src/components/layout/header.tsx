'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'Why Us' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '/admin', label: 'Admin' },
  { href: '/dashboard', label: 'Dashboard' },
];

export function Header() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const NavMenu = ({ isMobile = false }) => (
    <nav
      className={cn(
        'flex items-center gap-2 text-sm font-medium text-muted-foreground',
        isMobile && 'flex-col items-start gap-4'
      )}
    >
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="transition-colors hover:text-foreground"
          onClick={() => setIsOpen(false)}
        >
          {label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <div className="flex-1" />
        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-4/5 pt-16">
              <div className="flex flex-col gap-8">
                <NavMenu isMobile />
                <div className="flex flex-col gap-4">
                   <Button asChild variant="outline">
                    <Link href="/login">Log In</Link>
                  </Button>
                  <Button asChild className="btn-gradient">
                    <Link href="/register">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-6">
            <NavMenu />
            <div className="flex items-center gap-2">
               <Button asChild variant="outline" size="sm">
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild className="btn-gradient" size="sm">
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
