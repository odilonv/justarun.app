import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Arun",
};

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité" updated="octobre 2026">
      <p className="mt-8">
        Cette politique concerne le site justarun.app, sa liste d&apos;attente et son formulaire de
        contact. L&apos;application Arun, qui traitera des données d&apos;agenda et de santé, fera
        l&apos;objet d&apos;une politique dédiée et d&apos;un consentement explicite et séparé avant toute
        collecte.
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        Odilon Vidal, entrepreneur individuel (EI), 53 rue Milhès, 31300 Toulouse. SIREN 102 690
        211. Contact : <a href="mailto:hello@justarun.app">hello@justarun.app</a> ou{" "}
        <Link href="/contact">formulaire de contact</Link>.
      </p>

      <h2>Données collectées et finalités</h2>
      <ul>
        <li>
          <strong>Liste d&apos;attente : votre adresse email</strong>, pour vous informer de l&apos;ouverture
          de la bêta et vous proposer, si vous le souhaitez, de participer à des entretiens utilisateurs.
        </li>
        <li>
          <strong>Vos réponses</strong> si vous répondez à nos emails (montre utilisée, objectif sportif),
          pour adapter le produit.
        </li>
        <li>
          <strong>Formulaire de contact : nom, email et message</strong>, uniquement pour vous répondre.
        </li>
      </ul>
      <p>
        Bases légales : votre consentement pour la liste d&apos;attente (retirable à tout moment) ; notre
        intérêt légitime à répondre aux demandes reçues pour le formulaire de contact. Nous ne vendons ni ne
        louons vos données, et nous n&apos;envoyons aucune publicité tierce.
      </p>

      <h2>Durée de conservation</h2>
      <ul>
        <li>
          Liste d&apos;attente : jusqu&apos;à votre désinscription, et au plus tard 12 mois après le lancement
          public de l&apos;application.
        </li>
        <li>Messages de contact : le temps de traiter votre demande, puis 12 mois au maximum.</li>
      </ul>

      <h2>Destinataires et sous-traitants</h2>
      <ul>
        <li>Supabase (base de données de la liste d&apos;attente), hébergée en Irlande (Union européenne)</li>
        <li>Resend (envoi et réception des emails)</li>
        <li>Vercel (hébergement du site), États-Unis</li>
      </ul>
      <p>
        Lorsque des données sont transférées hors de l&apos;Union européenne, ce transfert est encadré par
        les clauses contractuelles types de la Commission européenne ou par le cadre de protection des
        données UE–États-Unis.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation,
        d&apos;opposition et de portabilité. Écrivez-nous à{" "}
        <a href="mailto:hello@justarun.app">hello@justarun.app</a> : nous répondons sous 30 jours. Vous
        pouvez aussi introduire une réclamation auprès de la CNIL (cnil.fr).
      </p>

      <h2>Cookies</h2>
      <p>
        Le site n&apos;utilise aucun cookie publicitaire ni de mesure d&apos;audience. Si un outil de mesure
        est ajouté, il sera exempté de consentement (sans cookies) ou soumis à votre accord préalable, et
        cette page sera mise à jour.
      </p>
    </LegalPage>
  );
}
