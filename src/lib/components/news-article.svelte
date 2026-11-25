<script lang="ts">
	import { resolve } from '$app/paths';
	import { formatDate } from '$lib/utils';
	import type { NewsArticle } from '$lib/content';

	let {
		article
	}: {
		article: NewsArticle;
	} = $props();
</script>

<div class="space-y-4 px-3">
	<div class="flex items-center justify-between gap-4 px-1">
		<span class="block text-sm font-semibold text-accent uppercase">{article.category}</span>
		<div class="font-serif text-base text-muted-foreground italic">
			{formatDate(article.date)}
		</div>
	</div>

	<h3 class="px-1 font-serif text-2xl font-semibold text-primary">
		{article.title}
	</h3>
	<p class="px-1 text-base text-muted-foreground">
		{article.excerpt}
	</p>

	<a
		href={resolve(`/news/${article.id}/`)}
		class="inline-block rounded-lg px-1 py-2 text-sm text-primary transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
		>Read more →</a
	>
</div>
