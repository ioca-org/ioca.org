<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const event = $derived(data.event);
</script>

<svelte:head>
	<title>{event.title} | IOCA</title>
	<meta name="description" content={event.description} />
</svelte:head>

<header class="pt-16">
	<div class="grid grid-cols-1 items-center gap-6">
		<div class="">
			<span class="mb-2 block text-sm font-semibold tracking-widest text-accent uppercase"
				>Event Details</span
			>
			<h1 class="mb-6 font-serif text-4xl leading-tight font-semibold text-primary sm:text-5xl">
				{event.title}
			</h1>

			<div
				class="flex flex-col gap-2 text-lg text-muted-foreground md:flex-row md:items-center md:gap-6"
			>
				<div><span class="fbarbershop asmront-bold">Date:</span> {event.date}</div>
				<div class="hidden text-muted-foreground/30 md:block">|</div>
				<div><span class="font-bold">Location:</span> {event.location}</div>
				<div class="hidden text-muted-foreground/30 md:block">|</div>
				<div>
					<span class="font-bold">Hosted by:</span> <span class="text-accent">{event.host}</span>
				</div>
			</div>
		</div>
	</div>
</header>

<Separator />

<section>
	<div class="prose prose-theme pb-8">
		<!-- This content is sanitized by DOMPurify, its fine -->
		<!-- eslint-disable svelte/no-at-html-tags -->
		{@html event.content}
		<!-- eslint-enable svelte/no-at-html-tags -->
	</div>
</section>
