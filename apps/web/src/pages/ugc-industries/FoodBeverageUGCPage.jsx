import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Heart, Target, Flame, Users } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FoodBeverageUGCVideoGrid from '@/components/FoodBeverageUGCVideoGrid.jsx';
import { Button } from '@/components/ui/button.jsx';

const BENEFITS = [
  { title: "Increased Engagement", desc: "Authentic food content naturally drives higher likes, comments, and shares.", icon: Heart },
  { title: "Higher Conversion", desc: "Real people enjoying your product directly influences purchasing decisions.", icon: Target },
  { title: "Viral Potential", desc: "Creative recipes and food hacks have immense viral capability on TikTok and Reels.", icon: Flame },
  { title: "Builds Community", desc: "Encourage customers to share their own culinary creations using your products.", icon: Users }
];

const CONTENT_TYPES = [
  { title: "Taste Tests", desc: "Raw, unedited reactions to trying your product for the first time." },
  { title: "Recipe Tutorials", desc: "Step-by-step guides using your product as a core ingredient." },
  { title: "Behind-the-Scenes", desc: "A peek into the kitchen or production process." }
];

export default function FoodBeverageUGCPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Food & Beverage UGC | BrandKraf</title>
        <meta name="description" content="Food is inherently visual. UGC drives food sales by showcasing authentic reactions, appetite appeal, and powerful social proof that polished studio shoots cannot replicate." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1679788486952-7f2e1386fc17?q=80&w=2070&auto=format&fit=crop" 
              alt="Food & Beverage Culinary Experience" 
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
                  Food & Beverage
                </span>
                <h1 className="mb-6">Crave-Worthy Authenticity</h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Food is inherently visual. UGC drives food sales by showcasing authentic reactions, appetite appeal, and powerful social proof that polished studio shoots simply cannot replicate.
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
              <h2>Why UGC for Food & Beverage?</h2>
              <p className="text-muted-foreground mt-4">People eat with their eyes first. Seeing real customers enjoy your product is the ultimate trust signal.</p>
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

        {/* Featured UGC Content Section - 34 Videos Grid */}
        <section className="py-24 bg-background border-t border-border/50">
          <div className="container-custom">
            <FoodBeverageUGCVideoGrid />
          </div>
        </section>

        {/* Top Performing Content Types Section */}
        <section className="py-24 bg-muted/30 border-t border-border/50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="mb-6">Top Performing Content Types</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  We specialize in creating mouth-watering, relatable content that bridges the gap between your brand and the consumer's dining table.
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
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop" 
                    alt="Delicious Food Spread" 
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
                    <span className="font-semibold text-sm tracking-wide text-primary uppercase">Case Study: Organic Snack Co</span>
                  </div>
                  <p className="text-sm text-foreground mb-4 italic leading-relaxed">"UGC lowered our CPA by 40% while doubling our reach across social platforms."</p>
                  <div className="flex gap-6 border-t border-border pt-4">
                    <div>
                      <div className="text-xl font-bold text-foreground">-40%</div>
                      <div className="text-xs text-muted-foreground">CPA Reduction</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">2x</div>
                      <div className="text-xs text-muted-foreground">Reach</div>
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
                <h4 className="font-semibold mb-2">How do you ensure food looks appetizing in UGC?</h4>
                <p className="text-muted-foreground">We provide creators with specific lighting guidelines and styling briefs while maintaining the raw, authentic feel that performs best.</p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-semibold mb-2">Can we repurpose this content for paid ads?</h4>
                <p className="text-muted-foreground">Yes, you receive full rights to use the content across all organic and paid marketing channels indefinitely.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="container-custom max-w-3xl">
            <h2 className="mb-6 text-primary-foreground">Ready to Make Them Hungry?</h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Let's create authentic content that drives cravings and boosts conversions for your brand.
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