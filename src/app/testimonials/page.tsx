import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials, type Testimonial } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Testimonials - FN Tax Solution',
  description: 'Hear what our clients have to say about their experience with FN Tax Solution.',
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full glass-card text-foreground">
      <CardContent className="flex flex-col items-center p-8 text-center">
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
      <div className="mx-auto mb-16 max-w-2xl text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-glow sm:text-5xl uppercase">
          TRUSTED BY GROWING BUSINESSES
        </h1>
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
        {testimonials?.length === 0 && (
          <p className="col-span-full text-center text-muted-foreground">No testimonials available at the moment. Please check back later.</p>
        )}
      </div>
    </div>
  );
}
