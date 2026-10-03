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
              Le coach qui connaît <br className="hidden sm:block" />
              <span className="text-muted-light">votre agenda.</span>
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
          Arun ne se contente pas de vous donner un plan d&apos;entraînement : il s&apos;occupe de sa <strong>logistique</strong>. Il se place à l&apos;intersection de vos créneaux libres (Google Agenda), de vos données de récupération (Apple Health, puis Oura et Garmin) et de votre objectif de course. Quand l&apos;un des trois change, il vous propose un ajustement, que vous validez en un tap.
        </p>

        <h3 className="text-[20px] font-semibold text-foreground mt-10 mb-3 tracking-tight">Comment Arun décide</h3>
        <ul className="list-disc pl-6 space-y-2 mt-4 mb-8">
          <li><strong>Votre forme :</strong> Arun compare la tendance de votre VFC sur 7 jours à votre propre normale, jamais une valeur isolée, et la complète avec votre sommeil, votre fréquence cardiaque de repos et un check-in de 10 secondes.</li>
          <li><strong>Vos créneaux :</strong> il cherche des fenêtres libres adaptées à chaque séance, avec une marge pour la douche et le trajet (par exemple 75 minutes avant votre rendez-vous de 10h).</li>
          <li><strong>Vos priorités :</strong> en cas de conflit, la sortie longue et la séance de qualité passent en premier ; les footings servent de variable d&apos;ajustement.</li>
          <li><strong>Votre accord :</strong> chaque proposition est expliquée. Rien ne change sans votre validation, sauf si vous activez vous-même le mode automatique.</li>
        </ul>

        <h2 className="text-[24px] font-semibold text-foreground mt-12 mb-4 tracking-tight">Pour qui est fait Arun ?</h2>
        <p>
          Arun est conçu pour celles et ceux qui préparent un semi ou un marathon avec un quotidien intense : cadres, parents, entrepreneurs, consultants, ou toute personne dont l&apos;agenda ne rentre pas dans les cases d&apos;un plan d&apos;entraînement classique.
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
