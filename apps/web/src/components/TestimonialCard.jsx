import React from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/useIsMobile.js';

function TestimonialCard({ quote, name, company, avatar, altText, initials, delay = 0 }) {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="h-full bg-white border border-gray-100 soft-shadow rounded-lg smooth-transition hover:shadow-md">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <Quote className="h-10 w-10 text-brandkraf-teal opacity-50" />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-brandkraf-teal text-brandkraf-teal" />
              ))}
            </div>
          </div>
          <p className="text-base text-gray-700 mb-6 leading-relaxed flex-grow">{quote}</p>
          <div className="flex items-center gap-3 mt-auto">
            <Avatar className="h-12 w-12 rounded-full border-2 border-gray-100">
              <AvatarImage src={avatar} alt={altText || name} className="object-cover" />
              <AvatarFallback className="bg-brandkraf-teal/10 text-brandkraf-teal font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-brandkraf-purple">{name}</div>
              <div className="text-sm text-gray-600">{company}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default TestimonialCard;