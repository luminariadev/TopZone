// src/lib/supabase.ts
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

const isConfigured = !!(supabaseUrl && supabaseAnonKey);

let supabaseInstance: SupabaseClient | null = null;

if (isConfigured) {
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn('Supabase not configured. Using fallback data.');
}

export const supabase = supabaseInstance;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function supabaseQuery(table: string, options?: any): Promise<any> {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  return supabase.from(table).select(options?.select || '*');
}
