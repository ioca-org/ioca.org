import { getEvents, getNewsArticles } from '$lib/content';

export const prerender = true;

export async function GET() {
	const site = 'https://ioca.org';

	// Static routes
	const staticPages = [
		'',
		'about',
		'events',
		'news',
		'schools',
		'join',
		'governance',
		'privacy',
	];

	// Dynamic pages
	const events = getEvents().filter((event) => event.content);
	const articles = getNewsArticles();

	const urls: string[] = [
		...staticPages.map((page) => (page ? `${site}/${page}` : `${site}/`)),
		...events.map((event) => `${site}/events/${event.id}`),
		...articles.map((article) => `${site}/news/${article.id}`)
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(url) => `  <url>
    <loc>${url}</loc>
  </url>`
	)
	.join('\n')}
</urlset>`.trim();

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
