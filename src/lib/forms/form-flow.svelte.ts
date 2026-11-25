import { emptyAnswers } from './content';
import { Navigator } from './navigator.svelte';
import { validateSection } from './validation';
import type { Answers } from './types';
import { SvelteSet } from 'svelte/reactivity';

/**
 * @description A class that manages the state and navigation of a multi-section form flow.
 */
export class FormFlow {
	// State
	answers = $state<Answers>(emptyAnswers());
	showErrors = $state(false);

	// Form Navigation
	nav = new Navigator(() => this.answers);

	// Validation
	allErrors = $derived(validateSection(this.nav.section.fields, this.answers));
	isValid = $derived(Object.keys(this.allErrors).length === 0);
	errors = $derived(this.showErrors ? this.allErrors : {});

	/**
	 * @description Navigate to the next section in the form flow.
	 * If the current section is invalid, show errors and do not advance.
	 */
	next() {
		this.showErrors = true;
		if (!this.isValid) return;

		this.showErrors = false;
		this.nav.advance();
	}

	/**
	 * @description Navigate back to the previous section in the form flow.
	 */
	back() {
		this.showErrors = false;
		this.nav.back();
	}

	/**
	 * @description Get the user's answers for all fields that have been visited in the form flow.
	 * @returns An object containing the user's answers for visited fields.
	 */
	visitedAnswers(): Answers {
		const ids = new SvelteSet(this.nav.getVisitedFields().map((f) => f.id));
		return Object.fromEntries(Object.entries(this.answers).filter(([id]) => ids.has(id)));
	}
}
