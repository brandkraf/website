import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Sprout, Tractor, Users, BarChart3 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GoogleDriveVideoGrid from '@/components/GoogleDriveVideoGrid.jsx';
import { Button } from '@/components/ui/button.jsx';

const FEATURED_VIDEOS = [
  "https://drive.google.com/file/d/1A88rPzlEI1jPlw4t-s2n3zmZiA4hWHFm/view?usp=sharing",
  "https://drive.google.com/file/d/1CggYo5YohgbS9SVPVc17WqCZoTUvZVye/view?usp=sharing",
  "https://drive.google.com/file/d/1EmZkX3SnEjun28hrbAHLYlsWQXBBj-SS/view?usp=sharing",
  "https://drive.google.com/file/d/1Jnd6DZtdUtatJfNyv5lrrrSEk142eOZ3/view?usp=sharing",
  "https://drive.google.com/file/d/1WlR2QseUe2KxRSRuVeuIsdxN31UV9TDT/view?usp=sharing",
  "https://drive.google.com/file/d/1bmmWqxBLW0PirgHHrNMGGKJ6_8aauqC5/view?usp=sharing",
  "https://drive.google.com/file/d/1n8G6mHgbbSC9kqCaBPpuz5K_906ir0FR/view?usp=sharing",
  "https://drive.google.com/file/d/1yc_cFmJdfJqRKiQKAQG80wGA-aK1hiF4/view?usp=sharing"
];

const BENEFITS = [
  { title: "Build B2B Trust", desc: "Demonstrate operational scale and quality to prospective buyers.", icon: Users },
  { title: "Sustainability Proof", desc: "Visually document organic and sustainable farming methods in action.", icon: Sprout },
  { title: "Market Education", desc: "Help consumers understand the farm-to-table journey.", icon: BarChart3 },
  { title: "Employee Advocacy", desc: "Empower farm workers to share their passion and expertise.", icon: Tractor }
];

const CONTENT_TYPES = [
  { title: "Farm Tours", desc: "Immersive looks at facilities and daily operations." },
  { title: "Harvest Updates", desc: "Exciting, fast-paced documentation of the harvest season." },
  { title: "Equipment Demos", desc: "Showcasing the technology driving modern agriculture." }
];

export default function AgricultureUGCPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Agriculture & Agribusiness UGC | BrandKraf</title>
        <meta name="description" content="Showcase your farming practices, sustainability efforts, and product quality through authentic User-Generated Content." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1541121836877-736ea02da552?q=80&w=2070&auto=format&fit=crop" 
              alt="Agriculture Field" 
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
                  Agriculture & Agribusiness
                </span>
                <h1 className="mb-6">Authentic UGC for Modern Agriculture</h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Showcase your farming practices, sustainability efforts, and product quality through the eyes of the people on the ground. UGC builds unprecedented trust with both B2B buyers and end consumers.
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
              <h2>Why UGC for Agriculture?</h2>
              <p className="text-muted-foreground mt-4">Authentic content bridges the gap between the farm and the consumer, driving transparency and trust.</p>
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

        {/* Featured UGC Content Section (NEW) */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-gradient inline-block mb-4">Featured UGC Content</h2>
              <p className="text-lg text-muted-foreground">
                Watch our top-performing agriculture campaigns that drove real engagement and B2B inquiries.
              </p>
            </div>
            
            <GoogleDriveVideoGrid videos={FEATURED_VIDEOS} />
          </div>
        </section>

        {/* Top Performing Content Types Section */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="mb-6">Top Performing Content Types</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  We specialize in creating content formats that resonate specifically with agricultural audiences and B2B buyers.
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
                    src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c6c13?q=80&w=2070&auto=format&fit=crop" 
                    alt="Content Creation in Agriculture" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl border border-border shadow-xl max-w-xs hidden md:block">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="font-semibold text-sm">Case Study Highlight</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"Our transparent farm tour series increased B2B inquiries by 45%."</p>
                  <p className="text-xs font-bold mt-2">— Midwest Grain Co</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="container-custom max-w-3xl">
            <h2 className="mb-6 text-primary-foreground">Ready to Grow Your Brand?</h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Let's create authentic content that showcases your agricultural operations to the world.
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