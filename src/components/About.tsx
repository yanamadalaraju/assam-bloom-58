// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import aboutLeaves from "@/assets/about-leaves.jpg";
// import aboutEstate from "@/assets/about-estate.jpg";

// const timeline = [
//   { year: "Origin", title: "Rooted in Assam", text: "Founded with a singular vision to share the world's finest Assam Tea." },
//   { year: "Estates", title: "Trusted Gardens", text: "Direct relationships with premium estates across Northeast India." },
//   { year: "Today", title: "A Global Reach", text: "Delivering authentic flavor to discerning buyers worldwide." },
// ];

// export function About() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
//   const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
//   const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

//   return (
//     <section id="about" ref={ref} className="relative bg-cream py-20 md:py-28 overflow-hidden">
//       <div className="mx-auto max-w-7xl px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8 }}
//           className="max-w-2xl mb-12 md:mb-16"
//         >
//           <div className="flex items-center gap-3 mb-4">
//             <span className="h-px w-10 bg-forest" />
//             <span className="text-xs uppercase tracking-[0.4em] text-forest font-medium">Our Story</span>
//           </div>
//           <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep leading-tight">
//             A vision brewed in the <span className="italic text-gradient-gold">gardens of Assam</span>.
//           </h2>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
//           <motion.div style={{ y: y1 }} className="relative">
//             <div className="relative overflow-hidden rounded-lg shadow-luxury">
//               <img src={aboutEstate} alt="Assam Tea estate" className="w-full h-[500px] md:h-[550px] object-cover" loading="lazy" />
//               <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/30 via-transparent to-transparent" />
//             </div>
//             <motion.div
//               style={{ y: y2 }}
//               className="absolute -bottom-8 -right-4 md:-right-8 w-2/3 overflow-hidden rounded-lg shadow-luxury border-4 border-cream"
//             >
//               <img src={aboutLeaves} alt="Tea leaves" className="w-full h-48 md:h-56 object-cover" loading="lazy" />
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <p className="font-display text-xl md:text-2xl lg:text-3xl text-forest-deep leading-relaxed">
//               "R K Tea Sales was founded with a singular vision — to bring the world's finest Assam Tea
//               directly from the lush gardens of Northeast India to discerning buyers across the globe."
//             </p>
//             <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
//               Our deep-rooted connections with premium Tea estates in Assam allow us to source the
//               freshest, highest-quality Tea leaves, ensuring every batch maintains the authentic
//               character that Assam Tea is celebrated for worldwide.
//             </p>

//             <div className="pt-4 space-y-6">
//               {timeline.map((t, i) => (
//                 <motion.div
//                   key={t.year}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: i * 0.1 }}
//                   className="flex gap-5 border-l-2 border-gold/50 pl-5 hover:border-gold transition-colors duration-300 group"
//                 >
//                   <div>
//                     <div className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold mb-1">{t.year}</div>
//                     <h3 className="font-display text-xl text-forest-deep mb-1 group-hover:text-forest transition-colors">{t.title}</h3>
//                     <p className="text-muted-foreground text-sm leading-relaxed">{t.text}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Decorative element */}
//             <div className="pt-4">
//               <div className="flex items-center gap-2">
//                 <div className="h-px w-12 bg-gradient-to-r from-gold/60 to-transparent"></div>
//                 <span className="text-[10px] uppercase tracking-[0.2em] text-gold/60">Est. 2024</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import aboutLeaves from "@/assets/about-leaves.jpg";
// import aboutEstate from "@/assets/about-estate.jpg";

// const timeline = [
//   { year: "Origin", title: "Rooted in Assam", text: "Founded with a singular vision to share the world's finest Assam Tea.", icon: "🌱" },
//   { year: "Estates", title: "Trusted Gardens", text: "Direct relationships with premium estates across Northeast India.", icon: "🍃" },
//   { year: "Today", title: "A Global Reach", text: "Delivering authentic flavor to discerning buyers worldwide.", icon: "🌍" },
// ];

// export function About() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
//   const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
//   const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

//   return (
//     <section id="about" ref={ref} className="relative bg-gradient-to-br from-cream via-cream to-amber-50/30 py-12 md:py-16 overflow-hidden">
//       {/* Decorative background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gold/5 blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-forest/5 blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/3 blur-3xl"></div>
//       </div>

//       <div className="mx-auto max-w-7xl px-6 relative z-2">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8 }}
//           className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
//         >
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <span className="h-px w-10 bg-gradient-to-r from-transparent via-gold to-transparent" />
//             <span className="text-xs uppercase tracking-[0.4em] text-gold font-semibold">Our Story</span>
//             <span className="h-px w-10 bg-gradient-to-r from-transparent via-gold to-transparent" />
//           </div>
//           <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep leading-tight">
//             A vision brewed in the{' '}
//             <span className="relative inline-block">
//               <span className="italic bg-gradient-to-r from-gold to-amber-600 bg-clip-text text-transparent">
//                 gardens of Assam
//               </span>
//               <motion.div 
//                 initial={{ width: 0 }}
//                 whileInView={{ width: "100%" }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold/40 to-transparent"
//               />
//             </span>
//           </h2>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
//           {/* Left side - Image collage */}
//           <motion.div 
//             style={{ y: y1 }} 
//             className="relative group"
//           >
//             <div className="relative overflow-hidden rounded-2xl shadow-2xl">
//               <img 
//                 src={aboutEstate} 
//                 alt="Assam Tea estate" 
//                 className="w-full h-[420px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105" 
//                 loading="lazy" 
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 via-forest-deep/20 to-transparent" />
              
//               {/* Overlay text on image */}
//               <div className="absolute bottom-4 left-4 right-4 text-cream">
//                 <p className="text-xs uppercase tracking-wider opacity-80">Since 2024</p>
//                 <p className="text-lg md:text-xl font-display">Pure Assam • Pure Legacy</p>
//               </div>
//             </div>
            
//             <motion.div
//               style={{ y: y2 }}
//               className="absolute -bottom-5 -right-3 md:-right-5 w-2/3 overflow-hidden rounded-xl shadow-2xl border-4 border-cream transition-transform duration-300 hover:scale-105"
//             >
//               <img src={aboutLeaves} alt="Tea leaves" className="w-full h-36 md:h-40 object-cover" loading="lazy" />
//               <div className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent" />
//             </motion.div>

//             {/* Decorative badge */}
//             <div className="absolute -top-3 -left-3 w-14 h-14 md:w-16 md:h-16 bg-gold rounded-full flex items-center justify-center shadow-xl">
//               <span className="text-forest-deep font-bold text-[10px] md:text-xs text-center leading-tight px-1">
//                 Premium<br />Quality
//               </span>
//             </div>
//           </motion.div>

//           {/* Right side - Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <div className="relative">
//               <span className="text-6xl md:text-7xl text-gold/10 font-serif absolute -top-6 -left-3">"</span>
//               <p className="font-display text-xl md:text-2xl lg:text-3xl text-forest-deep leading-relaxed relative z-2 pl-6">
//                 R K Tea Sales was founded with a singular vision — to bring the world's finest Assam Tea
//                 directly from the lush gardens of Northeast India to discerning buyers across the globe.
//               </p>
//             </div>
            
//             <p className="text-muted-foreground text-base md:text-lg leading-relaxed pl-6 border-l-2 border-gold/30">
//               Our deep-rooted connections with premium Tea estates in Assam allow us to source the
//               freshest, highest-quality Tea leaves, ensuring every batch maintains the authentic
//               character that Assam Tea is celebrated for worldwide.
//             </p>

//             {/* Timeline with icons */}
//             <div className="pt-2 space-y-4">
//               {timeline.map((t, i) => (
//                 <motion.div
//                   key={t.year}
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: i * 0.15 }}
//                   className="group"
//                 >
//                   <div className="flex gap-4 items-start">
//                     <div className="relative">
//                       <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300">
//                         {t.icon}
//                       </div>
//                       {i < timeline.length - 1 && (
//                         <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"></div>
//                       )}
//                     </div>
//                     <div className="flex-1 pb-4">
//                       <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-1">{t.year}</div>
//                       <h3 className="font-display text-lg md:text-xl text-forest-deep mb-1 group-hover:text-gold transition-colors duration-300">
//                         {t.title}
//                       </h3>
//                       <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{t.text}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className="pt-4"
//             >
//               <a
//                 href="#products"
//                 className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gold to-amber-600 text-forest-deep font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm md:text-base"
//               >
//                 Discover Our Journey
//                 <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Decorative Tea leaf pattern at bottom */}
//       <div className="absolute bottom-0 left-0 right-0 h-8 opacity-10 pointer-events-none">
//         <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
//           <path d="M0,64L80,69C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor" className="text-forest-deep"/>
//         </svg>
//       </div>
//     </section>
//   );
// }




import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutLeaves from "@/assets/about-leaves.jpg";
import aboutEstate from "@/assets/about-estate.jpg";

const timeline = [
  { year: "1990", title: "Rooted in Assam", text: "Founded with a singular vision to share the world's finest Assam Tea.", icon: "🌱" },
  { year: "Estates", title: "Trusted Gardens", text: "Direct relationships with premium estates across Northeast India.", icon: "🍃" },
  { year: "Today", title: "A Global Reach", text: "Delivering authentic flavor to discerning buyers worldwide.", icon: "🌍" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section id="about" ref={ref} className="relative bg-gradient-to-br from-cream via-cream to-amber-50/30 py-16 md:py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gold/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-forest/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/3 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <span className="text-sm uppercase tracking-[0.4em] text-gold font-semibold">Our Story</span>
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-forest-deep leading-tight whitespace-nowrap">
            A vision brewed in the{' '}
            <span className="relative inline-block">
              <span className="italic bg-gradient-to-r from-gold to-amber-600 bg-clip-text text-transparent">
                gardens of Assam
              </span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold/40 to-transparent"
              />
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image collage */}
          <motion.div 
            style={{ y: y1 }} 
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={aboutEstate} 
                alt="Assam Tea estate" 
                className="w-full h-[480px] md:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105" 
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 via-forest-deep/20 to-transparent" />
              
              {/* Overlay text on image */}
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <p className="text-sm uppercase tracking-wider opacity-80">Since 1990</p>
                <p className="text-xl md:text-2xl font-display">Pure Assam • Pure Legacy</p>
              </div>
            </div>
            
            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-6 -right-4 md:-right-6 w-2/3 overflow-hidden rounded-xl shadow-2xl border-4 border-cream transition-transform duration-300 hover:scale-105"
            >
              <img src={aboutLeaves} alt="Tea leaves" className="w-full h-44 md:h-48 object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent" />
            </motion.div>

            {/* Decorative badge */}
            <div className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 bg-gold rounded-full flex items-center justify-center shadow-xl">
              <span className="text-forest-deep font-bold text-sm md:text-base text-center leading-tight px-1">
                Since<br />1990
              </span>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative">
              <span className="text-7xl md:text-8xl text-gold/10 font-serif absolute -top-8 -left-4">"</span>
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-forest-deep leading-relaxed relative z-2 pl-8">
                R K Tea Sales was founded with a singular vision — to bring the world's finest Assam Tea
                directly from the lush gardens of Northeast India to discerning buyers across the globe.
              </p>
            </div>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed pl-8 border-l-2 border-gold/30">
              Our deep-rooted connections with premium Tea estates in Assam allow us to source the
              freshest, highest-quality Tea leaves, ensuring every batch maintains the authentic
              character that Assam Tea is celebrated for worldwide.
            </p>

            {/* Timeline with icons */}
            <div className="pt-4 space-y-6">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="group"
                >
                  <div className="flex gap-5 items-start">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {t.icon}
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-gold/40 to-transparent"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-1.5">{t.year}</div>
                      <h3 className="font-display text-xl md:text-2xl text-forest-deep mb-2 group-hover:text-gold transition-colors duration-300">
                        {t.title}
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{t.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-6"
            >
              <a
                href="#products"
                className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gold to-amber-600 text-forest-deep font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base md:text-lg"
              >
                Discover Our Journey
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Tea leaf pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 opacity-10 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor" className="text-forest-deep"/>
        </svg>
      </div>
    </section>
  );
}