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
      <Card className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white soft-shadow smooth-transition hover:-translate-y-1.5 hover:border-brandkraf-teal/30 hover:elevated-shadow">
        <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple transition-transform duration-300 group-hover:scale-x-100" />
        <CardContent className="flex h-full flex-col p-6">
          <div className="mb-4 flex items-start justify-between">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brandkraf-teal/15 to-brandkraf-purple/15 text-brandkraf-teal">
              <Quote className="h-5 w-5" />
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-brandkraf-teal text-brandkraf-teal" />
              ))}
            </div>
          </div>
          <p className="mb-6 flex-grow text-base leading-relaxed text-gray-700">{quote}</p>
          <div className="mt-auto flex items-center gap-3 border-t border-gray-100 pt-5">
            <Avatar className="h-12 w-12 rounded-full ring-2 ring-brandkraf-teal/20">
              <AvatarImage src={avatar} alt={altText || name} className="object-cover" />
              <AvatarFallback className="bg-brandkraf-teal/10 font-semibold text-brandkraf-teal">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-foreground">{name}</div>
              <div className="text-sm text-muted-foreground">{company}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default TestimonialCard;