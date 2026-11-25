<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} | Error</title>
	<meta name="description" content={`Error ${page.status}: ${page.error?.message}`} />
</svelte:head>

<div
	class="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 text-center"
>
	<h1 class="text-7xl font-bold tracking-tight">{page.status}</h1>
	<p class="mt-4 text-3xl text-foreground/80">{page.error?.message}</p>
</div>
