import React from 'react';
import { motion } from 'framer-motion';

export default function TeamMemberCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-card border border-border transition-all duration-300 hover:shadow-2xl hover:shadow-brandkraf-teal/10 hover:border-brandkraf-teal/30"
    >
      {/* Glow effect behind the image on hover */}
      <div className="absolute top-8 h-40 w-40 rounded-full bg-gradient-to-br from-brandkraf-teal/0 to-brandkraf-purple/0 blur-2xl transition-colors duration-500 group-hover:from-brandkraf-teal/25 group-hover:to-brandkraf-purple/25" />

      {/* Circular Image Frame with gradient ring */}
      <div className="relative z-10 mb-6 rounded-full bg-gradient-to-br from-brandkraf-teal to-brandkraf-purple p-1 shadow-lg transition-transform duration-300 group-hover:scale-105">
        <div className="h-48 w-48 overflow-hidden rounded-full bg-muted">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={member.image}
            alt={`${member.name} — ${member.role} at BrandKraf`}
            loading="lazy"
            decoding="async"
            width="192"
            height="192"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>

      <div className="relative z-10 w-full">
        <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-brandkraf-teal transition-colors">
          {member.name}
        </h4>
        <p className="text-sm font-medium text-brandkraf-purple tracking-wide uppercase">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}