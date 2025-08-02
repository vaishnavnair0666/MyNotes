import { supabase } from '$lib/supabaseClient';

export async function load() {
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching notes:', error.message);
    return { notes: [] };
  }

  // Ensure content is treated as a string
  const notes = data?.map(note => ({
    ...note,
    content: String(note.content)
  })) ?? [];

  return { notes };
}
