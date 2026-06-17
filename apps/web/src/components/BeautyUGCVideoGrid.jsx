import React from 'react';
import { motion } from 'framer-motion';

const BEAUTY_VIDEOS = [
  "https://drive.google.com/file/d/17YSvDahRqSg3trCPz9bzG_Zxjr6rwm74/preview",
  "https://drive.google.com/file/d/18KK5XUTBYIiU-Vnl7PnSDSuAbkf1UKcG/preview",
  "https://drive.google.com/file/d/1BBZDS-m2mym2Hk_V9Yz3ICs58JUdNY80/preview",
  "https://drive.google.com/file/d/1BOlCV3JaWg8W95u-BadB5C2A5RWYY1Yl/preview",
  "https://drive.google.com/file/d/1E4BnUN_ulpXaz5_o9loDWE7c-RxYixxx/preview",
  "https://drive.google.com/file/d/1GNWon61BYBTYYWrloHP5-q9iPjlApx87/preview",
  "https://drive.google.com/file/d/1Ica7nCTtzYgb5L6yZsJWVtz1Oss8-Fcy/preview",
  "https://drive.google.com/file/d/1PTdWLlYG3vwIvk7p_9FE9hYCPmZClBhG/preview",
  "https://drive.google.com/file/d/1PvgFxiLaJuMLWJpD28nqBlKz4iz-DD72/preview",
  "https://drive.google.com/file/d/1VfZBqKM7HbfV5WkMH3h9EsTAym1EilIv/preview",
  "https://drive.google.com/file/d/1WDGhNTIDyBW2fofZaIYOEu74fOTF2lbj/preview",
  "https://drive.google.com/file/d/1_YbpIdHssoaBvv5Rvdp-47eRguklHLYh/preview",
  "https://drive.google.com/file/d/1_wXlEWb2HMFRep4SlIRC7bGI120mc5VU/preview",
  "https://drive.google.com/file/d/1e0mfrqBh_SHVNaVtlJuHzInZrxt5FIRD/preview",
  "https://drive.google.com/file/d/1fERSYxpVtNJN6mvm-rjTKlapyVT06uWM/preview",
  "https://drive.google.com/file/d/1kHJkJ8n_XWkjNd9U7aoYNeV1sRAEn24M/preview",
  "https://drive.google.com/file/d/1ktQZ2rgBg7ydr2iAcmdv2qGHLJguw2aK/preview",
  "https://drive.google.com/file/d/1tSH4mOsf5QF6QoBSwlW6C6uEPVpA4rW1/preview"
];

export default function BeautyUGCVideoGrid() {
  return (
    <div className="w-full">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured UGC Content</h2>
        <div className="w-24 h-1 bg-[#14B8A6] mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
        {BEAUTY_VIDEOS.map((url, index) => {
          // Ensure URL is in preview format
          const previewUrl = url.replace('/view?usp=sharing', '/preview');
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="video-frame aspect-[9/16] w-full max-w-[350px] mx-auto relative overflow-hidden rounded-lg shadow-lg border-[10px] border-[#14B8A6]"
            >
              <iframe
                src={previewUrl}
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={`Featured Beauty UGC Video ${index + 1}`}
              ></iframe>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}