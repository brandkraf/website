import React from 'react';
import { motion } from 'framer-motion';
import LazyVideoIframe from './LazyVideoIframe.jsx';

const VIDEO_IDS = [
  "1-dFUf7n3QtcQ21nq7d-kZm3J9dSch0Ur",
  "12p7-0sBxaZCLHSHPwGIhH6EmgG1LaFL1",
  "16WqyyGpHcDxyg0J4Tq8xteVxSv6K0vMG",
  "17Veaax97LDiezp23lOaYpVqVv7WiY-s8",
  "1WKyqFkGauXCN7G_AYUxfShAJUdzGt-3l",
  "1Z0ze1NBIfZbyvGSpq-LIxPMHTMFCq_ig",
  "1aDncmKQWYsNHDAK7xDvOGo14xhRCGumR",
  "1dJDPPYbTzKLcgzxSKaiUVXIVb82Vh1uU",
  "1i5lW35HCbFuCWt595m_EfRnXFdG1qxjm",
  "1ifEsUpMx3QAPvJ7KOfkhGkjueCt7ZKcR",
  "1jKb5h9s-fuX3fz0o39ZNkXZxnCr1OCDr",
  "1jfQ5w4_kYKgHvbO6gDxfZAnX9sMpoWnt",
  "1qehlKPMuf8BIBYutGmH4rTA1UtoCwa7B",
  "1tUB8cO31PKkw-OrVDMoGHWfpARPp1Xyt",
  "1yizbVCCnu8J2_JssKxmM3HGb3om7-bTu"
];

export default function ManufacturingUGCVideoGrid() {
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
        {VIDEO_IDS.map((id, index) => (
          <LazyVideoIframe
            key={id}
            url={`https://drive.google.com/file/d/${id}/preview`}
            title={`Manufacturing UGC Video ${index + 1}`}
            index={index}
            className="video-frame aspect-[9/16]"
          />
        ))}
      </div>
    </div>
  );
}