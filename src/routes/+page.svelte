<script lang="ts">
	export let data: {
		notes: Array<{ id: string; title: string; content: string; created_at: string }>;
	};
	const { notes } = data;
</script>

<h1 class="mb-4 text-xl font-bold">All Notes</h1>

{#if notes.length === 0}
	<p>No notes found.</p>
{:else}
	<ul class="space-y-4">
		{#each notes as note}
			<li class="rounded border p-4 shadow">
				<h2 class="text-lg font-semibold">{note.title}</h2>
				<p class="text-sm text-gray-600">{note.created_at}</p>
				<div class="mt-2 whitespace-pre-wrap">{note.content}</div>
			</li>
		{/each}
	</ul>
{/if}
