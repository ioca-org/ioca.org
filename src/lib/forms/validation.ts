import { z } from 'zod';
import type { Answers, Field } from './types';

/**
 * Zod schema for a single field, based on its type and validation rules.
 **/
const FORMAT_RULES: Record<string, { test: (v: string) => boolean; message: string }> = {
	email: {
		test: (v) => z.email().safeParse(v).success,
		message: 'Please enter a valid email address.'
	},
	url: {
		test: (v) => z.url().safeParse(v).success,
		message: 'Please enter a valid URL (starting with http:// or https://).'
	},
	phone: {
		test: (v) => /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(v),
		message: 'Please enter a valid phone number.'
	}
};

/**
 * @description Create a Zod schema for a single field, based on its type and validation rules.
 * @param field The field to create a schema for.
 * @returns A Zod schema for the field.
 */
function fieldSchema(field: Field): z.ZodString {
	let schema = z.string();

	if (field.required) {
		schema = schema.trim().min(1, `${field.label} is required.`);
	}

	const rule = field.validation ? FORMAT_RULES[field.validation] : undefined;
	if (rule) {
		// Empty values are skipped here: `required` handles them, optional fields allow them.
		schema = schema.refine((v) => v.trim() === '' || rule.test(v.trim()), {
			message: rule.message
		});
	}
	return schema;
}

/**
 * @description Create a Zod schema for a section, based on its fields.
 * @param fields The fields in the section.
 * @returns A Zod schema for the section.
 */
function createSectionSchema(fields: Field[]) {
	return z.object(Object.fromEntries(fields.map((f) => [f.id, fieldSchema(f)])));
}

/**
 * @description Validate a section's fields against the user's answers.
 * @param fields The fields in the section.
 * @param answers The user's answers.
 * @returns An object mapping field ids to error messages, or an empty object if there are no errors.
 */
export function validateSection(fields: Field[], answers: Answers): Record<string, string> {
	const result = createSectionSchema(fields).safeParse(answers);
	if (result.success) return {};

	const errors: Record<string, string> = {};
	for (const issue of result.error.issues) {
		const id = String(issue.path[0]);
		errors[id] ??= issue.message; // first message per field wins
	}
	return errors;
}
