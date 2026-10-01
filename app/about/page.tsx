"use client";

import { motion } from "framer-motion";
import ArunMascot from "../components/ArunMascot";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center mb-24">
            <h1 className="text-[40px] sm:text-[60px] md:text-[72px] font-semibold tracking-[-0.03em] text-foreground mb-6 leading-[1.05]">
              Le copilote autonome <br className="hidden sm:block" />
              <span className="text-muted-light">des coureurs exigeants.</span>
            </h1>
            <p className="text-[18px] sm:text-[21px] text-muted max-w-2xl mx-auto font-medium tracking-tight">
              Arun est construit pour répondre au dilemme de l&apos;athlète d&apos;endurance moderne : le manque de temps et l&apos;imprévisibilité de la vie.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-[16px] leading-[1.7] text-foreground/80 space-y-6">
          <h2 className="text-[24px] font-semibold text-foreground mt-12 mb-4 tracking-tight">Le problème des solutions actuelles</h2>
          <p>
            Aujourd&apos;hui, l&apos;écosystème professionnel ultra-rapide est le plus grand obstacle pour un coureur ambitieux. Ce n&apos;est pas la capacité physique qui manque, c&apos;est <strong className="text-foreground">la logistique</strong>.
          </p>
          <p>
            La plupart des applications d&apos;entraînement génèrent des plans rigides. Elles partent du principe que votre vie est un métronome. Si une réunion urgente tombe le mardi à 18h30 (l&apos;heure de votre séance de fractionné), l&apos;application l&apos;ignore. Vous êtes obligé de sauter l&apos;entraînement, de tout décaler manuellement ou de risquer la blessure en forçant.
          </p>

        <h2 className="text-[24px] font-semibold text-foreground mt-12 mb-4 tracking-tight">La solution : Arun</h2>
        <p>
          Arun ne se contente pas de vous donner un plan d&apos;entraînement. C&apos;est le premier <strong>copilote autonome</strong>. Il se place exactement à l&apos;intersection de votre vie professionnelle (Google/Outlook Calendar), de vos données de récupération physiologique (Garmin/Apple Health) et de vos ambitions sportives.
        </p>

        <h3 className="text-[20px] font-semibold text-foreground mt-10 mb-3 tracking-tight">Une architecture d&apos;agents</h3>
        <p>
          Sous le capot, Arun fonctionne avec plusieurs agents qui évaluent en continu votre état :
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4 mb-8">
          <li><strong>L&apos;Agent Physiologiste :</strong> Il évalue constamment vos marqueurs de récupération. Si votre VFC chute ou que votre sommeil est mauvais, il intervient et annule ou adapte les séances intenses.</li>
          <li><strong>L&apos;Agent Planificateur :</strong> Il scanne votre agenda à la recherche de fenêtres temporelles disponibles correspondant aux besoins d&apos;une séance (ex: une fenêtre de 90 min avant votre présentation de 10h00).</li>
          <li><strong>L&apos;Agent Superviseur :</strong> Il gère les conflits de manière fluide en croisant votre emploi du temps et votre état de fatigue.</li>
        </ul>

        <h2 className="text-[24px] font-semibold text-foreground mt-12 mb-4 tracking-tight">Pour qui est fait Arun ?</h2>
        <p>
          Arun est conçu pour tous ceux qui ont un quotidien intense : athlètes hybrides, parents débordés, entrepreneurs, ou toute personne dont l&apos;agenda ne rentre pas dans les cases d&apos;un plan d&apos;entraînement classique. 
        </p>
        <p>
          Si vous voulez préparer un marathon mais que votre plus grande angoisse est de voir votre emploi du temps exploser, Arun est fait pour vous.
        </p>

        <div className="mt-16 p-8 bg-surface-dark rounded-3xl border border-black/[0.05] text-center">
          <h3 className="text-[20px] font-semibold text-foreground mb-3">Ne choisissez plus entre votre agenda et votre chrono.</h3>
          <p className="text-muted font-medium mb-0">Laissez Arun synchroniser votre vie et votre foulée. <strong>Just a run.</strong></p>
        </div>
        </div>
      </motion.div>
      </div>
    </main>
  );
}
