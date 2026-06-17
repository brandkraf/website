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
          "group flex flex-col h-full bg-card hover:bg-accent/10 rounded-2xl p-6",
          "border border-border/50 shadow-sm hover:shadow-md",
          "transition-all duration-300 relative overflow-hidden cursor-pointer"
        )}
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground flex-grow mb-6">
          {description}
        </p>
        <div className="mt-auto inline-flex items-center text-sm font-semibold text-primary">
          View Cases <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}