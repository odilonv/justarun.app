import { Resend } from "resend";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

  try {
    const body = await request.json();

    // Honeypot : champ invisible rempli uniquement par les robots.
    if (typeof body.website === "string" && body.website.trim() !== "") {
      return Response.json({ success: true }, { status: 200 });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || name.length > 100) {
      return Response.json({ error: "Merci d'indiquer votre nom." }, { status: 400 });
    }
    if (!email || email.length > 254 || !emailRegex.test(email)) {
      return Response.json({ error: "Adresse email invalide." }, { status: 400 });
    }
    if (message.length < 10 || message.length > 5000) {
      return Response.json(
        { error: "Votre message doit faire entre 10 et 5 000 caractères." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Arun <hello@justarun.app>",
      to: "hello@justarun.app",
      replyTo: email,
      subject: `[Contact justarun.app] ${name.slice(0, 80)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #111;">
          <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
          <p><strong>Email :</strong> ${escapeHtml(email)}</p>
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("[Contact] Resend error:", error);
      return Response.json(
        { error: "L'envoi a échoué. Écrivez-nous à hello@justarun.app." },
        { status: 500 }
      );
    }

    return Response.json({ success: true }, { status: 200 });
  } catch {
    return Response.json({ error: "Erreur interne." }, { status: 500 });
  }
}
