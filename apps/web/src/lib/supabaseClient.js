import { createClient } from '@supabase/supabase-js';

// The project URL and anon key are PUBLIC by design — they ship in the client
// bundle and are safe to commit. Row Level Security (configured in
// supabase/schema.sql) is what actually protects the data. The secret
// service_role key is NEVER used here; it only lives in the HitPay Edge Function.
const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://xweoognqlpvafyxhzvgz.supabase.co';
const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3ZW9vZ25xbHB2YWZ5eGh6dmd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4NDE0NjcsImV4cCI6MjA5NzQxNzQ2N30.SgeHayMBuaBraN2BjYmXr475AVFpnvSOLyYlRgm-2Rc';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export default supabase;
