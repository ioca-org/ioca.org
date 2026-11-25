<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import type { PageData } from './$types';
	import Event from '$lib/components/events/event.svelte';

	let { data }: { data: PageData } = $props();
	const events = $derived(data.events);
</script>

<svelte:head>
	<title>Events Calendar | IOCA</title>
	<meta name="description" content="Explore upcoming IOCA events and conferences." />
</svelte:head>

<header class="py-12">
	<div class="grid grid-cols-1 items-center gap-6">
		<div class="">
			<span class="mb-2 block text-sm font-semibold tracking-widest text-accent uppercase"
				>Events Calendar</span
			>
			<h1 class="mb-6 font-serif text-4xl leading-tight font-semibold text-primary sm:text-5xl">
				Upcoming IOCA Events
			</h1>

			<p class="mb-4 text-xl leading-relaxed text-muted-foreground">
				Explore our upcoming events and conferences.
			</p>
			<p class="text-base text-muted-foreground">
				Have an event to share? Talk to your club's IOCA representative and they can submit it to be
				added to the calendar.
			</p>
		</div>
	</div>
</header>

<section>
	<div class="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
		<h2 class="font-serif text-4xl font-semibold text-primary">All Events</h2>
		<Separator class="mx-2 hidden flex-1 sm:block" />
	</div>
	<Separator class="sm:hidden" />

	<div class="flex flex-col gap-0 py-4">
		{#if events.length === 0}
			<div class="flex flex-col items-center justify-center gap-4 py-12 text-center">
				<h3 class="text-2xl font-semibold text-primary">No events found</h3>
				<p class="text-muted-foreground">
					There are no upcoming events at this time. Please check back later for updates.
				</p>
			</div>
		{/if}
		{#each events as event (event.id)}
			<Event {event} />
			<Separator class="my-4" />
		{/each}
	</div>
</section>
