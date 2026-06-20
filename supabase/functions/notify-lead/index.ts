// Supabase Edge Function: notify-lead
// Fired by a Database Webhook (a Postgres trigger) on INSERT into
// contact_submissions / inquiries. Emails admin@brandkraf.com about the new lead.
//
// Deploy:  supabase functions deploy notify-lead --no-verify-jwt
//          (or via dashboard editor with "Verify JWT" OFF — it's secured by the
//           shared WEBHOOK_SECRET header instead.)
// Secrets: supabase secrets set RESEND_API_KEY=... WEBHOOK_SECRET=... \
//          NOTIFY_TO=admin@brandkraf.com NOTIFY_FROM="BrandKraf <leads@brandkraf.com>"

Deno.serve(async (req) => {
  // Only the database webhook (which sends the shared secret) may trigger emails.
  const secret = Deno.env.get('WEBHOOK_SECRET');
  if (secret && req.headers.get('x-webhook-secret') !== secret) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const payload = await req.json();
    const table = payload.table;
    const r = payload.record || {};

    let subject = 'New submission — BrandKraf';
    let lines: string[] = [];

    if (table === 'contact_submissions') {
      subject = `New contact lead: ${r.name || 'Unknown'}`;
      lines = [
        `Name: ${r.name || ''}`,
        `Email: ${r.email || ''}`,
        `Phone: ${r.phone || ''}`,
        `Business type: ${r.business_type || ''}`,
        `Message: ${r.message || ''}`,
        `Page: ${r.page_source || ''}`,
        `Consent: ${r.consent_given ? 'Yes' : 'No'}`,
        `Time: ${r.created_at || ''}`,
      ];
    } else if (table === 'inquiries') {
      subject = `New inquiry: ${r.full_name || 'Unknown'}`;
      lines = [
        `Name: ${r.full_name || ''}`,
        `Email: ${r.email || ''}`,
        `Phone: ${r.phone_number || ''}`,
        `Service: ${r.service_interested || ''}`,
        `Message: ${r.message || ''}`,
        `Time: ${r.created_at || ''}`,
      ];
    } else {
      return new Response(JSON.stringify({ ok: true, skipped: 'unknown table' }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = Deno.env.get('RESEND_API_KEY');
    if (!apiKey) return new Response('Missing RESEND_API_KEY', { status: 500 });

    const from = Deno.env.get('NOTIFY_FROM') || 'BrandKraf <onboarding@resend.dev>';
    // NOTIFY_TO can be one address or a comma-separated list ("a@x.com, b@y.com").
    const to = (Deno.env.get('NOTIFY_TO') || 'admin@brandkraf.com')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to,
        reply_to: r.email || undefined,
        subject,
        text: lines.join('\n'),
      }),
    });

    if (!resp.ok) {
      return new Response(`Email failed: ${await resp.text()}`, { status: 502 });
    }
    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(`Error: ${(e as Error).message}`, { status: 500 });
  }
});
