import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,hsl(var(--primary)/0.1),transparent)]"></div>
      </div>
      <div className="container mx-auto text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 animate-in fade-in duration-500">
            <img src="/main.png" alt="FN Tax Solution Logo" className="h-48 w-auto mx-auto md:h-56" />
          </div>

          <h2 className="font-headline text-3xl font-bold tracking-tight text-glow/80 sm:text-4xl uppercase animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            SIMPLIFY YOUR FINANCES, AMPLIFY YOUR SUCCESS
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            Your trusted partner for expert tax, compliance, and business
            registration services. We handle the complexity so you can focus on
            growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
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
