import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils.js';

export default function IndustryCard({ title, description, icon: Icon, slug, index = 0, basePath = "/portfolio/ugc-content-creation" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="h-full"
    >
      <Link
        to={`${basePath}/${slug}`}
        className={cn(
          'group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-card p-6',
          'border border-border/60 shadow-sm',
          'transition-all duration-300 hover:-translate-y-1.5 hover:border-brandkraf-teal/30 hover:shadow-xl'
        )}
      >
        <div className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-gradient-to-br from-brandkraf-teal/15 to-brandkraf-purple/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple text-white shadow-md shadow-brandkraf-teal/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="relative mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-brandkraf-teal">
          {title}
        </h3>
        <p className="relative mb-6 flex-grow text-sm text-muted-foreground">
          {description}
        </p>
        <div className="relative mt-auto inline-flex items-center text-sm font-semibold text-brandkraf-teal">
          View Cases <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}