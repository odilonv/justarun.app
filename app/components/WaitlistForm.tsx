"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";

interface WaitlistFormProps {
  variant?: "light" | "dark";
  id?: string;
}

export default function WaitlistForm({
  variant = "light",
  id,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        toast.success("Vous êtes sur la liste !", {
          description: "Nous vous contacterons dès que l'accès sera disponible.",
        });
        setEmail("");
      } else {
        const data = await res.json();
        toast.error(data.error || "Une erreur est survenue.");
      }
    } catch {
      toast.error("Erreur de connexion. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  const isDark = variant === "dark";

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
    >
      <div className="relative flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          required
          className={`w-full h-12 px-4 rounded-xl text-sm transition-all duration-200 ${
            isDark
              ? "bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-accent focus:ring-2 focus:ring-accent/30"
              : "bg-white border border-border text-foreground placeholder:text-muted-light focus:border-accent focus:ring-2 focus:ring-accent/20 shadow-sm"
          }`}
          style={{ outline: "none" }}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="group h-12 px-6 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(249,115,22,0.35)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.45)] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            S&apos;inscrire
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}
