import formData from '$lib/content/form.json';
import type { Answers, Section } from './types';

export const startId: string = formData.startId;

export const sections: Record<string, Section> = Object.fromEntries(
	(formData.sections as Section[]).map((s) => [s.id, s])
);

export const emptyAnswers = (): Answers =>
	Object.fromEntries(
		Object.values(sections)
			.flatMap((s) => s.fields)
			.map((f) => [f.id, ''])
	);
