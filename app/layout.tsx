import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arun | Coach Running IA & Plan d'Entraînement Dynamique",
  description:
    "Arun place chaque séance de votre préparation marathon dans un vrai créneau libre de votre agenda et l'ajuste à votre récupération (VFC, sommeil). Il propose, vous validez en un tap.",
  keywords: [
    "application course à pied",
    "plan entraînement marathon",
    "coach running IA",
    "synchronisation Garmin",
    "agenda",
    "running",
    "AI coach",
    "marathon",
    "Garmin",
    "Google Calendar",
    "HRV",
    "training plan",
  ],
  openGraph: {
    title: "Arun | Coach Running IA & Plan d'Entraînement Dynamique",
    description:
      "Ne choisissez plus entre votre agenda et votre chrono. Arun synchronise votre vie et votre entraînement avec une IA.",
    url: "https://justarun.app",
    siteName: "Arun | Coach Running IA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun | Coach Running IA & Plan d'Entraînement Dynamique",
    description:
      "Ne choisissez plus entre votre agenda et votre chrono. Arun synchronise votre vie et votre entraînement avec une IA.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} antialiased`}>
      <body suppressHydrationWarning className="min-h-screen bg-background text-foreground font-sans flex flex-col">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <FooterSection />
        <Toaster
          position="top-center"
          theme="dark"
          toastOptions={{
            style: {
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              fontFamily: "var(--font-sans)",
            },
          }}
        />
      </body>
    </html>
  );
}
