import { getNewsArticles, getEvents } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const allArticles = getNewsArticles();
	const allEvents = getEvents();

	// Filter articles and events set to show on the homepage
	const articles = allArticles.filter((a) => a.showOnHomepage).slice(0, 3);
	const events = allEvents.filter((e) => e.showOnHomepage).slice(0, 3);

	return {
		articles,
		events
	};
};
