import React from 'react';
import { motion } from 'framer-motion';
import LazyVideoIframe from './LazyVideoIframe.jsx';

const VIDEOS_ARRAY = [
  "https://drive.google.com/file/d/11H0N45Tp7FNGmb7hRHwGwEIY9F8zlBR8/view?usp=sharing",
  "https://drive.google.com/file/d/13S5K45tOQysN3fH7e0g0xvfaVPKGkjn_/view?usp=sharing",
  "https://drive.google.com/file/d/147tlNiX2zNw0W8llCaMsEzBTDNZqxMDH/view?usp=sharing",
  "https://drive.google.com/file/d/14l4c4dIeHHJvkbvjckJOLYuS4pcSWM-H/view?usp=sharing",
  "https://drive.google.com/file/d/19si0eFXAD-1sZfKJ9I7tCAI1bjFUHBtE/view?usp=sharing",
  "https://drive.google.com/file/d/1AqL2iMu1f4_weflWuelqVwNZGi5XKYu0/view?usp=sharing",
  "https://drive.google.com/file/d/1DsmTyTBFVZ0_fLukyJICP9D1S3XPerF7/view?usp=sharing",
  "https://drive.google.com/file/d/1EUUVQuXSuz4rOWECu8BxpVr7jASahe8u/view?usp=sharing",
  "https://drive.google.com/file/d/1GHg6qC-NOWSfPu-pFyqQD9HxrU7-Ilqk/view?usp=sharing",
  "https://drive.google.com/file/d/1Gl7D07X4-UgE7NjbeWMAqVDOPOvUzfAp/view?usp=sharing",
  "https://drive.google.com/file/d/1HDMTi0FRI2gkARU6skfJTWZtfjEouinZ/view?usp=sharing",
  "https://drive.google.com/file/d/1IwRf3QNhZ735c76OXKCpUBKwtGnOhZVE/view?usp=sharing",
  "https://drive.google.com/file/d/1JeGUu6Qs5L1WWe9djWkK7b3mCjRnr6T0/view?usp=sharing",
  "https://drive.google.com/file/d/1KvraVdVHFEBSbdxcfovjfKZAAIZtGMdL/view?usp=sharing",
  "https://drive.google.com/file/d/1MbtDn2W_n5YdP4eb03XBshTguHR5AuID/view?usp=sharing",
  "https://drive.google.com/file/d/1SwQgrUNVRjoDZaXLcAAnr_USTKhuX_LM/view?usp=sharing",
  "https://drive.google.com/file/d/1VO1XeLLIjUYzi43zSWe9wo3zAWHZiJdi/view?usp=sharing",
  "https://drive.google.com/file/d/1W0afmMT0eJsgJhXNEYSYsMktC9dWaUwW/view?usp=sharing",
  "https://drive.google.com/file/d/1WP3Q1xpxMKK9vrB9HvjBBmDdn2-YIsg-/view?usp=sharing",
  "https://drive.google.com/file/d/1XKXDj5S1uoJyrm0_6vLFWvGF7sCHgavB/view?usp=sharing",
  "https://drive.google.com/file/d/1ZHCEX14dRuGnX6NcOZtJLO5wVWg9p1f8/view?usp=sharing",
  "https://drive.google.com/file/d/1_i7PIHfLWWxFkFsWIZULZCrVuK0juKOo/view?usp=sharing",
  "https://drive.google.com/file/d/1b3NGWtMvOybSj27qfWwOCHvvvEAfBZkI/view?usp=sharing",
  "https://drive.google.com/file/d/1c_Lx02GK_zOalaDJZebBcgQrRBJc9eEE/view?usp=sharing",
  "https://drive.google.com/file/d/1ewu5TBMDMpS-XOevKlwK4qpQVnWIdrS6/view?usp=sharing",
  "https://drive.google.com/file/d/1i3CLUTMpf32rKJ1oOe1f_GWdTyDweM9x/view?usp=sharing",
  "https://drive.google.com/file/d/1j9ym_TvaKKY326ZRXGb_EheaFkUQOYPU/view?usp=sharing",
  "https://drive.google.com/file/d/1jDdZwSBiVFZjV1w8P8Yfj_m4xsLXBkeB/view?usp=sharing",
  "https://drive.google.com/file/d/1odS8n6OIFxDg4sGXQnQuiUZwljCeqUaI/view?usp=sharing",
  "https://drive.google.com/file/d/1otr0GoemBSyyKtaqPhJ9Azm1tzk1x2Fb/view?usp=sharing",
  "https://drive.google.com/file/d/1sRolniHL3g_ryUU5sNCydcLWAMwYFj3Z/view?usp=sharing",
  "https://drive.google.com/file/d/1vItY30a843Ar0zQZ9odlR0ZkzLAsUM1Z/view?usp=sharing",
  "https://drive.google.com/file/d/1z--cqlKrJznbkIlXBJlPOZN5DKb5z11W/view?usp=sharing",
  "https://drive.google.com/file/d/1zPo9vk51zAng5Xn4yJt67TRqgD7SbFvQ/view?usp=sharing"
];

export default function FoodBeverageUGCVideoGrid() {
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
        {VIDEOS_ARRAY.map((url, index) => (
          <LazyVideoIframe
            key={index}
            url={url}
            title={`Food & Beverage UGC Video ${index + 1}`}
            index={index}
            className="video-frame aspect-video-portrait"
          />
        ))}
      </div>
    </div>
  );
}