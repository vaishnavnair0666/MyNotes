import { supabase } from '$lib/supabaseClient';

export async function load() {
  const { data: notes, error } = await supabase
    .from('notes')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching notes:', error.message);
    return { notes: [] };
  }

  return { notes };
}

