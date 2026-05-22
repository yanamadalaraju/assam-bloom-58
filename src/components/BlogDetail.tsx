import { ArrowLeft, Calendar, Tag, Share2, Heart, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface BlogDetailProps {
  post: {
    id: number;
    img: string;
    tag: string;
    date: string;
    title: string;
    slug: string;
    content: string;
  };
}

export function BlogDetail({ post }: BlogDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream to-amber-50/30 pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-forest hover:text-gold transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Content */}
        <div>
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1 text-sm text-gold">
              <Tag className="w-4 h-4" />
              {post.tag}
            </span>
            <span className="inline-flex items-center gap-1 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep leading-tight mb-6">
            {post.title}
          </h1>

          {/* Divider */}
          <div className="w-20 h-1 bg-gold rounded-full mb-8" />

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-forest-deep prose-p:text-gray-600 prose-strong:text-forest-deep prose-a:text-gold prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Section */}
          <div className="mt-12 p-6 bg-white rounded-xl border border-gold/20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gold to-amber-500 flex items-center justify-center text-2xl">
                🌿
              </div>
              <div>
                <h4 className="font-semibold text-forest-deep">R K Tea</h4>
                <p className="text-gray-500 text-sm">India's Premier Tea Exporter</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gold/30 text-gold hover:bg-gold/10 transition-colors">
              <Heart className="w-4 h-4" />
              Like
            </button>
          </div>

          {/* Share Section */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Share this article:</span>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gold/20 transition-colors">
                <Share2 className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 px-6 py-2 bg-gold text-forest-deep font-semibold rounded-lg hover:bg-amber-500 transition-all duration-300"
            >
              Enquire Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}