import React from 'react';
import { motion } from 'framer-motion';
import LazyVideoIframe from './LazyVideoIframe.jsx';

const VIDEO_IDS = [
  "122YqjNGY-6-t4BK5tEAheVGQwEMhBuFH",
  "12edQ4HHnbVfrCm8zAKc_aCZsBaSTbvYQ",
  "18dYdi-1rAfZMQTeTsUklEqSvXQHYl4C3",
  "1MkMvrdc5SemvAQP5mXpTTQ_IdnJq3MTw",
  "1MluvRLbFsyzWaukl6x9Q2BBvhquyGTDK",
  "1Mm2JjBthG3OfeA0D7NdOF5wN0AD6-CNl",
  "1S2YV17OkXG_n-yyWvu3OfYWCRp-AV4I_",
  "1cTFgaCcOEtDXBtb0AscBROt93k-YE5qM",
  "1jbp2kB_FJbfJtKXfYcVhV2fe3qpMZ7Qm",
  "1lRyBkMdhEg8lUzpGH8hVVbm5ZKv_dR4H",
  "1qQeyGoXjEozitlPImkfgCaczfLI5mUBI",
  "1rjv-OMcEfv7R-h6MB7k5XGVFfgWZ3aZ5",
  "1tMKeUR2m2LBvZSrn9uCxXzFhhkltZg9p",
  "1xbs8T1LM2fk-45uMFk7O7Y8LpIkim7lk",
  "1yUPK_GdsYDfThJBoWgqe2jGALyit7Oor"
];

export default function MediaVideoGrid() {
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
            key={id}
            url={`https://drive.google.com/file/d/${id}/preview`}
            title={`Media UGC Video ${index + 1}`}
            index={index}
            className="video-frame aspect-[9/16]"
          />
        ))}
      </div>
    </div>
  );
}