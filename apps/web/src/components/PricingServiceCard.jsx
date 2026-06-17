import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function PricingServiceCard({ title, description, icon: Icon, link, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative h-full rounded-2xl p-[1.5px] bg-gradient-to-br from-brandkraf-teal/20 via-gray-200/50 to-brandkraf-purple/20 transition-all duration-500 hover:from-brandkraf-teal hover:to-brandkraf-purple hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(20,184,166,0.45)]"
    >
      <Link to={link} className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-card p-8">
        <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-brandkraf-teal/20 to-brandkraf-purple/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple text-white shadow-lg shadow-brandkraf-teal/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
          {Icon && <Icon className="h-7 w-7" />}
        </div>
        <h3 className="relative mb-3 text-xl font-bold transition-colors duration-300 group-hover:text-brandkraf-teal">{title}</h3>
        <p className="relative mb-6 line-clamp-3 text-muted-foreground">{description}</p>
        <div className="relative mt-auto flex items-center font-semibold text-brandkraf-teal">
          View Pricing <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}
