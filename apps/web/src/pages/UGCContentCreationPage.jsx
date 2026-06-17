import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceHero from '@/components/ServiceHero.jsx';
import ServiceOverview from '@/components/ServiceOverview.jsx';
import BenefitsSection from '@/components/BenefitsSection.jsx';
import TimelineSection from '@/components/TimelineSection.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import ContactCTASection from '@/components/ContactCTASection.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import GoogleDriveVideoGrid from '@/components/GoogleDriveVideoGrid.jsx';
import IndustryCard from '@/components/IndustryCard.jsx';
import { 
  Video, Users, TrendingUp, Award, 
  Coffee, Sprout, Factory, HardHat, Home, 
  ShoppingBag, Truck, Plane, Car, Cpu, 
  Clapperboard, Wifi, Landmark, Briefcase, 
  GraduationCap, Stethoscope, Sparkles, Zap, 
  Building2, HeartHandshake 
} from 'lucide-react';

function UGCContentCreationPage() {
  const serviceData = {
    hero: {
      title: "UGC Content Creation",
      subtitle: "Professional user-generated content that converts. We create authentic, high-performing videos that showcase your product in real-world scenarios.",
      image: "https://horizons-cdn.hostinger.com/6602f595-c4d7-40bf-a729-a377f9b27c39/3fc717dca84bbc8f0219eabead7cf00f.png",
      altText: "Professional videographer in studio with camera gimbal and professional lighting setup"
    },
    overview: {
      description: "User-generated content (UGC) is the most trusted form of marketing. Our team creates authentic, relatable videos that feel like they're from real customers—because they are. Each video is optimized for conversion, designed to address customer pain points, and crafted to perform across all platforms.",
      differentiators: [
        "Authentic, relatable storytelling",
        "Optimized for platform algorithms",
        "Fast turnaround (5-7 days per video)",
        "Unlimited revisions until you're satisfied"
      ]
    },
    benefits: [
      { icon: Video, title: "High Conversion Rates", description: "UGC videos convert 3-5x better than traditional ads because they feel authentic." },
      { icon: Users, title: "Audience Trust", description: "Viewers trust peer recommendations more than brand messaging." },
      { icon: TrendingUp, title: "Cost-Effective", description: "Lower production costs than celebrity endorsements with better ROI." },
      { icon: Award, title: "Platform Optimized", description: "Every video is tailored for TikTok, Instagram, YouTube, and Facebook algorithms." }
    ],
    timeline: {
      duration: "5-7 days per video",
      phases: [
        { title: "Brief & Strategy", description: "Understanding your product, target audience, and campaign goals." },
        { title: "Script Development", description: "Creating authentic scripts that highlight key benefits and pain points." },
        { title: "Production", description: "Professional filming with high-quality equipment and lighting." },
        { title: "Editing & Delivery", description: "Fast-turnaround editing optimized for each platform's specifications." }
      ]
    },
    faqs: [
      { question: "What makes UGC different from traditional ads?", answer: "UGC feels authentic because it's created by real people (or people who look like real customers). Traditional ads feel polished and corporate, which triggers ad-blindness. UGC bypasses that." },
      { question: "How many videos do I need?", answer: "We recommend starting with 5-10 videos to test messaging and audience response. Most clients then scale to 20-50+ videos for sustained campaigns." },
      { question: "Can I request revisions?", answer: "Yes. We offer unlimited revisions until you're 100% satisfied with the final product." },
      { question: "What platforms are the videos optimized for?", answer: "We optimize for TikTok, Instagram Reels, YouTube Shorts, and Facebook. Each platform has different aspect ratios and pacing requirements." }
    ]
  };

  const industries = [
    { title: "Food & Beverage", slug: "food-beverage", icon: Coffee, description: "Mouth-watering content that drives cravings and boosts local or e-commerce sales." },
    { title: "Agriculture", slug: "agriculture-agribusiness", icon: Sprout, description: "Authentic stories from the field to the table, highlighting sustainability and scale." },
    { title: "Manufacturing", slug: "manufacturing-industrial", icon: Factory, description: "Behind-the-scenes content that builds trust, transparency, and B2B leads." },
    { title: "Construction", slug: "construction-engineering", icon: HardHat, description: "Showcase projects, safety standards, and equipment in action." },
    { title: "Real Estate", slug: "real-estate-property", icon: Home, description: "Property tours and lifestyle content that sells homes faster." },
    { title: "Retail", slug: "retail-ecommerce", icon: ShoppingBag, description: "Unboxings, hauls, and styling videos that drive direct conversions." },
    { title: "Transportation", slug: "transportation-logistics", icon: Truck, description: "Reliable and engaging content for logistics, transit, and delivery fleets." },
    { title: "Travel", slug: "travel-tourism-hospitality", icon: Plane, description: "Inspiring destination content that drives bookings and wanderlust." },
    { title: "Automotive", slug: "automotive", icon: Car, description: "Test drives, hidden features, and passionate owner stories." },
    { title: "Technology", slug: "technology-software", icon: Cpu, description: "Tech reviews, app tutorials, and software feature highlights." },
    { title: "Media", slug: "media-entertainment", icon: Clapperboard, description: "Engaging promos, event coverage, and behind-the-scenes entertainment." },
    { title: "Telecommunications", slug: "telecommunications", icon: Wifi, description: "Connecting people with relatable network stories and device showcases." },
    { title: "Finance", slug: "finance-insurance", icon: Landmark, description: "Trust-building educational content for banking, crypto, and fintech." },
    { title: "Professional Services", slug: "professional-services", icon: Briefcase, description: "Expertise-driven content for B2B consulting, legal, and accounting." },
    { title: "Education", slug: "education-training", icon: GraduationCap, description: "Student testimonials, course previews, and campus life highlights." },
    { title: "Healthcare", slug: "healthcare-medical", icon: Stethoscope, description: "Patient success stories and accessible medical professional insights." },
    { title: "Beauty", slug: "beauty-personal-care", icon: Sparkles, description: "Tutorials, skincare routines, and authentic transformative results." },
    { title: "Energy", slug: "energy-utilities", icon: Zap, description: "Highlighting sustainability, renewables, and innovation in the energy sector." },
    { title: "Government", slug: "government-public-sector", icon: Building2, description: "Public service announcements and effective community engagement." },
    { title: "Non-Profit", slug: "non-profit-social", icon: HeartHandshake, description: "Impactful, emotional storytelling that drives awareness and donations." }
  ];

  return (
    <>
      <Helmet>
        <title>UGC Content Creation - BrandKraf</title>
        <meta name="description" content={serviceData.hero.subtitle} />
      </Helmet>
      <Header />
      <main className="relative">
        <ServiceHero 
          title={serviceData.hero.title}
          subtitle={serviceData.hero.subtitle}
          image={serviceData.hero.image}
          altText={serviceData.hero.altText}
        />
        <ServiceOverview {...serviceData.overview} />
        <BenefitsSection benefits={serviceData.benefits} />
        <TimelineSection phases={serviceData.timeline.phases} duration={serviceData.timeline.duration} />
        <GoogleDriveVideoGrid />
        
        {/* Niches / Industries Section */}
        <section className="py-24 bg-muted/30 relative">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                UGC Content for Every Industry
              </h2>
              <p className="text-lg text-muted-foreground">
                We tailor our content creation strategies to fit the unique language, audience, and algorithms of your specific niche. Explore our industry-specific solutions below.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <IndustryCard 
                  key={industry.slug} 
                  {...industry} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </section>

        <FAQSection faqs={serviceData.faqs} />
        <ContactCTASection />

        <div className="fixed bottom-6 right-6 z-50">
          <WhatsAppButton className="rounded-full shadow-2xl h-14 px-6 text-base" size="lg" />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default UGCContentCreationPage;