import matter from 'gray-matter';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

export interface NewsArticle {
	id: string;
	title: string;
	date: string;
	excerpt: string;
	content: string;
	category: string;
	showOnHomepage: boolean;
	notBefore?: string;
	notAfter?: string;
}

export interface Event {
	id: string;
	title: string;
	date: string;
	location: string;
	description: string;
	host: string;
	showOnHomepage: boolean;
	externalLink?: string;
	content?: string;
	notBefore?: string;
	notAfter?: string;
}

export interface RegionContact {
	id: string;
	region: string;
	contact: string;
	email: string;
}

export interface School {
	id: string;
	name: string;
	institution?: string;
	city?: string;
	country: 'US' | 'CA';
	subdivision: string;
	region: string;
	description?: string;
	website?: string;
	instagram?: string;
	facebook?: string;
	email?: string;
}

DOMPurify.addHook('afterSanitizeAttributes', (node) => {
	if (node.tagName === 'A') {
		const href = node.getAttribute('href') || '';
		const isExternal = /^https?:\/\//.test(href);

		if (isExternal) {
			node.setAttribute('target', '_blank');
			node.setAttribute('rel', 'noreferrer noopener');
		} else {
			node.removeAttribute('target');
			node.removeAttribute('rel');
		}
	}
});

function allowDate(notBefore?: Date, notAfter?: Date): boolean {
	if (notBefore && notAfter && notBefore > notAfter) {
		throw new Error('notBefore date cannot be after notAfter date.');
	}

	const now = new Date();

	return (!notBefore || now >= notBefore) && (!notAfter || now <= notAfter);
}

// Loads all Markdown files in src/lib/content/news, parses frontmatter and markdown
export function getNewsArticles(): NewsArticle[] {
	const modules = import.meta.glob('$lib/content/news/*.md', { query: '?raw', eager: true });
	const articles = Object.entries(modules)
		.map(([filePath, module]): NewsArticle | null => {
			const rawContent = (module as { default: string }).default;
			const { data, content } = matter(rawContent);

			if (!allowDate(data.notBefore, data.notAfter)) {
				return null; // Skip articles that are not allowed by date
			}

			const id = filePath.split('/').pop()?.replace('.md', '') || '';

			// Compile Markdown content body to HTML synchronous
			const contentHtml = marked.parse(content) as string;
			const sanitizedContentHtml = DOMPurify.sanitize(contentHtml, {
				USE_PROFILES: { html: true }
			});

			return {
				id,
				title: data.title || '',
				date: data.date || '',
				excerpt: data.excerpt || '',
				content: sanitizedContentHtml,
				category: data.category || 'Announcement',
				showOnHomepage: !!data.showOnHomepage
			};
		})
		.filter((article): article is NewsArticle => article !== null); // Filter out null articles

	// Sort by date descending (newest first)
	return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Loads all Markdown files in src/lib/content/events
export function getEvents(): Event[] {
	const modules = import.meta.glob('$lib/content/events/*.md', { query: '?raw', eager: true });
	const events = Object.entries(modules)
		.map(([filePath, module]): Event | null => {
			const rawContent = (module as { default: string }).default;
			const { data, content } = matter(rawContent);

			if (!allowDate(data.notBefore, data.notAfter)) {
				return null; // Skip events that are not allowed by date
			}

			const id = filePath.split('/').pop()?.replace('.md', '') || '';

			// Compile Markdown content body to HTML if it exists
			const contentHtml = content.trim() ? (marked.parse(content) as string) : undefined;
			const sanitizedContentHtml = contentHtml
				? DOMPurify.sanitize(contentHtml, {
						USE_PROFILES: { html: true }
					})
				: undefined;

			return {
				id,
				title: data.title || '',
				date: data.date || '',
				location: data.location || '',
				description: data.description || '',
				host: data.host || '',
				showOnHomepage: !!data.showOnHomepage,
				externalLink: data.externalLink || undefined,
				content: sanitizedContentHtml
			};
		})
		.filter((event): event is Event => event !== null); // Filter out null events

	// Sort events by chronological or default order
	return events;
}

// Loads all JSON files in src/lib/content/schools
export function getSchools(): School[] {
	const schoolsData = import.meta.glob('$lib/content/schools.json', { eager: true });
	const module = Object.values(schoolsData)[0] as { default: Omit<School, 'id'>[] };
	const schools = (module?.default ?? []).map((data, index) => ({
		id:
			data.name
				.toLowerCase()
				.replace(/\s+/g, '-')
				.replace(/[^a-z0-9-]/g, '') || String(index),
		...data
	}));

	// Sort schools alphabetically
	return schools.sort((a, b) => a.name.localeCompare(b.name));
}

// Loads all JSON files in src/lib/content/regions
export function getRegionContacts(): RegionContact[] {
	const regionsData = import.meta.glob('$lib/content/regions.json', { eager: true });
	const module = Object.values(regionsData)[0] as { default: Omit<RegionContact, 'id'>[] };
	return (module?.default ?? []).map((data, index) => ({
		id:
			data.region
				.toLowerCase()
				.replace(/\s+/g, '-')
				.replace(/[^a-z0-9-]/g, '') || String(index),
		...data
	}));
}
