import React from 'react';
import { motion } from 'framer-motion';
import LazyVideoIframe from './LazyVideoIframe.jsx';

const VIDEO_IDS = [
  "19U4ZAt0j8JROCZUKQ2mup6F4oBhlq3b_",
  "1FkOp8Ko2wr5VhyxLEm54qPhEpAtd-QZk",
  "1KRKcUel79VMVYlfMp0MlAb6Gmim49jze",
  "1Q-R5W39dF5wNKeerNRv4FRZGO6PRsI8x",
  "1YFWLoXWZ6R1GKNOIOsderg17voeWuxGl",
  "1e5pWHnnOKdENT-LTVp27knpwjyG4u9xy",
  "1fPrA8EShGmvEJAYYnbQrGyy8BLtNYwXY",
  "1id-EQIFkpGUS6JjORFUPOFk4kg-FLUp6",
  "1jFzv0pA1YyFNpVqkLH6wQ6Gz9A0XRWZs",
  "1mzcHEmV58WHLYFU9z1a_MwwNjFTkUeiw",
  "1wXx9L-pTaCwj_c3pOXqzguqK-oE7xduc",
  "1yzmJFpKgIlN6UoMlbua459ZD3wz03uj9",
  "1zbtiYzMHRDm-THUPggVcF_9pL7PceZhG",
  "11b4jUgbZgDfjFnzd1mBT_EnfPHtIiFWH",
  "1EgvUUOJwA46YoM825RdVQ6zZVNIMd4B9",
  "1GImaC4UmqF1glDhd_7j8QlsPJ-j_5jq_",
  "1KAD7fOUdenv-apNYaEuVYfuYx4lozIhv",
  "1Oyx1iIt8w991oFOttHU93qb_sj7atEMr",
  "1Xj3QvWKqPUGbq2qBty-t4aUBH0Vf-Spk",
  "1YUBLRGDO4FOAnKSPjESHuj3bfau13pY_",
  "1_JnJ7t5ge8W7m-3l4eguVFGzJNPn16i7",
  "1iSLl98d--ZUJVgoIcgsN3-hI2DyiNs11",
  "1uV1s7ZffFLKgo9fzb0s2P-5XBm1LoGre"
];

export default function RealEstateVideoGrid() {
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
            title={`Real Estate UGC Video ${index + 1}`}
            index={index}
            className="border-[10px] border-[#14B8A6] rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] bg-black overflow-hidden relative transition-transform duration-300 hover:-translate-y-1 w-full mx-auto max-w-[350px] aspect-[9/16]"
          />
        ))}
      </div>
    </div>
  );
}