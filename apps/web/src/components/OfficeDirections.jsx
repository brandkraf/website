import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { OFFICE } from '@/data/office.js';

function OfficeDirections() {
  const { lang } = useLanguage();
  const T = (en, ms) => (lang === 'ms' ? ms : en);
  return (
    <Card>
      <CardContent className="p-6 sm:p-8">
        <h3 className="text-xl font-semibold mb-2">{T('Get Directions', 'Dapatkan Arah')}</h3>
        <p className="text-muted-foreground mb-6 text-sm">
          {T(
            'Find your way to our office in Taman Kencana, Cheras using your preferred navigation app.',
            'Cari jalan ke pejabat kami di Taman Kencana, Cheras menggunakan aplikasi navigasi pilihan anda.',
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={OFFICE.mapsUrl}
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
            href={OFFICE.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2.5 h-14 rounded-xl bg-brandkraf-purple text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Navigation className="h-5 w-5" />
            {T('Navigate with Waze', 'Navigasi dengan Waze')}
          </motion.a>
        </div>
      </CardContent>
    </Card>
  );
}

export default OfficeDirections;