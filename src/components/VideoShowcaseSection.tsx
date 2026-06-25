import React from "react";
import { Play, Package, Users } from "lucide-react";

export default function VideoShowcaseSection() {
  const videos = [
    {
      title: "Packaging Facility",
      description:
        "Take a behind-the-scenes look at our Tea packaging process, quality checks, and dispatch operations.",
      icon: Package,
      thumbnail:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45f?w=1200&q=80",
    },
    {
      title: "Customer Testimonials",
      description:
        "Hear directly from our dealers and customers about their experience with our Assam Tea products and services.",
      icon: Users,
      thumbnail:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            Behind The Scenes
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See Our Operations &
            <span className="text-amber-400"> Hear From Our Clients</span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Transparency builds trust. Explore our packaging facility and hear
            authentic feedback from customers and business partners.
          </p>
        </div>

        {/* Videos */}
        <div className="grid lg:grid-cols-2 gap-8">
          {videos.map((video, index) => {
            const Icon = video.icon;

            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-black/40" />

                  <button className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 ml-1 fill-current" />
                    </div>
                  </button>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {video.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h4 className="text-3xl font-bold text-amber-400 mb-2">50+</h4>
            <p className="text-gray-300">Partner Tea Gardens</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h4 className="text-3xl font-bold text-amber-400 mb-2">100%</h4>
            <p className="text-gray-300">Customer Satisfaction</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h4 className="text-3xl font-bold text-amber-400 mb-2">24/7</h4>
            <p className="text-gray-300">Dealer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}