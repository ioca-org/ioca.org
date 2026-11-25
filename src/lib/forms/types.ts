export type ValidationType = 'none' | 'email' | 'url' | 'phone';

type BaseField = {
	id: string;
	label: string;
	required?: boolean;
	validation?: ValidationType;
	hint?: string;
	placeholder?: string;
};

export type Field = BaseField &
	(
		| { type: 'text' | 'textarea' }
		| { type: 'select'; options: string[]; allowOther?: boolean }
		| { type: 'radio'; options: string[] }
	);

export type Nav =
	| { type: 'goto'; to: string }
	| { type: 'end' }
	| {
			type: 'branch';
			fieldId: string;
			map: { value: string; target: string }[];
			fallback?: string;
	  };

export type Section = {
	id: string;
	title: string;
	description?: string;
	fields: Field[];
	nav: Nav;
};

export type Answers = Record<string, string>;
