"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import ArunMascot from "./ArunMascot";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const { scrollY } = useScroll();
  const navHeight = useTransform(scrollY, [0, 100], [72, 56]);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect when navbar overlaps the dark footer
  useEffect(() => {
    const footer = document.querySelector("[data-theme='dark']");
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const footerTop = entry.boundingClientRect.top;
          setOverDark(footerTop < 72);
        });
      },
      {
        threshold: [0, 0.01, 0.1],
        rootMargin: "-0px 0px -90% 0px",
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]); // Re-run when pathname changes

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        overDark
          ? "bg-[#111111]/80 backdrop-blur-2xl backdrop-saturate-[180%] border-b border-white/[0.06]"
          : scrolled
            ? "apple-glass border-b border-black/[0.05]"
            : "bg-transparent border-b border-transparent"
      }`}
    >
      <motion.div
        style={{ height: navHeight }}
        className="max-w-5xl mx-auto px-6 sm:px-8 flex items-center justify-between"
      >
        <Link href="/" className="flex items-center gap-2 group">
          <ArunMascot size={24} mood="happy" />
          <span
            className={`text-[18px] font-semibold tracking-tight transition-colors duration-500 ${
              overDark ? "text-white" : "text-foreground"
            }`}
          >
            Arun
          </span>
        </Link>

        {/* Center Links (Desktop only) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link
            href="/features"
            className={`text-[13px] font-medium transition-colors duration-300 ${
              pathname === "/features"
                ? overDark ? "text-white" : "text-foreground"
                : overDark ? "text-white/70 hover:text-white" : "text-muted hover:text-foreground"
            }`}
          >
            Fonctionnalités
          </Link>
          <Link
            href="/about"
            className={`text-[13px] font-medium transition-colors duration-300 ${
              pathname === "/about"
                ? overDark ? "text-white" : "text-foreground"
                : overDark ? "text-white/70 hover:text-white" : "text-muted hover:text-foreground"
            }`}
          >
            À propos
          </Link>
        </div>

        <Link
          href={pathname === "/" ? "#waitlist" : "/#waitlist"}
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setTimeout(() => {
                document.getElementById("hero-waitlist")?.focus();
              }, 500);
            }
          }}
          className={`group inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-500 cursor-pointer ${
            overDark
              ? "text-white/90 bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.1]"
              : "text-foreground bg-black/[0.04] hover:bg-black/[0.08]"
          }`}
        >
          S&apos;inscrire
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </motion.div>
    </motion.nav>
  );
}
