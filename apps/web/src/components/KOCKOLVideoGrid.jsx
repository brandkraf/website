import React from 'react';
import { motion } from 'framer-motion';

const VIDEO_IDS = [
  "10A-TSMe6IdxYnDEbGVbNl9BoFBw4I_LQ",
  "10_2A6s3hXfdBzXosTOqKsCLP-l5Io8nD",
  "1GjxdfF4ue6N8OVOnpT8PF_TbX7tN6F32",
  "1IqY-z3RBywuuYQy3uHodbQLdVXQ-RXTC",
  "1JiTnuk0NSuDd85IIyqD4WFa3ahQrvEzl",
  "1PafRDWIxPkiXhvmBGNZhWbUqvYgnp87y",
  "1U_rK9uWfr7c73_c9rWxQ6wKqMNxH0aQ5",
  "1VklRcREOyqi40SEeMd81GjPsIymIbpEp",
  "1XayWtDKHiaCyhJtnuKUpjEhFpvdGaypI",
  "1ZT9hUy3S_ecVt-JN9AAwV_zhxPmcPTvu",
  "1ehRd6rBJpChzu1PFAD-buneM-V6u-1hD",
  "1hV1ACADP5hvLqPlZS579YjFaqp7sTzYz",
  "1jBCPyNzxDWVaiX040WSI7KW71Q7WuNSh",
  "1kHqq6nA5EExmzMnULMXRx9w_KjT2WsDl",
  "1kRLYL6VcjpwSU3Dzyj7ac6fj5iktUdB6",
  "1rDngLc-QkaS8ebJJqcmXx1fXuFDxhM0Z",
  "1s8Y0v81CT0WZDBrLWSDiEBjIWdH9RgpK",
  "1x1M4r28Rqm6J6MHRO-mJ00roFCBOXcol"
];

export default function KOCKOLVideoGrid() {
  return (
    <div className="w-full py-20 bg-muted/30">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16 px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Work</h2>
        <p className="text-lg text-muted-foreground mb-6">
          See how our KOC and KOL campaigns perform with real, engaging content that drives results.
        </p>
        <div className="w-24 h-1 bg-[#14B8A6] mx-auto rounded-full"></div>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto w-full px-4">
        {VIDEO_IDS.map((id, index) => (
          <motion.div
            key={`${id}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            className="border-[10px] border-[#14B8A6] rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] bg-black overflow-hidden relative transition-transform duration-300 hover:-translate-y-1 w-full mx-auto max-w-[350px] aspect-[9/16]"
          >
            <iframe
              src={`https://drive.google.com/file/d/${id}/preview`}
              className="absolute top-0 left-0 w-full h-full border-none"
              allow="autoplay; fullscreen"
              allowFullScreen
              frameBorder="0"
              title={`KOC/KOL Featured Video ${index + 1}`}
            ></iframe>
          </motion.div>
        ))}
      </div>
    </div>
  );
}