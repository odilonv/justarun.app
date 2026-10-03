"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import WaitlistForm from "./WaitlistForm";
import ArunMascot from "./ArunMascot";

export default function FooterSection() {
  return (
    <section data-theme="dark" className="bg-foreground text-white border-t border-black/[0.05]">
      {/* CTA block */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-28 sm:pt-36 pb-20 sm:pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <ArunMascot size={64} mood="run" className="mb-8" />

          <h2 className="text-[36px] sm:text-[52px] md:text-[60px] font-semibold tracking-[-0.04em] leading-[1.05]">
            Premiers inscrits, <br className="sm:hidden" />
            premiers servis.
          </h2>

          <p className="mt-6 text-[17px] sm:text-[20px] text-white/60 leading-[1.55] max-w-lg mx-auto font-medium">
            Ouverture par vagues : un pilote accompagné de 30 coureurs cet hiver,
            puis l&apos;app iPhone au printemps 2027. Les inscrits passent en premier
            et gardent le tarif fondateur.
          </p>

          <div className="mt-10 sm:mt-12 flex justify-center w-full">
            <WaitlistForm variant="dark" id="footer-waitlist-form" />
          </div>

          <p className="mt-4 text-[13px] text-white/40 font-medium">
            Inscription gratuite · Sans engagement · Désinscription en un clic
          </p>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <ArunMascot size={22} mood="happy" />
            <span className="text-[16px] font-semibold text-white tracking-tight">
              Arun
            </span>
          </div>

          <div className="text-[14px] text-white/40 font-medium">
            © 2026 justarun.app
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="/mentions-legales"
              className="text-[13px] font-medium text-white/40 hover:text-white/80 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="text-[13px] font-medium text-white/40 hover:text-white/80 transition-colors"
            >
              Confidentialité
            </Link>
            <Link
              href="/contact"
              className="text-[13px] font-medium text-white/60 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
