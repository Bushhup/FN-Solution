import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-background"></div>
      <div className="container mx-auto text-center">
        <div className="mx-auto max-w-3xl">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-glow sm:text-4xl">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Schedule a free, no-obligation consultation with one of our experts
              today. Let's discuss how we can help your business thrive.
            </p>
            <div className="mt-10">
                <Button asChild className="btn-gradient" size="lg">
                  <Link href="/contact">
                    Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
