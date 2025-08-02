import { redirect } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    throw redirect(302, '/login');
  }

  const userId = session.user.id;

  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching notes:', error.message);
    return { notes: [] };
  }

  return { notes: data ?? [] };
};
