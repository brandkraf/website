import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

function PortfolioFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'default' : 'outline'}
          onClick={() => onCategoryChange(category)}
          className="transition-all duration-200"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}

export default PortfolioFilter;