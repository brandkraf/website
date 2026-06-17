import React from 'react';
import { motion } from 'framer-motion';
import LazyVideoIframe from './LazyVideoIframe.jsx';

const VIDEO_IDS = [
  "1-8oenBOPBkpHA8985Scabv-NOOIWsqNz",
  "10AaZk_EAuxPTTca7WLLNNoMMz7NPHMoe",
  "129y9Q6JSHMLswKq6zuWJL0xdQU3102v3",
  "1BoKhJBUKaCjP9SgiwL-tMxvx0mP277cZ",
  "1I1mGp7IRKQNzkZ9DQ0-d7C0bawufyR3z",
  "1KyjtW9FsCQz4mwe_Ci3kPE7qz8SU2sIN",
  "1QutyU_n7bHrSaE5kWvVYBGzDtow3YM1m",
  "1Xjca6uW9T3St9qwXI9oUl0fwcXrGknRr",
  "1Xm6gnBIiEhgoeio_iUCDAY1Wr5WI3jBN",
  "1aDTUclgsQ7YHISqIGYSP4KhsCNtqtjy5",
  "1fHbLd94l-twdyivWUcjrVVH7omzSYpxR",
  "1gFcQEzkO4gx7KhCvARJkv4MdHXpKOW8D",
  "1gLFCPrmO9uIr6AJw3WlTom2CEugjfRQG",
  "1o67bnd8LbgImaR3j35b1Shaqs28OiGv_",
  "1pyCBxs5GDjkGUkm5G9u6tqupXT954a5s"
];

export default function GovernmentUGCVideoGrid() {
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
            title={`Government UGC Video ${index + 1}`}
            index={index}
            className="video-frame aspect-[9/16]"
          />
        ))}
      </div>
    </div>
  );
}