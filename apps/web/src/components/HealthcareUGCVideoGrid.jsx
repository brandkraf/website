import React from 'react';
import { motion } from 'framer-motion';
import LazyVideoIframe from './LazyVideoIframe.jsx';

const VIDEO_IDS = [
  "1-I8_GbfBD1bamYhVfGP1hxf3mjGpygPY",
  "19chovU6tDCo5y40Bj8r2_tnSeb4LOUKS",
  "1E8LmRcpIu2eQCudl2CUIKppfuuHg5AjW",
  "1KymXfokFZVM0KpMOCXmEeNJ_3v-ZPUGS",
  "1Nt1OgxAljWWrHFpyL46ruq3Gnr9ZDfVc",
  "1Oso5HNgzsqQSQehKXNUf4EUSDe2EnrNd",
  "1SJMQPOzqwqOzMixHqSUWiJNJcf87_6by",
  "1Xh-hokKupAqlVbzibmtv2HCFrFM9utMQ",
  "1ai4atctcUJCxPlGT_LSA29iX2D1ydBKO",
  "1an8uwU9u2leeeWXmxsViJtEeYNJGm7pE",
  "1dr7YqHt8qVSuqtx79P6VpIpPkP66KbvJ",
  "1l8Xtuwrh43qSpOJmPfzK733M_ZucMSFp",
  "1qZfiHTtcKxDieJChmw3DKOUJvsEPVedW",
  "1wu94LdhnI0CQ6wBafxWWR8p-D_9armls",
  "1xabuPy_LNSJ9n-0uyTLFBdbfW70aejCB",
  "1ynfwhKvn5OA7oANwdowgMCoxhqe3vKSX"
];

export default function HealthcareUGCVideoGrid() {
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
        <div className="w-24 h-1 bg-[hsl(var(--teal-premium))] mx-auto rounded-full"></div>
      </motion.div>
      
      <div className="video-grid">
        {VIDEO_IDS.map((id, index) => (
          <LazyVideoIframe
            key={id}
            url={`https://drive.google.com/file/d/${id}/preview`}
            title={`Healthcare UGC Video ${index + 1}`}
            index={index}
            className="video-frame aspect-[9/16]"
          />
        ))}
      </div>
    </div>
  );
}