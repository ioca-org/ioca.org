<script lang="ts">
	import type { Field } from './types';
	import * as Label from '$lib/components/ui/label';
	import TextField from '$lib/forms/fields/text-field.svelte';
	import SelectField from '$lib/forms/fields/select-field.svelte';
	import RadioField from '$lib/forms/fields/radio-field.svelte';

	let {
		field,
		value = $bindable(''),
		errorMessage
	}: { field: Field; value: string; errorMessage?: string } = $props();
</script>

<div class="mb-6">
	<Label.Root for={field.id} class="mb-1 block text-sm font-medium text-foreground">
		{field.label}{#if field.required}<span class="ml-0.5 text-destructive">*</span>{/if}
	</Label.Root>

	{#if field.hint}
		<p class="mb-2 text-xs text-muted-foreground">{field.hint}</p>
	{/if}

	{#if field.type === 'text' || field.type === 'textarea'}
		<TextField {field} bind:value {errorMessage} />
	{:else if field.type === 'select'}
		<SelectField {field} bind:value {errorMessage} />
	{:else if field.type === 'radio'}
		<RadioField {field} bind:value />
	{/if}

	{#if errorMessage}
		<p class="mt-1.5 text-xs text-destructive">{errorMessage}</p>
	{/if}
</div>
