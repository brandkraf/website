import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, Calendar, User, AlertCircle, RefreshCw } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import pb from '@/lib/pocketbaseClient.js';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPost = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      // Fetch post by slug
      const record = await pb.collection('blog_posts').getFirstListItem(`slug="${slug}"`, {
        $autoCancel: false
      });
      setPost(record);
    } catch (err) {
      console.error('Error fetching blog post:', err);
      // If 404 from PocketBase, the generic message is fine
      setError("We couldn't find the article you're looking for.");
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const imageUrl = post?.featured_image 
    ? pb.files.getUrl(post, post.featured_image) 
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{post ? `${post.title} | BrandKraf Blog` : 'Blog Article | BrandKraf'}</title>
        {post?.excerpt && <meta name="description" content={post.excerpt} />}
      </Helmet>

      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom max-w-4xl">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-muted-foreground mb-8">
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-foreground truncate max-w-[200px] sm:max-w-xs md:max-w-sm">
              {loading ? <Skeleton className="h-4 w-32 inline-block" /> : post?.title || 'Article Not Found'}
            </span>
          </nav>

          {loading ? (
            <div className="space-y-8">
              <Skeleton className="h-12 w-full md:w-3/4 rounded-lg" />
              <div className="flex gap-4">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-32" />
              </div>
              <Skeleton className="aspect-video w-full rounded-2xl" />
              <div className="space-y-4 pt-8">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-full mt-4" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>
          ) : error || !post ? (
            <div className="flex flex-col items-center justify-center py-32 text-center bg-card rounded-3xl border border-border">
              <AlertCircle className="h-16 w-16 text-destructive mb-6" />
              <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                {error}
              </p>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => navigate('/blog')}>
                  Back to Blog
                </Button>
                <Button onClick={fetchPost} className="gap-2">
                  <RefreshCw className="h-4 w-4" /> Retry
                </Button>
              </div>
            </div>
          ) : (
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <header className="mb-10 text-center md:text-left">
                {post.category && (
                  <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 transition-colors border-none text-sm px-3 py-1">
                    {post.category}
                  </Badge>
                )}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.15] text-balance">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-muted-foreground font-medium">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary/70" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary/70" />
                    <time dateTime={post.published_date}>
                      {format(new Date(post.published_date), 'MMMM dd, yyyy')}
                    </time>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              {imageUrl && (
                <figure className="mb-12 overflow-hidden rounded-2xl border border-border/50 shadow-xl bg-muted/20">
                  <img 
                    src={imageUrl} 
                    alt={post.title}
                    className="w-full h-auto object-cover aspect-video"
                  />
                </figure>
              )}

              {/* Content */}
              <div 
                className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 max-w-none prose-img:rounded-xl prose-img:shadow-md"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Footer */}
              <footer className="mt-16 pt-8 border-t border-border flex justify-between items-center">
                <Button 
                  variant="ghost" 
                  asChild 
                  className="gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Link to="/blog">
                    <ArrowLeft className="w-4 h-4" />
                    Back to all articles
                  </Link>
                </Button>
              </footer>
            </motion.article>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}