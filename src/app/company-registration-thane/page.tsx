import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Building2, Handshake, User } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Company Registration in Thane | Private Limited, OPC | FN Tax Solution',
    description: 'Expert company registration services in Thane. We help you register a Private Limited Company, OPC, or LLP quickly and affordably. Contact us for a free consultation.',
};

export default function CompanyRegistrationThanePage() {
  return (
    <div className="container mx-auto py-20 sm:py-28 animate-in fade-in duration-500">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-glow sm:text-5xl uppercase">
          Professional Company Registration Services in Thane
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Starting a new business in Thane? FN Tax Solution is your trusted partner for seamless and compliant company registration. Whether you're looking to form a Private Limited Company, a One Person Company (OPC), or a Limited Liability Partnership (LLP), our experts in Thane are here to guide you through every step of the process.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-12">
          <section id="why-register">
            <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">Why Register Your Company in Thane?</h2>
            <p className="mb-6 text-muted-foreground">
              Thane, a rapidly growing business hub in the Mumbai Metropolitan Region (MMR), offers immense opportunities for new ventures. Registering your business as a formal legal entity is the first step towards building a credible and scalable enterprise. A registered company enjoys benefits like limited liability protection, a separate legal identity, easier access to bank loans and funding, and enhanced trust among customers and suppliers.
            </p>
          </section>

          <section id="types">
            <h2 className="font-headline text-3xl font-bold mb-8 uppercase text-glow">Types of Companies We Register in Thane</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <Card className="glass-card h-full">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Building2 className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline uppercase">Private Limited Company</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Ideal for startups and growing businesses seeking credibility and funding. It offers limited liability to its shareholders and is the most popular corporate structure in Thane.</p>
                    </CardContent>
                </Card>
                <Card className="glass-card h-full">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <User className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline uppercase">One Person Company (OPC)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Perfect for solo entrepreneurs who want the benefits of a company structure, including limited liability, without the need for multiple partners.</p>
                    </CardContent>
                </Card>
                 <Card className="glass-card h-full">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Handshake className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline uppercase">Limited Liability Partnership (LLP)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">A hybrid structure that combines the flexibility of a partnership with the advantage of limited liability, suitable for professionals and service-based firms in Thane.</p>
                    </CardContent>
                </Card>
            </div>
          </section>

          <section id="process">
            <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">Our Simple 4-Step Company Registration Process in Thane</h2>
            <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
              <li><strong>Consultation & Document Collection:</strong> Our Thane-based experts will consult with you to choose the right business structure and collect the necessary documents like PAN, Aadhar, and address proof.</li>
              <li><strong>Name Approval & Digital Signatures:</strong> We apply for your proposed company name (RUN) and obtain Digital Signature Certificates (DSC) and Director Identification Numbers (DIN) for all directors.</li>
              <li><strong>Filing of Incorporation Documents:</strong> We draft the Memorandum of Association (MOA) and Articles of Association (AOA) and file the SPICe+ incorporation form with the Registrar of Companies (ROC).</li>
              <li><strong>Certificate of Incorporation:</strong> Once approved, you receive your Certificate of Incorporation along with your company's PAN and TAN. Your business is now legally ready to operate in Thane and beyond!</li>
            </ol>
          </section>

          <section id="faq">
            <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the minimum requirement to register a private limited company in Thane?</AccordionTrigger>
                <AccordionContent>To register a private limited company in Thane, you need a minimum of two directors and two shareholders (they can be the same individuals). At least one director must be a resident of India. You also need a registered office address within Thane (or anywhere in Maharashtra).</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How long does company registration take in Thane?</AccordionTrigger>
                <AccordionContent>With FN Tax Solution, the company registration process in Thane is fast and efficient. Typically, it takes about 7-10 working days, subject to the processing time by the Registrar of Companies (ROC) and the availability of your proposed company name.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I register a company from home in Thane?</AccordionTrigger>
                <AccordionContent>Absolutely! The entire company registration process is online. Our team at FN Tax Solution manages all digital filings and communications, so you can register your company from the comfort of your home or office in Thane.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What are the post-registration compliances for a new company in Thane?</AccordionTrigger>
                <AccordionContent>After incorporation, a new company must appoint its first auditor within 30 days, open a corporate bank account, and file a declaration of commencement of business. Additionally, there are annual compliances like filing financial statements (AOC-4) and annual returns (MGT-7) with the ROC. We can help with all these requirements.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-headline text-lg font-semibold mb-4 uppercase">
                Start Your Business Journey Today!
              </h3>
              <p className="text-muted-foreground mb-6">
                Ready to turn your business idea into reality in Thane? Schedule a free consultation with our company registration experts.
              </p>
              <Button asChild className="w-full btn-gradient">
                <Link href="/contact">
                  Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
             <div className="glass-card rounded-xl p-6">
              <h3 className="font-headline text-lg font-semibold mb-4 uppercase">
                Our Other Local Services
              </h3>
              <ul className="space-y-3">
                <li><Link href="/gst-registration-navi-mumbai" className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"><span>GST Registration in Navi Mumbai</span><ChevronRight className="h-4 w-4" /></Link></li>
                <li><Link href="/income-tax-filing-navi-mumbai" className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"><span>Income Tax Filing in Navi Mumbai</span><ChevronRight className="h-4 w-4" /></Link></li>
                <li><Link href="/pan-card-services-navi-mumbai" className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"><span>PAN Card Services in Navi Mumbai</span><ChevronRight className="h-4 w-4" /></Link></li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
