// src/routes/+layout.server.ts
import { supabase } from '$lib/supabaseClient';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  const { data } = await supabase.auth.getSession();
  return {
    session: data.session
  };
};

