import React from 'react';
import { motion } from 'framer-motion';
import LazyVideoIframe from './LazyVideoIframe.jsx';

const VIDEO_IDS = [
  "16nCQrICCcLRBbHI5ON6nlpd4P-qXS-iM",
  "1KVaLPXTFJA2-Y7mN0EkOv0nZhPkyWGTK",
  "1M8oekRYQjg3wcnpNbG1EqPRrKnUDqurJ",
  "1QbnV-T_RWWzfxDrOyLfceIx9Tnj5OfcS",
  "1USis2L6rpXVr2qL6JhrGg2WGi0g2zdNF",
  "1t8tqi4xQVM63AKn8VaiPqy_xVo8vf_xj",
  "1x3mlRw5duq2_bn4AA2Q5OF-7cXFZhGXB"
];

export default function TelecommunicationsUGCVideoGrid() {
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
        {VIDEO_IDS.map((id, index) => (
          <LazyVideoIframe
            key={`${id}-${index}`}
            url={`https://drive.google.com/file/d/${id}/preview`}
            title={`Telecommunications UGC Video ${index + 1}`}
            index={index}
            className="border-[10px] border-[#14B8A6] rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] bg-black overflow-hidden relative transition-transform duration-300 hover:-translate-y-1 w-full mx-auto max-w-[350px] aspect-[9/16]"
          />
        ))}
      </div>
    </div>
  );
}