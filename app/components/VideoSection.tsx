"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Volume2, VolumeX, Play, Pause, RotateCcw } from "lucide-react";

export default function VideoSection() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(1);
  const isVideoInView = useInView(videoRef, { margin: "-100px" });

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoInView && isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoInView, isPlaying]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
      if (!newMuted && volume === 0) {
        setVolume(1);
        videoRef.current.volume = 1;
      }
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const restartVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      if (!isPlaying) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };
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
          className="relative z-10 rounded-[2rem] sm:rounded-[3rem] bg-surface-dark border border-black/[0.05] aspect-video w-full overflow-hidden flex items-center justify-center apple-shadow"
        >
          {/* Video Content */}
          <div className="relative z-10 w-full h-full flex items-center justify-center bg-transparent group">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              onClick={togglePlay}
              className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
            >
              <source src="/arun-launch-video.mp4" type="video/mp4" />
            </video>

            {/* Unmute Prompt Badge */}
            {isMuted && (
              <div 
                className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 cursor-pointer group/badge"
                onClick={toggleMute}
              >
                <div className="flex items-center gap-2 bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all animate-pulse group-hover/badge:animate-none group-hover/badge:scale-105">
                  <VolumeX className="w-4 h-4" />
                  Activer le son
                </div>
              </div>
            )}

            {/* Custom Controls Overlay */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <button
                onClick={restartVideo}
                className="cursor-pointer w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 border border-white/10"
                title="Recommencer"
              >
                <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={togglePlay}
                className="cursor-pointer w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 border border-white/10"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" />
                )}
              </button>
              <div className="group/volume flex items-center bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white transition-all duration-300 border border-white/10 overflow-hidden">
                <button
                  onClick={toggleMute}
                  className="cursor-pointer w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0"
                  title={isMuted ? "Activer le son" : "Désactiver le son"}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </button>
                <div className="w-0 group-hover/volume:w-24 sm:group-hover/volume:w-28 overflow-hidden transition-all duration-300 ease-out flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                      const newVolume = parseFloat(e.target.value);
                      setVolume(newVolume);
                      if (videoRef.current) {
                        videoRef.current.volume = newVolume;
                        if (newVolume === 0) {
                          videoRef.current.muted = true;
                          setIsMuted(true);
                        } else {
                          videoRef.current.muted = false;
                          setIsMuted(false);
                        }
                      }
                    }}
                    style={{
                      background: `linear-gradient(to right, white ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.3) ${(isMuted ? 0 : volume) * 100}%)`
                    }}
                    className="w-20 sm:w-24 h-1.5 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full mr-3 sm:mr-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
