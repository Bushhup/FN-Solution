import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { services } from '@/lib/data';

export function Footer() {
  const socialLinks: { icon: any; href: string; name: string }[] = [];

  const footerLinks = [
    {
      title: 'Services',
      links: [
        ...services.slice(0, 4).map(s => ({ label: s.title, href: '/services' })),
        { label: 'View All...', href: '/services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
      ],
    },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted partner for financial compliance and growth.
            </p>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>105, Rudra Sagar Apartment, Plot No 312, Sector 5, Navi Mumbai, Thane, Maharashtra - 400705</span>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+91 9702667213</span>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>fntaxsolution@gmail.com</span>
                </div>
            </div>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  asChild
                  variant="ghost"
                  size="icon"
                  aria-label={social.name}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FN Tax Solution. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
