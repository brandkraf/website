import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const SECTIONS = [
  { id: "general-principle", title: "1. General Refund Principle" },
  { id: "before-work-started", title: "2. Before Project Work Has Started" },
  { id: "after-work-started", title: "3. After Project Work Has Started" },
  { id: "completed-services", title: "4. Completed or Delivered Services" },
  { id: "deposits-booking-fees", title: "5. Deposits and Booking Fees" },
  { id: "advertising-budget", title: "6. Advertising Budget and Third-Party Costs" },
  { id: "change-of-mind", title: "7. Change of Mind" },
  { id: "revisions-instead", title: "8. Revisions Instead of Refunds" },
  { id: "installment-bnpl", title: "9. Installment or Buy-Now-Pay-Later Payments" },
  { id: "processing-time", title: "10. Refund Processing Time" },
  { id: "how-to-request", title: "11. How to Request a Refund" },
  { id: "disputes-chargebacks", title: "12. Disputes and Chargebacks" },
  { id: "updates-policy", title: "13. Updates to This Refund Policy" }
];

export default function RefundPolicyPage() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SECTIONS.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 150; // Offset for header

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Refund Policy | BrandKraf</title>
        <meta name="description" content="Read the Refund Policy for BrandKraf Digital Marketing services." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mb-16"
          >
            <h1 className="mb-4">Refund Policy</h1>
            <p className="text-lg text-muted-foreground font-medium">
              Last Updated: 05 March, 2026
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sticky Table of Contents */}
            <motion.aside 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-4 lg:sticky lg:top-32 hidden lg:block"
            >
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4 pb-4 border-b border-border">Table of Contents</h3>
                <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {SECTIONS.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`flex items-center gap-2 py-2 px-3 rounded-lg text-sm transition-colors duration-200 ${
                        activeSection === section.id
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform duration-200 ${activeSection === section.id ? 'translate-x-1 text-primary' : 'opacity-0 -translate-x-2'}`} />
                      <span className="leading-tight">{section.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </motion.aside>

            {/* Main Content Area */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-8 space-y-12 text-muted-foreground"
            >
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  At BrandKraf Digital Marketing, we strive to deliver high-quality digital marketing, branding, and content creation services. Due to the custom nature of our work, our refund policy is structured to be fair to both our clients and our team. Please read this policy carefully before engaging our services.
                </p>

                <section id="general-principle" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. General Refund Principle</h2>
                  <p>Because our services involve dedicated time, strategy, and custom creative work from our team, refunds are generally not provided once work has commenced. We sell our expertise, time, and deliverables, which cannot be returned once rendered.</p>
                </section>

                <section id="before-work-started" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Before Project Work Has Started</h2>
                  <p>If you request a cancellation and refund <strong>before</strong> any onboarding, strategy, or creative work has begun, we will issue a full refund minus any payment gateway processing fees (typically 2-5% depending on the payment method used).</p>
                </section>

                <section id="after-work-started" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. After Project Work Has Started</h2>
                  <p>Once our team has begun work on your project (including but not limited to onboarding calls, strategy development, account setup, or initial drafting), no refunds will be issued for the portion of work already completed. If a project is cancelled mid-way, you will be billed for the work completed up to the cancellation date, and any remaining balance from your deposit may be refunded at our sole discretion.</p>
                </section>

                <section id="completed-services" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Completed or Delivered Services</h2>
                  <p>Under no circumstances will refunds be issued for services that have been fully delivered, published, or handed over to the client. This includes completed websites, delivered UGC videos, published ad campaigns, and finalized branding assets.</p>
                </section>

                <section id="deposits-booking-fees" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Deposits and Booking Fees</h2>
                  <p>For larger projects (such as website development or comprehensive branding), we require a non-refundable deposit to secure our team's time and resources in our production schedule. This deposit is strictly non-refundable if you choose to abandon the project.</p>
                </section>

                <section id="advertising-budget" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Advertising Budget and Third-Party Costs</h2>
                  <p>Any funds allocated for advertising spend (e.g., paid directly to Meta, Google, or TikTok) are non-refundable by BrandKraf. We do not control the refund policies of third-party advertising platforms. Additionally, costs for third-party software, domain registrations, or stock assets purchased on your behalf are non-refundable.</p>
                </section>

                <section id="change-of-mind" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Change of Mind</h2>
                  <p>We do not offer refunds for "change of mind" or if you decide you no longer need the service after work has commenced. We encourage all clients to carefully review proposals and service agreements before making a payment.</p>
                </section>

                <section id="revisions-instead" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Revisions Instead of Refunds</h2>
                  <p>If you are unsatisfied with the initial deliverables, we offer revision rounds as outlined in your specific service package. We are committed to working with you to refine the deliverables until they meet the agreed-upon project brief. Dissatisfaction with initial drafts is not grounds for a refund.</p>
                </section>

                <section id="installment-bnpl" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Installment or Buy-Now-Pay-Later Payments</h2>
                  <p>If you have paid using an installment plan or Buy-Now-Pay-Later (BNPL) service, you are still bound by this refund policy. You remain responsible for completing all scheduled payments to the BNPL provider even if you choose to cancel the project mid-way.</p>
                </section>

                <section id="processing-time" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Refund Processing Time</h2>
                  <p>If a refund is approved by BrandKraf management, it will be processed within 7 to 14 business days. The funds will be returned to the original payment method used during the transaction. Depending on your bank or credit card provider, it may take additional time for the funds to appear in your account.</p>
                </section>

                <section id="how-to-request" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">11. How to Request a Refund</h2>
                  <p>To request a refund or discuss a cancellation, please contact us in writing at:</p>
                  <ul className="list-none space-y-1 mt-4">
                    <li><strong>Email:</strong> admin@brandkraf.com</li>
                    <li>Please include your project name, invoice number, and a detailed explanation of your request.</li>
                  </ul>
                </section>

                <section id="disputes-chargebacks" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">12. Disputes and Chargebacks</h2>
                  <p>We request that you contact us directly to resolve any issues before initiating a chargeback with your bank or credit card company. Unwarranted chargebacks will be disputed, and we reserve the right to suspend all services and withhold deliverables until the dispute is resolved.</p>
                </section>

                <section id="updates-policy" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">13. Updates to This Refund Policy</h2>
                  <p>BrandKraf reserves the right to modify or update this Refund Policy at any time. Any changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the revised policy.</p>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}