import { supabase } from '$lib/supabaseClient';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const { data, error } = await supabase.from('notes').select('*').eq('id', params.id).single();

  if (error) {
    console.error('Failed to load note:', error.message);
  }

  return {
    note: data ?? { id: params.id, title: '', content: '' }
  };
};

