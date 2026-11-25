import { getEvents } from '$lib/content';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	// Only prerender pages for events that have first-party details
	const events = getEvents();
	return events.filter((event) => event.content).map((event) => ({ event_id: event.id }));
};

export const load: PageServerLoad = ({ params }) => {
	const events = getEvents();
	const event = events.find((e) => e.id === params.event_id && e.content);

	if (!event) {
		error(404, 'Event details not found');
	}

	return {
		event
	};
};
