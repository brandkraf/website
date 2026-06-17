import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
const SECTIONS = [{
  id: "about",
  title: "1. About BrandKraf Digital Marketing"
}, {
  id: "service-packages",
  title: "2. Service Packages and Custom Quotations"
}, {
  id: "orders-payments",
  title: "3. Orders and Payments"
}, {
  id: "project-commencement",
  title: "4. Project Commencement"
}, {
  id: "client-responsibilities",
  title: "5. Client Responsibilities"
}, {
  id: "revisions-amendments",
  title: "6. Revisions and Amendments"
}, {
  id: "project-timeline",
  title: "7. Project Timeline"
}, {
  id: "advertising-performance",
  title: "8. Advertising and Marketing Performance"
}, {
  id: "advertising-budget",
  title: "9. Advertising Budget and Third-Party Costs"
}, {
  id: "content-approval",
  title: "10. Content Approval and Usage"
}, {
  id: "intellectual-property",
  title: "11. Intellectual Property"
}, {
  id: "cancellation",
  title: "12. Cancellation"
}, {
  id: "refunds",
  title: "13. Refunds"
}, {
  id: "confidentiality",
  title: "14. Confidentiality"
}, {
  id: "limitation-liability",
  title: "15. Limitation of Liability"
}, {
  id: "third-party-platforms",
  title: "16. Third-Party Platforms"
}, {
  id: "changes-terms",
  title: "17. Changes to Terms and Conditions"
}, {
  id: "governing-law",
  title: "18. Governing Law"
}, {
  id: "contact-us",
  title: "19. Contact Us"
}];
export default function TermsAndConditionsPage() {
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
  return <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Terms and Conditions | BrandKraf</title>
        <meta name="description" content="Read the Terms and Conditions for BrandKraf Digital Marketing services." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          {/* Hero Section */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="max-w-4xl mb-16">
            <h1 className="mb-4">Terms and Conditions</h1>
            <p className="text-lg text-muted-foreground font-medium">
              Last Updated: March 22, 2026
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sticky Table of Contents */}
            <motion.aside initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.1
          }} className="lg:col-span-4 lg:sticky lg:top-32 hidden lg:block">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4 pb-4 border-b border-border">Table of Contents</h3>
                <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {SECTIONS.map(section => <a key={section.id} href={`#${section.id}`} onClick={e => scrollToSection(e, section.id)} className={`flex items-center gap-2 py-2 px-3 rounded-lg text-sm transition-colors duration-200 ${activeSection === section.id ? 'bg-primary/10 text-primary font-semibold' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform duration-200 ${activeSection === section.id ? 'translate-x-1 text-primary' : 'opacity-0 -translate-x-2'}`} />
                      <span className="leading-tight">{section.title}</span>
                    </a>)}
                </nav>
              </div>
            </motion.aside>

            {/* Main Content Area */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="lg:col-span-8 space-y-12 text-muted-foreground">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  Welcome to BrandKraf Digital Marketing. These Terms and Conditions govern your use of our website and the services we provide. By engaging our services, you agree to be bound by these terms. Please read them carefully.
                </p>

                <section id="about" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. About BrandKraf Digital Marketing</h2>
                  <p>BrandKraf Digital Marketing ("we", "us", "our") is a full-service digital marketing agency providing services including but not limited to Social Media Management, Paid Advertising, Website Development, Branding, UGC Content Creation, and AI-Driven Marketing.</p>
                </section>

                <section id="service-packages" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Service Packages and Custom Quotations</h2>
                  <p>We offer predefined service packages as well as custom quotations tailored to specific client needs. All inclusions, deliverables, and limitations for each package are detailed in the respective service agreements or proposals. Any services requested outside the agreed scope will be subject to additional charges.</p>
                </section>

                <section id="orders-payments" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Orders and Payments</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All prices are quoted in Malaysian Ringgit (MYR) unless otherwise stated.</li>
                    <li>Payment must be made in full or according to the agreed milestone schedule before work commences.</li>
                    <li>We accept payments via our secure HitPay gateway, bank transfer, and other approved methods.</li>
                    <li>Late payments may result in the suspension of services until the outstanding balance is cleared.</li>
                  </ul>
                </section>

                <section id="project-commencement" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Project Commencement</h2>
                  <p>A project is considered commenced once the initial payment is received and the client has provided all necessary onboarding materials, access credentials, and initial briefs required for our team to begin work.</p>
                </section>

                <section id="client-responsibilities" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Client Responsibilities</h2>
                  <p>To ensure the timely and successful delivery of services, the client agrees to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information about their business, products, and goals.</li>
                    <li>Supply necessary assets (logos, brand guidelines, product samples) in a timely manner.</li>
                    <li>Grant necessary access to social media accounts, ad accounts, and website backends.</li>
                    <li>Respond to approval requests and feedback loops within the agreed timeframes.</li>
                  </ul>
                </section>

                <section id="revisions-amendments" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Revisions and Amendments</h2>
                  <p>Each service package includes a specific number of revision rounds (typically 1-3 rounds depending on the service). Revisions must be requested within 5 business days of receiving the draft. Requests made after this period or beyond the allocated rounds will be billed at our standard hourly rate.</p>
                </section>

                <section id="project-timeline" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Project Timeline</h2>
                  <p>Estimated delivery timelines are provided in the project proposal. While we strive to meet all deadlines, timelines are contingent upon the client providing timely feedback and necessary materials. We are not liable for delays caused by client inaction or third-party platform issues.</p>
                </section>

                <section id="advertising-performance" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Advertising and Marketing Performance</h2>
                  <p>While we employ industry best practices and data-driven strategies, we do not guarantee specific results, sales, or ROI from marketing campaigns. Digital marketing performance is subject to market variables, platform algorithm changes, and consumer behavior outside our control.</p>
                </section>

                <section id="advertising-budget" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Advertising Budget and Third-Party Costs</h2>
                  <p>Our service fees do not include advertising spend (e.g., Meta Ads, Google Ads budget) or third-party software subscriptions unless explicitly stated. The client is responsible for funding their own ad accounts directly.</p>
                </section>

                <section id="content-approval" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Content Approval and Usage</h2>
                  <p>For social media and UGC services, content will be submitted for client approval before publishing. Once approved, BrandKraf is not liable for any errors or omissions. We reserve the right to use completed work in our portfolio and marketing materials unless a Non-Disclosure Agreement (NDA) is signed.</p>
                </section>

                <section id="intellectual-property" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">11. Intellectual Property</h2>
                  <p>Upon full payment, the client retains ownership of the final deliverables (e.g., final logo files, website code, published videos). BrandKraf retains ownership of all working files, drafts, proprietary scripts, and methodologies used during the creation process.</p>
                </section>

                <section id="cancellation" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">12. Cancellation</h2>
                  <p>Either party may terminate a monthly retainer agreement with a 30-day written notice. For project-based work, cancellation by the client will result in the forfeiture of the deposit, and the client will be billed for any work completed up to the cancellation date.</p>
                </section>

                <section id="refunds" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">13. Refunds</h2>
                  <p>Due to the custom nature of digital marketing and creative services, all payments are non-refundable once work has commenced. In exceptional circumstances, partial refunds may be issued at the sole discretion of BrandKraf management.</p>
                </section>

                <section id="confidentiality" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">14. Confidentiality</h2>
                  <p>Both parties agree to keep confidential any proprietary information, business strategies, and customer data shared during the course of the engagement. This obligation survives the termination of the agreement.</p>
                </section>

                <section id="limitation-liability" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">15. Limitation of Liability</h2>
                  <p>BrandKraf shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, revenue, or data, arising out of or in connection with our services. Our total liability shall not exceed the total fees paid by the client for the specific service in question during the preceding 3 months.</p>
                </section>

                <section id="third-party-platforms" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">16. Third-Party Platforms</h2>
                  <p>We utilize third-party platforms (e.g., Meta, TikTok, Google, Shopify). We are not responsible for any account suspensions, bans, algorithm changes, or downtime imposed by these platforms that may affect your campaigns or website.</p>
                </section>

                <section id="changes-terms" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">17. Changes to Terms and Conditions</h2>
                  <p>We reserve the right to update or modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Continued use of our services constitutes acceptance of the revised terms.</p>
                </section>

                <section id="governing-law" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">18. Governing Law</h2>
                  <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of Malaysia. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Malaysia.</p>
                </section>

                <section id="contact-us" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">19. Contact Us</h2>
                  <p>If you have any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
                  <ul className="list-none space-y-1 mt-4">
                    <li><strong>Email:</strong> admin@brandkraf.com</li>
                    <li><strong>Phone:</strong> +60391343603</li>
                    <li><strong>Address:</strong> 28-02-02, Jalan 2/101c, Cheras Business Centre, 56100 Cheras, Wilayah Persekutuan Kuala Lumpur</li>
                  </ul>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
}