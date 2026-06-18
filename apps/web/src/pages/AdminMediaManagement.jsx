import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  UploadCloud, Trash2, Edit2, PlayCircle, Eye, EyeOff, 
  Loader2, Filter, FileVideo, CheckCircle2, AlertCircle, Image as ImageIcon
} from 'lucide-react';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';
import { Button } from '@/components/ui/button.jsx';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog.jsx';

const INDUSTRIES = [
  { id: "food-beverage", name: "Food & Beverage" },
  { id: "agriculture-agribusiness", name: "Agriculture" },
  { id: "manufacturing-industrial", name: "Manufacturing" },
  { id: "construction-engineering", name: "Construction" },
  { id: "real-estate-property", name: "Real Estate" },
  { id: "retail-ecommerce", name: "Retail & E-commerce" },
  { id: "transportation-logistics", name: "Transportation" },
  { id: "travel-tourism-hospitality", name: "Travel & Tourism" },
  { id: "automotive", name: "Automotive" },
  { id: "technology-software", name: "Technology & IT" },
  { id: "media-entertainment", name: "Media & Ent." },
  { id: "telecommunications", name: "Telecommunications" },
  { id: "finance-insurance", name: "Finance & Insurance" },
  { id: "professional-services", name: "Professional Svcs" },
  { id: "education-training", name: "Education" },
  { id: "healthcare-medical", name: "Healthcare" },
  { id: "beauty-personal-care", name: "Beauty & Personal" },
  { id: "energy-utilities", name: "Energy & Utilities" },
  { id: "government-public-sector", name: "Government" },
  { id: "non-profit-social", name: "Non-Profit" }
];

function AdminMediaManagement() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadIndustry, setUploadIndustry] = useState('food-beverage');
  const [filterIndustry, setFilterIndustry] = useState('');
  
  const [editVideo, setEditVideo] = useState(null);
  const [deleteVideo, setDeleteVideo] = useState(null);
  const [previewMedia, setPreviewMedia] = useState(null);
  
  const fileInputRef = useRef(null);

  const fetchVideos = useCallback(async () => {
    try {
      setLoading(true);
      const filterStr = filterIndustry ? `industry="${filterIndustry}"` : '';
      const records = await pb.collection('ugc_videos').getList(1, 100, {
        filter: filterStr,
        sort: '-created',
        $autoCancel: false
      });
      setVideos(records.items);
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error('Failed to load media.');
    } finally {
      setLoading(false);
    }
  }, [filterIndustry]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const isVideoFile = (filename) => {
    if (!filename) return false;
    return /\.(mp4|webm|mov|avi|mkv|qt)$/i.test(filename);
  };

  const isPreviewVideoType = (url) => {
    if (!url) return false;
    // Extract base path without query params to check extension
    const cleanUrl = url.split('?')[0];
    return isVideoFile(cleanUrl);
  };

  const handleUpload = async (file) => {
    if (!file) return;
    
    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');
    
    if (!isImage && !isVideo) {
      toast.error('Only images and videos are supported.');
      return;
    }
    if (file.size > 100 * 1024 * 1024) {
      toast.error('File size exceeds 100MB limit.');
      return;
    }

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('videoFile', file);
      formData.append('industry', uploadIndustry);
      formData.append('title', file.name.split('.')[0]);
      formData.append('published', false);
      formData.append('uploadedBy', pb.authStore.model?.id || '');

      await pb.collection('ugc_videos').create(formData, { $autoCancel: false });
      toast.success('Media uploaded successfully!');
      fetchVideos();
    } catch (error) {
      console.error('Upload failed:', error);
      toast.error('Failed to upload media. Ensure the backend schema allows this file type.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleUpload(e.dataTransfer.files[0]);
  };

  const togglePublish = async (item) => {
    try {
      await pb.collection('ugc_videos').update(item.id, {
        published: !item.published
      }, { $autoCancel: false });
      toast.success(item.published ? 'Media unpublished' : 'Media published');
      setVideos(videos.map(v => v.id === item.id ? { ...v, published: !v.published } : v));
    } catch (error) {
      console.error('Update failed:', error);
      toast.error('Failed to update status.');
    }
  };

  const handleEditSave = async (e) => {
    e.preventDefault();
    try {
      const data = {
        title: editVideo.title,
        description: editVideo.description,
        industry: editVideo.industry
      };
      const updated = await pb.collection('ugc_videos').update(editVideo.id, data, { $autoCancel: false });
      setVideos(videos.map(v => v.id === updated.id ? updated : v));
      setEditVideo(null);
      toast.success('Media updated successfully.');
    } catch (error) {
      console.error('Edit failed:', error);
      toast.error('Failed to update media.');
    }
  };

  const handleDeleteConfirm = async () => {
    if (!deleteVideo) return;
    try {
      await pb.collection('ugc_videos').delete(deleteVideo.id, { $autoCancel: false });
      setVideos(videos.filter(v => v.id !== deleteVideo.id));
      toast.success('Media deleted permanently.');
    } catch (error) {
      console.error('Delete failed:', error);
      toast.error('Failed to delete media.');
    } finally {
      setDeleteVideo(null);
    }
  };

  return (
    <>
      <Helmet>
        <title>Media Management | Admin</title>
      </Helmet>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Media Management</h1>
            <p className="text-muted-foreground mt-2">Upload and manage UGC images and videos across all industries.</p>
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Upload New Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium mb-2">Target Industry</label>
              <select 
                value={uploadIndustry} 
                onChange={(e) => setUploadIndustry(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none"
              >
                {INDUSTRIES.map(ind => (
                  <option key={ind.id} value={ind.id}>{ind.name}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-3">
              <div 
                className={`relative w-full rounded-xl border-2 border-dashed p-8 text-center transition-all ${
                  isDragging ? 'border-primary bg-primary/5' : 'border-border bg-muted/30 hover:bg-muted/50 hover:border-primary/50'
                }`}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
                onDrop={handleDrop}
                onClick={() => !isUploading && fileInputRef.current?.click()}
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={(e) => handleUpload(e.target.files[0])} 
                  accept="video/mp4, video/webm, video/quicktime, video/x-msvideo, video/x-matroska, image/*" 
                  className="hidden" 
                />
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <Loader2 className="w-8 h-8 text-primary animate-spin mb-3" />
                    <p className="font-medium text-primary">Uploading to {INDUSTRIES.find(i => i.id === uploadIndustry)?.name}...</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center cursor-pointer">
                    <div className="flex gap-2 justify-center mb-3 text-muted-foreground">
                      <ImageIcon className="w-10 h-10" />
                      <UploadCloud className="w-10 h-10" />
                    </div>
                    <p className="font-medium">Drag & drop Image or Video here</p>
                    <p className="text-sm text-muted-foreground mt-1">or click to browse (Max 100MB)</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Media Library */}
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-semibold">Media Library</h2>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select 
                value={filterIndustry} 
                onChange={(e) => setFilterIndustry(e.target.value)}
                className="rounded-md border border-input bg-background px-3 py-1.5 text-sm focus:ring-2 focus:ring-primary outline-none"
              >
                <option value="">All Industries</option>
                {INDUSTRIES.map(ind => (
                  <option key={ind.id} value={ind.id}>{ind.name}</option>
                ))}
              </select>
            </div>
          </div>

          {loading ? (
            <div className="p-12 flex justify-center">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          ) : videos.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground flex flex-col items-center">
              <FileVideo className="w-12 h-12 mb-3 opacity-20" />
              <p>No media found. Upload one to get started.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
              {videos.map(item => {
                const mediaUrl = pb.files.getUrl(item, item.videoFile);
                const industryName = INDUSTRIES.find(i => i.id === item.industry)?.name || item.industry;
                const isVideo = isVideoFile(item.videoFile);
                
                return (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="group relative rounded-xl border border-border bg-background overflow-hidden flex flex-col"
                  >
                    <div className="aspect-[9/16] bg-black relative">
                      {isVideo ? (
                        <video src={mediaUrl} className="w-full h-full object-cover opacity-80" preload="metadata" />
                      ) : (
                        <img src={mediaUrl} alt={item.title || 'Media'} className="w-full h-full object-cover opacity-80" />
                      )}
                      
                      <div className="absolute top-2 left-2 flex gap-2">
                        <span className="bg-black/70 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded backdrop-blur-md shadow-sm">
                          {isVideo ? 'Video' : 'Image'}
                        </span>
                      </div>

                      <div className="absolute top-2 right-2 flex gap-2">
                        {item.published ? (
                          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md font-semibold flex items-center shadow-sm">
                            <Eye className="w-3 h-3 mr-1" /> Public
                          </span>
                        ) : (
                          <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md font-semibold flex items-center shadow-sm">
                            <EyeOff className="w-3 h-3 mr-1" /> Draft
                          </span>
                        )}
                      </div>
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                        <button onClick={() => setPreviewMedia(mediaUrl)} className="p-3 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm transition-colors">
                          {isVideo ? <PlayCircle className="w-10 h-10 text-white" /> : <Eye className="w-10 h-10 text-white" />}
                        </button>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-semibold text-sm truncate mb-1" title={item.title}>{item.title || 'Untitled'}</h3>
                      <p className="text-xs text-primary font-medium mb-3">{industryName}</p>
                      
                      <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => togglePublish(item)}
                          className={`h-8 text-xs ${item.published ? 'text-muted-foreground' : 'text-primary'}`}
                        >
                          {item.published ? 'Unpublish' : 'Publish'}
                        </Button>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" onClick={() => setEditVideo(item)}>
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10" onClick={() => setDeleteVideo(item)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* Edit Dialog */}
        <Dialog open={!!editVideo} onOpenChange={(open) => !open && setEditVideo(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Media Details</DialogTitle>
            </DialogHeader>
            {editVideo && (
              <form onSubmit={handleEditSave} className="space-y-4 py-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input 
                    type="text" 
                    value={editVideo.title || ''} 
                    onChange={e => setEditVideo({...editVideo, title: e.target.value})}
                    className="w-full rounded-md border border-input px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Industry Category</label>
                  <select 
                    value={editVideo.industry} 
                    onChange={e => setEditVideo({...editVideo, industry: e.target.value})}
                    className="w-full rounded-md border border-input px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none"
                  >
                    {INDUSTRIES.map(ind => (
                      <option key={ind.id} value={ind.id}>{ind.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description (Optional)</label>
                  <textarea 
                    value={editVideo.description || ''} 
                    onChange={e => setEditVideo({...editVideo, description: e.target.value})}
                    rows={3}
                    className="w-full rounded-md border border-input px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setEditVideo(null)}>Cancel</Button>
                  <Button type="submit">Save Changes</Button>
                </DialogFooter>
              </form>
            )}
          </DialogContent>
        </Dialog>

        {/* Delete Dialog */}
        <Dialog open={!!deleteVideo} onOpenChange={(open) => !open && setDeleteVideo(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center text-destructive">
                <AlertCircle className="w-5 h-5 mr-2" />
                Delete Media
              </DialogTitle>
              <DialogDescription>
                Are you sure you want to delete "{deleteVideo?.title}"? This action cannot be undone and will permanently remove the file from storage.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDeleteVideo(null)}>Cancel</Button>
              <Button variant="destructive" onClick={handleDeleteConfirm}>Delete Permanently</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Preview Dialog */}
        <Dialog open={!!previewMedia} onOpenChange={(open) => !open && setPreviewMedia(null)}>
          <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden bg-black border-none">
            {previewMedia && (
              isPreviewVideoType(previewMedia) ? (
                <video src={previewMedia} controls autoPlay className="w-full max-h-[80vh] object-contain" />
              ) : (
                <img src={previewMedia} alt="Preview" className="w-full max-h-[80vh] object-contain" />
              )
            )}
          </DialogContent>
        </Dialog>

      </div>
    </>
  );
}

export default AdminMediaManagement;