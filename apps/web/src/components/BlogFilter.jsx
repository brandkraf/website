import React from 'react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

function BlogFilter({ tags, activeTag, onTagChange }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant={activeTag === tag ? 'default' : 'outline'}
          className="cursor-pointer px-4 py-2 text-sm transition-all duration-200 hover:scale-105"
          onClick={() => onTagChange(tag)}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}

export default BlogFilter;