import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

function BlogCard({ slug, image, title, excerpt, date, readTime, category, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card soft-shadow smooth-transition hover:-translate-y-1.5 hover:border-brandkraf-teal/30 hover:elevated-shadow">
        <Link to={`/blog/${slug}`} className="relative block aspect-video overflow-hidden">
          <img
            src={image || 'https://images.unsplash.com/photo-1681184025442-1517cb9319c1'}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {category && (
            <div className="absolute left-4 top-4">
              <Badge className="rounded-full border-none bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple font-medium text-white shadow-md backdrop-blur-sm">
                {category}
              </Badge>
            </div>
          )}
        </Link>
        <CardContent className="p-6 flex-grow flex flex-col">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              <span>{date}</span>
            </div>
            {readTime && (
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" />
                <span>{readTime}</span>
              </div>
            )}
          </div>
          <Link to={`/blog/${slug}`} className="group-hover:text-primary transition-colors duration-200">
            <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
              {title}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground line-clamp-3 flex-grow leading-relaxed">
            {excerpt}
          </p>
          <Link 
            to={`/blog/${slug}`} 
            className="mt-6 text-sm font-medium text-primary hover:text-primary/80 smooth-transition self-start inline-flex items-center gap-1"
          >
            Read more <span className="text-lg leading-none">&rarr;</span>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default BlogCard;