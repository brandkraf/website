import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { AlertCircle, RefreshCw } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BlogCard from '@/components/BlogCard.jsx';
import BlogFilter from '@/components/BlogFilter.jsx';
import { supabase } from '@/lib/supabaseClient.js';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

function BlogPage() {
  const [activeTag, setActiveTag] = useState('All Posts');
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState(['All Posts']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data, error: sbError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_date', { ascending: false })
        .limit(50);

      if (sbError) throw sbError;
      const items = data || [];
      setPosts(items);

      // Extract unique categories for the filter
      const uniqueCategories = new Set(
        items
          .map(post => post.category)
          .filter(Boolean)
      );
      setCategories(['All Posts', ...Array.from(uniqueCategories)]);
      
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      setError('Failed to load blog posts. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = activeTag === 'All Posts'
    ? posts
    : posts.filter(post => post.category === activeTag);

  // Helper to estimate read time
  const calculateReadTime = (text) => {
    if (!text) return '3 min read';
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  // Blog index structured data (ItemList of posts) for richer search treatment.
  const listSchema = posts.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'BrandKraf Marketing Blog',
    url: 'https://www.brandkraf.com/blog',
    description: 'Expert insights on TikTok marketing, lead generation, content strategy, and ads optimization for Malaysian businesses.',
    blogPost: posts.slice(0, 50).map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `https://www.brandkraf.com/blog/${p.slug}`,
    })),
  } : null;

  return (
    <>
      <Helmet>
        <title>Marketing Blog - TikTok, Lead Gen & Content Strategy | BrandKraf</title>
        <meta
          name="description"
          content="Expert insights on TikTok marketing, lead generation, content strategy, and ads optimization. Learn from real campaigns and proven strategies."
        />
        {listSchema && <script type="application/ld+json">{JSON.stringify(listSchema)}</script>}
      </Helmet>

      <Header />

      <main className="relative min-h-screen overflow-hidden bg-background pb-20 pt-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] gradient-mesh" />
        <div className="blob h-80 w-80 bg-brandkraf-teal/15 -top-10 -left-10" />
        <div className="blob h-96 w-96 bg-brandkraf-purple/15 top-0 right-0" style={{ animationDelay: '-5s' }} />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col items-center text-center"
          >
            <span className="chip-brand mb-4">Blog</span>
            <h1 className="mb-4">
              Marketing insights &amp; <span className="text-gradient">strategies</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Learn from real campaigns, proven strategies, and industry insights to grow your brand.
            </p>
          </motion.div>

          {!loading && !error && categories.length > 1 && (
            <BlogFilter
              tags={categories}
              activeTag={activeTag}
              onTagChange={setActiveTag}
            />
          )}

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="flex flex-col space-y-4">
                  <Skeleton className="aspect-video w-full rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-20 w-full" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20 text-center bg-card rounded-2xl border border-border">
              <AlertCircle className="h-12 w-12 text-destructive mb-4" />
              <h3 className="text-xl font-semibold mb-2">Something went wrong</h3>
              <p className="text-muted-foreground mb-6 max-w-md">{error}</p>
              <Button onClick={fetchPosts} className="gap-2">
                <RefreshCw className="h-4 w-4" /> Try Again
              </Button>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-muted/30 rounded-2xl border border-dashed border-border">
              <h3 className="text-xl font-medium mb-2">No posts found</h3>
              <p className="text-muted-foreground">Check back later for new insights.</p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => {
                const imageUrl = post.featured_image
                  || 'https://images.unsplash.com/photo-1681184025442-1517cb9319c1';
                
                const formattedDate = post.published_date 
                  ? format(new Date(post.published_date), 'MMM dd, yyyy')
                  : 'Recent';

                return (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BlogCard 
                      slug={post.slug}
                      image={imageUrl}
                      title={post.title}
                      excerpt={post.excerpt}
                      date={formattedDate}
                      readTime={calculateReadTime(post.content)}
                      category={post.category || 'Article'}
                      delay={index * 0.1}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default BlogPage;