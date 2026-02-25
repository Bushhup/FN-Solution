'use client';

import { HeroSection } from '@/components/landing/hero-section';
import { ServicesSection } from '@/components/landing/services-section';
import { WhyChooseUsSection } from '@/components/landing/why-choose-us-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { CtaSection } from '@/components/landing/cta-section';
import { StatsSection } from '@/components/landing/stats-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
