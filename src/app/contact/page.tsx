import type { Metadata } from 'next';
import { ConsultationForm } from '@/components/contact-form';

export const metadata: Metadata = {
    title: 'Contact Us - FN Tax Solution',
    description: 'Get in touch with FN Tax Solution for a free consultation. We are here to help with all your financial and legal needs.',
};

export default function ContactPage() {
    return (
        <div className="container mx-auto py-20 sm:py-28">
            <div className="mx-auto mb-16 max-w-3xl text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-glow sm:text-5xl uppercase">
                    CONTACT US
                </h1>
                <p className="mt-6 text-lg text-muted-foreground">
                    Have a question or want to schedule a free, no-obligation consultation? Fill out the form below, and one of our experts will get back to you shortly.
                </p>
            </div>
            <div className="mx-auto max-w-2xl animate-in fade-in zoom-in-95 duration-500 delay-200">
                <div className="glass-card rounded-xl p-8 shadow-2xl">
                    <ConsultationForm />
                </div>
            </div>
      </div>
    );
}
