import Image from 'next/image';
import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials, type Testimonial } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Testimonials - FN Tax Solution',
  description: 'Hear what our clients have to say about their experience with FN Tax Solution.',
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const imageData = PlaceHolderImages.find(
    (img) => img.id === testimonial.imageId
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
        </div>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto py-20 sm:py-28">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-glow sm:text-5xl uppercase">
          TRUSTED BY GROWING BUSINESSES
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Hear what our clients have to say about their experience with FN Tax
          Solution.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
        {testimonials?.length === 0 && (
          <p className="col-span-full text-center text-muted-foreground">No testimonials available at the moment. Please check back later.</p>
        )}
      </div>
    </div>
  );
}
