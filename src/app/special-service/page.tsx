import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Check, Rocket, Zap, Smartphone, CheckCircle, Search, Palette, Code, Layout, Layers, Component } from 'lucide-react';
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

const phoneNumber = '919702667213';

const pricingPlans = [
    {
        tier: 'Starter',
        icon: Layout,
        description: "If you’re just starting out, this is the fastest way to build a professional online presence and start getting inquiries. No confusion, no technical headache. Just a simple website that works.",
        features: [
            '1–3 pages',
            'Mobile-friendly design',
            'Contact form & Basic SEO',
            'Ideal for small shops & freelancers',
            'Launch in just 3–5 days',
        ],
        summary: 'Best choice if you want something simple, affordable, and effective.',
        cta: 'Get Started',
        ctaLink: `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I'm interested in your 'Starter' website plan. Please provide more details.")}`,
        color: 'text-green-500',
        cardClass: 'border-green-500/20 hover:border-green-500/50'
    },
    {
        tier: 'Business',
        icon: Layers,
        description: "This isn’t just a website—it’s a lead generation machine. We structure it to build trust, explain your services, and push visitors to contact you. It's optimized to convert visitors into customers.",
        features: [
            '5–7 pages with custom design',
            'Designed to increase calls & inquiries',
            'WhatsApp & Google Maps integration',
            'Professional look that builds trust',
            'SEO optimized to rank higher',
        ],
        summary: 'Best choice if you want your website to actually generate business.',
        cta: 'Get Started',
        ctaLink: `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I'm interested in your 'Business' website plan. Please provide more details.")}`,
        color: 'text-blue-500',
        cardClass: 'border-primary/20 hover:border-primary/50 md:scale-105',
        popular: true
    },
    {
        tier: 'Premium',
        icon: Component,
        description: "For brands that want a powerful, high-end web experience that sets them apart. We build a custom site with advanced features tailored to your brand, ready for long-term growth.",
        features: [
            'Up to 10 pages with advanced UI/UX',
            'Custom design that reflects your brand',
            'Booking / payment system integration',
            'Built for long-term growth',
            'Priority support & speed optimization',
        ],
        summary: 'Best choice if you want a high-end website that sets you apart.',
        cta: 'Contact Us',
        ctaLink: `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I'm interested in your 'Premium' website plan. Please provide more details.")}`,
        color: 'text-purple-500',
        cardClass: 'border-purple-500/20 hover:border-purple-500/50'
    }
];

const processSteps = [
    {
        icon: Search,
        title: '1. Discovery',
        description: 'We learn about your business, goals, and target audience to create a tailored strategy.',
    },
    {
        icon: Palette,
        title: '2. Design',
        description: 'We craft a modern, user-friendly design that reflects your brand and engages visitors.',
    },
    {
        icon: Code,
        title: '3. Development',
        description: 'Our team builds a fast, responsive, and SEO-friendly website using the latest technologies.',
    },
    {
        icon: Rocket,
        title: '4. Launch',
        description: 'After thorough testing, we deploy your new website and provide support for a successful launch.',
    },
]

const addOnServices = [
    { name: 'Website Maintenance', price: '₹1,999/month' },
    { name: 'Hosting Setup', price: '₹2,999/year' },
    { name: 'SEO Services', price: 'Starting ₹4,999/month' },
];

export default function SpecialServicePage() {
  return (
    <div className="overflow-x-hidden">
      <div className="container mx-auto py-20 sm:py-28">
        <div className="mx-auto mb-16 max-w-4xl text-center">
            <Rocket className="mx-auto h-12 w-12 text-primary mb-4 animate-in fade-in zoom-in-50 duration-700" />
            <h1 className="font-headline text-4xl font-bold tracking-tight text-glow sm:text-5xl uppercase animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100">
              OUR WEBSITE SERVICES
            </h1>
            <p className="mt-6 text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-3 duration-700 delay-200">
              We create fast, modern, and mobile-friendly websites that help your business attract more customers and grow online.
            </p>
            <div className="mt-8 flex justify-center gap-x-8 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-300">
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
                <h2 className="font-headline text-3xl font-bold tracking-tight text-glow sm:text-4xl uppercase animate-in fade-in slide-in-from-bottom-3 duration-700 delay-400">
                    Pricing Plans
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-end">
              {pricingPlans.map((plan, index) => {
                const PlanIcon = plan.icon;
                return (
                    <div key={plan.tier} className="transform transition-transform duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${150 * (index + 1)}ms` }}>
                        <Card className={`glass-card h-full flex flex-col relative overflow-hidden ${plan.cardClass} transition-all duration-300 group`}>
                        {plan.popular && (
                            <div className="absolute top-0 right-0">
                                <div className="bg-primary text-primary-foreground text-xs font-bold px-8 py-1 transform rotate-45 translate-x-8 translate-y-3 uppercase">Best</div>
                            </div>
                        )}
                        <CardHeader className="pt-8">
                            <CardTitle className={`font-headline text-center text-2xl uppercase font-bold ${plan.color}`}>{plan.tier}</CardTitle>
                            <div className="relative flex aspect-video my-4 items-center justify-center rounded-lg overflow-hidden border border-border/20 shadow-inner bg-muted/20">
                                <PlanIcon className="h-24 w-24 text-primary/70 transition-all duration-500 group-hover:scale-110 group-hover:text-accent group-hover:rotate-6" />
                            </div>
                            <p className="text-center text-muted-foreground text-sm min-h-[6rem] pt-2">{plan.description}</p>
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
                                <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">{plan.cta}</a>
                            </Button>
                        </CardFooter>
                        </Card>
                    </div>
                )
              })}
            </div>
        </section>

        <div className="mx-auto max-w-2xl text-center -mt-16 mb-20 sm:mb-28 animate-in fade-in duration-500 delay-500">
            <Card className="glass-card p-6 transform transition-transform duration-300 hover:scale-105">
                <p className="text-muted-foreground">
                    Not sure which plan is right for you?
                    <br />
                    No problem—just message us on WhatsApp and we’ll guide you based on your business needs.
                </p>
            </Card>
        </div>

        <section id="process" className="mb-20 sm:mb-28">
            <div className="mx-auto mb-16 max-w-2xl text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-glow sm:text-4xl uppercase animate-in fade-in slide-in-from-bottom-3 duration-700">
                    Our Design Process
                </h2>
                <p className="mt-4 text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100">
                    We follow a streamlined 4-step process to ensure your website is built to perfection, on time.
                </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-8">
                {processSteps.map((step, index) => (
                    <div key={step.title} className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${150 * (index + 1)}ms` }}>
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-2 ring-primary/20">
                            <step.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold uppercase">{step.title}</h3>
                        <p className="mt-1 text-muted-foreground text-sm">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <section id="add-ons" className="mb-20 sm:mb-28">
            <div className="mx-auto mb-12 max-w-2xl text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-glow sm:text-4xl uppercase animate-in fade-in slide-in-from-bottom-3 duration-700">
                    Add-On Services
                </h2>
            </div>
            <div className="mx-auto max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                <Card className="glass-card">
                    <CardContent className="pt-6">
                        <ul className="divide-y divide-border/20">
                            {addOnServices.map(service => (
                                <li key={service.name} className="flex justify-between items-center py-4 transition-colors hover:bg-muted/30 px-4 -mx-4 rounded-md">
                                    <p className="font-medium text-foreground">{service.name}</p>
                                    <p className="font-semibold text-primary">{service.price}</p>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section id="contact-cta" className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <div className="mx-auto max-w-3xl text-center glass-card p-8 rounded-xl transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50">
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
    </div>
  );
}
