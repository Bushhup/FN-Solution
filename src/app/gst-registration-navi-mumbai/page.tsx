import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'GST Registration in Navi Mumbai | Expert GST Services | FN Tax Solution',
    description: 'Fast and reliable GST registration services in Navi Mumbai, Vashi, Panvel, and Thane. We help businesses with GST filing, compliance, and expert consultation. Contact us today!',
};

export default function GstRegistrationNaviMumbaiPage() {
  return (
    <div className="container mx-auto py-20 sm:py-28 animate-in fade-in duration-500">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-glow sm:text-5xl uppercase">
          Expert GST Registration Services in Navi Mumbai
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Navigating the complexities of Goods and Services Tax (GST) can be challenging for any business. At FN Tax Solution, we provide comprehensive GST registration and filing services for businesses across Navi Mumbai, including Vashi, Panvel, Nerul, and surrounding areas. Our goal is to make GST compliance simple, seamless, and stress-free for you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-12">
          <section id="what-is-gst">
            <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">Why is GST Registration Crucial for Your Navi Mumbai Business?</h2>
            <p className="mb-4 text-muted-foreground">
              GST registration is not just a legal requirement; it's a gateway to growing your business. For any enterprise in the bustling economic landscape of Navi Mumbai, being GST-compliant is fundamental. It allows you to legally collect taxes from your customers and claim Input Tax Credit (ITC) on your own purchases and expenses, significantly reducing your tax burden and improving profitability.
            </p>
            <p className="text-muted-foreground">
              A valid GSTIN (GST Identification Number) enhances your business's credibility, making it easier to work with larger corporations and participate in tenders. It is essential for interstate trade and e-commerce operations, opening up a larger market for your products and services beyond Navi Mumbai.
            </p>
          </section>

          <section id="process">
            <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">Our Streamlined GST Registration Process in Navi Mumbai</h2>
            <p className="mb-6 text-muted-foreground">We have simplified the GST registration process to get your Navi Mumbai business compliant in no time.</p>
            <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
              <li><strong>Document Submission:</strong> You provide us with the required documents, such as PAN card, Aadhar card, proof of business address (like an electricity bill or rent agreement), and bank account details.</li>
              <li><strong>Application Filing:</strong> Our GST experts in Navi Mumbai carefully verify your documents and file your GST registration application (Form GST REG-01) on the official GST portal.</li>
              <li><strong>Follow-up and Approval:</strong> We diligently follow up with the GST department. If any clarifications are required, we handle the responses promptly to ensure your application is processed smoothly.</li>
              <li><strong>GSTIN Allotment:</strong> Once approved, you will receive your GSTIN and GST registration certificate. You are now officially a GST-registered business in Navi Mumbai!</li>
            </ol>
          </section>

           <section id="documents">
                <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">Documents Required for GST Registration</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>PAN Card of the Business or Applicant</li>
                    <li>Aadhar Card, Photo of the Proprietor/Partners/Directors</li>
                    <li>Proof of Business Address (e.g., Electricity Bill, Rent Agreement)</li>
                    <li>Bank Account Statement or Cancelled Cheque</li>
                    <li>For Companies/LLPs: Certificate of Incorporation and Board Resolution</li>
                </ul>
          </section>

          <section id="faq">
            <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Who needs GST registration in Navi Mumbai?</AccordionTrigger>
                <AccordionContent>Any business in Navi Mumbai providing goods or services with an aggregate turnover exceeding ₹20 lakhs (for services) or ₹40 lakhs (for goods) in a financial year must register for GST. Registration is also mandatory for e-commerce sellers, businesses making interstate sales, and casual taxable persons, regardless of turnover.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is the turnover limit for GST in Maharashtra?</AccordionTrigger>
                <AccordionContent>In Maharashtra, the threshold limit for mandatory GST registration is ₹40 lakhs for suppliers of goods and ₹20 lakhs for service providers. Our experts in Navi Mumbai can help you determine if you need to register.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How long does GST registration take in Navi Mumbai?</AccordionTrigger>
                <AccordionContent>Typically, GST registration in Navi Mumbai takes about 3-7 working days after the application is filed, provided all documents are in order. Our team ensures a quick and accurate filing to avoid any delays.</AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-4">
                <AccordionTrigger>Can I have a single GST registration for multiple branches in Navi Mumbai?</AccordionTrigger>
                <AccordionContent>If you have multiple branches within Maharashtra, you can operate them under a single GST registration. However, if you wish to manage them as separate business verticals, you can opt for separate registrations for each branch. We can advise you on the best structure for your Navi Mumbai operations.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-headline text-lg font-semibold mb-4 uppercase">
                Become GST Compliant Today
              </h3>
              <p className="text-muted-foreground mb-6">
                Don't let GST be a hurdle for your business growth in Navi Mumbai. Let our experts handle it for you.
              </p>
              <Button asChild className="w-full btn-gradient">
                <Link href="/contact">
                  Get Free GST Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
             <div className="glass-card rounded-xl p-6">
              <h3 className="font-headline text-lg font-semibold mb-4 uppercase">
                Our Other Local Services
              </h3>
              <ul className="space-y-3">
                <li><Link href="/company-registration-thane" className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"><span>Company Registration in Thane</span><ChevronRight className="h-4 w-4" /></Link></li>
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
