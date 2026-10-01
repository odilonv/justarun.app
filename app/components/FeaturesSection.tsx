"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  CalendarDays,
  Heart,
  MessageCircle,
  ArrowDown,
  Clock,
  AlertTriangle,
  Activity,
  Send,
} from "lucide-react";
import ArunMascot from "./ArunMascot";

/* ------------------------------------------------------------------ */
/*  VISUAL CARDS                                                       */
/* ------------------------------------------------------------------ */

function CalendarCard() {
  return (
    <div className="w-full apple-glass rounded-[2.5rem] p-6 sm:p-8 apple-shadow">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[14px] font-semibold text-foreground">Jeudi 3 Oct</span>
        <span className="text-[11px] text-muted font-medium px-2.5 py-1 rounded-lg bg-black/[0.03]">Google Calendar</span>
      </div>

      <div className="space-y-3">
        <div className="flex gap-3 items-stretch">
          <div className="w-[3px] rounded-full bg-blue-400 shrink-0" />
          <div className="flex-1 bg-white/60 rounded-xl p-3.5 border border-black/[0.02]">
            <div className="text-[11px] text-muted font-medium mb-0.5">09:00 – 10:30</div>
            <div className="text-[14px] font-semibold text-foreground">Sprint Review</div>
          </div>
        </div>

        <div className="flex gap-3 items-stretch">
          <div className="w-[3px] rounded-full bg-zinc-200 shrink-0" />
          <div className="flex-1 bg-white/30 rounded-xl p-3.5 opacity-60 border border-black/[0.02]">
            <div className="text-[11px] text-muted font-medium mb-0.5 line-through">18:00 – 19:00</div>
            <div className="text-[14px] font-semibold text-foreground line-through flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
              Séance de seuil
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-1">
          <ArrowDown className="w-4 h-4 text-accent" />
        </div>

        <div className="flex gap-3 items-stretch">
          <div className="w-[3px] rounded-full bg-accent shrink-0" />
          <div className="flex-1 bg-orange-50/80 rounded-xl p-4 border border-accent/10">
            <div className="flex items-center gap-2 mb-1.5">
              <ArunMascot size={16} mood="happy" className="shrink-0" />
              <span className="text-[10px] text-accent font-bold uppercase tracking-wider">Reprogrammé par Arun</span>
            </div>
            <div className="text-[11px] text-muted font-medium flex items-center gap-1 mb-0.5">
              <Clock className="w-3 h-3 shrink-0" />
              12:30 – 13:20 · Pause déjeuner
            </div>
            <div className="text-[14px] font-semibold text-foreground">🏃 Séance de seuil</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HealthCard() {
  return (
    <div className="w-full apple-glass rounded-[2.5rem] p-6 sm:p-8 apple-shadow">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[14px] font-semibold text-foreground">Samedi matin</span>
        <span className="text-[11px] text-muted font-medium px-2.5 py-1 rounded-lg bg-black/[0.03]">Garmin Connect</span>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-foreground" />
            <span className="text-[12px] text-foreground font-semibold">VFC · 7 jours</span>
          </div>
          <span className="text-[12px] font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded-md">↓ En baisse</span>
        </div>
        
        <div className="relative h-32 flex items-end gap-2 w-full">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
             <div className="w-full border-t border-dashed border-black/[0.06]" />
             <div className="w-full border-t border-dashed border-black/[0.06]" />
             <div className="w-full border-t border-dashed border-black/[0.06]" />
             <div className="w-full border-t border-solid border-black/[0.1]" />
          </div>
          
          {[72, 68, 62, 55, 45, 38, 32].map((v, i) => (
            <div key={i} className="flex-1 flex flex-col items-center h-full justify-end relative z-10">
              <span className="text-[10px] font-bold text-foreground/60 mb-1">{v}</span>
              <div
                className={`w-full rounded-t-md transition-all duration-300 ${i >= 4 ? "bg-gradient-to-t from-red-500/60 to-red-400" : "bg-gradient-to-t from-black/[0.04] to-black/[0.12]"}`}
                style={{ height: `calc(${v}% - 28px)` }}
              />
              <span className="text-[10px] font-medium text-muted mt-2">{["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"][i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-orange-50/80 rounded-2xl p-4 border border-accent/10">
        <div className="flex items-start gap-3">
          <ArunMascot size={24} mood="think" className="shrink-0 mt-0.5" />
          <div>
            <p className="text-[10px] text-accent font-bold uppercase tracking-wider mb-1">Intervention Arun</p>
            <p className="text-[13px] text-foreground leading-[1.55] font-medium">
              VFC en baisse de 18%. Sortie longue annulée → <span className="font-semibold text-accent">footing de récup 60 min</span>. Longue reportée à demain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatCard() {
  return (
    <div className="w-full apple-glass rounded-[2.5rem] p-6 sm:p-8 apple-shadow">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-black/[0.03]">
        <ArunMascot size={32} mood="happy" className="shrink-0" />
        <div>
          <span className="text-[15px] font-semibold text-foreground block">Arun</span>
          <span className="text-[11px] text-green-600 font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            En ligne
          </span>
        </div>
      </div>

      <div className="space-y-3.5">
        <div className="flex justify-end">
          <div className="bg-foreground text-white rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%]">
            <p className="text-[13px] leading-relaxed font-medium">
              Je suis en déplacement à New York du 5 au 9 oct. Adapte mon plan.
            </p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-white/60 border border-black/[0.02] rounded-2xl rounded-bl-sm px-4 py-3 max-w-[90%]">
            <p className="text-[13px] text-foreground leading-[1.55] font-medium">
              C&apos;est noté ! 🗽 J&apos;ai compressé tes intervalles lundi avant le vol, trouvé 3 parcours près de ton hôtel à Midtown, et protégé ta sortie longue pour dimanche.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-foreground text-white rounded-2xl rounded-br-sm px-4 py-3">
            <p className="text-[13px] font-medium">Parfait, valide ça 👍</p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-white/60 border border-black/[0.02] rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
            <p className="text-[13px] text-foreground leading-[1.55] font-medium">
              ✅ Plan mis à jour et synchronisé avec Google Calendar. Bon vol !
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2.5">
        <div className="flex-1 bg-white/50 rounded-xl px-4 py-2.5 text-[13px] text-muted-light border border-black/[0.03]">
          Demandez à Arun...
        </div>
        <div className="w-9 h-9 rounded-xl bg-foreground flex items-center justify-center shrink-0">
          <Send className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FEATURES DATA                                                      */
/* ------------------------------------------------------------------ */

const features = [
  {
    title: "Arun lit votre agenda.",
    description: "Une urgence au travail ? Arun scanne votre calendrier, trouve un créneau libre de 50 minutes ce midi et y déplace votre séance. Automatiquement.",
    icon: CalendarDays,
    Visual: CalendarCard,
  },
  {
    title: "Arun protège votre corps.",
    description: "VFC en chute libre et nuit agitée ? Avant même que vous laciez vos chaussures, Arun annule la séance intense et la remplace par de la récupération.",
    icon: Heart,
    Visual: HealthCard,
  },
  {
    title: "Parlez-lui naturellement.",
    description: "Pas de menus compliqués. Dites simplement « je pars à NYC mardi » et Arun redessine votre semaine et ajuste le volume.",
    icon: MessageCircle,
    Visual: ChatCard,
  },
];

/* ------------------------------------------------------------------ */
/*  INDIVIDUAL FEATURE PANEL (smooth scroll-linked)                    */
/* ------------------------------------------------------------------ */

function FeaturePanel({
  feature,
  index,
  scrollYProgress,
  total,
}: {
  feature: (typeof features)[0];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  total: number;
}) {
  const segLen = 1 / total;
  const start = index * segLen;
  const end = (index + 1) * segLen;

  // Smooth fade in/out with generous overlap
  const opacity = useTransform(
    scrollYProgress,
    [
      start,                    // fully invisible
      start + segLen * 0.15,    // fade in complete
      end - segLen * 0.15,      // start fading out
      end,                      // fully invisible
    ],
    [0, 1, 1, 0]
  );

  // Gentle vertical slide
  const y = useTransform(
    scrollYProgress,
    [start, start + segLen * 0.15, end - segLen * 0.15, end],
    [40, 0, 0, -40]
  );

  return (
    <motion.div
      style={{ opacity, y, willChange: "transform, opacity" }}
      className="absolute inset-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
    >
      {/* Text */}
      <div className="flex-1 w-full flex flex-col justify-center">
        <div className="w-12 h-12 rounded-2xl bg-surface-dark flex items-center justify-center mb-6">
          <feature.icon className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-[32px] sm:text-[44px] md:text-[52px] font-semibold tracking-[-0.03em] text-foreground leading-[1.1]">
          {feature.title}
        </h3>
        <p className="mt-5 text-[17px] sm:text-[20px] text-muted leading-[1.55] font-medium max-w-md tracking-tight">
          {feature.description}
        </p>
      </div>

      {/* Visual */}
      <div className="flex-1 w-full max-w-md lg:max-w-lg">
        <feature.Visual />
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN SECTION                                                       */
/* ------------------------------------------------------------------ */

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="features"
      ref={containerRef}
      className="relative bg-[#f4f5f7]"
      style={{ height: `${features.length * 100}vh` }}
    >
      {/* Subtle colorful mesh for the glass to blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="sticky top-0 h-screen w-full">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] left-[30%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
        </div>
      </div>

      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden z-10">
        <div className="max-w-6xl mx-auto w-full px-6 sm:px-8 relative min-h-[500px]">
          {features.map((feature, i) => (
            <FeaturePanel
              key={i}
              feature={feature}
              index={i}
              scrollYProgress={scrollYProgress}
              total={features.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
