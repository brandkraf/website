import React from 'react';
import { motion } from 'framer-motion';
import LazyVideoIframe from './LazyVideoIframe.jsx';

const ENERGY_VIDEOS = [
  "https://drive.google.com/file/d/1IGy-fjDOP6wPr4umuZhHJ3x4VJuzEudz/preview",
  "https://drive.google.com/file/d/1Xt0bilsvPiB953KXI4YdsI5Bd2fka5Iq/preview",
  "https://drive.google.com/file/d/1ia96g0qChH2zW3ZLd0DS8G6PuAs5V1kI/preview",
  "https://drive.google.com/file/d/1obhzZ_SzC8q9xpyEv1c7rFpcaDse06x_/preview",
  "https://drive.google.com/file/d/1ySygGTTp5sZtZER7Z6LUa9jXykzQ8CoN/preview"
];

export default function EnergyUGCVideoGrid() {
  return (
    <div className="w-full py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured UGC Content</h2>
        <div className="w-24 h-1 bg-[#14B8A6] mx-auto rounded-full"></div>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
        {ENERGY_VIDEOS.map((url, index) => (
          <LazyVideoIframe
            key={index}
            url={url}
            title={`Energy UGC Video ${index + 1}`}
            index={index}
            className="video-frame-teal"
          />
        ))}
      </div>
    </div>
  );
}