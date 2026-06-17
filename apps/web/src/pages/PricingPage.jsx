import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import ClosingCTASection from '@/components/ClosingCTASection';
import { motion } from 'framer-motion';

function PricingPage() {
  const packages = [
    {
      name: 'Basic',
      price: 'RM 2,500',
      description: 'Perfect for small businesses getting started with digital marketing',
      features: [
        'Social media management (2 platforms)',
        '12 posts per month',
        'Basic content creation',
        'Monthly analytics report',
        'Email support'
      ],
      isPopular: false
    },
    {
      name: 'Growth',
      price: 'RM 5,800',
      description: 'Ideal for growing brands ready to scale their marketing',
      features: [
        'Social media management (3 platforms)',
        '20 posts per month',
        '4 UGC videos per month',
        'Meta & TikTok ads management',
        'Ad spend up to RM 5,000',
        'Weekly performance reports',
        'Priority support'
      ],
      isPopular: true
    },
    {
      name: 'Scale',
      price: 'Custom',
      description: 'Enterprise solution for brands serious about dominating their market',
      features: [
        'Full-service marketing management',
        'Unlimited content creation',
        'Multi-platform ad campaigns',
        'Website development included',
        'Complete branding package',
        'Dedicated account manager',
        '24/7 support'
      ],
      isPopular: false
    }
  ];

  const services = [
    {
      category: 'Social Media Management',
      items: [
        'Content strategy and planning',
        'Daily posting and scheduling',
        'Community management',
        'Hashtag research',
        'Competitor analysis'
      ]
    },
    {
      category: 'UGC Content Creation',
      items: [
        'Professional UGC videos',
        'Product photography',
        'Testimonial content',
        'Behind-the-scenes content',
        'Influencer collaborations'
      ]
    },
    {
      category: 'Paid Advertising',
      items: [
        'Meta Ads (Facebook & Instagram)',
        'TikTok Ads',
        'Google Ads',
        'Campaign optimization',
        'A/B testing'
      ]
    },
    {
      category: 'Website Development',
      items: [
        'Custom website design',
        'E-commerce integration',
        'Mobile optimization',
        'SEO setup',
        'Analytics integration'
      ]
    },
    {
      category: 'Branding & Creative',
      items: [
        'Logo design',
        'Brand identity',
        'Marketing collateral',
        'Social media graphics',
        'Brand guidelines'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - BrandKraf Marketing Packages</title>
        <meta
          name="description"
          content="Transparent pricing for social media management, UGC content, paid ads, and full-service marketing. Packages starting from RM 2,500/month."
        />
      </Helmet>

      <Header />

      <main className="pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="mb-4">Simple, transparent pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the package that fits your business goals. All packages include dedicated support and monthly reporting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <PricingCard key={index} {...pkg} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-center mb-12">What's included in our services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border-2"
                >
                  <h3 className="text-lg font-semibold mb-4">{service.category}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <ClosingCTASection />

      <Footer />
    </>
  );
}

export default PricingPage;