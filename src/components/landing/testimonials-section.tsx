'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Testimonial } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { Skeleton } from '../ui/skeleton';

function TestimonialCard({ testimonial, imageId }: { testimonial: Partial<Testimonial>, imageId: string }) {
  const imageData = PlaceHolderImages.find(
    (img) => img.id === imageId
  );

  return (
    <Card className="h-full glass-card text-foreground">
      <CardContent className="flex flex-col items-center p-8 text-center">
        {imageData && (
          <Image
            src={imageData.imageUrl}
            alt={`Photo of ${testimonial.name}`}
            width={64}
            height={64}
            className="mb-4 rounded-full"
            data-ai-hint={imageData.imageHint}
          />
        )}
        <blockquote className="italic text-muted-foreground">
          &quot;{testimonial.review}&quot;
        </blockquote>
        <div className="mt-4">
          <p className="font-bold">{testimonial.name}</p>
          <p className="text-sm text-primary">{testimonial.role}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  const firestore = useFirestore();
  const testimonialsQuery = useMemoFirebase(() => collection(firestore, 'testimonials'), [firestore]);
  const { data: testimonials, isLoading } = useCollection<Testimonial>(testimonialsQuery);

  const imageIds = ['testimonial-1', 'testimonial-2', 'testimonial-3'];

  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-glow sm:text-4xl">
            Trusted by Growing Businesses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear what our clients have to say about their experience with FN Tax
            Solution.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {isLoading && Array.from({length: 3}).map((_, i) => <Skeleton key={i} className="h-64 w-full" />)}
          {testimonials?.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} imageId={imageIds[index % imageIds.length]} />
          ))}
          {!isLoading && testimonials?.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground">No testimonials yet. Be the first to share your experience!</p>
          )}
        </div>
      </div>
    </section>
  );
}
