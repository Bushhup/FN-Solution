import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CreditCard, Edit, Copy } from 'lucide-react';

export const metadata: Metadata = {
    title: 'PAN Card Services in Navi Mumbai | Apply & Correct PAN | FN Tax Solution',
    description: 'Reliable PAN card services in Navi Mumbai. We assist with new PAN applications, corrections, and duplicate PAN card requests quickly and efficiently. Contact us today!',
};

export default function PanCardServicesNaviMumbaiPage() {
  return (
    <div className="container mx-auto py-20 sm:py-28 animate-in fade-in duration-500">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-glow sm:text-5xl uppercase">
          Fast & Reliable PAN Card Services in Navi Mumbai
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          The Permanent Account Number (PAN) is a mandatory document for almost all financial transactions in India. FN Tax Solution offers hassle-free PAN card services for residents and businesses across Navi Mumbai, ensuring you can get your new PAN, make corrections, or request a duplicate with ease and speed.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-12">
          <section id="why-pan">
            <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">Why a PAN Card is Essential in Navi Mumbai</h2>
            <p className="mb-4 text-muted-foreground">
              Whether you are a salaried employee, a student, a business owner, or a freelancer in Navi Mumbai, a PAN card is indispensable. It is required for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Filing Income Tax Returns (ITR)</li>
                <li>Opening a bank account</li>
                <li>Investing in mutual funds or the stock market</li>
                <li>Purchasing or selling property worth more than ₹10 lakhs</li>
                <li>Applying for a loan or a credit card</li>
                <li>High-value cash transactions</li>
            </ul>
            <p className="mt-4 text-muted-foreground">Without a PAN, you may face higher TDS (Tax Deducted at Source) rates and limitations on various financial activities.</p>
          </section>

          <section id="services">
            <h2 className="font-headline text-3xl font-bold mb-8 uppercase text-glow">Our PAN Card Services in Navi Mumbai</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <Card className="glass-card h-full">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <CreditCard className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline uppercase">New PAN Card Application</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Applying for the first time? We manage the entire online application process for individuals, companies, and firms in Navi Mumbai.</p>
                    </CardContent>
                </Card>
                <Card className="glass-card h-full">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Edit className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline uppercase">PAN Card Correction</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Need to update your name, date of birth, or address? We handle all types of corrections to ensure your details are accurate.</p>
                    </CardContent>
                </Card>
                 <Card className="glass-card h-full">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Copy className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline uppercase">Duplicate PAN Card</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Lost or damaged your PAN card? We assist you in applying for a reprint or a duplicate e-PAN card quickly.</p>
                    </CardContent>
                </Card>
            </div>
          </section>

          <section id="process">
            <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">Get Your PAN Card in 3 Simple Steps</h2>
            <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
              <li><strong>Submit Your Details:</strong> Provide us with your basic details and required documents like Aadhar card and proof of identity/address.</li>
              <li><strong>We Process Your Application:</strong> Our team fills out the application form accurately, uploads the documents, and submits it to the tax authorities.</li>
              <li><strong>Receive Your PAN:</strong> The e-PAN is typically generated within a few hours to a couple of days, and the physical card is delivered to your Navi Mumbai address within 1-2 weeks.</li>
            </ol>
          </section>

          <section id="faq">
            <h2 className="font-headline text-3xl font-bold mb-6 uppercase text-glow">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long does it take to get a PAN card in Navi Mumbai?</AccordionTrigger>
                <AccordionContent>The allotment of a new PAN is usually quick. The e-PAN card is often generated and emailed within 48 hours of a successful application. The physical card is delivered by post to your Navi Mumbai address and may take 7-15 working days.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What documents are needed for a PAN card application in Navi Mumbai?</AccordionTrigger>
                <AccordionContent>For most individual applicants in Navi Mumbai, the Aadhar card is sufficient as proof of identity, address, and date of birth through e-KYC. In other cases, documents like a passport, voter ID, or driving license may be required. We will guide you on the exact requirements.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I apply for a PAN card correction online in Navi Mumbai?</AccordionTrigger>
                <AccordionContent>Yes, the process for PAN correction is entirely online. You can submit your request from anywhere in Navi Mumbai. Our team at FN Tax Solution will manage the complete digital process for you, from application to submission.</AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-4">
                <AccordionTrigger>I lost my PAN card. Can you help me get a new one in Navi Mumbai?</AccordionTrigger>
                <AccordionContent>Absolutely. We can help you apply for a reprint of your PAN card. You will receive an e-PAN card on your email and a physical card will be dispatched to your registered address in Navi Mumbai. The process is simple and fast.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-headline text-lg font-semibold mb-4 uppercase">
                Get Your PAN Card Now
              </h3>
              <p className="text-muted-foreground mb-6">
                Don't wait. Get your essential financial identity document with our expert help in Navi Mumbai.
              </p>
              <Button asChild className="w-full btn-gradient">
                <Link href="/contact">
                  Apply for PAN Card <ArrowRight className="ml-2 h-4 w-4" />
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
                <li><Link href="/income-tax-filing-navi-mumbai" className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"><span>Income Tax Filing in Navi Mumbai</span><ChevronRight className="h-4 w-4" /></Link></li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
