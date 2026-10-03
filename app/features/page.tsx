import { Heart, HeartPulse, Watch, CalendarDays, TrendingUp, Zap, Activity, ArrowRightLeft } from "lucide-react";
import ArunMascot from "../components/ArunMascot";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-[40px] sm:text-[60px] md:text-[72px] font-semibold tracking-[-0.03em] text-foreground mb-6 leading-[1.05]">
            L&apos;intelligence derrière <br className="hidden sm:block" />
            <span className="text-muted-light">votre copilote Arun.</span>
          </h1>
          <p className="text-[18px] sm:text-[21px] text-muted max-w-2xl mx-auto font-medium tracking-tight">
            Comment Arun lit votre forme et vos créneaux pour vous proposer la bonne séance, au bon moment.
          </p>
        </div>

        <div className="space-y-32">
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-accent" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-accent">Physiologie</span>
              </div>
              <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight leading-[1.1]">
                Garde-fou physiologique.
              </h2>
              <p className="text-[18px] text-muted leading-relaxed">
                Chaque matin, Arun compare la tendance de votre <strong>VFC (variabilité de la fréquence cardiaque)</strong> à votre propre normale, et la complète avec votre sommeil et votre ressenti. Quand le signal reste bas plusieurs jours, il vous propose d&apos;alléger la séance intense et de la décaler. Vous validez.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white apple-shadow rounded-[2rem] p-8 border border-black/[0.03]">
                <h3 className="text-[14px] font-semibold mb-6 flex items-center gap-2">
                  Tendance VFC (7 derniers jours)
                </h3>
                <div className="flex items-end justify-between h-40 gap-2 mb-4">
                  {[65, 68, 70, 72, 45, 42, 38].map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center h-full justify-end gap-2">
                      <div 
                        className={`w-full rounded-t-lg transition-all duration-300 ${val < 50 ? 'bg-gradient-to-t from-red-500/60 to-red-400' : 'bg-gradient-to-t from-green-500/60 to-green-400'}`} 
                        style={{ height: `${val}%` }} 
                      />
                      <span className="text-[10px] text-muted font-medium">J-{6-i}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-red-50 text-red-700 p-4 rounded-2xl text-[13px] font-medium flex gap-3 items-start border border-red-100">
                  <ArunMascot size={20} mood="think" className="shrink-0 mt-0.5" />
                  <p>VFC sous ta normale depuis 3 jours. Je te propose 40 min en endurance fondamentale ce soir et la VMA samedi. Accepter ?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <CalendarDays className="w-4 h-4 text-blue-500" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-blue-500">Logistique</span>
              </div>
              <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight leading-[1.1]">
                Une logistique qui suit votre agenda.
              </h2>
              <p className="text-[18px] text-muted leading-relaxed">
                Votre agenda bouge, votre plan aussi. Arun repère les créneaux libres dans votre calendrier (sans jamais lire le contenu de vos réunions) et vous propose la meilleure fenêtre pour chaque séance.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white apple-shadow rounded-[2rem] p-8 border border-black/[0.03]">
                <div className="space-y-4 relative before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-zinc-100">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white z-10">
                      <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    </div>
                    <p className="text-[12px] text-muted font-medium">09:00 - 11:30</p>
                    <p className="text-[15px] font-semibold text-foreground">Réunion CODIR</p>
                  </div>
                  <div className="relative pl-8 opacity-40">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center border-2 border-white z-10">
                      <span className="w-2 h-2 bg-zinc-300 rounded-full" />
                    </div>
                    <p className="text-[12px] text-muted font-medium line-through">12:30 - 14:00</p>
                    <p className="text-[15px] font-semibold line-through">Séance VMA initiale</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center border-2 border-white z-10">
                      <Zap className="w-3 h-3 text-accent" />
                    </div>
                    <p className="text-[11px] text-accent font-bold uppercase tracking-wider mb-0.5">Proposé par Arun · validé</p>
                    <p className="text-[12px] text-muted font-medium">18:00 - 19:30</p>
                    <p className="text-[15px] font-semibold text-foreground">Séance VMA déplacée</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-green-500">Progression</span>
              </div>
              <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-tight leading-[1.1]">
                Une charge qui monte progressivement.
              </h2>
              <p className="text-[18px] text-muted leading-relaxed">
                Arun suit votre charge de la semaine par rapport à celle des semaines précédentes. Quand une semaine dérape (séances ratées, voyage, fatigue), il évite les rattrapages brutaux et reconstruit la progression.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white apple-shadow rounded-[2rem] p-8 border border-black/[0.03]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[14px] font-semibold flex items-center gap-2">
                    Charge récente / habituelle
                  </h3>
                  <div className="flex items-center gap-3 text-[10px] font-medium text-muted">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500" /> Progression
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500" /> Hausse trop rapide
                    </div>
                  </div>
                </div>
                {/* Simulated Graph */}
                <div className="relative h-32 w-full flex items-end justify-between border-b border-l border-black/10 px-4 mb-6">
                  {/* Y-axis labels */}
                  <div className="absolute -left-6 bottom-[40%] text-[9px] font-medium text-muted-light translate-y-1/2">1.0</div>
                  <div className="absolute -left-6 bottom-[60%] text-[9px] font-medium text-muted-light translate-y-1/2">1.5</div>
                  
                  {/* Safe zone indicator (1.0 to 1.4) */}
                  <div className="absolute left-0 right-0 bottom-[40%] h-[16%] bg-green-500/10 -z-10" />
                  <div className="absolute left-0 right-0 bottom-[60%] border-t border-dashed border-red-300" />
                  
                  {[0.8, 0.9, 1.1, 1.2, 1.3, 1.6, 1.2, 1.1].map((val, i) => (
                    <div key={i} className="flex flex-col items-center h-full justify-end gap-1 relative z-10 w-full max-w-[12px]">
                      <div className={`w-full rounded-t-[3px] transition-all duration-300 ${val >= 1.5 ? 'bg-red-500' : 'bg-green-500'}`} style={{ height: `${val * 40}%` }} />
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] text-muted font-medium">S-{7-i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>


          {/* Integrations & Sync Ecosystem */}
          <div className="pt-20">
            <div className="text-center mb-16">
              <h2 className="text-[32px] sm:text-[48px] font-semibold tracking-tight text-foreground mb-4">
                Votre écosystème, unifié.
              </h2>
              <p className="text-[18px] text-muted max-w-2xl mx-auto font-medium">
                Arun se branche sur les outils que vous utilisez déjà. Au lancement : Apple Health et Google Agenda. Ensuite : Oura, Outlook et Garmin.
              </p>
            </div>

            <div className="bg-surface-dark rounded-[3rem] p-6 sm:p-12 md:p-16 border border-black/[0.03] relative overflow-hidden flex flex-col items-center">
               
               {/* Center Logo */}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
                 <div className="w-[800px] h-[800px] rounded-full border border-black" />
               </div>
               
               <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                  
                  {/* Left: Health & Context Inputs */}
                  <div className="flex flex-col gap-4 w-full md:w-[280px]">
                     <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl apple-shadow border border-white flex items-center gap-4 transition-transform hover:-translate-y-1">
                        <Watch className="w-7 h-7 text-foreground/70" aria-hidden="true" />
                        <div>
                          <div className="text-[13px] font-semibold text-foreground">Garmin</div>
                          <div className="text-[11px] text-muted">Via Apple Health · direct bientôt</div>
                        </div>
                     </div>
                     <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl apple-shadow border border-white flex items-center gap-4 transition-transform hover:-translate-y-1">
                        <HeartPulse className="w-7 h-7 text-accent" aria-hidden="true" />
                        <div>
                          <div className="text-[13px] font-semibold text-foreground">Apple Health</div>
                          <div className="text-[11px] text-muted">VFC, sommeil, séances</div>
                        </div>
                     </div>
                     <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl apple-shadow border border-white flex items-center gap-4 transition-transform hover:-translate-y-1">
                        <div className="w-7 h-7 rounded-full border-[2.5px] border-foreground/80 flex items-center justify-center opacity-90">
                           <div className="w-[18px] h-[18px] rounded-full border-[1.5px] border-foreground/80" />
                        </div>
                        <div>
                          <div className="text-[13px] font-semibold text-foreground">Oura Ring</div>
                          <div className="text-[11px] text-muted">Bientôt</div>
                        </div>
                     </div>
                  </div>

                  {/* Center: Arun Engine */}
                  <div className="relative shrink-0 flex flex-col items-center">
                     <ArrowRightLeft className="w-6 h-6 text-muted-light absolute -left-10 top-1/2 -translate-y-1/2 md:block hidden" />
                     <ArrowRightLeft className="w-6 h-6 text-muted-light absolute -right-10 top-1/2 -translate-y-1/2 md:block hidden" />
                     
                     <div className="w-28 h-28 rounded-[2.5rem] flex items-center justify-center relative z-10">
                       <ArunMascot size={56} mood="run" />
                     </div>
                     <div className="mt-4 text-[11px] font-bold tracking-widest text-muted uppercase">
                       Arun
                     </div>
                  </div>

                  {/* Right: Output & Sync */}
                  <div className="flex flex-col gap-4 w-full md:w-[280px]">
                     <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl apple-shadow border border-white flex items-center gap-4 transition-transform hover:-translate-y-1">
                        <CalendarDays className="w-7 h-7 text-blue-500" aria-hidden="true" />
                        <div>
                          <div className="text-[13px] font-semibold text-foreground">Google Agenda</div>
                          <div className="text-[11px] text-muted">Créneaux libres · calendrier Arun</div>
                        </div>
                     </div>
                     <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl apple-shadow border border-white flex items-center gap-4 transition-transform hover:-translate-y-1">
                        <Watch className="w-7 h-7 text-foreground/70" aria-hidden="true" />
                        <div>
                          <div className="text-[13px] font-semibold text-foreground">Apple Watch</div>
                          <div className="text-[11px] text-muted">Séance envoyée au poignet</div>
                        </div>
                     </div>
                     <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl apple-shadow border border-white flex items-center gap-4 transition-transform hover:-translate-y-1">
                        <ArunMascot size={28} mood="happy" className="shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-foreground">Arun App</div>
                          <div className="text-[11px] text-muted">Tableau de bord IA</div>
                        </div>
                     </div>
                  </div>

               </div>
               
               <div className="mt-16 bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white max-w-2xl text-center">
                 <p className="text-[14px] text-muted-dark font-medium leading-[1.6]">
                   <strong>Votre agenda reste à vous :</strong> Arun ne voit que vos plages occupées et écrit vos séances dans un calendrier « Arun » séparé. Quand un événement bouge, il le détecte et vous propose un ajustement. Pas de saisie manuelle.
                 </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
