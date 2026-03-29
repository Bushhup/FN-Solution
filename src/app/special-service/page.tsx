import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Rocket, Zap, Smartphone, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

export const metadata: Metadata = {
    title: 'Website Design Services | FN Tax Solution',
    description: 'Affordable and professional website design services for small businesses. Get a fast, modern, and mobile-friendly site that grows your business.',
};

const trustElements = [
    { icon: Zap, text: 'Quick Delivery' },
    { icon: Smartphone, text: 'Mobile-Friendly' },
    { icon: CheckCircle, text: 'Designed for Results' },
];

const pricingPlans = [
    {
        tier: 'Starter',
        price: '₹7,999',
        description: 'Perfect for getting your business online quickly. If you’re just starting out, this is the fastest way to build a professional online presence and start getting inquiries.',
        features: [
            '1–3 pages',
            'Mobile-friendly design',
            'Contact form & Basic SEO',
            'Ideal for small shops & freelancers',
            'Launch in just 3–5 days',
        ],
        summary: 'Best choice if you want something simple, affordable, and effective.',
        cta: 'Get Started',
        ctaLink: '/contact',
        color: 'text-green-500',
        cardClass: 'border-green-500/20 hover:border-green-500/50'
    },
    {
        tier: 'Business',
        price: '₹14,999',
        description: 'For businesses that want more customers, not just a website. This plan is designed to convert visitors into real leads through strategic design and clear calls-to-action.',
        features: [
            '5–7 pages with custom design',
            'Designed to increase calls & inquiries',
            'WhatsApp & Google Maps integration',
            'Professional look that builds trust',
            'SEO optimized to rank higher',
        ],
        summary: 'Best choice if you want your website to actually generate business.',
        cta: 'Get Started',
        ctaLink: '/contact',
        color: 'text-blue-500',
        cardClass: 'border-primary/20 hover:border-primary/50',
        popular: true
    },
    {
        tier: 'Premium',
        price: '₹24,999+',
        description: 'For businesses that want to stand out and scale. We build a powerful, high-end web experience with advanced features tailored to your brand.',
        features: [
            'Up to 10 pages with advanced UI/UX',
            'Custom design that reflects your brand',
            'Booking / payment system integration',
            'Built for long-term growth',
            'Priority support & speed optimization',
        ],
        summary: 'Best choice if you want a high-end website that sets you apart.',
        cta: 'Contact Us',
        ctaLink: '/contact',
        color: 'text-purple-500',
        cardClass: 'border-purple-500/20 hover:border-purple-500/50'
    }
];

const addOnServices = [
    { name: 'Website Maintenance', price: '₹1,999/month' },
    { name: 'Hosting Setup', price: '₹2,999/year' },
    { name: 'SEO Services', price: 'Starting ₹4,999/month' },
];

export default function SpecialServicePage() {
  return (
    <div className="container mx-auto py-20 sm:py-28 animate-in fade-in duration-500">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <Rocket className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="font-headline text-4xl font-bold tracking-tight text-glow sm:text-5xl uppercase">
          Our Website Services
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          We create fast, modern, and mobile-friendly websites that help your business attract more customers and grow online.
        </p>
        <div className="mt-8 flex justify-center gap-x-8">
            {trustElements.map(item => {
                const Icon = item.icon;
                return (
                    <div key={item.text} className="flex items-center gap-2 text-muted-foreground">
                        <Icon className="h-5 w-5 text-primary" />
                        <span>{item.text}</span>
                    </div>
                )
            })}
        </div>
      </div>

      <section id="pricing" className="mb-20 sm:mb-28">
        <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-glow sm:text-4xl uppercase">
                Pricing Plans
            </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Card key={plan.tier} className={`glass-card h-full flex flex-col ${plan.cardClass} animate-in fade-in slide-in-from-bottom-4 duration-500`} style={{ animationDelay: `${100 * (index + 1)}ms` }}>
              <CardHeader>
                {plan.popular && <div className="text-center mb-2"><span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase">Best Value</span></div>}
                <CardTitle className={`font-headline text-center text-2xl uppercase ${plan.color}`}>{plan.tier}</CardTitle>
                <p className="text-center text-4xl font-bold">{plan.price}</p>
                <p className="text-center text-muted-foreground text-sm h-24">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <ul className="space-y-3 text-muted-foreground flex-grow">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.summary && (
                    <p className="mt-6 pt-4 border-t border-border/20 text-sm font-semibold text-foreground text-center">
                        {plan.summary}
                    </p>
                )}
              </CardContent>
              <CardFooter>
                 <Button asChild className="w-full btn-gradient">
                    <Link href={plan.ctaLink}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-2xl text-center -mt-16 mb-20 sm:mb-28 animate-in fade-in duration-500 delay-500">
        <Card className="glass-card p-6">
            <p className="text-muted-foreground">
                Not sure which plan is right for you?
                <br />
                No problem—just message us on WhatsApp and we’ll guide you based on your business needs.
            </p>
        </Card>
      </div>

      <section id="add-ons" className="mb-20 sm:mb-28">
         <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-glow sm:text-4xl uppercase">
                Add-On Services
            </h2>
        </div>
        <div className="mx-auto max-w-2xl">
            <Card className="glass-card">
                <CardContent className="pt-6">
                    <ul className="divide-y divide-border/50">
                        {addOnServices.map(service => (
                            <li key={service.name} className="flex justify-between items-center py-4">
                                <p className="font-medium">{service.name}</p>
                                <p className="font-semibold text-primary">{service.price}</p>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </section>

      <section id="contact-cta">
        <div className="mx-auto max-w-3xl text-center glass-card p-8 rounded-xl">
             <h2 className="font-headline text-3xl font-bold tracking-tight text-glow sm:text-4xl uppercase">
                Ready to Grow Your Business?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Let’s build a website that brings you customers.
            </p>
            <div className="mt-8">
                <Button asChild size="lg" className="btn-gradient">
                    <a href="https://wa.me/919702667213" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.521.074-.792.372-.271.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                        Contact us on WhatsApp
                    </a>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
