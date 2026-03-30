import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function WebServicePromoSection() {
  return (
    <section id="web-service-promo" className="py-20 sm:py-28 bg-muted/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="relative hidden h-80 md:block animate-in fade-in zoom-in-90 duration-500 delay-200">
                <div className="absolute inset-0 bg-background/50 rounded-lg shadow-2xl p-4 border border-border/10">
                     <div className="flex items-center gap-2 mb-2">
                        <span className="h-3 w-3 rounded-full bg-red-500"></span>
                        <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                        <span className="h-3 w-3 rounded-full bg-green-500"></span>
                    </div>
                    <Image
                        src="https://picsum.photos/seed/webdesign/800/600"
                        alt="Modern website design on a laptop"
                        width={800}
                        height={600}
                        className="object-cover rounded-md"
                        data-ai-hint="website design laptop"
                    />
                </div>
            </div>
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-glow sm:text-4xl uppercase">
                READY FOR A WEBSITE THAT ACTUALLY GROWS YOUR BUSINESS?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Don't just get a website, get a 24/7 sales machine. We build fast, modern, and mobile-friendly sites designed to turn visitors into customers. Whether you need a simple online presence or a complete e-commerce solution, we have a plan that fits your budget and goals.
              </p>
              <div className="mt-10">
                <Button asChild className="btn-gradient" size="lg">
                  <Link href="/special-service">
                    Explore Website Plans <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
