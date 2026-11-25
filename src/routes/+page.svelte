<script lang="ts">
	import { resolve } from '$app/paths';
	import NewsArticle from '$lib/components/news-article.svelte';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Event from '$lib/components/events/event.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Home | IOCA</title>
	<meta
		name="description"
		content="The Intercollegiate Outing Club Association (IOCA) is a hub for intercollegiate outdoor programs to share trip opportunities, resources, and experience."
	/>
</svelte:head>

<header>
	<div class="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
		<div class="">
			<span class="mb-2 block text-sm font-semibold tracking-widest text-accent uppercase"
				>Exploring the Outdoors Since 1932</span
			>
			<h1
				class="prose mb-6 font-serif text-4xl leading-tight font-semibold text-primary sm:text-5xl prose-headings:font-serif prose-headings:leading-tight prose-headings:font-semibold prose-headings:text-primary"
			>
				Intercollegiate Outing Club Association
			</h1>

			<p
				class="prose mb-8 text-xl leading-relaxed text-muted-foreground prose-p:text-xl prose-p:leading-relaxed prose-p:text-muted-foreground"
			>
				The Intercollegiate Outing Club Association was formed in 1932 to serve as a contact between
				college outing clubs. Today, IOCA still serves as a hub for intercollegiate outdoor programs
				to share trip opportunities, resources, and experience.
			</p>
			<div class="flex flex-col gap-2 sm:flex-row sm:gap-4">
				<a
					href={resolve('/schools')}
					class={buttonVariants({
						variant: 'default',
						size: 'xl',
						className: 'rounded-sm px-6 text-lg'
					})}
				>
					Outing Clubs Registry
				</a>

				<a
					href={resolve('/about')}
					class={buttonVariants({
						variant: 'outline',
						size: 'xl',
						className: 'rounded-sm px-6 text-lg'
					})}
				>
					Our History
				</a>
			</div>
		</div>

		<article>
			<Card.Root>
				<Card.Content class="flex flex-col items-center gap-4 text-center">
					<enhanced:img
						src="$lib/assets/ioca-1932.jpg"
						alt="Outdoors enthusiasts sitting in a forest on Mount Moosilauke, 1932"
						class="rounded-lg"
					/>

					<div>
						<h2
							class="prose mb-5 font-serif text-xl font-semibold text-primary prose-h2:font-serif prose-h2:text-xl prose-h2:font-semibold prose-h2:text-primary"
						>
							The First IOCA Conference (1932)
						</h2>
						<p
							class="prose mt-2 text-base text-muted-foreground prose-p:text-base prose-p:text-muted-foreground"
						>
							Held at the summit of Mount Moosilauke, the first IOCA conference brought together 14
							colleges to establish a new network for outdoor recreation. Led by founder Dr. Ellis
							Jump, the historic gathering at Dartmouth’s home mountain set the stage for decades of
							collegiate adventure.
						</p>
					</div>
				</Card.Content>
			</Card.Root>
		</article>
	</div>
</header>

<section>
	<div class="mb-4 flex flex-col items-center justify-between gap-2 sm:flex-row">
		<h2 class="font-serif text-4xl font-semibold text-primary">News &amp; Updates</h2>
		<Separator class="mx-2 hidden flex-1 sm:block" />
		<a
			href={resolve('/news')}
			class="rounded-sm border border-primary px-8 py-2 text-sm font-semibold text-muted-foreground transition-all duration-200 outline-none hover:bg-primary hover:text-primary-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent sm:border-none sm:p-0 sm:px-2 sm:py-1 sm:hover:bg-transparent sm:hover:text-accent"
			>All posts &rightarrow;</a
		>
	</div>
	<Separator class="sm:hidden" />
	<div class="flex flex-col gap-0 py-4">
		{#if data.articles.length > 0}
			{#each data.articles as article, i (article.id)}
				<NewsArticle {article} />
				{#if i < data.articles.length - 1}
					<Separator class="my-4" />
				{/if}
			{/each}
		{:else}
			<p class="px-4 py-8 text-center text-muted-foreground">No recent news available.</p>
		{/if}
	</div>
</section>

<section>
	<div class="mb-4 flex flex-col items-center justify-between gap-2 sm:flex-row">
		<h2 class="font-serif text-4xl font-semibold text-primary">Upcoming Events</h2>
		<Separator class="mx-2 hidden flex-1 sm:block" />
		<a
			href={resolve('/events')}
			class="rounded-sm border border-primary px-8 py-2 text-sm font-semibold text-muted-foreground transition-all duration-200 outline-none hover:bg-primary hover:text-primary-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent sm:border-none sm:p-0 sm:px-2 sm:py-1 sm:hover:bg-transparent sm:hover:text-accent"
			>Full calendar &rightarrow;</a
		>
	</div>
	<Separator class="sm:hidden" />

	<!-- Events List -->

	<div class="flex flex-col gap-0 py-4">
		{#if data.events.length > 0}
			{#each data.events as event, i (event.id)}
				<Event {event} />
				{#if i < data.events.length - 1}
					<Separator class="my-2" />
				{/if}
			{/each}
		{:else}
			<p class="px-4 py-8 text-center text-muted-foreground">No upcoming events scheduled.</p>
		{/if}
	</div>
</section>

<!-- interested in getting involved -->
<section>
	<div class="my-10 rounded-md border border-border bg-card p-8 md:p-12">
		<div class="max-w-xl">
			<span class="mb-2 block text-xs font-semibold tracking-widest text-accent uppercase"
				>Get Involved</span
			>
			<h2 class="mt-0 mb-3 border-none pb-0 font-serif text-3xl font-semibold text-primary">
				Interested in getting involved?
			</h2>
			<p class="mb-6 text-[0.95rem] leading-relaxed text-muted-foreground">
				IOCA has been connecting outing club members across the Northeast since 1932. Whether you're
				looking to attend events, represent your school, or help shape the future of the
				organization &mdash; we'd love to have you join us!
			</p>
			<a
				href={resolve('/join')}
				class={buttonVariants({
					variant: 'default',
					size: 'lg',
					className: 'rounded-sm px-6 text-lg'
				})}>Join IOCA</a
			>
		</div>
	</div>
</section>
