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
  title: "Arun - Le premier copilote IA pour coureurs",
  description:
    "Arun connecte votre Google Calendar à vos données Garmin pour adapter votre entraînement à votre vraie vie, en temps réel. Rejoignez la liste d'attente.",
  keywords: [
    "running",
    "AI coach",
    "marathon",
    "Garmin",
    "Google Calendar",
    "HRV",
    "training plan",
  ],
  openGraph: {
    title: "Arun - Le premier copilote IA pour coureurs",
    description:
      "Ne choisissez plus entre votre agenda et votre chrono. Arun synchronise votre vie et votre entraînement.",
    url: "https://justarun.app",
    siteName: "Arun",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun - Le premier copilote IA pour coureurs",
    description:
      "Ne choisissez plus entre votre agenda et votre chrono. Arun synchronise votre vie et votre entraînement.",
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
