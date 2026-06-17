import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';

function ServiceHero({ title, subtitle, image, parentLink = "/portfolio", parentLabel = "Portfolio", altText }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-muted/30">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <nav className="flex items-center text-sm font-medium text-muted-foreground mb-8">
          <Link to={parentLink} className="hover:text-primary transition-colors">{parentLabel}</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-foreground">{title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">{title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-8 h-14 text-base shadow-lg shadow-primary/20">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform translate-x-4 translate-y-4" />
            <img 
              src={image} 
              alt={altText || `${title} visualization`}
              className="relative rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServiceHero;