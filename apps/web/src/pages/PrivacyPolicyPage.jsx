import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const SECTIONS = [
  { id: "about", title: "1. About This Privacy Policy" },
  { id: "data-we-collect", title: "2. Personal Data We May Collect" },
  { id: "how-we-collect", title: "3. How We Collect Personal Data" },
  { id: "purpose", title: "4. Purpose of Collecting Personal Data" },
  { id: "payment-info", title: "5. Payment Information" },
  { id: "disclosure", title: "6. Disclosure of Personal Data" },
  { id: "third-party", title: "7. Third-Party Platforms" },
  { id: "cookies", title: "8. Cookies and Tracking Technologies" },
  { id: "marketing", title: "9. Marketing Communications" },
  { id: "security", title: "10. Data Security" },
  { id: "retention", title: "11. Data Retention" },
  { id: "accuracy", title: "12. Accuracy of Personal Data" },
  { id: "access-correction", title: "13. Access and Correction" },
  { id: "links", title: "14. Links to Other Websites" },
  { id: "children", title: "15. Children's Privacy" },
  { id: "changes", title: "16. Changes to This Privacy Policy" },
  { id: "contact", title: "17. Contact Us" }
];

export default function PrivacyPolicyPage() {
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
        <title>Privacy Policy | BrandKraf</title>
        <meta name="description" content="Read the Privacy Policy for BrandKraf Digital Marketing to understand how we collect, use, and protect your personal data." />
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
            <h1 className="mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground font-medium">
              Last Updated: March 26, 2026
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
                  BrandKraf Digital Marketing ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
                </p>

                <section id="about" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. About This Privacy Policy</h2>
                  <p>This Privacy Policy applies to all personal data collected by BrandKraf Digital Marketing through our website, communications, and service engagements. By using our website or services, you consent to the data practices described in this policy.</p>
                </section>

                <section id="data-we-collect" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Personal Data We May Collect</h2>
                  <p>We may collect the following types of personal data:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Identity Data:</strong> Name, job title, company name.</li>
                    <li><strong>Contact Data:</strong> Email address, phone number, billing address.</li>
                    <li><strong>Financial Data:</strong> Payment details (processed securely via third-party gateways).</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, operating system, device information.</li>
                    <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
                    <li><strong>Marketing Data:</strong> Your preferences in receiving marketing from us.</li>
                  </ul>
                </section>

                <section id="how-we-collect" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Collect Personal Data</h2>
                  <p>We collect data through various methods, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Direct Interactions:</strong> When you fill out forms, request a quote, or contact us.</li>
                    <li><strong>Automated Technologies:</strong> Through cookies and similar tracking technologies as you navigate our website.</li>
                    <li><strong>Third Parties:</strong> From analytics providers, advertising networks, and public sources.</li>
                  </ul>
                </section>

                <section id="purpose" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Purpose of Collecting Personal Data</h2>
                  <p>We use your personal data for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To provide and manage our digital marketing services.</li>
                    <li>To process payments and manage billing.</li>
                    <li>To communicate with you regarding projects, updates, and support.</li>
                    <li>To improve our website, services, and customer experience.</li>
                    <li>To send marketing communications (where you have opted in).</li>
                    <li>To comply with legal and regulatory obligations.</li>
                  </ul>
                </section>

                <section id="payment-info" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Payment Information</h2>
                  <p>We use secure third-party payment processors (such as HitPay) to handle transactions. We do not store your full credit card details on our servers. Your payment information is subject to the privacy policies of our payment processors.</p>
                </section>

                <section id="disclosure" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Disclosure of Personal Data</h2>
                  <p>We may share your personal data with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business (e.g., hosting, analytics, payment processing).</li>
                    <li><strong>Professional Advisers:</strong> Lawyers, accountants, and insurers.</li>
                    <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
                  </ul>
                  <p className="mt-4">We do not sell or rent your personal data to third parties for their marketing purposes.</p>
                </section>

                <section id="third-party" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Third-Party Platforms</h2>
                  <p>In providing our services, we may require access to your third-party accounts (e.g., Meta Ads, Google Analytics). We handle this access strictly for the purpose of delivering our services and in accordance with the respective platforms' terms and privacy policies.</p>
                </section>

                <section id="cookies" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies and Tracking Technologies</h2>
                  <p>Our website uses cookies to enhance user experience, analyze traffic, and personalize content. You can set your browser to refuse all or some browser cookies, but this may affect the functionality of our website.</p>
                </section>

                <section id="marketing" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Marketing Communications</h2>
                  <p>You may receive marketing communications from us if you have requested information or purchased services from us. You can opt out of these communications at any time by clicking the "unsubscribe" link in our emails or contacting us directly.</p>
                </section>

                <section id="security" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Data Security</h2>
                  <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
                </section>

                <section id="retention" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">11. Data Retention</h2>
                  <p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements.</p>
                </section>

                <section id="accuracy" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">12. Accuracy of Personal Data</h2>
                  <p>It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us.</p>
                </section>

                <section id="access-correction" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">13. Access and Correction</h2>
                  <p>You have the right to request access to the personal data we hold about you and to request corrections of any inaccuracies. To exercise these rights, please contact us using the details provided below.</p>
                </section>

                <section id="links" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">14. Links to Other Websites</h2>
                  <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read their privacy policies.</p>
                </section>

                <section id="children" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">15. Children's Privacy</h2>
                  <p>Our services are intended for businesses and professionals. We do not knowingly collect personal data from children under the age of 18.</p>
                </section>

                <section id="changes" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">16. Changes to This Privacy Policy</h2>
                  <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
                </section>

                <section id="contact" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-foreground mb-4">17. Contact Us</h2>
                  <p>If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at:</p>
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
    </div>
  );
}