import { services } from '@/lib/data';
import { GlassCard } from '@/components/ui/glass-card';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services - FN Tax Solution',
  description: 'Explore our comprehensive suite of financial and legal services designed to support your business at every stage.',
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-20 sm:py-28">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-glow sm:text-5xl">
          Our Comprehensive Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We provide a full suite of financial and legal services to support
          your business at every stage, from registration to ongoing compliance.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link href={`/services/${service.slug}`} key={service.slug}>
            <GlassCard
              icon={service.icon}
              title={service.title}
              description={service.description}
              className="h-full"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
