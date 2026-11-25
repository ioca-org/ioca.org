import { SvelteSet } from 'svelte/reactivity';
import { startId, sections } from './content';
import type { Answers, Field } from './types';

export class Navigator {
	#getAnswers: () => Answers;

	history = $state<string[]>([startId]);

	currentId = $derived(this.history[this.history.length - 1]);
	section = $derived(sections[this.currentId]);
	isFirst = $derived(this.history.length === 1);
	isLast = $derived(this.section.nav.type === 'end');

	progress = $derived.by(() => {
		const step = this.history.length;
		const remaining = this.pathFrom(this.currentId).length - 1;
		const total = step + remaining;
		return { step, total, pct: Math.round(((step - 1) / total) * 100) };
	});

	constructor(getAnswers: () => Answers) {
		this.#getAnswers = getAnswers;
	}

	advance() {
		const nextId = this.resolveNext(this.currentId);
		if (nextId) this.history.push(nextId);
	}

	back() {
		if (!this.isFirst) this.history.pop();
	}

	resolveNext(fromId: string): string | null {
		const nav = sections[fromId].nav;
		switch (nav.type) {
			case 'end':
				return null;
			case 'goto':
				return nav.to;
			case 'branch': {
				const answer = this.#getAnswers()[nav.fieldId];
				const match = nav.map.find((m) => m.value === answer);
				return match?.target ?? nav.fallback ?? null;
			}
		}
	}

	/** Section ids from `startAt` to the end, following the user's answers. */
	pathFrom(startAt: string): string[] {
		const path: string[] = [];
		const seen = new SvelteSet<string>();
		let cursor: string | null = startAt;

		while (cursor && sections[cursor] && !seen.has(cursor)) {
			seen.add(cursor);
			path.push(cursor);
			cursor = this.resolveNext(cursor);
		}
		return path;
	}

	/** Fields from every section on the path from the very start. */
	getVisitedFields(): Field[] {
		return this.pathFrom(startId).flatMap((id) => sections[id].fields);
	}
}
