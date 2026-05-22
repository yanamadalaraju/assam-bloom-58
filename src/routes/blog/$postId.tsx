import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag, Share2, Twitter, Linkedin, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { posts } from "@/components/Blog";

// Define blog post type
interface BlogPost {
  id: string;
  img: string;
  tag: string;
  date: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
  category: string;
}

export const Route = createFileRoute("/blog/$postId")({
  component: BlogDetailPage,
  loader: async ({ params }) => {
    // Find the post by id
    const post = posts.find(p => p.id === params.postId) as BlogPost;
    
    if (!post) {
      throw new Error("Post not found");
    }
    
    return { post };
  },
});

function BlogDetailPage() {
  const { post } = Route.useLoaderData();

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen pt-28">
        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-forest/70 hover:text-gold transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs uppercase tracking-wider text-gold border border-gold/30 rounded-full px-3 py-1">
                {post.tag}
              </span>
              <span className="text-xs uppercase tracking-wider text-forest/50 border border-forest/20 rounded-full px-3 py-1">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-forest leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-forest/60">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden mb-12 shadow-xl"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none
              prose-headings:font-display prose-headings:text-forest
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h2:font-medium
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-gray-700 prose-li:mb-2
              prose-strong:text-gold prose-strong:font-medium
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-forest/10"
          >
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-forest/70">
                <Tag className="w-4 h-4" />
                <span className="text-sm font-medium">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm px-3 py-1 bg-forest/5 text-forest/70 rounded-full">
                  {post.tag}
                </span>
                <span className="text-sm px-3 py-1 bg-forest/5 text-forest/70 rounded-full">
                  Assam Tea
                </span>
                <span className="text-sm px-3 py-1 bg-forest/5 text-forest/70 rounded-full">
                  Premium Tea
                </span>
              </div>
            </div>
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 pt-6 border-t border-forest/10"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-forest/70">
                <Share2 className="w-4 h-4" />
                <span className="text-sm font-medium">Share this article:</span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => shareOnTwitter(post.title)}
                  className="p-2 bg-[#1DA1F2] text-white rounded-full hover:bg-opacity-80 transition-all"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button
                  onClick={() => shareOnLinkedIn(post.title)}
                  className="p-2 bg-[#0A66C2] text-white rounded-full hover:bg-opacity-80 transition-all"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Related Posts Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 pt-8 border-t border-forest/10"
          >
            <h3 className="text-2xl font-display text-forest mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {posts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to="/blog/$postId"
                    params={{ postId: relatedPost.id }}
                    className="group block"
                  >
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={relatedPost.img}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-display text-forest group-hover:text-gold transition-colors mb-1">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-forest/60">{relatedPost.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-cream flex items-center justify-center pt-28">
        <div className="text-center px-6">
          <h1 className="text-7xl font-display text-forest mb-4">404</h1>
          <p className="text-xl text-forest/70 mb-8">Article not found</p>
          <Link
            to="/"
            hash="blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white rounded-full hover:bg-gold/90 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Journal
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

function shareOnTwitter(title: string) {
  const url = window.location.href;
  const text = `Check out this article: ${title}`;
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    '_blank'
  );
}

function shareOnLinkedIn(title: string) {
  const url = window.location.href;
  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    '_blank'
  );
}