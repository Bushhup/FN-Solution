import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials, type Testimonial } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const imageData = PlaceHolderImages.find(
    (img) => img.id === testimonial.imageId
  );

  return (
    <Card className="h-full bg-[#F0F2F5] text-gray-800 shadow-lg">
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
        <blockquote className="italic text-gray-600">
          "{testimonial.review}"
        </blockquote>
        <div className="mt-4">
          <p className="font-bold">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#F0F2F5] py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Growing Businesses
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear what our clients have to say about their experience with FN Tax
            Solution.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
