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
      <Card className="overflow-hidden bg-card border border-border soft-shadow rounded-lg smooth-transition hover:shadow-lg group h-full flex flex-col">
        <Link to={`/blog/${slug}`} className="block relative aspect-video overflow-hidden">
          <img
            src={image || 'https://images.unsplash.com/photo-1681184025442-1517cb9319c1'}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {category && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary/90 text-primary-foreground rounded-full font-medium border-none backdrop-blur-sm">
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