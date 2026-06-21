import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, HeartHandshake, Users, Megaphone, Target } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GoogleDriveVideoGridNonProfit from '@/components/GoogleDriveVideoGridNonProfit.jsx';
import { Button } from '@/components/ui/button.jsx';

const BENEFITS = [
  { title: "Impact Storytelling", desc: "Show donors exactly where their money goes with visual proof.", icon: Target },
  { title: "Donor Engagement", desc: "Drive fundraising through emotional, raw narratives from the field.", icon: HeartHandshake },
  { title: "Volunteer Recruitment", desc: "Showcase the rewarding experience of helping out and joining the cause.", icon: Users },
  { title: "Cause Amplification", desc: "Leverage viral algorithms to spread awareness rapidly across networks.", icon: Megaphone }
];

const CONTENT_TYPES = [
  { title: "Beneficiary Stories", desc: "Respectful, empowering interviews with those you help and support." },
  { title: "Field Operations", desc: "Raw footage of your team making a tangible difference on the ground." },
  { title: "Fundraising Challenges", desc: "Engaging social challenges designed to drive micro-donations and visibility." }
];

export default function NonProfitUGCPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Non-Profit & Social Enterprises UGC | BrandKraf</title>
        <meta name="description" content="Stories inspire action. Authentic, on-the-ground content amplifies your mission, dramatically increasing donor engagement and volunteer recruitment." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1584441405886-bc91be61e56a" 
              alt="Non-Profit & Social Enterprises" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                  Non-Profit & Social Enterprises
                </span>
                <h1 className="mb-6">Stories Inspire Action</h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Authentic, on-the-ground content amplifies your mission, dramatically increasing donor engagement and volunteer recruitment.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Get Started <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/portfolio/ugc-content-creation">View All Industries</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2>Why UGC for Non-Profits?</h2>
              <p className="text-muted-foreground mt-4">Transform impact metrics into compelling visual stories that move audiences to contribute and participate.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {BENEFITS.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured UGC Content Section - Video Grid */}
        <section className="py-24 bg-background border-t border-border/50">
          <div className="container-custom">
            <GoogleDriveVideoGridNonProfit />
          </div>
        </section>

        {/* Top Performing Content Types Section */}
        <section className="py-24 bg-muted/30 border-t border-border/50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="mb-6">Top Performing Content Types</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  We specialize in crafting sensitive, empowering content that bridges the gap between your mission and the wider public.
                </p>
                <ul className="space-y-8">
                  {CONTENT_TYPES.map((type, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 bg-card p-6 rounded-2xl border border-border shadow-sm"
                    >
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{type.title}</h4>
                        <p className="text-muted-foreground">{type.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl">
                  <img loading="lazy" decoding="async" 
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Non-Profit Impact" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Embedded Case Study Highlight */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl border border-border shadow-xl max-w-sm hidden md:block"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                    <span className="font-semibold text-sm tracking-wide text-primary uppercase">Case Study: Global Clean Water</span>
                  </div>
                  <p className="text-sm text-foreground mb-4 italic leading-relaxed">"A simple UGC video from the field raised more than our annual gala event."</p>
                  <div className="flex gap-6 border-t border-border pt-4">
                    <div>
                      <div className="text-xl font-bold text-foreground">$120k</div>
                      <div className="text-xs text-muted-foreground">Funds Raised</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">15k</div>
                      <div className="text-xs text-muted-foreground">New Donors</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-background border-t border-border/50">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-16">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-semibold mb-2">Do you offer discounted rates for non-profits?</h4>
                <p className="text-muted-foreground">We frequently work with social enterprises to build cost-effective packages that maximize ROI and ensure funds are directed toward impact.</p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-semibold mb-2">How do you ensure ethical storytelling?</h4>
                <p className="text-muted-foreground">We adhere to strict dignity guidelines to ensure subjects are portrayed with respect, agency, and authenticity at all times.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="container-custom max-w-3xl">
            <h2 className="mb-6 text-primary-foreground">Ready to Amplify Your Impact?</h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Let's craft the perfect UGC strategy to elevate your mission and mobilize your community.
            </p>
            <Button size="lg" variant="secondary" className="text-primary font-bold px-8 h-14 text-lg" asChild>
              <Link to="/contact">Start Your Campaign</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}