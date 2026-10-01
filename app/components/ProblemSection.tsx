"use client";

import { motion } from "framer-motion";
import ArunMascot from "./ArunMascot";

export default function ProblemSection() {
  return (
    <section className="py-32 sm:py-44 px-6 sm:px-8 bg-surface border-y border-black/[0.02]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <ArunMascot size={56} mood="think" className="mx-auto mb-8" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-[32px] sm:text-[48px] md:text-[56px] font-semibold tracking-[-0.04em] text-foreground leading-[1.1]"
        >
          Les plans rigides ne survivent pas{" "}
          <br className="hidden sm:block" />
          <span className="text-muted-light">à la réalité.</span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-8 text-[17px] sm:text-[21px] text-muted font-medium max-w-2xl mx-auto leading-[1.55] tracking-tight"
        >
          Une réunion tardive, une nuit hachée, un vol retardé : votre plan de
          12 semaines ne sait pas s&apos;adapter. Arun, si.
        </motion.p>
      </div>
    </section>
  );
}
