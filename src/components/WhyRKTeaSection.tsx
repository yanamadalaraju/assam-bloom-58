import { motion } from "framer-motion";
import { Calendar, Award, Users, Globe, Truck, Shield, Leaf, TrendingUp, Star, Clock, Crown, Sparkles } from "lucide-react";

// Import background images
import gardenBg from "@/assets/hero-1.jpg";
import qualityBg from "@/assets/guarantee.jpg";
import trustBg from "@/assets/profit.jpg";
import globalBg from "@/assets/shiping.jpg";
import bgTeaField from "@/assets/hero-2.jpg"; // Full section background image

export function WhyRKTeaSection() {
  return (
    <section className="relative min-h-[800px] py-16 md:py-24 overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img 
          src={bgTeaField} 
          alt="Assam Tea gardens background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/90 via-forest-deep/80 to-forest-deep/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-forest-deep/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 mb-4">
            <Crown className="w-3 h-3 text-gold" />
            <span className="text-[11px] uppercase tracking-wider text-gold font-semibold">Since 1990</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-4">
            Why{' '}
            <span className="relative inline-block">
              <span className="italic text-gold">R.K. Tea?</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" fill="none">
                <path d="M0 2 L200 2" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0"/>
                    <stop offset="50%" stopColor="#D4AF37" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-cream/80 text-base md:text-lg max-w-2xl mx-auto backdrop-blur-sm bg-black/20 rounded-lg p-4 inline-block">
            Over three decades of excellence in bringing the finest Assam Tea from the gardens of Northeast India to discerning buyers worldwide.
          </p>
        </motion.div>

        {/* Since 1990 - Timeline Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative bg-black/40 backdrop-blur-md rounded-2xl border border-gold/20 p-8 md:p-10 mb-16 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            {/* Left - Years */}
            <div className="flex-shrink-0 text-center md:text-left">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-20 h-20 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border-2 border-gold/40">
                  <Calendar className="w-10 h-10 text-gold" />
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-display text-gold font-bold">1990</div>
                  <div className="text-cream/60 text-sm uppercase tracking-widest mt-1">Founded</div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3 justify-center md:justify-start">
                <div className="h-px w-8 bg-gold/30" />
                <span className="text-cream/40 text-xs uppercase tracking-[0.3em]">To Present</span>
                <div className="h-px w-8 bg-gold/30" />
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-24 bg-gold/20" />

            {/* Right - Description */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-2xl md:text-3xl text-cream mb-2">
                Three Decades of Tea Excellence
              </h3>
              <p className="text-cream/80 text-base md:text-lg leading-relaxed">
                Since 1990, R.K. Tea Sales has been dedicated to sourcing, processing, and delivering the 
                finest Assam Tea to customers across India and around the world. Our journey spans over 
                35 years of unwavering commitment to quality, authenticity, and customer satisfaction.
              </p>
              <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                <span className="inline-flex items-center gap-1.5 text-xs text-gold/80 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                  Trusted Since 1990
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-gold/80 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Leaf className="w-3.5 h-3.5 text-gold" />
                  Pure Assam Tea
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-gold/80 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Shield className="w-3.5 h-3.5 text-gold" />
                  Quality Guaranteed
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Key Reasons with Background Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-gold/20 hover:border-gold/40 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 hover:scale-[1.02] min-h-[280px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={reason.image} 
                    alt={reason.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div className="w-14 h-14 rounded-xl bg-gold/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors duration-300 border border-gold/30">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display text-xl text-cream mb-2 group-hover:text-gold transition-colors duration-300 drop-shadow-md">
                    {reason.title}
                  </h3>
                  <p className="text-cream/80 text-sm leading-relaxed drop-shadow-md">
                    {reason.description}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-gold/80">
                    <span className="w-6 h-px bg-gold/50" />
                    <span className="drop-shadow-md">{reason.tag}</span>
                  </div>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -skew-x-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-b border-gold/20 bg-black/20 backdrop-blur-sm rounded-xl px-6"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold font-display">1990</div>
            <div className="text-cream/50 text-xs uppercase tracking-wider mt-1">Year Founded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold font-display">35+</div>
            <div className="text-cream/50 text-xs uppercase tracking-wider mt-1">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold font-display">250+</div>
            <div className="text-cream/50 text-xs uppercase tracking-wider mt-1">Trusted Dealers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold font-display">200+</div>
            <div className="text-cream/50 text-xs uppercase tracking-wider mt-1">Cities Served</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-3 px-8 py-3 bg-gold text-forest-deep font-semibold rounded-full hover:bg-amber-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/30"
          >
            Discover Our Journey Since 1990
            <TrendingUp className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const reasons = [
  {
    icon: Leaf,
    title: "Direct From Gardens",
    description: "We source Tea directly from the finest gardens in Assam, eliminating intermediaries for the best quality.",
    tag: "Pure & Authentic",
    image: gardenBg
  },
  {
    icon: Shield,
    title: "Uncompromising Quality",
    description: "Every batch undergoes rigorous quality testing to ensure consistency, purity, and exceptional flavor.",
    tag: "100% Guaranteed",
    image: qualityBg
  },
  {
    icon: Users,
    title: "Trusted Since 1990",
    description: "Over 35 years of experience and 250+ successful dealers trust us for their Tea business.",
    tag: "Proven Track Record",
    image: trustBg
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "From local stores to international markets, we deliver premium Assam Tea across the globe.",
    tag: "Worldwide Delivery",
    image: globalBg
  }
];