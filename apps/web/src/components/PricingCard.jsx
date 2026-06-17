import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

function PricingCard({ name, price, description, features, isPopular, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className={`h-full flex flex-col bg-white soft-shadow rounded-lg smooth-transition hover:shadow-lg ${
        isPopular 
          ? 'border-2 border-brandkraf-teal relative z-10 scale-105' 
          : 'border border-gray-100'
      }`}>
        <CardHeader>
          {isPopular && (
            <Badge className="w-fit mb-2 bg-brandkraf-teal text-white rounded-full border-none">
              Most Popular
            </Badge>
          )}
          <CardTitle className="text-2xl text-foreground font-semibold">{name}</CardTitle>
          <CardDescription className="text-base text-gray-600">{description}</CardDescription>
          <div className="mt-4">
            <span className="text-4xl font-bold text-brandkraf-purple">{price}</span>
            {price !== 'Custom' && <span className="text-gray-500 font-medium">/month</span>}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-brandkraf-teal flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button 
            className={`w-full rounded-lg smooth-transition ${
              isPopular 
                ? 'bg-brandkraf-teal text-white hover:bg-brandkraf-purple' 
                : 'bg-transparent border-2 border-brandkraf-purple text-brandkraf-teal hover:gradient-teal-purple hover:text-white hover:border-transparent'
            }`}
            size="lg"
          >
            Book Consultation
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default PricingCard;