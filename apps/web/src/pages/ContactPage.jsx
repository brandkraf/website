import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import OfficeDirections from '@/components/OfficeDirections.jsx';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card.jsx';

function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['28-02-02, Jalan 2/101c, Cheras Business Centre', '56100 Cheras, Wilayah Persekutuan Kuala Lumpur']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+60391343603'],
      isLink: true,
      linkPrefix: 'tel:'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['admin@brandkraf.com'],
      isLink: true,
      linkPrefix: 'mailto:'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9am - 6pm', 'Sat: 10am - 4pm']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Get Your Free Marketing Strategy Call</title>
        <meta
          name="description"
          content="Book a free 30-minute strategy call with BrandKraf. Based in Cheras, Kuala Lumpur, Malaysia. We respond within 24 hours."
        />
      </Helmet>

      <Header />

      <main className="pt-32 pb-20 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="mb-4">Let's grow your brand together</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a free 30-minute strategy call. We'll analyze your current marketing and show you exactly how we can help you scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-premium-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Prefer WhatsApp?</h3>
                  <p className="mb-6 text-primary-foreground/90">
                    Get instant responses to your questions. Chat with our team directly on WhatsApp.
                  </p>
                  <WhatsAppButton
                    variant="secondary"
                    size="lg"
                    className="w-full text-primary"
                  />
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <Card className="h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">{info.title}</h4>
                              {info.details.map((detail, idx) => (
                                info.isLink ? (
                                  <a 
                                    key={idx} 
                                    href={`${info.linkPrefix}${detail}`} 
                                    className="text-sm text-primary hover:underline block"
                                  >
                                    {detail}
                                  </a>
                                ) : (
                                  <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                                    {detail}
                                  </p>
                                )
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <OfficeDirections />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <WhatsAppButton className="rounded-full shadow-2xl h-14 px-6 text-base" size="lg" />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;