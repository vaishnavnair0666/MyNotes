<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { goto } from '$app/navigation';

	export let data;
	let { id, title, content } = data.note;

	async function updateNote() {
		const { error } = await supabase.from('notes').update({ title, content }).eq('id', id);

		if (error) {
			console.error('Update error:', error);
		} else {
			goto('/');
		}
	}
</script>

<h1>Edit Note</h1>

<form on:submit|preventDefault={updateNote} class="space-y-4">
	<label>
		Title:
		<input type="text" bind:value={title} required class="w-full border p-2" />
	</label>

	<label>
		Content (Markdown):
		<textarea bind:value={content} required rows="10" class="w-full border p-2"></textarea>
	</label>

	<button type="submit" class="rounded bg-green-600 px-4 py-2 text-white">Update</button>
</form>
