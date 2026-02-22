import {
  Calculator,
  Landmark,
  FileText,
  Building2,
  Handshake,
  ShieldCheck,
  Lock,
  BadgeCheck,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Landmark,
    title: 'GST Registration',
    description:
      'Navigate the complexities of GST registration with our expert guidance, ensuring a smooth and compliant process for your business.',
  },
  {
    icon: FileText,
    title: 'Income Tax Filing',
    description:
      'Maximize your returns and minimize your liabilities with our precise and thorough income tax filing services for individuals and businesses.',
  },
  {
    icon: Building2,
    title: 'Company Registration',
    description:
      'Launch your venture with confidence. We handle all aspects of company registration, from name approval to incorporation.',
  },
  {
    icon: Handshake,
    title: 'LLP Registration',
    description:
      'Establish your Limited Liability Partnership with ease. Our streamlined process ensures your business is structured for success.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Services',
    description:
      'Stay ahead of regulatory changes. We provide comprehensive compliance services to keep your business secure and in good standing.',
  },
  {
    icon: Calculator,
    title: 'Accounting Services',
    description:
      'From bookkeeping to financial reporting, our accounting services provide the clarity and insights you need to grow your business.',
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Lock,
    title: 'Secure & Confidential',
    description:
      'We use bank-level encryption and strict data protocols to ensure your financial information is always protected.',
  },
  {
    icon: BadgeCheck,
    title: 'Guaranteed Reliability',
    description:
      'Our seasoned professionals deliver accurate, timely, and reliable services you can count on, every time.',
  },
  {
    icon: Users,
    title: 'Expert Advisors',
    description:
      'Access a dedicated team of chartered accountants and legal experts to guide you through complex financial landscapes.',
  },
  {
    icon: Zap,
    title: 'Fast Processing',
    description:
      'Our technology-driven approach streamlines processes, ensuring quick turnaround times without compromising on quality.',
  },
];

export type Testimonial = {
  name: string;
  role: string;
  review: string;
  imageId: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah L.',
    role: 'Founder, TechStart Inc.',
    review:
      'FN Tax Solution revolutionized how we handle compliance. Their expert team made the entire process seamless and stress-free. We can now focus on our core business with complete peace of mind.',
    imageId: 'testimonial-1',
  },
  {
    name: 'Michael B.',
    role: 'CEO, BuildRight Corp.',
    review:
      'The professionalism and speed of FN Tax Solution are unmatched. They handled our company registration flawlessly. Highly recommended for any business looking for reliable financial services.',
    imageId: 'testimonial-2',
  },
  {
    name: 'Emily C.',
    role: 'Freelance Designer',
    review:
      'As a freelancer, tax filing was always a nightmare. FN Tax Solution simplified everything. Their advisors are knowledgeable and incredibly patient. I finally feel in control of my finances.',
    imageId: 'testimonial-3',
  },
];
