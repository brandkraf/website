import { useState, useCallback } from 'react';
import pb from '@/lib/pocketbaseClient.js';
import { toast } from 'sonner';

export function useVideoUpload(industrySlug) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);

  const fetchVideos = useCallback(async (onlyPublished = false) => {
    setIsLoading(true);
    setError(null);
    try {
      let filterStr = `industry = "${industrySlug}"`;
      if (onlyPublished) {
        filterStr += ` && published = true`;
      }

      const result = await pb.collection('ugc_videos').getList(1, 50, {
        filter: filterStr,
        sort: '-created',
        $autoCancel: false,
      });

      // Enhance records with the full video URL
      const enhancedVideos = result.items.map(record => ({
        ...record,
        videoUrl: pb.files.getUrl(record, record.videoFile)
      }));

      setVideos(enhancedVideos);
    } catch (err) {
      console.error('Error fetching videos:', err);
      setError(err.message);
      toast.error('Failed to load videos.');
    } finally {
      setIsLoading(false);
    }
  }, [industrySlug]);

  const uploadVideo = async (file, metadata) => {
    setIsUploading(true);
    setUploadProgress(0);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('videoFile', file);
      formData.append('industry', industrySlug);
      formData.append('title', metadata.title || '');
      formData.append('description', metadata.description || '');
      formData.append('published', metadata.published || false);
      
      if (pb.authStore.model?.id) {
        formData.append('uploadedBy', pb.authStore.model.id);
      }

      // We simulate progress since fetch/PocketBase SDK doesn't natively expose XHR upload progress easily
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      const record = await pb.collection('ugc_videos').create(formData, { $autoCancel: false });
      
      clearInterval(progressInterval);
      setUploadProgress(100);
      toast.success('Video uploaded successfully!');
      
      await fetchVideos(); // Refresh list (as admin)
      return record;
    } catch (err) {
      console.error('Upload error:', err);
      setError(err.message);
      toast.error('Failed to upload video.');
      throw err;
    } finally {
      setIsUploading(false);
    }
  };

  const updateVideoMetadata = async (id, metadata) => {
    try {
      await pb.collection('ugc_videos').update(id, {
        title: metadata.title,
        description: metadata.description,
        published: metadata.published
      }, { $autoCancel: false });
      
      toast.success('Video updated successfully!');
      await fetchVideos(); // Refresh
    } catch (err) {
      console.error('Update error:', err);
      toast.error('Failed to update video.');
      throw err;
    }
  };

  const deleteVideo = async (id) => {
    try {
      await pb.collection('ugc_videos').delete(id, { $autoCancel: false });
      toast.success('Video deleted.');
      setVideos(prev => prev.filter(v => v.id !== id));
    } catch (err) {
      console.error('Delete error:', err);
      toast.error('Failed to delete video.');
      throw err;
    }
  };

  const togglePublishStatus = async (id, currentStatus) => {
    try {
      await pb.collection('ugc_videos').update(id, {
        published: !currentStatus
      }, { $autoCancel: false });
      
      toast.success(`Video ${!currentStatus ? 'published' : 'unpublished'}.`);
      setVideos(prev => prev.map(v => v.id === id ? { ...v, published: !currentStatus } : v));
    } catch (err) {
      console.error('Status toggle error:', err);
      toast.error('Failed to change status.');
    }
  };

  return {
    videos,
    isLoading,
    isUploading,
    uploadProgress,
    error,
    fetchVideos,
    uploadVideo,
    updateVideoMetadata,
    deleteVideo,
    togglePublishStatus
  };
}