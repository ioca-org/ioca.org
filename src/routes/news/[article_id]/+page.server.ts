import { getNewsArticles } from '$lib/content';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	const articles = getNewsArticles();
	return articles.map((article) => ({ article_id: article.id }));
};

export const load: PageServerLoad = ({ params }) => {
	const articles = getNewsArticles();
	const article = articles.find((a) => a.id === params.article_id);

	if (!article) {
		error(404, 'Article not found');
	}

	return {
		article
	};
};
