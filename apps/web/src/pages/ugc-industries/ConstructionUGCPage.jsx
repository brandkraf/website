import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, HardHat, Clock, ShieldCheck, Users } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ConstructionUGCVideoGrid from '@/components/ConstructionUGCVideoGrid.jsx';
import { Button } from '@/components/ui/button.jsx';

const BENEFITS = [
  { title: "Portfolio Visibility", desc: "Dynamic video showcases of your best completed projects.", icon: HardHat },
  { title: "Timeline Transparency", desc: "Keep stakeholders engaged with raw progress updates.", icon: Clock },
  { title: "Safety Culture", desc: "Visually reinforce your commitment to site safety standards.", icon: ShieldCheck },
  { title: "Team Credibility", desc: "Highlight the expertise and dedication of your on-site managers.", icon: Users }
];

const CONTENT_TYPES = [
  { title: "Before/After", desc: "Dramatic transitions from empty lots or raw frames to finished, polished structures." },
  { title: "Drone Progress", desc: "Aerial updates capturing the immense scale and complexity of the work." },
  { title: "Site Walkthroughs", desc: "Guided, unfiltered tours by project managers explaining the technical details." }
];

export default function ConstructionUGCPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Construction & Engineering UGC | BrandKraf</title>
        <meta name="description" content="Document massive projects from the ground up. Authentic content builds client confidence and visually proves your engineering capabilities." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1614058427323-4959d1ddfe0b?q=80&w=2070&auto=format&fit=crop" 
              alt="Construction and Engineering" 
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
                  Construction & Engineering
                </span>
                <h1 className="mb-6">Build Trust With Ground-Up Documentation</h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Document massive projects from the ground up. Authentic content builds client confidence, highlights your safety culture, and visually proves your engineering capabilities to future stakeholders.
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
              <h2>Why UGC for Construction?</h2>
              <p className="text-muted-foreground mt-4">Transparent, raw footage bridges the gap between the blueprint and reality, giving clients peace of mind.</p>
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

        {/* Featured UGC Content Section - New Video Grid */}
        <section className="py-24 bg-background border-t border-border/50">
          <div className="container-custom">
            <ConstructionUGCVideoGrid />
          </div>
        </section>

        {/* Top Performing Content Types Section */}
        <section className="py-24 bg-muted/30 border-t border-border/50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="mb-6">Top Performing Content Types</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  We specialize in taking rough on-site footage and structuring it into compelling narratives that showcase your firm's capability.
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
                  <img 
                    src="https://images.unsplash.com/photo-1541888086925-92051bc69c82?q=80&w=2070&auto=format&fit=crop" 
                    alt="On-site Construction Documentation" 
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
                    <span className="font-semibold text-sm tracking-wide text-primary uppercase">Case Study: Apex Builders</span>
                  </div>
                  <p className="text-sm text-foreground mb-4 italic leading-relaxed">"Our progress update videos are now a key part of our sales pitch. It proves we deliver on time."</p>
                  <div className="flex gap-6 border-t border-border pt-4">
                    <div>
                      <div className="text-xl font-bold text-foreground">60%</div>
                      <div className="text-xs text-muted-foreground">Faster Approvals</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">15k</div>
                      <div className="text-xs text-muted-foreground">Avg Video Views</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="container-custom max-w-3xl">
            <h2 className="mb-6 text-primary-foreground">Ready to Showcase Your Build?</h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Let's turn your active job sites into powerful marketing assets that win your next major bid.
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