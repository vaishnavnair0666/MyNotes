<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let errorMsg = '';

	async function login() {
		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) errorMsg = error.message;
		else goto('/');
	}
</script>

<form on:submit|preventDefault={login} class="space-y-4">
	<input type="email" bind:value={email} required placeholder="Email" class="w-full border p-2" />
	<input
		type="password"
		bind:value={password}
		required
		placeholder="Password"
		class="w-full border p-2"
	/>
	<button type="submit" class="rounded bg-blue-500 px-4 py-2 text-white">Login</button>
	{#if errorMsg}<p class="text-red-500">{errorMsg}</p>{/if}
</form>
