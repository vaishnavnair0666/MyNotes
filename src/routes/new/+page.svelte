<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { goto } from '$app/navigation';

	let title = '';
	let content = '';

	async function saveNote() {
		const { data, error } = await supabase.from('notes').insert([
			{
				title,
				content
			}
		]);

		if (error) {
			console.error('Insert error:', error);
		} else {
			// redirect to home or view page
			goto('/');
		}
	}
</script>

<h1>Create a New Note</h1>

<form on:submit|preventDefault={saveNote} class="space-y-4">
	<label>
		Title:
		<input type="text" bind:value={title} required class="w-full border p-2" />
	</label>

	<label>
		Content (Markdown):
		<textarea bind:value={content} required rows="10" class="w-full border p-2"></textarea>
	</label>

	<button type="submit" class="rounded bg-blue-500 px-4 py-2 text-white"> Save Note </button>
</form>
