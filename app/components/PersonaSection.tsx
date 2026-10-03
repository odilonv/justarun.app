"use client";

import { motion } from "framer-motion";

// Situations types (pas des témoignages) : à remplacer par de vrais retours
// de bêta-testeurs, avec leur accord écrit, une fois le pilote lancé.
const situations = [
  {
    role: "Réunions qui bougent",
    situation:
      "Votre agenda se remplit sans vous. La réunion de 18h tombe pile sur le fractionné.",
    arun: "Arun repère le conflit dès que la réunion est posée et vous propose un autre créneau avant qu'il soit trop tard.",
  },
  {
    role: "Parent coureur",
    situation:
      "Vos créneaux sont courts, fixes, et vos nuits pas toujours complètes.",
    arun: "Arun ajuste la durée de la séance au créneau réel et allège quand le sommeil décroche.",
  },
  {
    role: "Déplacements",
    situation:
      "Trois jours à Lyon, un hôtel, un tapis de course si vous avez de la chance.",
    arun: "Une phrase dans le chat suffit : Arun recompose la semaine et protège votre sortie longue.",
  },
];

export default function PersonaSection() {
  return (
    <section className="py-32 px-6 sm:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[32px] sm:text-[48px] font-semibold tracking-tight text-foreground mb-4">
            Pour les semaines qui ne se passent jamais comme prévu.
          </h2>
          <p className="text-[18px] sm:text-[20px] text-muted max-w-2xl mx-auto font-medium">
            Arun est construit pour ceux qui refusent de choisir entre leur vie pro, leur vie perso et leur prochain chrono.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {situations.map((s, i) => (
            <motion.div
              key={s.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-surface rounded-3xl p-8 border border-black/[0.03] apple-shadow flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-[12px] font-bold tracking-widest uppercase text-muted mb-6">
                  {s.role}
                </span>
                <p className="text-[16px] text-foreground font-medium leading-[1.6] mb-6">
                  {s.situation}
                </p>
              </div>
              <div className="border-t border-black/[0.06] pt-5">
                <div className="text-[12px] font-bold tracking-widest uppercase text-accent mb-2">
                  Avec Arun
                </div>
                <p className="text-[14px] text-muted font-medium leading-[1.6]">{s.arun}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
