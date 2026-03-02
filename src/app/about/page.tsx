import Image from 'next/image';
import { features } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
    title: 'About Us - FN Tax Solution',
    description: 'Learn more about FN Tax Solution, our mission, our values, and the expert team dedicated to your financial success.',
};


const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    imageId: 'testimonial-2',
    bio: 'John is a certified Chartered Accountant with over 15 years of experience in financial consulting and tax advisory. He founded FN Tax Solution to make expert financial services accessible to all businesses.'
  },
  {
    name: 'Jane Smith',
    role: 'Head of Legal & Compliance',
    imageId: 'testimonial-1',
    bio: 'Jane is a corporate lawyer specializing in business law and regulatory compliance. She ensures our clients are always ahead of legal requirements.'
  },
  {
    name: 'Emily Chen',
    role: 'Lead Accounting Specialist',
    imageId: 'testimonial-3',
    bio: 'Emily leads our accounting team with a passion for numbers and a commitment to accuracy. She helps clients maintain pristine financial records for sustainable growth.'
  },
];


export default function AboutPage() {
    return (
        <div className="container mx-auto py-20 sm:py-28">
            <div className="mx-auto mb-16 max-w-3xl text-center">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-glow sm:text-5xl uppercase">
                    Your Partner in Financial Clarity
                </h1>
                <p className="mt-6 text-lg text-muted-foreground">
                    At FN Tax Solution, we are more than just accountants and lawyers; we are your strategic partners. Our mission is to simplify complex financial and legal landscapes, empowering you to focus on what you do best—growing your business.
                </p>
            </div>

            <section id="why-us" className="mb-20 sm:mb-28">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-glow sm:text-4xl uppercase">
                        The FN Tax Solution Advantage
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Experience the peace of mind that comes with having a dedicated, expert team by your side.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div key={feature.title} className="text-center">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-headline text-lg font-semibold text-foreground uppercase">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-muted-foreground">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            
            <section id="team">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-glow sm:text-4xl uppercase">
                        Meet Our Experts
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our strength lies in our team of dedicated and experienced professionals.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member) => {
                         const imageData = PlaceHolderImages.find(
                            (img) => img.id === member.imageId
                        );
                        return (
                            <Card key={member.name} className="glass-card text-center">
                                <CardContent className="pt-6">
                                    {imageData && (
                                        <Image
                                            src={imageData.imageUrl}
                                            alt={`Photo of ${member.name}`}
                                            width={96}
                                            height={96}
                                            className="mx-auto mb-4 rounded-full"
                                            data-ai-hint={imageData.imageHint}
                                        />
                                    )}
                                    <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                                    <p className="text-sm font-medium text-primary">{member.role}</p>
                                    <p className="mt-4 text-muted-foreground">{member.bio}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </section>
        </div>
    );
}
