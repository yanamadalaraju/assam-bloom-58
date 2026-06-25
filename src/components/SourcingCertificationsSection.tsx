// import { motion } from "framer-motion";
// import { 
//   MapPin, 
//   Award, 
//   Shield, 
//   CheckCircle, 
//   Leaf, 
//   Star, 
//   TrendingUp,
//   Globe,
//   Crown,
//   Sparkles,
//   ChevronRight,
//   ExternalLink,
//   BadgeCheck,
//   TreePine,
//   Mountain,
//   Droplets,
//   Sun
// } from "lucide-react";

// // Import images
// import assamGardens from "@/assets/hero-1.jpg";
// import TeaEstate from "@/assets/hero-2.jpg";
// import TeaLeaves from "@/assets/hero-3.jpg";
// import bgTeaField from "@/assets/about-leaves.jpg"; // Your background image

// export function SourcingCertificationsSection() {
//   return (
//     <section className="relative min-h-[800px] py-16 md:py-24 overflow-hidden">
//       {/* Full Background Image */}
//       <div className="absolute inset-0">
//         <img 
//           src={bgTeaField} 
//           alt="Assam Tea gardens background"
//           className="w-full h-full object-cover"
//         />
//         {/* Dark overlay for readability */}
//         <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/30 via-forest-deep/80 to-forest-deep/10" />
//         <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-forest-deep/60" />
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
//           backgroundSize: "40px 40px"
//         }} />
//       </div>

//       {/* Decorative Orbs */}
//       <div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative z-10 mx-auto max-w-7xl px-6">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-12"
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 mb-4">
//             <MapPin className="w-3 h-3 text-gold" />
//             <span className="text-[11px] uppercase tracking-wider text-gold font-semibold">Sourcing & Quality</span>
//           </div>
          
//           <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-4">
//             Where Quality{' '}
//             <span className="relative inline-block">
//               <span className="italic text-gold">Begins</span>
//               <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" fill="none">
//                 <path d="M0 2 L200 2" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
//                 <defs>
//                   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#D4AF37" stopOpacity="0"/>
//                     <stop offset="50%" stopColor="#D4AF37" stopOpacity="1"/>
//                     <stop offset="100%" stopColor="#D4AF37" stopOpacity="0"/>
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </span>
//           </h2>
          
//           <p className="text-cream/80 text-base md:text-lg backdrop-blur-sm bg-black/20 rounded-lg p-4 inline-block">
//             Premium Assam Tea sourced from the Best Tea gardens, backed by internationally recognized quality certifications.
//           </p>
//         </motion.div>

//         {/* Sourcing Regions Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="mb-16"
//         >
//           <h3 className="font-display text-2xl md:text-3xl text-cream mb-6 text-center">
//             Our <span className="text-gold">Sourcing Regions</span>
//           </h3>
          
//           <p className="text-cream/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-10">
//             We source our Tea from the most prestigious Tea-growing regions across Northeast India
//           </p>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {sourcingRegions.map((region, index) => {
//               const Icon = region.icon;
//               return (
//                 <motion.div
//                   key={region.name}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="group relative overflow-hidden rounded-xl border border-gold/20 hover:border-gold/40 transition-all duration-500 hover:scale-[1.02] min-h-[240px] bg-black/30 backdrop-blur-sm"
//                 >
//                   {/* Background Image */}
//                   <div className="absolute inset-0">
//                     <img 
//                       src={region.image} 
//                       alt={region.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
//                   </div>

//                   {/* Content */}
//                   <div className="relative z-10 h-full flex flex-col justify-end p-6">
//                     <div className="flex items-start justify-between mb-3">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/30">
//                           <Icon className="w-5 h-5 text-gold" />
//                         </div>
//                         <div>
//                           <h4 className="font-display text-lg text-cream group-hover:text-gold transition-colors duration-300">
//                             {region.name}
//                           </h4>
//                           <p className="text-cream/60 text-xs">{region.location}</p>
//                         </div>
//                       </div>
//                       <span className="text-[10px] px-2 py-1 rounded-full bg-gold/20 backdrop-blur-sm text-gold border border-gold/30">
//                         {region.elevation}
//                       </span>
//                     </div>
//                     <p className="text-cream/80 text-sm leading-relaxed drop-shadow-md">
//                       {region.description}
//                     </p>
//                     <div className="flex flex-wrap gap-2 mt-3">
//                       {region.features.map((feature, idx) => (
//                         <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-cream/70 border border-gold/20">
//                           {feature}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </motion.div>

//         {/* Quality Certifications Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//         >
//           <h3 className="font-display text-2xl md:text-3xl text-cream mb-6 text-center">
//             Our <span className="text-gold">Quality Certifications</span>
//           </h3>
          
//           <p className="text-cream/60 text-sm md:text-base text-center max-w-2xl mx-auto mb-10">
//             Committed to the highest standards of quality, safety, and authenticity
//           </p>

//           <div className="grid md:grid-cols-3 gap-6 mb-12">
//             {certifications.map((cert, index) => {
//               const Icon = cert.icon;
//               return (
//                 <motion.div
//                   key={cert.name}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="group bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 text-center"
//                 >
//                   <div className="relative inline-block">
//                     <div className="w-20 h-20 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors duration-300 border border-gold/30">
//                       <Icon className="w-10 h-10 text-gold" />
//                     </div>
//                     {cert.verified && (
//                       <div className="absolute -top-1 -right-1">
//                         <CheckCircle className="w-6 h-6 text-green-400 fill-green-500/30" />
//                       </div>
//                     )}
//                   </div>
                  
//                   <h4 className="font-display text-xl text-cream mb-2 group-hover:text-gold transition-colors duration-300">
//                     {cert.name}
//                   </h4>
                  
//                   <p className="text-cream/60 text-sm mb-3">{cert.description}</p>
                  
//                   <div className="flex flex-wrap justify-center gap-2">
//                     {cert.tags.map((tag, idx) => (
//                       <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-gold/10 text-cream/60 border border-gold/20">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   {cert.status && (
//                     <div className="mt-4 text-xs">
//                       <span className="inline-flex items-center gap-1.5 text-green-400">
//                         <CheckCircle className="w-3.5 h-3.5" />
//                         {cert.status}
//                       </span>
//                     </div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Quality Assurance Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="bg-black/40 backdrop-blur-md rounded-2xl border border-gold/20 p-8 text-center"
//           >
//             <div className="flex flex-col md:flex-row items-center justify-center gap-6">
//               <div className="flex items-center gap-4">
//                 <div className="w-16 h-16 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border-2 border-gold/40">
//                   <Award className="w-8 h-8 text-gold" />
//                 </div>
//                 <div className="text-left">
//                   <h4 className="text-cream font-display text-lg">100% Quality Guarantee</h4>
//                   <p className="text-cream/50 text-sm">Every batch tested for purity and consistency</p>
//                 </div>
//               </div>
//               <div className="hidden md:block w-px h-12 bg-gold/20" />
//               <div className="flex flex-wrap gap-4">
//                 <span className="inline-flex items-center gap-2 text-cream/70 text-sm">
//                   <CheckCircle className="w-4 h-4 text-gold" />
//                   FSSAI Certified
//                 </span>
//                 <span className="inline-flex items-center gap-2 text-cream/70 text-sm">
//                   <CheckCircle className="w-4 h-4 text-gold" />
//                   ISO 22000:2018
//                 </span>
//                 <span className="inline-flex items-center gap-2 text-cream/70 text-sm">
//                   <CheckCircle className="w-4 h-4 text-gold" />
//                   HACCP Compliant
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="text-center mt-12"
//         >
//           <a
//             href="#products"
//             className="group inline-flex items-center gap-3 px-8 py-3 bg-gold text-forest-deep font-semibold rounded-full hover:bg-amber-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/30"
//           >
//             Explore Our Premium Collection
//             <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // Data
// const sourcingRegions = [
//   {
//     name: "Upper Assam",
//     location: "Eastern Assam Valley",
//     description: "Known for producing Teas with exceptional body, depth, and a distinctive malty flavor that is the hallmark of premium Assam Tea.",
//     elevation: "100-200m",
//     features: ["Strong Body", "Malty Flavor", "Golden Liquor"],
//     icon: TreePine,
//     image: assamGardens
//   },
//   {
//     name: "Central Assam",
//     location: "Nagaon & Jorhat Districts",
//     description: "Home to some of the oldest Tea estates, producing balanced Teas with excellent color and a smooth, rounded taste profile.",
//     elevation: "80-150m",
//     features: ["Balanced Taste", "Rich Color", "Smooth Finish"],
//     icon: Mountain,
//     image: TeaEstate
//   },
//   {
//     name: "Tea Valley",
//     location: "Brahmaputra Valley",
//     description: "The fertile plains along the Brahmaputra river produce Teas with unique character, influenced by the region's rich alluvial soil.",
//     elevation: "50-120m",
//     features: ["Rich Soil", "Unique Character", "Premium Grade"],
//     icon: Droplets,
//     image: TeaLeaves
//   }
// ];

// const certifications = [
//   {
//     name: "FSSAI",
//     description: "Food Safety and Standards Authority of India certification ensuring highest food safety standards.",
//     tags: ["Food Safety", "Quality Assurance", "Legal Compliance"],
//     icon: Shield,
//     verified: true,
//     status: "Certified ✓"
//   },
//   {
//     name: "ISO 22000:2018",
//     description: "International standard for food safety management systems ensuring safe food supply chain.",
//     tags: ["International Standard", "Food Safety", "Global Recognition"],
//     icon: Award,
//     verified: true,
//     status: "Certified ✓"
//   },
//   {
//     name: "HACCP",
//     description: "Hazard Analysis Critical Control Point system identifying and controlling food safety hazards.",
//     tags: ["Hazard Control", "Safety First", "Quality Management"],
//     icon: BadgeCheck,
//     verified: true,
//     status: "Compliant ✓"
//   }
// ];




import { motion } from "framer-motion";
import { 
  MapPin, 
  Award, 
  Shield, 
  CheckCircle, 
  Leaf, 
  Star, 
  TrendingUp,
  Globe,
  Crown,
  Sparkles,
  ChevronRight,
  ExternalLink,
  BadgeCheck,
  TreePine,
  Mountain,
  Droplets,
  Sun
} from "lucide-react";

// Import images
import assamGardens from "@/assets/hero-1.jpg";
import TeaEstate from "@/assets/hero-2.jpg";
import TeaLeaves from "@/assets/hero-3.jpg";
import bgTeaField from "@/assets/about-leaves.jpg"; // Your background image

export function SourcingCertificationsSection() {
  return (
    <section className="relative min-h-[800px] py-20 md:py-28 overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img 
          src={bgTeaField} 
          alt="Assam Tea gardens background"
          className="w-full h-full object-cover brightness-105"
        />
        {/* Minimal overlay for readability - much lighter */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/20 via-forest-deep/60 to-forest-deep/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-forest-deep/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-14 md:mb-18"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 mb-5">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-sm uppercase tracking-wider text-gold font-semibold">Sourcing & Quality</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-5">
            Where Quality{' '}
            <span className="relative inline-block">
              <span className="italic text-gold">Begins</span>
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
          
          <p className="text-cream/80 text-lg md:text-xl backdrop-blur-sm bg-black/20 rounded-lg p-5 inline-block">
            Premium Assam Tea sourced from the Best Tea gardens, backed by internationally recognized quality certifications.
          </p>
        </motion.div>

        {/* Sourcing Regions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 md:mb-20"
        >
          <h3 className="font-display text-3xl md:text-4xl text-cream mb-6 text-center">
            Our <span className="text-gold">Sourcing Regions</span>
          </h3>
          
          <p className="text-cream/60 text-base md:text-lg text-center max-w-2xl mx-auto mb-10 md:mb-12">
            We source our Tea from the most prestigious Tea-growing regions across Northeast India
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sourcingRegions.map((region, index) => {
              const Icon = region.icon;
              return (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-500 hover:scale-[1.02] min-h-[260px] bg-black/20 backdrop-blur-sm"
                >
                  {/* Background Image - Brighter with minimal overlay */}
                  <div className="absolute inset-0">
                    <img 
                      src={region.image} 
                      alt={region.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-7">
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gold/30 backdrop-blur-sm flex items-center justify-center border border-gold/30">
                            <Icon className="w-6 h-6 text-gold" />
                          </div>
                          <div>
                            <h4 className="font-display text-xl md:text-2xl text-cream group-hover:text-gold transition-colors duration-300">
                              {region.name}
                            </h4>
                            <p className="text-cream/70 text-sm">{region.location}</p>
                          </div>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full bg-gold/20 backdrop-blur-sm text-gold border border-gold/30">
                          {region.elevation}
                        </span>
                      </div>
                      <p className="text-cream/90 text-sm md:text-base leading-relaxed drop-shadow-md">
                        {region.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {region.features.map((feature, idx) => (
                          <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-cream/80 border border-gold/20">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Quality Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-display text-3xl md:text-4xl text-cream mb-6 text-center">
            Our <span className="text-gold">Quality Certifications</span>
          </h3>
          
          <p className="text-cream/60 text-base md:text-lg text-center max-w-2xl mx-auto mb-10 md:mb-12">
            Committed to the highest standards of quality, safety, and authenticity
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gold/20 hover:border-gold/40 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 text-center"
                >
                  <div className="relative inline-block">
                    <div className="w-24 h-24 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors duration-300 border border-gold/30">
                      <Icon className="w-12 h-12 text-gold" />
                    </div>
                    {cert.verified && (
                      <div className="absolute -top-1 -right-1">
                        <CheckCircle className="w-7 h-7 text-green-400 fill-green-500/30" />
                      </div>
                    )}
                  </div>
                  
                  <h4 className="font-display text-2xl text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                    {cert.name}
                  </h4>
                  
                  <p className="text-cream/60 text-base md:text-lg mb-3">{cert.description}</p>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {cert.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-gold/10 text-cream/70 border border-gold/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {cert.status && (
                    <div className="mt-4 text-sm">
                      <span className="inline-flex items-center gap-2 text-green-400">
                        <CheckCircle className="w-4 h-4" />
                        {cert.status}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Quality Assurance Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-black/30 backdrop-blur-md rounded-2xl border border-gold/20 p-8 md:p-10 text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border-2 border-gold/40">
                  <Award className="w-10 h-10 text-gold" />
                </div>
                <div className="text-left">
                  <h4 className="text-cream font-display text-xl md:text-2xl">100% Quality Guarantee</h4>
                  <p className="text-cream/50 text-base">Every batch tested for purity and consistency</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-14 bg-gold/20" />
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 text-cream/70 text-base">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  FSSAI Certified
                </span>
                <span className="inline-flex items-center gap-2 text-cream/70 text-base">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  ISO 22000:2018
                </span>
                <span className="inline-flex items-center gap-2 text-cream/70 text-base">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  HACCP Compliant
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14 md:mt-16"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-gold text-forest-deep font-semibold rounded-full hover:bg-amber-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/30 text-lg"
          >
            Explore Our Premium Collection
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Data
const sourcingRegions = [
  {
    name: "Upper Assam",
    location: "Eastern Assam Valley",
    description: "Known for producing Teas with exceptional body, depth, and a distinctive malty flavor that is the hallmark of premium Assam Tea.",
    elevation: "100-200m",
    features: ["Strong Body", "Malty Flavor", "Golden Liquor"],
    icon: TreePine,
    image: assamGardens
  },
  {
    name: "Central Assam",
    location: "Nagaon & Jorhat Districts",
    description: "Home to some of the oldest Tea estates, producing balanced Teas with excellent color and a smooth, rounded taste profile.",
    elevation: "80-150m",
    features: ["Balanced Taste", "Rich Color", "Smooth Finish"],
    icon: Mountain,
    image: TeaEstate
  },
  {
    name: "Tea Valley",
    location: "Brahmaputra Valley",
    description: "The fertile plains along the Brahmaputra river produce Teas with unique character, influenced by the region's rich alluvial soil.",
    elevation: "50-120m",
    features: ["Rich Soil", "Unique Character", "Premium Grade"],
    icon: Droplets,
    image: TeaLeaves
  }
];

const certifications = [
  {
    name: "FSSAI",
    description: "Food Safety and Standards Authority of India certification ensuring highest food safety standards.",
    tags: ["Food Safety", "Quality Assurance", "Legal Compliance"],
    icon: Shield,
    verified: true,
    status: "Certified ✓"
  },
  {
    name: "ISO 22000:2018",
    description: "International standard for food safety management systems ensuring safe food supply chain.",
    tags: ["International Standard", "Food Safety", "Global Recognition"],
    icon: Award,
    verified: true,
    status: "Certified ✓"
  },
  {
    name: "HACCP",
    description: "Hazard Analysis Critical Control Point system identifying and controlling food safety hazards.",
    tags: ["Hazard Control", "Safety First", "Quality Management"],
    icon: BadgeCheck,
    verified: true,
    status: "Compliant ✓"
  }
];