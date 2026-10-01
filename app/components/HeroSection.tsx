"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Home, Calendar, MessageCircle, X, SportShoe } from "lucide-react";
import WaitlistForm from "./WaitlistForm";
import ArunMascot from "./ArunMascot";



export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [actionState, setActionState] = useState<'idle' | 'accepted' | 'declined'>('idle');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.15]);
  const phoneY = useTransform(scrollYProgress, [0, 0.8], [0, -120]);
  
  // Soft orange glow contour around the phone:
  // Pure glow (lueur), no solid background, strictly wraps the phone and fades out as user scrolls down.
  const phoneGlowOpacity = useTransform(scrollYProgress, [0.2, 0.45], [1, 0]);

  return (
    <section ref={containerRef} className="relative pt-[140px] pb-8 min-h-[115vh]">
      {/* Sticky hero text */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="sticky top-[140px] z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center"
      >
        {/* Mascot waving - the personality */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ rotate: [0, -5, 5, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
          >
            <ArunMascot size={72} mood="wave" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-[40px] sm:text-[60px] md:text-[76px] font-semibold tracking-[-0.04em] text-foreground leading-[1.05]"
        >
          Votre agenda. <br className="hidden sm:block" />
          Votre chrono. <br className="hidden sm:block" />
          <span className="text-muted-light">Synchronisés.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-[17px] sm:text-[20px] text-muted leading-[1.55] max-w-2xl font-medium tracking-tight"
        >
          Arun est le premier copilote IA qui synchronise votre Google Calendar,
          vos données Garmin et votre objectif marathon : pour que chaque séance
          trouve sa place dans votre vraie vie.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 w-full flex justify-center"
          id="waitlist"
        >
          <WaitlistForm id="hero-waitlist" variant="light" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-3 text-[13px] text-muted-light"
        >
          Gratuit pendant la bêta · Aucune carte bancaire
        </motion.p>
      </motion.div>

      {/* Phone mockup - scales up on scroll */}
      <motion.div
        style={{ scale: phoneScale, y: phoneY }}
        className="relative z-20 mt-24 w-full max-w-[320px] mx-auto flex justify-center origin-top"
      >
        {/* Glowing contour around the phone (pure soft lueur, no ball, fades on scroll) */}
        <motion.div 
           style={{ opacity: phoneGlowOpacity }} 
           className="absolute inset-0 rounded-[3rem] pointer-events-none z-[-1] shadow-[0_0_50px_15px_rgba(249,115,22,0.5)]"
        />

        <div className="relative bg-white border-[6px] border-zinc-100 rounded-[3rem] p-2 apple-shadow w-full">
          <div className="bg-surface rounded-[2.5rem] overflow-hidden aspect-[9/19] flex flex-col border border-black/[0.03] relative">
            <div className="pt-12 px-5 flex flex-col gap-3.5 h-full relative z-10">
              
              {/* Decorative Large Mascot in Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -top-1 -right-2 rotate-[8deg] drop-shadow-xl hover:rotate-[0deg] transition-all duration-500 hover:scale-105 pointer-events-auto">
                <ArunMascot size={110} mood={actionState === 'idle' ? 'think' : (actionState === 'accepted' ? 'happy' : 'sad')} className="transition-all duration-500" />
              </div>

              <div className="relative z-20 w-[65%] mt-2">
                <p className="text-muted text-[12px] font-medium tracking-wide">
                  Mardi 1 Octobre
                </p>
                <h2 className="text-foreground text-[22px] font-semibold tracking-tight mt-1 leading-[1.2]">
                  Bonjour, Thomas 👋
                </h2>
              </div>

              {/* Arun notification card - the "magic moment" */}
              <div className="bg-white rounded-2xl p-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-black/[0.03]">
                <div className="flex items-start gap-2.5">
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-semibold text-accent uppercase tracking-wider">
                      Arun · il y a 3 min
                    </p>
                    <p className="text-[12px] text-foreground leading-[1.4] mt-1 font-medium">
                      ⚠️ Manque de sommeil détecté. Ce sera une séance légère aujourd&apos;hui. Etant donné ta nouvelle réunion de 17h, j&apos;ai décalé ton run à 18h30. Ça te convient ?
                    </p>
                    {actionState === 'idle' ? (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 flex gap-2">
                        <button onClick={() => setActionState('accepted')} className="flex-1 bg-foreground text-white rounded-lg py-1.5 text-[10px] font-semibold transition-transform active:scale-95 cursor-pointer hover:bg-foreground/90">Accepter</button>
                        <button onClick={() => setActionState('declined')} className="flex-1 bg-surface text-foreground rounded-lg py-1.5 text-[10px] font-semibold border border-black/[0.05] transition-transform active:scale-95 cursor-pointer hover:bg-black/5">Refuser</button>
                      </motion.div>
                    ) : (
                      <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className={`mt-3 text-[11px] font-semibold ${actionState === 'accepted' ? 'text-green-600' : 'text-red-500'}`}>
                        {actionState === 'accepted' ? '✅ Plan mis à jour avec succès.' : '❌ Modifications ignorées.'}
                      </motion.p>
                    )}
                  </div>
                </div>
              </div>

              {/* Session card */}
              <div className="bg-white rounded-2xl p-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-black/[0.03]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center">
                    <SportShoe className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-foreground">
                      Footing de récupération
                    </div>
                    <div className="text-[10px] text-muted">
                      18h30 – 19h15 · Fin de journée
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { label: "Durée", value: "45 min" },
                    { label: "Allure", value: "6:15" },
                    { label: "FC", value: "Z2" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-surface-dark rounded-xl py-2 flex flex-col items-center"
                    >
                      <span className="text-[9px] text-muted font-medium">
                        {stat.label}
                      </span>
                      <span className="text-[13px] font-semibold text-foreground">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* HRV mini card */}
              <div className="bg-white rounded-2xl p-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-black/[0.03]">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-foreground">
                    Récupération
                  </span>
                  <span className="text-[11px] font-semibold text-orange-500">
                    42% · Fatigué
                  </span>
                </div>
                <div className="mt-2 flex items-end gap-[3px] h-5">
                  {[70, 80, 85, 90, 80, 50, 42].map((v, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-[2px] ${i === 6 ? 'bg-orange-400' : 'bg-green-500/25'}`}
                      style={{ height: `${v}%` }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Bottom Navbar */}
              <div className="mt-auto bg-white border-t border-black/[0.03] pt-4 pb-6 px-8 flex justify-between items-center relative z-20">
                <div className="flex flex-col items-center gap-1 opacity-100 cursor-pointer">
                  <Home className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex flex-col items-center gap-1 opacity-30 hover:opacity-100 transition-opacity cursor-pointer">
                  <Calendar className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex flex-col items-center gap-1 opacity-30 hover:opacity-100 transition-opacity cursor-pointer">
                  <SportShoe className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex flex-col items-center gap-1 opacity-30 hover:opacity-100 transition-opacity cursor-pointer">
                  <MessageCircle className="w-5 h-5 text-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
