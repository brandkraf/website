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
      <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white soft-shadow smooth-transition hover:-translate-y-1.5 hover:border-brandkraf-teal/30 hover:elevated-shadow">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={clientType}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute left-4 top-4">
            <Badge className="rounded-full border-none bg-gradient-to-r from-brandkraf-teal to-brandkraf-purple font-medium text-white shadow-md">
              {category}
            </Badge>
          </div>
        </div>
        <CardContent className="flex flex-grow flex-col p-6">
          <h3 className="mb-2 text-lg font-bold text-foreground smooth-transition group-hover:text-brandkraf-teal">
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