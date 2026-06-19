// Supabase Edge Function: hitpay-initialize
// Creates a HitPay payment request server-side (keeps the secret API key off the
// client) and returns the checkout URL. Replaces the old Node /hcgi/api route.
//
// Deploy:  supabase functions deploy hitpay-initialize
// Secrets: supabase secrets set HITPAY_API_KEY=... HITPAY_SALT=...

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { amount, customerName, customerEmail } = await req.json();

    if (!amount || !customerName || !customerEmail) {
      return json({ error: 'Missing required fields: amount, customerName, customerEmail' }, 400);
    }
    if (typeof amount !== 'number' || amount <= 0) {
      return json({ error: 'Amount must be a positive number' }, 400);
    }

    const apiKey = Deno.env.get('HITPAY_API_KEY');
    if (!apiKey) {
      return json({ error: 'Payment is not configured (missing HITPAY_API_KEY)' }, 500);
    }

    const params = new URLSearchParams();
    params.append('amount', amount.toFixed(2));
    params.append('currency', 'MYR');
    params.append('email', customerEmail);
    params.append('name', customerName);
    params.append('purpose', 'BrandKraf Service Payment');
    params.append('reference_number', 'BK-' + Date.now());
    params.append('redirect_url', 'https://www.brandkraf.com/payment-success');

    const resp = await fetch('https://api.hit-pay.com/v1/payment-requests', {
      method: 'POST',
      headers: {
        'X-BUSINESS-API-KEY': apiKey,
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: params,
    });

    const data = await resp.json().catch(() => null);
    if (!resp.ok || !data?.url) {
      return json({ error: 'Invalid response from HitPay API' }, 502);
    }

    return json({ success: true, checkout_url: data.url });
  } catch (e) {
    return json({ error: (e as Error).message || 'Payment initialization failed' }, 500);
  }
});
