'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
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

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-4/5 pt-16">
        <div className="flex flex-col gap-8">
            <Logo />
            <nav
                className={cn('flex flex-col items-start gap-4 text-base font-medium text-muted-foreground')}
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
        </div>
      </SheetContent>
    </Sheet>
  );
}
