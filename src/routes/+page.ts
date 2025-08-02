import { supabase } from '$lib/supabaseClient';

export async function load(): Promise<{
  notes: Array<{ id: string; title: string; content: string; created_at: string }>
}> {
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching notes:', error.message);
    return { notes: [] };
  }

  const notes = (data ?? []).map(note => ({
    ...note,
    content: typeof note.content === 'string' ? note.content : String(note.content),
  }));

  return { notes };
}
