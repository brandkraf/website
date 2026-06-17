import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { UploadCloud, Loader2, RefreshCw, Film } from 'lucide-react';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';
import { Button } from '@/components/ui/button.jsx';

function UnprotectedMediaUploadPage() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);

  const fileInputRef = useRef(null);
  const updateInputRef = useRef(null);

  const fetchVideos = async () => {
    try {
      setIsLoading(true);
      const records = await pb.collection('ugc_videos').getList(1, 50, {
        sort: '-created',
        $autoCancel: false
      });
      setVideos(records.items);
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error('Failed to load videos.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleUpload = async (file) => {
    if (!file) return;

    if (!file.type.startsWith('video/mp4')) {
      toast.error('Only MP4 video files are supported.');
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
      formData.append('industry', 'general'); // Required field in schema
      formData.append('title', file.name.split('.')[0]);
      formData.append('published', true); // Auto-publish for this unprotected tool

      await pb.collection('ugc_videos').create(formData, { $autoCancel: false });
      toast.success('Video uploaded successfully!');
      fetchVideos();
    } catch (error) {
      console.error('Upload failed:', error);
      toast.error('Failed to upload. (Note: Admin auth may still be required by backend rules)');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleReplace = async (file) => {
    if (!file || !updatingId) return;

    if (!file.type.startsWith('video/mp4')) {
      toast.error('Only MP4 video files are supported.');
      setUpdatingId(null);
      return;
    }
    if (file.size > 100 * 1024 * 1024) {
      toast.error('File size exceeds 100MB limit.');
      setUpdatingId(null);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('videoFile', file);
      formData.append('title', file.name.split('.')[0]);

      await pb.collection('ugc_videos').update(updatingId, formData, { $autoCancel: false });
      toast.success('Video replaced successfully!');
      fetchVideos();
    } catch (error) {
      console.error('Replace failed:', error);
      toast.error('Failed to replace video.');
    } finally {
      setUpdatingId(null);
      if (updateInputRef.current) updateInputRef.current.value = '';
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleUpload(e.dataTransfer.files[0]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <Helmet>
        <title>Direct Media Upload | Public Tool</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Direct Media Upload Tool
          </h1>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
            Upload, preview, and replace video content directly. MP4 format up to 100MB supported.
          </p>
        </div>

        {/* Upload Zone */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div
            className={`relative rounded-xl border-2 border-dashed p-12 text-center transition-all duration-200 ${
              isDragging
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400'
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setIsDragging(false);
            }}
            onDrop={onDrop}
            onClick={() => !isUploading && fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => handleUpload(e.target.files[0])}
              accept="video/mp4"
              className="hidden"
            />
            
            {isUploading ? (
              <div className="flex flex-col items-center justify-center space-y-4">
                <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                <p className="text-blue-600 font-medium text-lg">Uploading video...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center cursor-pointer space-y-4">
                <div className="p-4 bg-white rounded-full shadow-sm">
                  <UploadCloud className="w-10 h-10 text-blue-500" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-700">
                    Drag & drop your MP4 file here
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    or click to browse your computer
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hidden input for replacing files */}
        <input
          type="file"
          ref={updateInputRef}
          onChange={(e) => handleReplace(e.target.files[0])}
          accept="video/mp4"
          className="hidden"
        />

        {/* Video Gallery */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Film className="w-6 h-6 text-gray-400" />
              Uploaded Videos
            </h2>
            <Button
              variant="outline"
              onClick={fetchVideos}
              disabled={isLoading}
              className="text-gray-600"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>

          {isLoading ? (
            <div className="py-20 flex flex-col items-center justify-center space-y-4">
              <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
              <p className="text-gray-500">Loading videos...</p>
            </div>
          ) : videos.length === 0 ? (
            <div className="py-20 text-center border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
              <p className="text-gray-500 text-lg">No videos uploaded yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="aspect-video bg-black relative">
                    <video
                      src={pb.files.getUrl(video, video.videoFile)}
                      controls
                      preload="metadata"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-semibold text-gray-900 truncate" title={video.title || 'Untitled'}>
                      {video.title || 'Untitled Video'}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4">
                      ID: <span className="font-mono text-xs">{video.id}</span>
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <Button
                        onClick={() => {
                          setUpdatingId(video.id);
                          updateInputRef.current?.click();
                        }}
                        variant="secondary"
                        className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800 transition-colors"
                        disabled={updatingId === video.id}
                      >
                        {updatingId === video.id ? (
                          <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Replacing...</>
                        ) : (
                          <><RefreshCw className="w-4 h-4 mr-2" /> Replace File</>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UnprotectedMediaUploadPage;