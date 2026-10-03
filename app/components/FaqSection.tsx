import Link from "next/link";
import { Lock, Plus } from "lucide-react";

const faqs: { q: string; a: string }[] = [
  {
    q: "Arun lit-il le contenu de mes réunions ?",
    a: "Non. Arun ne voit que vos plages occupées (début et fin), jamais le titre, la description ou les participants. Vos séances seront écrites dans un calendrier « Arun » séparé, que vous pourrez supprimer à tout moment.",
  },
  {
    q: "Quelles montres sont compatibles ?",
    a: "Au lancement : Apple Watch et toute montre qui synchronise ses données avec Apple Health. Les montres Garmin y envoient le sommeil, la fréquence cardiaque et vos séances, mais pas la VFC : Arun complète avec un check-in de 10 secondes le matin. Oura arrive ensuite, et l'intégration Garmin directe dès que Garmin rouvre son programme développeur.",
  },
  {
    q: "Et si je ne suis pas d'accord avec une proposition ?",
    a: "Vous la refusez ou choisissez une autre option. Arun ne modifie rien sans votre accord. Le mode automatique existe, mais c'est vous qui l'activez.",
  },
  {
    q: "Combien ça coûte ?",
    a: "La bêta est gratuite. Ensuite : 19,99 €/mois ou 149 €/an (environ 0,41 € par jour), avec 14 jours d'essai, ou un Pass Prépa de 79 € pour un bloc de 16 semaines, sans abonnement. Les inscrits de la bêta bénéficient du tarif fondateur : 119 € pour la première année.",
  },
  {
    q: "Android, Outlook ?",
    a: "Arun démarre sur iPhone avec Google Agenda. Outlook et Android suivent : inscrivez-vous pour être prévenu.",
  },
  {
    q: "Arun remplace-t-il un médecin ?",
    a: "Non. Arun est un outil d'entraînement, pas un dispositif médical. Il aide à gérer la charge mais ne pose aucun diagnostic. En cas de douleur ou de symptôme inhabituel, consultez un professionnel de santé.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-32 px-6 sm:px-8 bg-surface border-t border-black/[0.02]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Lock className="w-4 h-4 text-accent" />
            <span className="text-[12px] font-bold tracking-widest uppercase text-accent">
              Vos données, vos règles
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[48px] font-semibold tracking-tight text-foreground mb-4">
            Questions fréquentes
          </h2>
          <p className="text-[18px] text-muted font-medium">
            Vos données ne sont jamais revendues et restent supprimables à tout moment.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group bg-white rounded-2xl border border-black/[0.04] apple-shadow px-6 py-5 open:pb-6"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-[16px] font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="w-4 h-4 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-[15px] text-muted font-medium leading-[1.65]">{f.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-10 text-center text-[13px] text-muted">
          Plus de détails dans notre{" "}
          <Link href="/confidentialite" className="underline underline-offset-2 hover:text-foreground">
            politique de confidentialité
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
