import React from 'react';
import { motion } from 'framer-motion';
import LazyVideoIframe from './LazyVideoIframe.jsx';

const EDUCATION_VIDEO_IDS = [
  "1nMimySk0CSq92HJnH3LlQkimBKFS-j",
  "1DZcTy6f6bY5B8ymPXZ5eUPR8kFyJiDHt",
  "1LHCvIllD05Bu9d0X4K_wHfZyZizY1Mdw",
  "1Lf6SEuJd32S-JX3YHJC4zY-keiVtoS_M",
  "1VY7KFVdnBJ5aF2Xqm274Gv98CGcLmIiy",
  "1WCVhXHOFAWsVlM5i23X2SFRr9DDwvTFC",
  "1X_m3Cj0-pGnh3RHBM9A6ZWxLavrY4Igs",
  "1hTTrGLoIZHxYSKpwQiTGWjt40SfbAJ4Y",
  "1pUBMOx4-PHWrNhgRx_oi5jnTi1NLIgCG",
  "1rJsoMCAJdfqK8F8jIYm1IuFX6XA82lCk",
  "1zPzuBfC_5uJwjQjhqX14ebjjwnGq1s86"
];

export default function EducationUGCVideoGrid() {
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
        {EDUCATION_VIDEO_IDS.map((id, index) => (
          <LazyVideoIframe
            key={index}
            url={`https://drive.google.com/file/d/${id}/preview`}
            title={`Education UGC Video ${index + 1}`}
            index={index}
            className="video-frame-teal"
          />
        ))}
      </div>
    </div>
  );
}