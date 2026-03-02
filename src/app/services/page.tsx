'use client';

import { services, type Service } from '@/lib/data';
import { GlassCard } from '@/components/ui/glass-card';
import Link from 'next/link';

// Slugs for the services to feature at the top
const topServiceSlugs = [
  'pan-card',
  'gumasta-license',
  'udyam',
  'income-certificate',
  'gst-filing-service',
  'gadget-service',
];

// Separate top services from the rest
const topServices = topServiceSlugs
  .map(slug => services.find(service => service.slug === slug))
  .filter((service): service is Service => !!service);

const otherServices = services.filter(service => !topServiceSlugs.includes(service.slug));

// Group the remaining services by category
const servicesByCategory = otherServices.reduce(
  (acc, service) => {
    const category = service.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  },
  {} as Record<string, Service[]>
);

const categoryOrder = [
  'Business Formation',
  'Compliance & Filing',
  'Accounting & Advisory',
  'Audit & Assurance',
  'Special Services',
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-20 sm:py-28">
      <div className="mx-auto mb-16 max-w-2xl text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-glow sm:text-5xl uppercase">
          OUR COMPREHENSIVE SERVICES
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We provide a full suite of financial and legal services to support
          your business at every stage, from registration to ongoing compliance.
        </p>
      </div>

      {services?.length > 0 ? (
        <div className="space-y-16">
          {/* Top Services Section */}
          {topServices.length > 0 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              <h2 className="font-headline text-3xl font-bold mb-8 text-glow uppercase">
                MAINLY USED SERVICES
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {topServices.map((service, index) => (
                  <Link href={`/services/${service.slug}`} key={service.slug} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${100 * index}ms` }}>
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
          )}

          {/* Other Services by Category */}
          {categoryOrder.map(
            (category) =>
              servicesByCategory[category] && servicesByCategory[category].length > 0 && (
                <div key={category} className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                  <h2 className="font-headline text-3xl font-bold mb-8 text-glow uppercase">
                    {category.toUpperCase()}
                  </h2>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {servicesByCategory[category].map((service, index) => (
                      <Link href={`/services/${service.slug}`} key={service.slug} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${100 * index}ms` }}>
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
              )
          )}
        </div>
      ) : (
        <p className="col-span-full text-center text-muted-foreground">
          No services available at the moment. Please check back later.
        </p>
      )}
    </div>
  );
}
