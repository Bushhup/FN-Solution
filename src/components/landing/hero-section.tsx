import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,hsl(var(--primary)/0.1),transparent)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <div className="container mx-auto text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-glow sm:text-5xl lg:text-6xl">
            Simplify Your Finances, Amplify Your Success
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Your trusted partner for expert tax, compliance, and business
            registration services. We handle the complexity so you can focus on
            growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild className="btn-gradient" size="lg">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/services">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
