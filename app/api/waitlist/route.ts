import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");
  
  try {
    const body = await request.json();
    const { website } = body;

    // Honeypot : champ invisible pour les humains, rempli par les robots.
    // On répond « succès » sans rien enregistrer ni envoyer.
    if (typeof website === "string" && website.trim() !== "") {
      return Response.json({ success: true }, { status: 200 });
    }

    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email || email.length > 254) {
      return Response.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { error } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (error) {
      if (error.code === '23505') {
        // Même réponse qu'une nouvelle inscription : on ne révèle pas
        // si une adresse est déjà dans la liste, et on ne renvoie pas d'email.
        return Response.json(
          { success: true, message: "Successfully joined the waitlist" },
          { status: 200 }
        );
      }

      console.error("[Waitlist] Supabase error:", error);
      return Response.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    console.log(`[Waitlist] New signup saved to Supabase: ${email}`);

    // Send confirmation email
    try {
      await resend.emails.send({
        from: "Arun <hello@justarun.app>",
        to: email,
        replyTo: "hello@justarun.app",
        subject: "Bienvenue sur la liste d'attente Arun (3 questions rapides)",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
            <h2>Merci pour votre inscription !</h2>
            <p>Votre place pour l'accès anticipé à <strong>Arun</strong> est réservée, avec le tarif fondateur.</p>
            <p>Pour construire un coach qui colle vraiment à votre vie, pouvez-vous <strong>répondre à cet email</strong> en 30 secondes ?</p>
            <ol>
              <li>Quelle montre ou bague portez-vous (Apple Watch, Garmin, Oura, autre) ?</li>
              <li>Quel est votre prochain objectif (course et date) ?</li>
              <li>Le mois dernier, combien de séances avez-vous sautées ou déplacées à cause du travail ou de la famille ?</li>
            </ol>
            <p>Chaque réponse est lue personnellement. Si vous êtes partant pour un échange de 20 minutes, dites-le-nous.</p>
            <br />
            <p>Odilon, fondateur d'Arun</p>
            <p style="font-size:12px;color:#888">Vous recevez cet email car vous vous êtes inscrit sur justarun.app. Pour vous désinscrire, répondez simplement « stop ».</p>
          </div>
        `,
      });
      console.log(`[Waitlist] Confirmation email sent to: ${email}`);
    } catch (emailError) {
      console.error("[Waitlist] Failed to send email:", emailError);
      // We still return success since they were added to the DB
    }

    return Response.json(
      { success: true, message: "Successfully joined the waitlist" },
      { status: 200 }
    );
  } catch {
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
