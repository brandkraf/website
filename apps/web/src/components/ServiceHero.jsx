import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';

function ServiceHero({ title, subtitle, image, parentLink = '/portfolio', parentLabel = 'Portfolio', altText, eyebrow = 'Our Services' }) {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Aurora backdrop */}
      <div className="pointer-events-none absolute inset-0 gradient-mesh" />
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-40" />
      <div className="blob h-80 w-80 bg-brandkraf-teal/20 -top-16 -left-10" />
      <div className="blob h-96 w-96 bg-brandkraf-purple/20 -top-10 right-0" style={{ animationDelay: '-5s' }} />

      <div className="container-custom relative z-10">
        <nav className="mb-8 flex items-center text-sm font-medium text-muted-foreground">
          <Link to={parentLink} className="transition-colors hover:text-brandkraf-teal">{parentLabel}</Link>
          <ChevronRight className="mx-2 h-4 w-4" />
          <span className="text-foreground">{title}</span>
        </nav>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="chip-brand mb-5">
              <Sparkles className="h-4 w-4" />
              {eyebrow}
            </span>
            <h1 className="mb-6 text-foreground">{title}</h1>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {subtitle}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-xl bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple bg-[length:200%_100%] bg-left px-8 text-base font-semibold text-white shadow-lg shadow-brandkraf-teal/30 transition-[background-position,box-shadow,transform] duration-500 hover:-translate-y-0.5 hover:bg-right hover:shadow-xl hover:shadow-brandkraf-purple/40"
              >
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
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
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-brandkraf-teal/30 to-brandkraf-purple/30 opacity-40 blur-2xl" />
            <div className="glass-card relative overflow-hidden rounded-[1.5rem] p-2.5">
              <img
                src={image}
                alt={altText || `${title} visualization`}
                className="w-full rounded-2xl object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServiceHero;
