<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Event } from '$lib/content';

	let { event }: { event: Event } = $props();
</script>

<div class="space-y-2 px-3">
	<div
		class="flex flex-col-reverse items-start justify-between gap-4 px-1 sm:flex-row sm:items-center"
	>
		<h3 class="font-serif text-2xl font-semibold text-primary">
			{event.title}
		</h3>
		<div class="font-serif text-base text-muted-foreground italic">
			{event.date}
		</div>
	</div>

	<div
		class="flex flex-col items-start justify-between gap-4 px-1 text-base sm:flex-row sm:items-center"
	>
		<span>{event.location}</span>
		<span>Hosted by <span class="text-accent">{event.host}</span></span>
	</div>

	<p class="px-1 text-base text-muted-foreground">
		{event.description}
	</p>

	{#if event.content}
		<a
			href={resolve(`/events/${event.id}/`)}
			class="inline-block rounded-lg px-1 py-2 text-sm text-primary transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
			>Read details &rarr;</a
		>
	{:else if event.externalLink}
		<a
			href={event.externalLink}
			target="_blank"
			rel="external noopener noreferrer"
			class="inline-block rounded-lg px-1 py-2 text-sm text-primary transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
			>Visit website &rarr;</a
		>
	{/if}
</div>
