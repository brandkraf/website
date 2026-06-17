import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card.jsx';

function OfficeDirections() {
  return (
    <Card>
      <CardContent className="p-6 sm:p-8">
        <h3 className="text-xl font-semibold mb-2">Get Directions</h3>
        <p className="text-muted-foreground mb-6 text-sm">
          Find your way to our office in Cheras Business Centre using your preferred navigation app.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://maps.app.goo.gl/Ap4tXX93iMdRWTEr8?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2.5 h-14 rounded-xl bg-brandkraf-teal text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
          >
            <MapPin className="h-5 w-5" />
            Google Maps
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://waze.com/ul/hw283ehhmp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2.5 h-14 rounded-xl bg-brandkraf-purple text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Navigation className="h-5 w-5" />
            Navigate with Waze
          </motion.a>
        </div>
      </CardContent>
    </Card>
  );
}

export default OfficeDirections;