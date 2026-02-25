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
  slug: string;
  category: string;
  description: string;
  details: {
    heading: string;
    text: string;
  }[];
};

export const services: Service[] = [
  {
    icon: Landmark,
    title: 'GST Registration',
    slug: 'gst-registration',
    category: 'GST Registration',
    description:
      'Navigate the complexities of GST registration with our expert guidance, ensuring a smooth and compliant process for your business.',
    details: [
      {
        heading: 'Effortless Registration Process',
        text: 'We handle everything from document submission to obtaining your GSTIN. Our experts ensure every detail is correct, preventing future complications and allowing you to focus on your business launch.'
      },
      {
        heading: 'Comprehensive Advisory',
        text: 'Understand the implications of GST for your specific business model. We provide tailored advice on GST rates, input tax credits, and compliance requirements to optimize your tax strategy from day one.'
      },
      {
        heading: 'Post-Registration Support',
        text: 'Our support doesn\'t end with registration. We assist with initial GST filings, invoicing setup, and any questions you have, ensuring you are fully equipped to manage your GST obligations.'
      }
    ]
  },
  {
    icon: FileText,
    title: 'Income Tax Filing',
    slug: 'income-tax-filing',
    category: 'Income Tax Filing',
    description:
      'Maximize your returns and minimize your liabilities with our precise and thorough income tax filing services for individuals and businesses.',
    details: [
        {
            heading: 'For Individuals',
            text: 'We help salaried individuals, freelancers, and professionals file their income tax returns accurately. Our service includes a review of all possible deductions and exemptions to ensure you get the maximum refund possible.'
        },
        {
            heading: 'For Businesses',
            text: 'Our corporate tax experts manage the entire tax filing process for your company, ensuring compliance with the latest tax laws and regulations. We help you with tax planning, computation of tax liability, and timely filing to avoid penalties.'
        },
        {
            heading: 'Audit & Representation',
            text: 'In case of scrutiny or audit by tax authorities, we provide expert representation to handle all queries and ensure a smooth resolution. We stand by you at every step of the process.'
        }
    ]
  },
  {
    icon: Building2,
    title: 'Company Registration',
    slug: 'company-registration',
    category: 'Company Registration',
    description:
      'Launch your venture with confidence. We handle all aspects of company registration, from name approval to incorporation.',
    details: [
        {
            heading: 'Choosing the Right Structure',
            text: 'We guide you in selecting the most suitable business structure—be it a Private Limited Company, One Person Company (OPC), or Section 8 Company—based on your vision, capital, and liability preferences.'
        },
        {
            heading: 'End-to-End Incorporation',
            text: 'Our service covers the entire incorporation process, including Director Identification Number (DIN) application, name reservation (RUN), drafting the Memorandum and Articles of Association (MoA & AoA), and filing all necessary forms with the MCA.'
        },
        {
            heading: 'Post-Incorporation Compliance',
            text: 'After your company is incorporated, we help you with essential post-registration compliance like applying for PAN/TAN, opening a bank account, and fulfilling initial statutory requirements.'
        }
    ]
  },
  {
    icon: Handshake,
    title: 'LLP Registration',
    slug: 'llp-registration',
    category: 'LLP Registration',
    description:
      'Establish your Limited Liability Partnership with ease. Our streamlined process ensures your business is structured for success.',
    details: [
        {
            heading: 'Simple & Quick Process',
            text: 'An LLP combines the benefits of a partnership and a company with limited liability. We make the registration process simple and fast, handling all legal formalities so you can start your partnership venture without delay.'
        },
        {
            heading: 'Drafting the LLP Agreement',
            text: 'The LLP Agreement is a crucial document that outlines the rights and duties of the partners. Our legal experts draft a comprehensive agreement tailored to your partnership\'s specific needs, protecting the interests of all partners.'
        },
        {
            heading: 'Compliance & Advisory',
            text: 'We ensure your LLP complies with all regulations under the LLP Act, 2008. From designated partner requirements to annual filings, we provide ongoing advisory to keep your LLP in good standing.'
        }
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Services',
    slug: 'compliance-services',
    category: 'Compliance Services',
    description:
      'Stay ahead of regulatory changes. We provide comprehensive compliance services to keep your business secure and in good standing.',
    details: [
        {
            heading: 'Annual ROC Filings',
            text: 'We manage all your annual filing requirements with the Registrar of Companies (ROC), including financial statements and annual returns, to ensure you avoid heavy penalties for non-compliance.'
        },
        {
            heading: 'Secretarial Services',
            text: 'Our team can act as your virtual secretarial department, maintaining statutory registers, preparing minutes for board and general meetings, and ensuring all corporate governance norms are met.'
        },
        {
            heading: 'Regulatory Updates',
            text: 'The legal landscape is always changing. We keep you informed of important regulatory updates that affect your business and help you adapt your compliance strategies accordingly.'
        }
    ]
  },
  {
    icon: Calculator,
    title: 'Accounting Services',
    slug: 'accounting-services',
    category: 'Accounting Services',
    description:
      'From bookkeeping to financial reporting, our accounting services provide the clarity and insights you need to grow your business.',
    details: [
        {
            heading: 'Bookkeeping & Record-Keeping',
            text: 'Maintain accurate and up-to-date financial records without the overhead of an in-house team. We use modern accounting software to manage your books efficiently.'
        },
        {
            heading: 'Financial Reporting',
            text: 'Get a clear view of your financial health with periodic reports, including Profit & Loss statements, Balance Sheets, and Cash Flow statements. These insights are vital for strategic decision-making.'
        },
        {
            heading: 'Payroll Management',
            text: 'We handle all aspects of payroll processing, from salary calculation to TDS compliance and payslip generation, ensuring your employees are paid accurately and on time.'
        }
    ]
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
