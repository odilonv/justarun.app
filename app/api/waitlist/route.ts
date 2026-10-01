import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
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
        from: "Arun <onboarding@resend.dev>",
        to: email,
        subject: "Bienvenue sur la liste d'attente Arun !",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
            <h2>Merci pour votre inscription !</h2>
            <p>Nous avons bien réservé votre place pour l'accès anticipé à <strong>Arun</strong>.</p>
            <p>Nous vous préviendrons dès que votre accès sera prêt.</p>
            <br />
            <p>L'équipe Arun</p>
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
