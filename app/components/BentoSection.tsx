"use client";

import { motion } from "framer-motion";
import { Heart, CalendarDays, Zap, TrendingUp, ShieldCheck } from "lucide-react";
import ArunMascot from "./ArunMascot";

export default function BentoSection() {
  return (
    <section className="py-32 px-6 sm:px-8 bg-surface-dark border-t border-black/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[32px] sm:text-[48px] font-semibold tracking-tight text-foreground mb-4">
            Un entraînement autonome.
          </h2>
          <p className="text-[18px] sm:text-[20px] text-muted max-w-2xl mx-auto font-medium">
            Arun croise vos données de santé et votre agenda en temps réel pour générer le plan parfait, chaque jour.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Item: Calendar Sync */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 bg-white rounded-[2.5rem] p-8 sm:p-12 border border-black/[0.03] apple-shadow relative overflow-hidden flex flex-col justify-between min-h-[360px]"
          >
            <div className="relative z-10 max-w-md mb-32 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <CalendarDays className="w-5 h-5 text-blue-500" />
                <span className="text-[12px] font-bold tracking-widest uppercase text-blue-500">Agenda dynamique</span>
              </div>
              <h3 className="text-[28px] sm:text-[32px] font-semibold text-foreground leading-[1.1] mb-4">
                Votre emploi du temps dicte le plan, pas l&apos;inverse.
              </h3>
              <p className="text-[16px] text-muted font-medium">
                Une réunion qui s&apos;éternise ? Un vol décalé ? Arun réorganise instantanément votre semaine pour caler vos séances là où vous avez vraiment le temps.
              </p>
            </div>
            
            {/* Visual element */}
            <div className="absolute right-0 bottom-0 md:-bottom-10 md:-right-10 w-full max-w-[300px] md:opacity-100 pointer-events-none">
              <div className="bg-surface-dark/80 backdrop-blur-md p-4 rounded-tl-3xl border-t border-l border-black/5 shadow-2xl">
                 <div className="space-y-3">
                   <div className="h-10 bg-blue-100 rounded-lg flex items-center px-4"><span className="text-[11px] font-semibold text-blue-800">14:00 - Board Meeting</span></div>
                   <div className="h-12 bg-accent/20 rounded-lg flex items-center px-4 border border-accent/30"><span className="text-[12px] font-semibold text-accent">17:30 - Run 45min (Reprogrammé)</span></div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Small Item: HRV */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-[2.5rem] p-8 sm:p-10 border border-black/[0.03] apple-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-accent" />
                <span className="text-[12px] font-bold tracking-widest uppercase text-accent">Garde-fou</span>
              </div>
              <h3 className="text-[24px] font-semibold text-foreground leading-[1.1] mb-3">
                Protection anti-blessure.
              </h3>
              <p className="text-[15px] text-muted font-medium mb-8">
                Si votre VFC est trop basse, les séances intenses sont annulées.
              </p>
            </div>
            <div className="mt-auto h-24 flex items-end justify-between gap-1 opacity-80">
              {[40, 55, 30, 70, 85, 90].map((v, i) => (
                <div key={i} className={`w-full rounded-t-md ${i === 2 ? 'bg-red-400' : 'bg-green-400'}`} style={{ height: `${v}%` }} />
              ))}
            </div>
          </motion.div>

          {/* Small Item: AI Agent */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[2.5rem] p-8 sm:p-10 border border-black/[0.03] apple-shadow flex flex-col items-center text-center justify-center min-h-[300px]"
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <ArunMascot size={48} mood="think" />
            </div>
            <h3 className="text-[20px] font-semibold text-foreground mb-2">
              L&apos;agent superviseur.
            </h3>
            <p className="text-[14px] text-muted font-medium">
              Analyse en permanence 50+ variables pour ajuster la charge globale.
            </p>
          </motion.div>

          {/* Large Item: Performance */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 bg-foreground text-white rounded-[2.5rem] p-8 sm:p-12 apple-shadow relative overflow-hidden flex flex-col justify-center min-h-[300px]"
          >
            <div className="relative z-10 max-w-md">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-white/60" />
                <span className="text-[12px] font-bold tracking-widest uppercase text-white/60">Performance</span>
              </div>
              <h3 className="text-[28px] sm:text-[32px] font-semibold leading-[1.1] mb-4">
                Conçu pour les RP.
              </h3>
              <p className="text-[16px] text-white/60 font-medium">
                S&apos;adapter ne veut pas dire stagner. Arun garantit une surcharge progressive optimale tout en évitant le surentraînement. Préparez votre prochain marathon avec la certitude d&apos;arriver frais.
              </p>
            </div>
            
            <ShieldCheck className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
