import React from 'react';
import LazyVideoIframe from './LazyVideoIframe.jsx';

const CONSTRUCTION_VIDEOS = [
  "https://drive.google.com/file/d/12Ru_0Nd2u4LorTE9ulJR4lCreQ_OMb0u/preview",
  "https://drive.google.com/file/d/12kQalH6GjHrvr1X4ct087Xa5xzcp-Ymp/preview",
  "https://drive.google.com/file/d/1MthMlRUTOBULPz9xm3xV1HPWHST60rtz/preview",
  "https://drive.google.com/file/d/1SAjg5G2DgATeec7irLWn0dvR49N_zMG4/preview",
  "https://drive.google.com/file/d/1TbxrTksdOVb5xKNGF7S7AIJtLrhf80sa/preview",
  "https://drive.google.com/file/d/1UQFWZoJ80VMPp7cvb2LLKZEgWGoQvqUS/preview",
  "https://drive.google.com/file/d/1ihb0VVgjZLhthsouuhPNVgIdM6sJFIcd/preview",
  "https://drive.google.com/file/d/1jkRue3Q8SxySUp1bnYxSSkZymreIgrIZ/preview",
  "https://drive.google.com/file/d/1ntKgLraxAhVGvCTtJMyu1oB0A3xZdr9h/preview",
  "https://drive.google.com/file/d/1pMsLzaR4ogRXUfGqVTh5vlJdm_ArZZV_/preview",
  "https://drive.google.com/file/d/1u1gf9Rkp0SKx5467SDl2crkKtfioNtPK/preview",
  "https://drive.google.com/file/d/1ubc5p_AMf0eN8nAvcDqoYNxoVIatYOwY/preview",
  "https://drive.google.com/file/d/1w9OhoyOQObuU6hvTUUuzVxmAyfpdXOWO/preview",
  "https://drive.google.com/file/d/1x69rzTez0Fw_w_4fwWCA2dwyOAcuvjQt/preview",
  "https://drive.google.com/file/d/1zRRoano2iSfc9-4DjXenhg2BjJLm0JZm/preview"
];

export default function ConstructionUGCVideoGrid() {
  return (
    <div className="w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured UGC Content</h2>
        <div className="w-24 h-1 bg-[#14B8A6] mx-auto rounded-full"></div>
      </div>
      
      <div className="video-grid-premium">
        {CONSTRUCTION_VIDEOS.map((url, index) => (
          <LazyVideoIframe
            key={index}
            url={url}
            title={`Construction UGC Video ${index + 1}`}
            index={index}
            className="video-frame-teal"
          />
        ))}
      </div>
    </div>
  );
}