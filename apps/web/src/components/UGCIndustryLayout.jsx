import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle2, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import pb from '@/lib/pocketbaseClient.js';
import { Dialog, DialogContent } from '@/components/ui/dialog.jsx';

export default function UGCIndustryLayout({
  title,
  slug,
  heroImage,
  overview,
  benefits,
  contentTypes,
  caseStudies,
  faqs
}) {
  const [publishedVideos, setPublishedVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(true);
  const [previewVideo, setPreviewVideo] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const fetchVideos = async () => {
      try {
        const records = await pb.collection('ugc_videos').getList(1, 20, {
          filter: `published=true && industry="${slug}"`,
          sort: '-created',
          $autoCancel: false
        });
        if (isMounted) {
          setPublishedVideos(records.items);
        }
      } catch (error) {
        console.error('Error fetching published videos:', error);
      } finally {
        if (isMounted) {
          setLoadingVideos(false);
        }
      }
    };
    
    fetchVideos();
    
    return () => {
      isMounted = false;
    };
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>UGC Content for {title} - BrandKraf</title>
        <meta name="description" content={`Discover how user-generated content transforms the ${title} industry.`} />
      </Helmet>
      
      <Header />

      <main className="pt-32 pb-20 min-h-screen relative">
        {/* Breadcrumb & Hero */}
        <section className="container-custom mb-16">
          <nav className="flex items-center text-sm font-medium text-muted-foreground mb-8">
            <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/portfolio/ugc-content-creation" className="hover:text-primary transition-colors">UGC Content</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-foreground">{title}</span>
          </nav>

          <div className="relative rounded-3xl overflow-hidden bg-black aspect-[21/9] md:aspect-[21/8] lg:aspect-[24/7] mb-16">
            <img src={heroImage} alt={`${title} UGC`} className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center">
              <div className="px-8 md:px-16 max-w-3xl">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white mb-6"
                >
                  UGC Content Creation for {title}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20">
                    <Link to="/contact">Get Started <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        {(!loadingVideos && publishedVideos.length > 0) && (
          <section className="py-16 bg-muted/20 border-y border-border mb-16">
            <div className="container-custom">
              <div className="text-center mb-10 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Featured {title} Content</h2>
                <p className="text-muted-foreground">Authentic, engaging user-generated videos tailored specifically for your industry audience.</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {publishedVideos.map((video) => {
                  const url = pb.files.getUrl(video, video.videoFile);
                  return (
                    <motion.div 
                      key={video.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="group relative rounded-2xl overflow-hidden bg-black shadow-md cursor-pointer aspect-[9/16]"
                      onClick={() => setPreviewVideo(url)}
                    >
                      {/* Added preload="none" to prevent massive memory consumption on load */}
                      <video src={url} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" preload="none" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                        <PlayCircle className="w-12 h-12 text-white/80 group-hover:text-white group-hover:scale-110 transition-all shadow-sm rounded-full" />
                      </div>
                      {video.title && (
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-white text-xs font-medium truncate">{video.title}</p>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Overview & Benefits (Bento style) */}
        <section className="section-padding bg-white pt-0">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div 
                className="lg:col-span-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-4">Industry Overview</h2>
                <p className="text-lg text-muted-foreground">{overview}</p>
              </motion.div>

              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all ${idx === 0 ? 'lg:col-span-2 bg-muted/30' : 'lg:col-span-1'}`}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0" /> 
                    <span>{benefit.title}</span>
                  </h3>
                  <p className="text-muted-foreground pl-9">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types */}
        <section className="section-padding bg-muted/20">
          <div className="container-custom">
            <h2 className="text-center mb-16">Top Performing Content Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentTypes.map((type, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-border">
                  <h4 className="font-bold mb-2">{type.title}</h4>
                  <p className="text-sm text-muted-foreground">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <h2 className="mb-12">Case Studies</h2>
            <div className="space-y-12">
              {caseStudies.map((study, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div>
                    <div className="text-sm font-bold text-primary mb-2 tracking-wider uppercase">Results</div>
                    <div className="flex gap-6 mb-6">
                      {study.metrics.map((m, i) => (
                        <div key={i}>
                          <div className="text-3xl font-extrabold text-foreground">{m.val}</div>
                          <div className="text-sm text-muted-foreground">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{study.client}</h3>
                    <p className="text-muted-foreground mb-4">"{study.quote}"</p>
                  </div>
                  <div className="bg-muted aspect-video rounded-xl overflow-hidden flex items-center justify-center">
                    <span className="text-muted-foreground font-medium">Video Showcase</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-muted/10 border-t border-border">
          <div className="container-custom max-w-3xl">
            <h2 className="text-center mb-12">Industry FAQs</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="container-custom max-w-2xl">
            <h2 className="text-primary-foreground mb-6">Ready to scale your {title} brand?</h2>
            <p className="text-primary-foreground/90 text-lg mb-10">Leverage the power of authentic content to build trust and drive conversions today.</p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8 h-14 text-base font-bold text-primary hover:scale-105 transition-transform">
              <Link to="/contact">Let's Discuss Strategy</Link>
            </Button>
          </div>
        </section>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <WhatsAppButton className="rounded-full shadow-2xl h-14 px-6 text-base" size="lg" />
        </div>

      </main>

      {/* Video Preview Modal */}
      <Dialog open={!!previewVideo} onOpenChange={(open) => !open && setPreviewVideo(null)}>
        <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden bg-black border-none">
          {previewVideo && (
            <video src={previewVideo} controls autoPlay className="w-full max-h-[85vh] object-contain" />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
}