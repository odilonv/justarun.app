import { Resend } from "resend";

// Webhook Resend « email.received » : chaque email reçu sur une adresse
// @justarun.app (ex. hello@justarun.app) est transféré vers INBOUND_FORWARD_TO.
//
// Variables d'environnement (Vercel > Settings > Environment Variables) :
//   RESEND_API_KEY          clé API Resend (déjà utilisée par la liste d'attente)
//   RESEND_WEBHOOK_SECRET   secret de signature du webhook (whsec_…)
//   INBOUND_FORWARD_TO      adresse de destination du transfert

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");
  const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;
  const forwardTo = process.env.INBOUND_FORWARD_TO;

  if (!webhookSecret || !forwardTo) {
    console.error("[Inbound] RESEND_WEBHOOK_SECRET ou INBOUND_FORWARD_TO manquant");
    return new Response("Not configured", { status: 500 });
  }

  // Le corps brut est indispensable pour vérifier la signature.
  const payload = await request.text();

  let event: ReturnType<typeof resend.webhooks.verify>;
  try {
    event = resend.webhooks.verify({
      payload,
      headers: {
        id: request.headers.get("svix-id") ?? "",
        timestamp: request.headers.get("svix-timestamp") ?? "",
        signature: request.headers.get("svix-signature") ?? "",
      },
      webhookSecret,
    });
  } catch {
    return new Response("Invalid webhook", { status: 400 });
  }

  if (event.type !== "email.received") {
    return Response.json({ ignored: event.type });
  }

  const { data, error } = await resend.emails.receiving.forward(
    {
      emailId: event.data.email_id,
      to: forwardTo,
      from: "Arun <hello@justarun.app>",
    },
    // Resend peut renvoyer un webhook plusieurs fois : une seule copie transférée.
    { idempotencyKey: `forward-${event.data.email_id}` }
  );

  if (error) {
    console.error("[Inbound] Échec du transfert :", error);
    // 500 => Resend réessaiera plus tard.
    return new Response("Forward failed", { status: 500 });
  }

  console.log(`[Inbound] Email ${event.data.email_id} transféré (${data?.id})`);
  return Response.json({ forwarded: true });
}
