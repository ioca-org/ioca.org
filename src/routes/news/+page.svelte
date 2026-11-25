<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import * as ButtonGroup from '$lib/components/ui/button-group/index.js';
	import { IconSearch } from '@tabler/icons-svelte';
	import type { PageData } from './$types';
	import NewsArticle from '$lib/components/news-article.svelte';

	let { data }: { data: PageData } = $props();

	let articles = $derived(data.articles);
	let filteredArticles = $derived.by(() => {
		return articles.filter((article) => {
			const matchesSearch =
				article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

			const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;

			return matchesSearch && matchesCategory;
		});
	});
	let searchTerm = $state('');
	let selectedCategory = $state('All');

	// Get unique categories
	const categories = $derived(['All', ...new Set(articles.map((article) => article.category))]);
</script>

<svelte:head>
	<title>News & Updates | IOCA</title>
	<meta
		name="description"
		content="Stay up-to-date with the latest news, announcements, and updates from the Intercollegiate Outing Club Association."
	/>
</svelte:head>

<header class="py-12">
	<div class="grid grid-cols-1 items-center gap-6">
		<div class="">
			<span class="mb-2 block text-sm font-semibold tracking-widest text-accent uppercase"
				>News &amp; Updates</span
			>
			<h1 class="mb-6 font-serif text-4xl leading-tight font-semibold text-primary sm:text-5xl">
				IOCA News
			</h1>

			<p class="mb-4 text-xl leading-relaxed text-muted-foreground">
				Stay up-to-date with the latest news, announcements, and updates from the Intercollegiate
				Outing Club Association. From upcoming events to important announcements, we keep you
				informed.
			</p>
			<p class="text-base text-muted-foreground">
				Have a news item to share? Talk to your club's representative to get it included in the next
				newsletter or on the website.
			</p>
		</div>
	</div>
</header>

<section>
	<div class="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
		<h2 class="font-serif text-4xl font-semibold text-primary">All News Articles</h2>
		<Separator class="ml-2 hidden flex-1 sm:block" />
	</div>
	<Separator class="sm:hidden" />

	<!-- Search and Filter Section -->
	<div class="px-4 py-4">
		<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
			<div class="relative w-full md:w-1/3">
				<InputGroup.Root>
					<Label for="search" class="sr-only">Search Articles</Label>
					<InputGroup.Input id="search" bind:value={searchTerm} placeholder="Search..." />
					<InputGroup.Addon>
						<IconSearch />
					</InputGroup.Addon>
				</InputGroup.Root>
			</div>

			<div class="flex items-center gap-2">
				<ButtonGroup.Root class="w-full md:w-auto">
					<ButtonGroup.Text>
						<Label for="categorySelect">Select a Category</Label>
					</ButtonGroup.Text>
					<Select.Root type="single" name="category" bind:value={selectedCategory}>
						<Select.Trigger class="grow px-4 py-2" id="categorySelect">
							{selectedCategory || 'Select Category'}
						</Select.Trigger>
						<Select.Content>
							<Select.Group>
								<Select.Label>Categories</Select.Label>
								{#each categories as category (category)}
									<Select.Item value={category} label={category}>
										{category}
									</Select.Item>
								{/each}
							</Select.Group>
						</Select.Content>
					</Select.Root>
				</ButtonGroup.Root>
			</div>
		</div>
	</div>

	<!-- Articles List -->
	<div class="flex flex-col gap-0 py-4">
		{#if filteredArticles.length > 0}
			{#each filteredArticles as article (article.id)}
				<NewsArticle {article} />
				<Separator class="my-4" />
			{/each}
		{:else}
			<div class="px-4 py-8 text-center">
				<p class="text-muted-foreground">No articles found matching your criteria.</p>
			</div>
		{/if}
	</div>
</section>
