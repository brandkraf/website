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
      <div className="absolute top-8 w-40 h-40 bg-brandkraf-teal/0 rounded-full blur-2xl group-hover:bg-brandkraf-teal/20 transition-colors duration-500" />
      
      {/* Circular Image Frame */}
      <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-muted group-hover:border-brandkraf-teal/40 transition-colors duration-300 shadow-lg z-10 bg-muted">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover object-top"
        />
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