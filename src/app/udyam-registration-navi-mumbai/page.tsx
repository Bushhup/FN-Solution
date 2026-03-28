import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'Udyam Registration in Navi Mumbai | MSME Registration | FN Tax Solution',
    description: 'Get your Udyam MSME registration in Navi Mumbai with expert help. Unlock government benefits like priority loans, subsidies, and more. Contact FN Tax Solution.',
};

export default function UdyamRegistrationNaviMumbaiPage() {
  return (
    <div className="container mx-auto py-20 sm:py-28 animate-in fade-in duration-500">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-glow sm:text-5xl uppercase">
          Udyam MSME Registration in Navi Mumbai
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Unlock the full potential of your business in Navi Mumbai by registering it as a Micro, Small, or Medium Enterprise (MSME) through the Udyam portal. FN Tax Solution provides expert assistance to help you get your Udyam Registration Certificate quickly, allowing you to access a wide range of government benefits.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-12">
          <section id="what-is-udyam">
            <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">What is Udyam Registration?</h2>
            <p className="mb-4 text-muted-foreground">
              Udyam Registration is the new, simplified process for registering a business as an MSME in India. It provides a permanent registration number and a certificate that officially recognizes your enterprise. This registration is entirely online, paperless, and based on self-declaration, making it accessible for every business owner in Navi Mumbai.
            </p>
          </section>

          <section id="benefits">
            <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">Top Benefits of Udyam Registration for Navi Mumbai Businesses</h2>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li><strong>Access to Priority Sector Lending:</strong> Banks offer collateral-free loans and credit at lower interest rates to Udyam-registered businesses.</li>
                <li><strong>Government Subsidies:</strong> Get subsidies on patent registration, barcode registration, and for participating in international trade fairs.</li>
                <li><strong>Protection Against Delayed Payments:</strong> Gain legal protection against buyers who delay payments for your goods or services.</li>
                <li><strong>Easier Government Tenders:</strong> Get preference and exemptions when applying for government tenders.</li>
                <li><strong>Electricity Bill Concessions:</strong> Many state electricity boards, including those in Maharashtra, offer concessions on electricity bills to registered MSMEs.</li>
            </ul>
          </section>

          <section id="process">
            <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">Our Seamless Udyam Registration Process</h2>
            <p className="mb-6 text-muted-foreground">We make getting your Udyam registration in Navi Mumbai incredibly simple.</p>
            <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
              <li><strong>Provide Basic Details:</strong> You just need to provide your Aadhar number, PAN number, and bank account details.</li>
              <li><strong>Expert Filing:</strong> Our team fills out the Udyam registration form on your behalf, ensuring all information about your Navi Mumbai business is entered accurately.</li>
              <li><strong>Certificate Generation:</strong> After successful submission and validation, your official Udyam e-certificate is generated and sent to you. The entire process is swift and efficient.</li>
            </ol>
          </section>

          <section id="faq">
            <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is Udyam registration mandatory for businesses in Navi Mumbai?</AccordionTrigger>
                <AccordionContent>While not mandatory for all businesses, Udyam registration is highly recommended for any Micro, Small, or Medium Enterprise in Navi Mumbai to avail the host of benefits offered by the government. It is a gateway to growth and support.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is the difference between Udyog Aadhar and Udyam?</AccordionTrigger>
                <AccordionContent>Udyam Registration has replaced the older Udyog Aadhar Memorandum (UAM). All existing businesses with UAM were required to re-register on the Udyam portal. Udyam is a more streamlined and integrated system linked directly with income tax and GST data.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What are the eligibility criteria for MSME registration in Navi Mumbai?</AccordionTrigger>
                <AccordionContent>The classification of an enterprise as Micro, Small, or Medium is based on a composite criteria of investment in plant & machinery and annual turnover. Our experts can quickly assess your Navi Mumbai business's eligibility.</AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-4">
                <AccordionTrigger>How much does Udyam registration cost in Navi Mumbai?</AccordionTrigger>
                <AccordionContent>The government does not charge any fee for Udyam registration; it is free. FN Tax Solution charges a small professional fee for our expert assistance, ensuring your registration is done correctly and without any errors, saving you time and effort.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-headline text-lg font-semibold mb-4 uppercase">
                Empower Your Business
              </h3>
              <p className="text-muted-foreground mb-6">
                Register your Navi Mumbai business as an MSME and unlock the door to numerous government benefits.
              </p>
              <Button asChild className="w-full btn-gradient">
                <Link href="/contact">
                  Get Udyam Registered <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
             <div className="glass-card rounded-xl p-6">
              <h3 className="font-headline text-lg font-semibold mb-4 uppercase">
                Our Other Local Services
              </h3>
              <ul className="space-y-3">
                <li><Link href="/gst-registration-navi-mumbai" className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"><span>GST Registration in Navi Mumbai</span><ChevronRight className="h-4 w-4" /></Link></li>
                <li><Link href="/company-registration-thane" className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"><span>Company Registration in Thane</span><ChevronRight className="h-4 w-4" /></Link></li>
                <li><Link href="/pan-card-services-navi-mumbai" className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"><span>PAN Card Services in Navi Mumbai</span><ChevronRight className="h-4 w-4" /></Link></li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
