'use client';

import { Service, services } from '@/lib/data';
import { notFound, useParams } from 'next/navigation';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Landmark, Calculator, FileText, Building2, Handshake, ShieldCheck, type LucideIcon } from 'lucide-react';
import { useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';

const serviceIconMap: { [key: string]: LucideIcon } = {
  'GST Registration': Landmark,
  'Income Tax Filing': FileText,
  'Company Registration': Building2,
  'LLP Registration': Handshake,
  'Compliance Services': ShieldCheck,
  'Accounting Services': Calculator,
};


// type Props = {
//   params: { id: string };
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const service = services.find((s) => s.slug === params.id);

//   if (!service) {
//     return {
//       title: 'Service Not Found',
//     };
//   }

//   return {
//     title: `${service.title} - FN Tax Solution`,
//     description: service.description,
//   };
// }

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.slug as string;
  const firestore = useFirestore();

  const serviceRef = useMemoFirebase(() => serviceId ? doc(firestore, 'services', serviceId) : null, [firestore, serviceId]);
  const { data: service, isLoading } = useDoc<Omit<Service, 'icon' | 'slug' | 'details'>>(serviceRef);

  // This is temporary until we fetch other services from firestore
  const otherServices = services.filter((s) => s.slug !== serviceId).slice(0, 3);

  if (isLoading) {
    return (
        <div className="container mx-auto py-20 sm:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-8">
                    <Skeleton className="h-12 w-1/2" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-24 w-full" />
                    <Skeleton className="h-32 w-full" />
                </div>
                <div className="lg:col-span-1">
                    <Skeleton className="h-64 w-full" />
                </div>
            </div>
        </div>
    )
  }

  if (!service) {
    notFound();
  }

  const ServiceIcon = serviceIconMap[service.category] || Landmark;

  return (
    <div className="container mx-auto py-20 sm:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <Link href="/services" className="text-sm font-medium text-primary hover:underline">
              &larr; Back to all services
            </Link>
          </div>
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-lg bg-primary/10 p-4 text-primary">
              <ServiceIcon className="h-8 w-8" />
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-glow sm:text-5xl">
              {service.title}
            </h1>
          </div>
          <p className="mb-12 text-lg text-muted-foreground">
            {service.description}
          </p>

          {/* Details section is removed as it's not in the DB schema */}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-headline text-lg font-semibold mb-4">
                Get Started
              </h3>
              <p className="text-muted-foreground mb-6">
                Ready to take the next step? Schedule a free consultation with our experts.
              </p>
              <Button asChild className="w-full btn-gradient">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-headline text-lg font-semibold mb-4">
                Other Services
              </h3>
              <ul className="space-y-3">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors">
                      <span>{s.title}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
