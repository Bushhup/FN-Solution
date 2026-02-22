import { services } from '@/lib/data';
import { GlassCard } from '@/components/ui/glass-card';

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-glow sm:text-4xl">
            Our Comprehensive Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide a full suite of financial and legal services to support
            your business at every stage.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <GlassCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
