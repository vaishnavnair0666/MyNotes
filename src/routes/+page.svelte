<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import type { Note } from '$lib/types';

	let notes: Note[] = [];

	// Fetch notes on load
	supabase
		.from('notes')
		.select('*')
		.then(({ data, error }: { data: Note[] | null; error: any }) => {
			if (error) {
				console.error('Error fetching notes:', error);
			} else if (data) {
				notes = data;
			}
		});
</script>

<h1>Notes</h1>
<ul>
	{#each notes as note}
		<li>{note.title}</li>
	{/each}
</ul>
