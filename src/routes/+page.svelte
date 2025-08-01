<script lang="ts">
	import { marked } from 'marked'; // Changed import

	// Markdown action with typing
	function markdown(node: HTMLElement, content: string) {
		node.innerHTML = marked.parse(content);

		return {
			update(newContent: string) {
				node.innerHTML = marked.parse(newContent);
			}
		};
	}

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
				<h2 class="mb-1 text-lg font-semibold">{note.title}</h2>
				<p class="text-xs text-gray-600">{note.created_at}</p>

				<!-- Render Markdown content -->
				<div class="prose mt-2 max-w-none" use:markdown={note.content}></div>
			</li>
		{/each}
	</ul>
{/if}
