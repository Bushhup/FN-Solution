'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useDoc, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { doc } from 'firebase/firestore';
import React, { useMemo } from 'react';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
  { href: '#testimonials', label: 'Testimonials' },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const firestore = useFirestore();

  const userDocRef = useMemoFirebase(() => (user ? doc(firestore, 'users', user.uid) : null), [firestore, user]);
  const { data: userProfile } = useDoc(userDocRef);
  const isAdmin = useMemo(() => userProfile?.role === 'Admin', [userProfile]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-4/5 pt-16">
        <SheetTitle asChild>
          <VisuallyHidden>Navigation Menu</VisuallyHidden>
        </SheetTitle>
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
                { user && (
                    <Link
                        href="/dashboard"
                        className="transition-colors hover:text-foreground"
                        onClick={() => setIsOpen(false)}
                    >
                        Dashboard
                    </Link>
                )}
                { isAdmin && (
                    <Link
                        href="/admin"
                        className="font-bold text-primary transition-colors hover:text-primary/80"
                        onClick={() => setIsOpen(false)}
                    >
                        Admin Portal
                    </Link>
                )}
            </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
