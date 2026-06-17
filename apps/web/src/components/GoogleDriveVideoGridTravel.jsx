import React from 'react';
import { motion } from 'framer-motion';
import LazyVideoIframe from './LazyVideoIframe.jsx';

const VIDEOS = [
  {
    id: "1xlYEJX-_tuFjF9i66HZzDygNNpzSW6E9"
  }
];

export default function GoogleDriveVideoGridTravel() {
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
        {VIDEOS.map((video, index) => (
          <LazyVideoIframe
            key={video.id}
            url={`https://drive.google.com/file/d/${video.id}/preview`}
            title={`Travel UGC Video ${index + 1}`}
            index={index}
            className="video-frame aspect-[9/16]"
          />
        ))}
      </div>
    </div>
  );
}