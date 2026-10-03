"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });
      if (res.ok) {
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await res.json().catch(() => ({}));
        toast.error(data.error || "Une erreur est survenue.");
      }
    } catch {
      toast.error("Erreur de connexion. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="mt-10 rounded-2xl bg-surface border border-black/[0.05] p-8 text-center">
        <p className="text-[18px] font-semibold text-foreground">Message envoyé, merci !</p>
        <p className="mt-2 text-[15px] text-muted">Nous vous répondons en général sous 48 heures ouvrées.</p>
      </div>
    );
  }

  const field =
    "w-full px-4 rounded-xl text-[16px] sm:text-sm bg-white border border-border text-foreground placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20 shadow-sm transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4 relative">
      {/* Honeypot anti-robots : invisible et ignoré par les humains */}
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] w-px h-px opacity-0"
      />
      <label className="flex flex-col gap-1.5 text-[14px] font-medium text-foreground">
        Nom
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          maxLength={100}
          autoComplete="name"
          className={`${field} h-12`}
          style={{ outline: "none" }}
        />
      </label>
      <label className="flex flex-col gap-1.5 text-[14px] font-medium text-foreground">
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          maxLength={254}
          autoComplete="email"
          placeholder="votre@email.com"
          className={`${field} h-12`}
          style={{ outline: "none" }}
        />
      </label>
      <label className="flex flex-col gap-1.5 text-[14px] font-medium text-foreground">
        Message
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          className={`${field} py-3 resize-y`}
          style={{ outline: "none" }}
        />
      </label>
      <p className="text-[12px] text-muted">
        Vos données servent uniquement à vous répondre.{" "}
        <Link href="/confidentialite" className="underline underline-offset-2 hover:text-foreground">
          Confidentialité
        </Link>
      </p>
      <button
        type="submit"
        disabled={loading}
        className="group self-start h-12 px-6 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(249,115,22,0.35)] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            Envoyer
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}
