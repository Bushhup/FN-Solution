import { features } from '@/lib/data';

export function WhyChooseUsSection() {
  return (
    <section id="about" className="bg-muted/20 py-20 sm:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 max-w-2xl text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-glow sm:text-4xl uppercase">
            THE FN TAX SOLUTION ADVANTAGE
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience the peace of mind that comes with having a dedicated,
            expert team by your side.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={feature.title} className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${100 * (index + 1)}ms` }}>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-headline text-lg font-semibold text-foreground uppercase">
                {feature.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
