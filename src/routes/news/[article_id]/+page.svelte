<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const article = $derived(data.article);
</script>

<svelte:head>
	<title>{article.title} | IOCA</title>
	<meta name="description" content={article.excerpt} />
</svelte:head>

<header class="pt-12">
	<div class="grid grid-cols-1 items-center gap-6">
		<div class="">
			<span class="mb-2 block text-sm font-semibold tracking-widest text-accent uppercase">
				{article.category}
			</span>
			<h1 class="mb-6 font-serif text-4xl leading-tight font-semibold text-primary sm:text-5xl">
				{article.title}
			</h1>

			<p class="mb-4 text-xl leading-relaxed text-muted-foreground">
				{article.excerpt}
			</p>

			<div class="mt-2 font-serif text-base text-muted-foreground italic">
				{formatDate(article.date)}
			</div>
		</div>
	</div>
</header>

<Separator class="" />
<section>
	<div class="prose prose-theme pb-8">
		<!-- This content is sanitized by DOMPurify, its fine -->
		<!-- eslint-disable svelte/no-at-html-tags -->
		{@html article.content}
		<!-- eslint-enable svelte/no-at-html-tags -->
	</div>
</section>
