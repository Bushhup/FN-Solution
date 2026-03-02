import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  FileText,
  Calculator,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const serviceCategories = [
  {
    icon: Building2,
    title: 'BUSINESS FORMATION',
    description:
      'End-to-end registration services for all company types, from private firms to non-profits.',
    href: '/services',
  },
  {
    icon: FileText,
    title: 'COMPLIANCE & FILING',
    description:
      'Timely and accurate filings for ROC, GST, and Income Tax to keep your business compliant.',
    href: '/services',
  },
  {
    icon: Calculator,
    title: 'ACCOUNTING & ADVISORY',
    description:
      'Professional bookkeeping, payroll, and financial planning to drive business growth.',
    href: '/services',
  },
  {
    icon: ShieldCheck,
    title: 'AUDIT & ASSURANCE',
    description:
      'Statutory, internal, and tax audits to ensure financial accuracy and strengthen governance.',
    href: '/services',
  },
  {
    icon: Zap,
    title: 'SPECIAL SERVICES',
    description:
      'Essential services like DSC, PAN/RERA registration, and certifications for business operations.',
    href: '/services',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-glow sm:text-4xl">
            Our Service Categories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide a full suite of financial and legal services organized
            into key areas to support your business at every stage.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category) => (
            <Link href={category.href} key={category.title}>
              <GlassCard
                icon={category.icon}
                title={category.title}
                description={category.description}
                className="h-full"
              />
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
