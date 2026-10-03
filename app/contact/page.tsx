import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Arun",
  description: "Une question sur Arun, la bêta ou un partenariat ? Écrivez-nous.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 sm:px-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-[40px] sm:text-[52px] font-semibold tracking-[-0.03em] text-foreground leading-[1.05]">
          Contact
        </h1>
        <p className="mt-4 text-[17px] text-muted font-medium leading-[1.6]">
          Une question sur Arun, la bêta, ou un partenariat (créateurs, clubs, courses) ? Écrivez-nous, ou
          directement à{" "}
          <a href="mailto:hello@justarun.app" className="underline underline-offset-2 hover:text-foreground">
            hello@justarun.app
          </a>
          .
        </p>
        <ContactForm />
      </div>
    </main>
  );
}
