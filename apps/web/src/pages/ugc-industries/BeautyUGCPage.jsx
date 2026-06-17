import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Sparkles, Star, TrendingUp, Users } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BeautyUGCVideoGrid from '@/components/BeautyUGCVideoGrid.jsx';
import { Button } from '@/components/ui/button.jsx';

const BENEFITS = [
  { title: "Visual Transformations", desc: "Before-and-after content is highly persuasive.", icon: Sparkles },
  { title: "Authentic Reviews", desc: "Buyers trust real skin textures over retouched ads.", icon: Star },
  { title: "Trend Participation", desc: "Easily integrate your product into viral makeup trends.", icon: TrendingUp },
  { title: "Community Building", desc: "Create a loyal fanbase that defends and promotes your brand.", icon: Users }
];

const CONTENT_TYPES = [
  { title: "Get Ready With Me (GRWM)", desc: "Integrating products into daily routines." },
  { title: "Texture Shots", desc: "Close-up, unfiltered looks at formulas and finishes." },
  { title: "Wear Tests", desc: "Documenting product performance throughout the day." }
];

export default function BeautyUGCPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Beauty & Personal Care UGC | BrandKraf</title>
        <meta name="description" content="The beauty industry lives on social media. Raw tutorials, honest reviews, and stunning transformations created by real users are the absolute gold standard for driving sales." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600634999623-864991678406?q=80&w=2070&auto=format&fit=crop" 
              alt="Beauty and Personal Care" 
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
                  Beauty & Personal Care
                </span>
                <h1 className="mb-6">Drive Sales with Authentic Beauty UGC</h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  The beauty industry lives on social media. Raw tutorials, honest reviews, and stunning transformations created by real users are the absolute gold standard for driving sales.
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
              <h2>Why UGC for Beauty?</h2>
              <p className="text-muted-foreground mt-4">Authentic content bridges the gap between the product and the consumer, driving transparency and trust.</p>
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
                    className="bg-card p-6 rounded-2xl border border-border shadow-sm"
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

        {/* Featured UGC Content Section */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <BeautyUGCVideoGrid />
          </div>
        </section>

        {/* Top Performing Content Types Section */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="mb-6">Top Performing Content Types</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  We specialize in creating content formats that resonate specifically with beauty audiences and potential buyers.
                </p>
                <ul className="space-y-6">
                  {CONTENT_TYPES.map((type, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="mt-1">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{type.title}</h4>
                        <p className="text-muted-foreground">{type.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=2071&auto=format&fit=crop" 
                    alt="Content Creation in Beauty" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl border border-border shadow-xl max-w-xs hidden md:block">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="font-semibold text-sm">Case Study Highlight</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"An unfiltered review video went viral and sold out our entire inventory."</p>
                  <p className="text-xs font-bold mt-2">— Aura Skincare</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="container-custom max-w-3xl">
            <h2 className="mb-6 text-primary-foreground">Ready to Accelerate Your Brand?</h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Let's create authentic content that showcases your products and drives real sales.
            </p>
            <Button size="lg" variant="secondary" className="text-primary font-bold px-8" asChild>
              <Link to="/contact">Start Your Campaign</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}