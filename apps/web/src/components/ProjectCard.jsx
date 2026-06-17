import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { TrendingUp, Eye, Users } from 'lucide-react';

function ProjectCard({ image, clientType, objective, results, category, delay = 0 }) {
  const getMetricIcon = (type) => {
    switch (type) {
      case 'views':
        return Eye;
      case 'leads':
        return Users;
      case 'sales':
        return TrendingUp;
      default:
        return TrendingUp;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="overflow-hidden bg-white border border-gray-100 soft-shadow rounded-lg smooth-transition hover:shadow-lg hover:border-brandkraf-purple group h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={clientType}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-brandkraf-teal text-white rounded-full font-medium border-none smooth-transition group-hover:bg-brandkraf-purple">
              {category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6 flex-grow flex flex-col">
          <h3 className="text-lg font-semibold text-foreground mb-2 smooth-transition group-hover:text-brandkraf-purple">
            {clientType}
          </h3>
          <p className="text-sm text-gray-600 mb-6 flex-grow">{objective}</p>
          <div className="flex flex-wrap gap-4 mt-auto">
            {results.map((result, index) => {
              const Icon = getMetricIcon(result.type);
              return (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brandkraf-teal/10 text-brandkraf-teal smooth-transition group-hover:bg-brandkraf-purple/10 group-hover:text-brandkraf-purple">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{result.value}</div>
                    <div className="text-xs text-gray-500">{result.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;