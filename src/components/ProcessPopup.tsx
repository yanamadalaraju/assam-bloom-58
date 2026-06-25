// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Play, Leaf } from "lucide-react";

// const steps = [
//   {
//     n: "01",
//     title: "Plucking",
//     text: "Only the top two leaves and a bud are hand-plucked at first light, when the leaf is rich with essential oils.",
//     video: "https://www.youtube.com/embed/lzMxJlVQzE8",
//     thumb: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=800&q=70",
//   },
//   {
//     n: "02",
//     title: "Withering",
//     text: "Leaves rest on troughs for 12–18 hours so moisture gently evaporates and the aroma awakens.",
//     video: "https://www.youtube.com/embed/V8Ph1vMHsRA",
//     thumb: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=800&q=70",
//   },
//   {
//     n: "03",
//     title: "Rolling & Oxidation",
//     text: "Leaves are rolled to release their juices, then oxidised — the soul of Assam's bold malty character.",
//     video: "https://www.youtube.com/embed/CMYHEvAJ3jE",
//     thumb: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=70",
//   },
//   {
//     n: "04",
//     title: "Firing & Sorting",
//     text: "A precise heat locks in flavor. Master tasters sort, grade, and pack each batch for export.",
//     video: "https://www.youtube.com/embed/7gFnZ7w7Q4E",
//     thumb: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=70",
//   },
// ];

// export function ProcessPopup() {
//   const [open, setOpen] = useState(false);
//   const [shown, setShown] = useState(false);
//   const [active, setActive] = useState(0);
//   const triggerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && !shown) {
//           setOpen(true);
//           setShown(true);
//         }
//       },
//       { threshold: 0.4 }
//     );
//     if (triggerRef.current) obs.observe(triggerRef.current);
//     return () => obs.disconnect();
//   }, [shown]);

//   return (
//     <>
//       {/* invisible trigger — placed before BulkOrder/Export */}
//       <div ref={triggerRef} aria-hidden className="h-px w-full" />

//       {/* manual re-open button */}
//       <button
//         onClick={() => {
//           setOpen(true);
//           setActive(0);
//         }}
//         className="fixed bottom-6 left-6 z-40 group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 font-display text-xs uppercase tracking-[0.25em] text-forest-deep shadow-gold hover:scale-105 transition-transform"
//       >
//         <Play className="h-3.5 w-3.5" /> Tea Process
//       </button>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.4 }}
//             className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-forest-deep/85 backdrop-blur-xl"
//             onClick={() => setOpen(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 30, opacity: 0 }}
//               animate={{ scale: 1, y: 0, opacity: 1 }}
//               exit={{ scale: 0.92, opacity: 0 }}
//               transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-sm bg-forest-deep border border-gold/30 shadow-luxury"
//             >
//               <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gold/15 blur-3xl pointer-events-none" />
//               <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-forest/40 blur-3xl pointer-events-none" />

//               <button
//                 onClick={() => setOpen(false)}
//                 className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-forest-deep transition-all flex items-center justify-center"
//                 aria-label="Close"
//               >
//                 <X className="h-4 w-4" />
//               </button>

//               <div className="relative grid md:grid-cols-[280px_1fr] max-h-[90vh] overflow-hidden">
//                 {/* Sidebar steps */}
//                 <div className="border-b md:border-b-0 md:border-r border-gold/15 p-6 md:p-8 bg-forest-deep/60">
//                   <div className="flex items-center gap-2 mb-6">
//                     <Leaf className="h-4 w-4 text-gold" />
//                     <span className="font-display text-xs uppercase tracking-[0.35em] text-gold">From Leaf to Cup</span>
//                   </div>
//                   <h3 className="font-display text-3xl text-cream leading-tight mb-6">
//                     The <span className="italic text-gradient-gold">Tea-making</span> journey
//                   </h3>
//                   <div className="space-y-1">
//                     {steps.map((s, i) => (
//                       <button
//                         key={s.n}
//                         onClick={() => setActive(i)}
//                         className={`group w-full text-left rounded-sm px-4 py-3 border transition-all ${
//                           active === i
//                             ? "border-gold/50 bg-gold/10"
//                             : "border-transparent hover:border-gold/20 hover:bg-forest/30"
//                         }`}
//                       >
//                         <div className="flex items-center gap-3">
//                           <span className={`font-display text-sm ${active === i ? "text-gold" : "text-cream/40"}`}>
//                             {s.n}
//                           </span>
//                           <span className={`font-display text-base ${active === i ? "text-cream" : "text-cream/70"}`}>
//                             {s.title}
//                           </span>
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Main */}
//                 <div className="relative p-6 md:p-8 overflow-y-auto">
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={active}
//                       initial={{ opacity: 0, y: 15 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-gold/20 mb-5 bg-black">
//                         <iframe
//                           src={steps[active].video}
//                           title={steps[active].title}
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                           allowFullScreen
//                           className="absolute inset-0 h-full w-full"
//                         />
//                       </div>
//                       <div className="flex items-baseline gap-4 mb-3">
//                         <span className="font-display text-5xl text-gradient-gold leading-none">
//                           {steps[active].n}
//                         </span>
//                         <h4 className="font-display text-3xl text-cream">{steps[active].title}</h4>
//                       </div>
//                       <p className="font-display text-cream/75 text-lg leading-relaxed">{steps[active].text}</p>

//                       <div className="mt-6 flex items-center justify-between gap-3">
//                         <button
//                           disabled={active === 0}
//                           onClick={() => setActive((a) => Math.max(0, a - 1))}
//                           className="font-display text-xs uppercase tracking-[0.3em] text-cream/60 hover:text-gold disabled:opacity-30 disabled:hover:text-cream/60 transition"
//                         >
//                           ← Previous
//                         </button>
//                         <div className="flex gap-1.5">
//                           {steps.map((_, i) => (
//                             <span
//                               key={i}
//                               className={`h-1 rounded-full transition-all ${
//                                 i === active ? "w-8 bg-gold" : "w-2 bg-cream/25"
//                               }`}
//                             />
//                           ))}
//                         </div>
//                         <button
//                           disabled={active === steps.length - 1}
//                           onClick={() => setActive((a) => Math.min(steps.length - 1, a + 1))}
//                           className="font-display text-xs uppercase tracking-[0.3em] text-gold hover:text-cream disabled:opacity-30 transition"
//                         >
//                           Next →
//                         </button>
//                       </div>
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Leaf, Volume2, VolumeX } from "lucide-react";

// Import videos from assets folder
import pluckingVideo from "@/assets/8507727-hd_1920_1080_25fps.mp4";
import witheringVideo from "@/assets/8789275-uhd_3840_2160_30fps.mp4";
import rollingVideo from "@/assets/8507727-hd_1920_1080_25fps.mp4";
import firingVideo from "@/assets/15862771_1920_1080_30fps.mp4";

// Or if you have them named differently, adjust accordingly
// If you don't have the videos yet, you can use these placeholder imports
// import video1 from "@/assets/Tea-process-1.mp4";
// import video2 from "@/assets/Tea-process-2.mp4";
// import video3 from "@/assets/Tea-process-3.mp4";
// import video4 from "@/assets/Tea-process-4.mp4";

const steps = [
  {
    n: "01",
    title: "Plucking",
    text: "Only the top two leaves and a bud are hand-plucked at first light, when the leaf is rich with essential oils.",
    video: pluckingVideo,
    thumb: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=800&q=70",
  },
  {
    n: "02",
    title: "Withering",
    text: "Leaves rest on troughs for 12–18 hours so moisture gently evaporates and the aroma awakens.",
    video: witheringVideo,
    thumb: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=800&q=70",
  },
  {
    n: "03",
    title: "Rolling & Oxidation",
    text: "Leaves are rolled to release their juices, then oxidised — the soul of Assam's bold malty character.",
    video: rollingVideo,
    thumb: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=70",
  },
  {
    n: "04",
    title: "Firing & Sorting",
    text: "A precise heat locks in flavor. Master tasters sort, grade, and pack each batch for export.",
    video: firingVideo,
    thumb: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=70",
  },
];

export function ProcessPopup() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !shown) {
          setOpen(true);
          setShown(true);
        }
      },
      { threshold: 0.4 }
    );
    if (triggerRef.current) obs.observe(triggerRef.current);
    return () => obs.disconnect();
  }, [shown]);

  // Handle video play/pause when active changes
  useEffect(() => {
    if (videoRef.current && open) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.log("Video play failed:", error);
      });
    }
  }, [active, open]);

  // Handle mute/unmute
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <>
      {/* invisible trigger — placed before BulkOrder/Export */}
      <div ref={triggerRef} aria-hidden className="h-px w-full" />

      {/* manual re-open button */}
      <button
        onClick={() => {
          setOpen(true);
          setActive(0);
        }}
        className="fixed bottom-6 left-6 z-40 group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 font-display text-xs uppercase tracking-[0.25em] text-forest-deep shadow-gold hover:scale-105 transition-transform"
      >
        <Play className="h-3.5 w-3.5" /> Tea Process
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-forest-deep/85 backdrop-blur-xl"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-sm bg-forest-deep border border-gold/30 shadow-luxury"
            >
              <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gold/15 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-forest/40 blur-3xl pointer-events-none" />

              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-forest-deep transition-all flex items-center justify-center"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative grid md:grid-cols-[280px_1fr] max-h-[90vh] overflow-hidden">
                {/* Sidebar steps */}
                <div className="border-b md:border-b-0 md:border-r border-gold/15 p-6 md:p-8 bg-forest-deep/60 overflow-y-auto">
                  <div className="flex items-center gap-2 mb-6">
                    <Leaf className="h-4 w-4 text-gold" />
                    <span className="font-display text-xs uppercase tracking-[0.35em] text-gold">From Leaf to Cup</span>
                  </div>
                  <h3 className="font-display text-3xl text-cream leading-tight mb-6">
                    The <span className="italic text-gradient-gold">Tea-making</span> journey
                  </h3>
                  <div className="space-y-1">
                    {steps.map((s, i) => (
                      <button
                        key={s.n}
                        onClick={() => setActive(i)}
                        className={`group w-full text-left rounded-sm px-4 py-3 border transition-all ${
                          active === i
                            ? "border-gold/50 bg-gold/10"
                            : "border-transparent hover:border-gold/20 hover:bg-forest/30"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`font-display text-sm ${active === i ? "text-gold" : "text-cream/40"}`}>
                            {s.n}
                          </span>
                          <span className={`font-display text-base ${active === i ? "text-cream" : "text-cream/70"}`}>
                            {s.title}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main */}
                <div className="relative p-6 md:p-8 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-gold/20 mb-5 bg-black/50">
                        <video
                          ref={videoRef}
                          src={steps[active].video}
                          title={steps[active].title}
                          autoPlay
                          loop
                          muted={isMuted}
                          playsInline
                          className="absolute inset-0 h-full w-full object-cover"
                          onError={(e) => {
                            console.error("Video failed to load:", steps[active].title);
                            e.currentTarget.poster = steps[active].thumb;
                          }}
                        />
                        
                        {/* Video controls overlay */}
                        <div className="absolute bottom-3 right-3 z-10 flex gap-2">
                          <button
                            onClick={() => setIsMuted(!isMuted)}
                            className="h-8 w-8 rounded-full bg-black/50 hover:bg-gold text-cream hover:text-forest-deep transition-all flex items-center justify-center backdrop-blur-sm"
                            aria-label={isMuted ? "Unmute" : "Mute"}
                          >
                            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-baseline gap-4 mb-3">
                        <span className="font-display text-5xl text-gradient-gold leading-none">
                          {steps[active].n}
                        </span>
                        <h4 className="font-display text-3xl text-cream">{steps[active].title}</h4>
                      </div>
                      <p className="font-display text-cream/75 text-lg leading-relaxed">{steps[active].text}</p>

                      <div className="mt-6 flex items-center justify-between gap-3">
                        <button
                          disabled={active === 0}
                          onClick={() => setActive((a) => Math.max(0, a - 1))}
                          className="font-display text-xs uppercase tracking-[0.3em] text-cream/60 hover:text-gold disabled:opacity-30 disabled:hover:text-cream/60 transition"
                        >
                          ← Previous
                        </button>
                        <div className="flex gap-1.5">
                          {steps.map((_, i) => (
                            <span
                              key={i}
                              className={`h-1 rounded-full transition-all ${
                                i === active ? "w-8 bg-gold" : "w-2 bg-cream/25"
                              }`}
                            />
                          ))}
                        </div>
                        <button
                          disabled={active === steps.length - 1}
                                          onClick={() => setActive((a) => Math.min(steps.length - 1, a + 1))}
                          className="font-display text-xs uppercase tracking-[0.3em] text-gold hover:text-cream disabled:opacity-30 transition"
                        >
                          Next →
                        </button>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}