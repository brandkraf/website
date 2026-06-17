import React from 'react';
import LazyVideoIframe from './LazyVideoIframe.jsx';

export default function GoogleDriveVideoEmbed({ url, title = "UGC Video", delay = 0 }) {
  return (
    <LazyVideoIframe
      url={url}
      title={title}
      delay={delay}
      className="video-frame-teal"
    />
  );
}