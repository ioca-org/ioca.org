import type { Answers } from './types';

/**
 * @description Submit the user's answers to the membership API endpoint.
 * @param answers The user's answers.
 * @param turnstileToken Optional Turnstile verification token.
 * @returns A promise that resolves when the submission is complete.
 * @throws An error if the submission fails.
 */
export async function submitMembership(
	answers: Answers,
	turnstileToken?: string | null
): Promise<void> {
	const res = await fetch('/api/membership', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ answers, turnstileToken })
	});
	if (!res.ok) throw new Error('Submission failed');
}
