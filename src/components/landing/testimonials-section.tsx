'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials, type Testimonial } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 max-w-2xl text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-glow sm:text-4xl uppercase">
            TRUSTED BY GROWING BUSINESSES
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear what our clients have to say about their experience with FN Tax
            Solution.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="h-full animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${100 * (index + 1)}ms` }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
