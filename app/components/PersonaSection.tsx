"use client";

import { motion } from "framer-motion";

const personas = [
  {
    role: "Emplois du temps chargés",
    quote: "Ma vie de famille et mon travail ne me laissent aucun droit à l'erreur. Arun trouve les créneaux que je ne voyais pas.",
    name: "Marie",
    title: "Directrice & Mère de famille"
  },
  {
    role: "Ingénieurs",
    quote: "L'optimisation sous contrainte appliquée à la physiologie. La boucle de feedback est parfaite.",
    name: "Sophie",
    title: "Senior Staff Engineer"
  },
  {
    role: "Agendas Imprévisibles",
    quote: "Mes semaines changent tous les jours. Arun est le seul plan qui s'adapte en temps réel à mes imprévus.",
    name: "Alexandre",
    title: "Entrepreneur"
  }
];

export default function PersonaSection() {
  return (
    <section className="py-32 px-6 sm:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[32px] sm:text-[48px] font-semibold tracking-tight text-foreground mb-4">
            Pour les vies asymétriques.
          </h2>
          <p className="text-[18px] sm:text-[20px] text-muted max-w-2xl mx-auto font-medium">
            Arun est construit pour ceux qui refusent de choisir entre l&apos;ambition professionnelle et la performance athlétique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-surface rounded-3xl p-8 border border-black/[0.03] apple-shadow flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-[12px] font-bold tracking-widest uppercase text-muted-dark mb-6">
                  {p.role}
                </span>
                <p className="text-[16px] text-foreground font-medium leading-[1.6] mb-8">
                  &quot;{p.quote}&quot;
                </p>
              </div>
              <div>
                <div className="text-[14px] font-semibold text-foreground">{p.name}</div>
                <div className="text-[13px] text-muted">{p.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
