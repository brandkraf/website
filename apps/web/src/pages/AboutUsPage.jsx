import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Quote, Target, Eye, Lightbulb, Palette, Search, Zap, ShieldCheck, Users, ArrowRight, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog.jsx';
import OurTeamSection from '@/components/OurTeamSection.jsx';

export default function AboutUsPage() {
  const values = [{
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly explore new tools, AI technologies, and strategies to stay ahead of the digital curve."
  }, {
    icon: Palette,
    title: "Creativity",
    description: "Data drives our decisions, but creativity powers our execution. We craft memorable brand experiences."
  }, {
    icon: Search,
    title: "Transparency",
    description: "Honest reporting, clear communication, and no hidden fees. We believe in building trust through clarity."
  }, {
    icon: Zap,
    title: "Performance",
    description: "We are obsessed with ROI. Every campaign is optimized for maximum impact and measurable results."
  }, {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We do what we say we'll do. We treat your brand's reputation as if it were our own."
  }, {
    icon: Users,
    title: "Collaboration",
    description: "We aren't just an agency; we are your extended team, working side-by-side to achieve your goals."
  }];
  
  return (
    <>
      <Helmet>
        <title>About Us | BrandKraf</title>
        <meta name="description" content="Learn about BrandKraf - your one-stop digital marketing, content production, and creative growth partner." />
      </Helmet>

      <Header />

      <main className="relative min-h-screen bg-background">
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex items-center min-h-[60vh]">
          <div className="absolute inset-0 z-0 bg-slate-950">
            {/* Subtle animated gradient glow */}
            <div className="absolute top-0 left-1/4 w-full md:w-1/2 h-[500px] bg-brandkraf-teal/20 blur-[120px] rounded-full mix-blend-screen opacity-50 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-full md:w-1/2 h-[500px] bg-brandkraf-purple/20 blur-[120px] rounded-full mix-blend-screen opacity-50" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop')] opacity-10 mix-blend-overlay object-cover" />
          </div>
          
          <div className="container-custom relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7, ease: "easeOut" }} 
              className="text-white mb-6"
            >
              About BrandKraf
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }} 
              className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              Your ultimate one-stop digital marketing, premium content production, and creative growth partner. We bridge the gap between imagination and measurable success.
            </motion.p>
          </div>
        </section>

        {/* 2. FOUNDER'S FOREWORD SECTION */}
        <section className="section-padding bg-white relative z-10">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.7 }} 
                className="relative"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                  <img src="https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/img_9520-DauCc.PNG" alt="BrandKraf Founder" className="w-full h-full object-cover" />
                </div>
                {/* Decorative background element */}
                <div className="absolute -bottom-6 -left-6 w-full h-full rounded-3xl border-2 border-brandkraf-teal/30 -z-10" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.7 }} 
                className="flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Quote className="w-8 h-8 text-brandkraf-teal/40" />
                  <h2 className="text-3xl md:text-4xl">Founder's Foreword</h2>
                </div>
                <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed italic mb-8 border-l-4 border-brandkraf-teal/30 pl-6">
                  "When we started BrandKraf, the goal wasn't just to be another agency. We wanted to be the growth engine for brands that dare to think bigger. In a digital landscape cluttered with noise, we prioritize data-driven creativity—crafting stories that don't just look beautiful, but actually convert. Your brand's potential is limitless, and our mission is to help you realize it."
                </blockquote>
                <div>
                  <h4 className="font-bold text-foreground">Muhammad Marzuk</h4>
                  <p className="text-primary font-medium">Founder & CEO, BrandKraf</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. BRAND STORY SECTION */}
        <section className="section-padding bg-muted/30 border-y border-border">
          <div className="container-custom max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-center mb-16"
            >
              <h2 className="mb-4">The Brand Story</h2>
              <p className="text-muted-foreground">The journey of building a modern marketing powerhouse.</p>
            </motion.div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {/* Origin */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-brandkraf-teal shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border">
                  <h4 className="text-xl font-bold mb-2">The Spark</h4>
                  <p className="text-muted-foreground">Born out of the frustration with fragmented marketing services, BrandKraf was established to provide a unified, seamless approach where creative vision meets analytical precision.</p>
                </div>
              </motion.div>

              {/* Growth */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.1 }} 
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-brandkraf-purple shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border">
                  <h4 className="text-xl font-bold mb-2">Rapid Scaling</h4>
                  <p className="text-muted-foreground">By delivering uncompromising quality in UGC, Paid Ads, and Social Media Management, we quickly earned the trust of over 50+ leading brands across Malaysia and Southeast Asia.</p>
                </div>
              </motion.div>

              {/* Future */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.2 }} 
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border">
                  <h4 className="text-xl font-bold mb-2">The Future</h4>
                  <p className="text-muted-foreground">Today, we are pioneering AI-driven marketing and chatbot development, constantly evolving to ensure our clients remain at the absolute forefront of their industries.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. MISSION & VISION SECTION */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                className="group relative overflow-hidden rounded-3xl bg-slate-950 p-10 md:p-12 transition-all hover:shadow-2xl hover:shadow-brandkraf-teal/20"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-brandkraf-teal/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brandkraf-teal/20 transition-colors duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brandkraf-teal/20 rounded-xl flex items-center justify-center mb-8">
                    <Target className="w-7 h-7 text-brandkraf-teal" />
                  </div>
                  <h3 className="text-white mb-4">Our Mission</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    To empower businesses with scalable, data-driven marketing strategies and scroll-stopping creative content. We aim to act as the catalyst that transforms ambitious visions into sustainable market leadership.
                  </p>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.1 }} 
                className="group relative overflow-hidden rounded-3xl bg-slate-950 p-10 md:p-12 transition-all hover:shadow-2xl hover:shadow-brandkraf-purple/20"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-brandkraf-purple/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brandkraf-purple/20 transition-colors duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brandkraf-purple/20 rounded-xl flex items-center justify-center mb-8">
                    <Eye className="w-7 h-7 text-brandkraf-purple" />
                  </div>
                  <h3 className="text-white mb-4">Our Vision</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    To become the premier, globally recognized standard for digital marketing excellence. We envision a future where every brand we partner with not only succeeds, but redefines the boundaries of their industry.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. CORE VALUES SECTION */}
        <section className="section-padding bg-muted/20 border-y border-border">
          <div className="container-custom">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                className="mb-4"
              >
                Core Values
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.1 }} 
                className="text-muted-foreground text-lg"
              >
                The principles that guide our work, our culture, and how we treat our partners.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: idx * 0.1 }} 
                    className="group bg-card border border-border p-8 rounded-2xl transition-all hover:-translate-y-1 hover:border-brandkraf-teal/40 hover:shadow-lg hover:shadow-brandkraf-teal/5"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brandkraf-teal/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-brandkraf-teal transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* NEW: OUR TEAM SECTION */}
        <OurTeamSection />

        {/* 6. SSM CERTIFICATE SECTION */}
        <section className="section-padding bg-muted/10 border-t border-border">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                className="mb-6"
              >
                Official Registration
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.1 }} 
                className="text-muted-foreground mb-12"
              >
                BrandKraf is a fully registered and legally recognized entity, operating with complete transparency and compliance. We are proud of our professional standing.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.2 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-border bg-muted p-4 md:p-8 mx-auto max-w-2xl transition-all hover:border-primary/40 hover:shadow-xl">
                      <div className="aspect-[4/3] md:aspect-video rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 relative">
                        <img 
                          src="https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/ssm-2026_page-0001-iks0s.jpg" 
                          alt="BrandKraf SSM Certificate" 
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur text-foreground px-4 py-2 rounded-full font-medium shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all flex items-center gap-2">
                            <Maximize2 className="w-4 h-4" /> View Certificate
                          </div>
                        </div>
                      </div>
                      <p className="mt-6 text-sm font-medium text-muted-foreground uppercase tracking-widest">
                        Suruhanjaya Syarikat Malaysia (SSM) Registered
                      </p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-1 bg-white rounded-xl border-none shadow-2xl">
                    <DialogTitle className="sr-only">SSM Certificate</DialogTitle>
                    <DialogDescription className="sr-only">Official business registration certificate for BrandKraf.</DialogDescription>
                    <img 
                      src="https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/ssm-2026_page-0001-iks0s.jpg" 
                      alt="BrandKraf SSM Certificate High Resolution" 
                      className="w-full h-auto max-h-[85vh] object-contain rounded-lg" 
                    />
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. FINAL CTA SECTION */}
        <section className="py-24 relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-brandkraf-teal/20 to-brandkraf-purple/20 opacity-40 mix-blend-overlay" />
          </div>
          <div className="container-custom relative z-10 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl"
            >
              Let's Build Something That Matters.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.1 }} 
              className="text-slate-300 max-w-2xl mx-auto text-lg mb-10"
            >
              Whether you need compelling UGC, aggressive ad scaling, or a complete digital overhaul, we are ready to partner with you.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2 }}
            >
              <Button asChild size="lg" className="rounded-full bg-brandkraf-teal hover:bg-brandkraf-teal/90 text-white h-14 px-8 text-lg font-semibold shadow-lg shadow-brandkraf-teal/20 transition-all hover:scale-105 active:scale-95">
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <WhatsAppButton className="rounded-full shadow-2xl h-14 px-6 text-base" size="lg" />
        </div>
      </main>

      <Footer />
    </>
  );
}