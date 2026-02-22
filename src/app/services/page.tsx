'use client';

import { Service } from '@/lib/data';
import { GlassCard } from '@/components/ui/glass-card';
import { Metadata } from 'next';
import Link from 'next/link';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';

// export const metadata: Metadata = {
//   title: 'Our Services - FN Tax Solution',
//   description: 'Explore our comprehensive suite of financial and legal services designed to support your business at every stage.',
// };

export default function ServicesPage() {
  const firestore = useFirestore();
  const servicesQuery = useMemoFirebase(() => collection(firestore, 'services'), [firestore]);
  const { data: services, isLoading } = useCollection<Omit<Service, 'details' | 'slug'>>(servicesQuery);


  return (
    <div className="container mx-auto py-20 sm:py-28">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-glow sm:text-5xl">
          Our Comprehensive Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We provide a full suite of financial and legal services to support
          your business at every stage, from registration to ongoing compliance.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {isLoading && Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-48 w-full" />
        ))}
        {services?.map((service) => (
          <Link href={`/services/${service.id}`} key={service.id}>
            <GlassCard
              icon={Landmark} // TODO: make icon dynamic
              title={service.title}
              description={service.description}
              className="h-full"
            />
          </Link>
        ))}
         {!isLoading && services?.length === 0 && (
          <p className="col-span-full text-center text-muted-foreground">No services available at the moment. Please check back later.</p>
        )}
      </div>
    </div>
  );
}

// TODO: fix this import hell
import {
  Calculator,
  Landmark,
  FileText,
  Building2,
  Handshake,
  ShieldCheck,
} from 'lucide-react';
