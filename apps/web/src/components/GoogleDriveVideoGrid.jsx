import React from 'react';
import LazyVideoIframe from './LazyVideoIframe.jsx';

export default function GoogleDriveVideoGrid({ videos = [] }) {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="w-full py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
        {videos.map((url, index) => (
          <LazyVideoIframe
            key={index}
            url={url}
            title={`UGC Video ${index + 1}`}
            index={index}
            className="border-[10px] border-[#14B8A6] rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] bg-black overflow-hidden relative transition-transform duration-300 hover:-translate-y-1 w-full mx-auto max-w-[350px] aspect-[9/16]"
          />
        ))}
      </div>
    </div>
  );
}