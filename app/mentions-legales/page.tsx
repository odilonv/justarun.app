import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales | Arun",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" updated="octobre 2026">
      <h2>Éditeur du site</h2>
      <p>
        Le site justarun.app est édité par Odilon Vidal, entrepreneur individuel (EI).
        <br />
        Adresse : 53 rue Milhès, 31300 Toulouse, France
        <br />
        SIREN : 102 690 211
        <br />
        Email : <a href="mailto:hello@justarun.app">hello@justarun.app</a>
        <br />
        Formulaire de contact : <Link href="/contact">justarun.app/contact</Link>
        <br />
        Directeur de la publication : Odilon Vidal
      </p>

      <h2>Hébergement</h2>
      <p>
        Site hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (vercel.com).
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus de ce site (textes, visuels, logo, mascotte, vidéo) est protégé par le
        droit de la propriété intellectuelle. Toute reproduction sans autorisation préalable est interdite.
      </p>

      <h2>Nature du service</h2>
      <p>
        Arun est un outil d&apos;aide à l&apos;organisation de l&apos;entraînement sportif. Il ne constitue
        pas un dispositif médical et ne fournit aucun diagnostic. En cas de douleur ou de symptôme
        inhabituel, consultez un professionnel de santé.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Le traitement de vos données est décrit dans notre{" "}
        <Link href="/confidentialite">politique de confidentialité</Link>.
      </p>
    </LegalPage>
  );
}
