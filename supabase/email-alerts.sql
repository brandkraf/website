-- BrandKraf — email alerts on new leads (pure SQL trigger)
-- Fires after a new contact_submissions / inquiries row is inserted and calls
-- the `notify-lead` Edge Function (which sends the email via Resend).
--
-- Prereq: deploy the notify-lead Edge Function + set its secrets first.
-- Replace REPLACE_WITH_WEBHOOK_SECRET below with the SAME value you set as the
-- function's WEBHOOK_SECRET. (This SQL is server-side only — the secret is not
-- exposed to website visitors.)

-- pg_net lets Postgres make async outbound HTTP calls.
create extension if not exists pg_net;

create or replace function public.notify_new_lead()
returns trigger
language plpgsql
security definer
as $$
begin
  perform net.http_post(
    url     := 'https://xweoognqlpvafyxhzvgz.supabase.co/functions/v1/notify-lead',
    headers := jsonb_build_object(
      'Content-Type',     'application/json',
      'x-webhook-secret', 'REPLACE_WITH_WEBHOOK_SECRET'
    ),
    body    := jsonb_build_object('table', TG_TABLE_NAME, 'record', to_jsonb(NEW))
  );
  return NEW;
end;
$$;

drop trigger if exists on_contact_submission_created on public.contact_submissions;
create trigger on_contact_submission_created
  after insert on public.contact_submissions
  for each row execute function public.notify_new_lead();

drop trigger if exists on_inquiry_created on public.inquiries;
create trigger on_inquiry_created
  after insert on public.inquiries
  for each row execute function public.notify_new_lead();
