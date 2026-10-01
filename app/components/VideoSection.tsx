import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Scroll-linked progressive lighting of the arrow (stem + arrowhead as ONE unified piece)
  const arrowOpacity = useTransform(scrollYProgress, [0.02, 0.18, 0.55, 0.72], [0, 1, 1, 0]);
  const bodyProgress = useTransform(scrollYProgress, [0.05, 0.45], [0, 1]);
  const arrowGlowOpacity = useTransform(scrollYProgress, [0.08, 0.4], [0.3, 0.85]);

  // Soft gradient mask: feathers the advancing light edge so it's smooth and organic (no hard square cut)
  const maskImage = useTransform(bodyProgress, (v) => {
    if (v <= 0.01) return "linear-gradient(to bottom, transparent 0%, transparent 100%)";
    if (v >= 0.96) return "linear-gradient(to bottom, black 0%, black 100%)";
    const pct = Math.round(v * 100);
    const fadeStart = Math.max(0, pct - 16);
    const fadeEnd = Math.min(100, pct + 8);
    return `linear-gradient(to bottom, black 0%, black ${fadeStart}%, transparent ${fadeEnd}%, transparent 100%)`;
  });

  // The full video contour smoothly scales up and fades in as the video centers
  const glowScale = useTransform(scrollYProgress, [0.55, 0.78], [0.95, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.55, 0.78], [0, 1]);

  return (
    <section ref={containerRef} className="pt-6 sm:pt-10 pb-24 sm:pb-32 px-6 sm:px-8 relative z-10">
      
      {/* Downward Arrow: unified single piece with natural progressive soft glow */}
      <motion.div 
        style={{ opacity: arrowOpacity }}
        className="flex flex-col items-center justify-center mb-3 sm:mb-4 pointer-events-none select-none relative z-20"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-6 h-36 sm:h-44 flex items-center justify-center"
        >
          {/* 1. Base track: neutral subtle arrow (stem + head) */}
          <svg
            viewBox="0 0 24 180"
            className="w-full h-full stroke-zinc-200/90 fill-none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 12 4 L 12 174 M 5 163 L 12 174 L 19 163" />
          </svg>

          {/* 2. Illuminated arrow with soft organic feather & subtle halo (never squared, never harsh) */}
          <motion.div
            style={{ 
              WebkitMaskImage: maskImage,
              maskImage: maskImage,
              opacity: arrowGlowOpacity
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {/* Subtle soft orange glow (delicate blur, low intensity) */}
            <svg
              viewBox="0 0 24 180"
              className="absolute inset-0 w-full h-full stroke-orange-500/40 fill-none blur-[4px]"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 12 4 L 12 174 M 5 163 L 12 174 L 19 163" />
            </svg>

            {/* Crisp warm orange core */}
            <svg
              viewBox="0 0 24 180"
              className="w-full h-full stroke-accent fill-none drop-shadow-[0_0_4px_rgba(249,115,22,0.5)]"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 12 4 L 12 174 M 5 163 L 12 174 L 19 163" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        {/* The Contour Glow */}
        <motion.div 
           style={{ 
             width: "100%", 
             height: "100%",
             borderRadius: "48px",
             opacity: glowOpacity,
             scale: glowScale,
             top: 0,
             left: 0
           }} 
           className="absolute pointer-events-none z-0 shadow-[0_0_40px_10px_rgba(249,115,22,0.6)] transition-shadow duration-75"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 rounded-[2rem] sm:rounded-[3rem] bg-surface-dark border border-black/[0.05] aspect-video w-full overflow-hidden flex items-center justify-center group cursor-pointer apple-shadow"
        >
          {/* Video Content */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-blue-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center apple-shadow transform transition-transform duration-500 group-hover:scale-110">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-foreground ml-1 sm:ml-2" />
               </div>
            </div>

            <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white/80 font-medium text-[14px]">Découvrir Arun (2:14)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
