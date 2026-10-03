import type { ReactNode } from "react";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 sm:px-8">
      <article className="max-w-3xl mx-auto text-[16px] leading-[1.7] text-foreground/80 [&_h2]:text-[22px] [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-1.5 [&_a]:underline [&_a]:underline-offset-2">
        <h1 className="text-[40px] sm:text-[52px] font-semibold tracking-[-0.03em] text-foreground leading-[1.05] mb-4">
          {title}
        </h1>
        <p className="text-[14px] text-muted">Dernière mise à jour : {updated}</p>
        {children}
      </article>
    </main>
  );
}
