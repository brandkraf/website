import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, X, PlayCircle, Loader2, FileVideo, CheckCircle2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';

export default function VideoUploadSection({ industrySlug }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [localVideos, setLocalVideos] = useState([]);
  const fileInputRef = useRef(null);

  const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const validateAndUpload = async (file) => {
    if (!file) return;

    if (file.type !== 'video/mp4') {
      toast.error('Invalid file type. Please upload an MP4 video.');
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast.error('File is too large. Maximum size is 100MB.');
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('videoFile', file);
      formData.append('industry', industrySlug);
      formData.append('title', file.name);
      
      if (pb.authStore.isValid) {
        formData.append('uploadedBy', pb.authStore.model.id);
      }

      const record = await pb.collection('ugc_videos').create(formData, { $autoCancel: false });
      
      setLocalVideos(prev => [record, ...prev]);
      toast.success('Video uploaded successfully!');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload video. Please try again.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    validateAndUpload(file);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    validateAndUpload(file);
  };

  const handleDelete = async (id) => {
    try {
      await pb.collection('ugc_videos').delete(id, { $autoCancel: false });
      setLocalVideos(prev => prev.filter(v => v.id !== id));
      toast.success('Video removed.');
    } catch (error) {
      console.error('Delete error:', error);
      // Optimistic delete for UX even if PB fails due to permissions (unauthenticated users)
      setLocalVideos(prev => prev.filter(v => v.id !== id));
      toast.success('Video removed from current view.');
    }
  };

  return (
    <section className="py-16 bg-muted/20 border-y border-border">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-3">Submit Your UGC Video</h2>
          <p className="text-muted-foreground">Upload your content to be featured in our industry gallery. MP4 format, max 100MB.</p>
        </div>

        <div 
          className={`video-upload-area ${isDragging ? 'is-dragging' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          role="button"
          tabIndex={0}
        >
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileInput} 
            accept="video/mp4" 
            className="hidden" 
          />
          
          {isUploading ? (
            <div className="flex flex-col items-center justify-center py-8">
              <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
              <p className="text-lg font-medium text-foreground">Uploading video...</p>
              <p className="text-sm text-muted-foreground mt-1">Please do not close this window</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <UploadCloud className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Drag & Drop your video here</h3>
              <p className="text-muted-foreground mb-6">or click to browse from your device</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
                <span className="flex items-center"><FileVideo className="w-4 h-4 mr-1"/> MP4 only</span>
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1"/> Max 100MB</span>
              </div>
            </div>
          )}
        </div>

        {/* Uploaded Videos Gallery */}
        {localVideos.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-primary" />
              Your Uploaded Videos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <AnimatePresence>
                {localVideos.map((video) => {
                  const url = pb.files.getUrl(video, video.videoFile);
                  return (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="relative group rounded-xl overflow-hidden bg-card border border-border shadow-sm"
                    >
                      <div className="aspect-[9/16] bg-black relative">
                        <video 
                          src={url} 
                          className="w-full h-full object-cover opacity-80"
                          preload="metadata"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                          <PlayCircle className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div className="p-3 pr-10">
                        <p className="text-sm font-medium text-foreground truncate" title={video.title || 'Untitled Video'}>
                          {video.title || 'Untitled Video'}
                        </p>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleDelete(video.id); }}
                        className="absolute bottom-2 right-2 p-1.5 bg-destructive/10 text-destructive rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive hover:text-destructive-foreground"
                        title="Remove video"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}