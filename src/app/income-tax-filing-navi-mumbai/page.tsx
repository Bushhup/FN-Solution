import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'Income Tax Filing in Navi Mumbai | ITR Filing Services | FN Tax Solution',
    description: 'Expert ITR filing services in Navi Mumbai for salaried individuals, freelancers, and businesses. Maximize your tax savings and ensure timely compliance. Contact us now!',
};

export default function IncomeTaxFilingNaviMumbaiPage() {
  return (
    <div className="container mx-auto py-20 sm:py-28 animate-in fade-in duration-500">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-glow sm:text-5xl uppercase">
          Expert Income Tax Filing Services in Navi Mumbai
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Filing your Income Tax Return (ITR) is a crucial annual responsibility. At FN Tax Solution, we offer professional and affordable ITR filing services for salaried employees, freelancers, and businesses across Navi Mumbai. Our tax experts help you file your returns accurately, on time, and ensure you claim all eligible deductions to maximize your tax refund.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-12">
          <section id="why-file">
            <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">Why is Timely Income Tax Filing Important?</h2>
            <p className="mb-4 text-muted-foreground">
              Beyond being a legal obligation, timely ITR filing offers several advantages for residents of Navi Mumbai. It serves as a crucial proof of income, which is essential for loan applications (home, car, personal) and visa processing. Filing your ITR on time allows you to carry forward losses to future years and avoids hefty penalties for late filing. For businesses, it is a hallmark of financial discipline and compliance.
            </p>
          </section>

          <section id="who-we-help">
            <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">Who We Help with ITR Filing in Navi Mumbai</h2>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li><strong>Salaried Individuals:</strong> We help you file your return considering your Form 16, HRA, LTA, and all eligible deductions under Chapter VI-A.</li>
                <li><strong>Freelancers & Consultants:</strong> We assist professionals in Navi Mumbai with presumptive taxation schemes (Section 44ADA) and proper expense reporting.</li>
                <li><strong>Businesses:</strong> From sole proprietors to companies, we manage complex tax calculations, including capital gains, and ensure full compliance.</li>
            </ul>
          </section>

          <section id="process">
            <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">Our Easy 3-Step ITR Filing Process</h2>
             <p className="mb-6 text-muted-foreground">Our process is designed to be simple, digital, and convenient for all our clients in Navi Mumbai.</p>
            <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
              <li><strong>Share Documents:</strong> You securely upload your documents like Form 16, bank statements, and investment proofs to our portal.</li>
              <li><strong>Expert Review & Preparation:</strong> Our tax professionals review your documents, calculate your tax liability, identify all potential deductions, and prepare your tax return.</li>
              <li><strong>File & Acknowledge:</strong> After your review and approval, we file the return with the Income Tax Department and send you the ITR-V acknowledgement. We also guide you on the e-verification process.</li>
            </ol>
          </section>
          
          <section id="faq">
            <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Who is required to file an income tax return in Navi Mumbai?</AccordionTrigger>
                <AccordionContent>Any individual residing in Navi Mumbai (or anywhere in India) whose total income exceeds the basic exemption limit (e.g., ₹2.5 lakhs for most individuals under 60) is required to file an ITR. Filing is also mandatory in certain other cases, such as having foreign assets or depositing large amounts in a bank account.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is the due date for ITR filing in India?</AccordionTrigger>
                <AccordionContent>For individuals and non-audit cases, the due date for filing the income tax return is typically July 31st of the assessment year. For businesses requiring a tax audit, the deadline is usually October 31st. These dates can be extended by the government.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What documents do I need for income tax filing in Navi Mumbai?</AccordionTrigger>
                <AccordionContent>Commonly required documents include your PAN card, Aadhar card, Form 16 (for salaried individuals), bank statements, and proof of investments (like PPF, ELSS, insurance premiums) to claim deductions. Our team will provide a customized checklist for you.</AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-4">
                <AccordionTrigger>What happens if I miss the ITR filing deadline in Navi Mumbai?</AccordionTrigger>
                <AccordionContent>Missing the due date can lead to penalties under Section 234F, which can be up to ₹5,000. You also lose the ability to carry forward certain losses (like business loss or capital loss) to subsequent years. It is always advisable to file on time.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-headline text-lg font-semibold mb-4 uppercase">
                File Your Taxes with Confidence
              </h3>
              <p className="text-muted-foreground mb-6">
                Avoid last-minute hassles and ensure maximum tax savings. Connect with our Navi Mumbai tax experts today.
              </p>
              <Button asChild className="w-full btn-gradient">
                <Link href="/contact">
                  Start My ITR Filing <ArrowRight className="ml-2 h-4 w-4" />
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
                <li><Link href="/udyam-registration-navi-mumbai" className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"><span>Udyam Registration in Navi Mumbai</span><ChevronRight className="h-4 w-4" /></Link></li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
