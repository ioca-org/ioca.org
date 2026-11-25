<script lang="ts">
	import type { Field } from '$lib/forms/types';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';

	let {
		field,
		value = $bindable(''),
		errorMessage
	}: {
		field: Extract<Field, { type: 'text' | 'textarea' }>;
		value: string;
		errorMessage?: string;
	} = $props();

	const INPUT_TYPES: Record<string, string> = { email: 'email', url: 'url', phone: 'tel' };
	const inputType = $derived((field.validation && INPUT_TYPES[field.validation]) || 'text');
</script>

{#if field.type === 'textarea'}
	<Textarea
		id={field.id}
		bind:value
		placeholder={field.placeholder}
		aria-invalid={Boolean(errorMessage)}
	/>
{:else}
	<Input
		id={field.id}
		type={inputType}
		bind:value
		placeholder={field.placeholder}
		aria-invalid={Boolean(errorMessage)}
	/>
{/if}
