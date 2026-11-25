<script lang="ts">
	import type { Field } from '$lib/forms/types';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';

	let {
		field,
		value = $bindable(''),
		errorMessage
	}: { field: Extract<Field, { type: 'select' }>; value: string; errorMessage?: string } = $props();

	const OTHER = '__other__';
	const hasError = $derived(Boolean(errorMessage));

	const isInitialOther = () => Boolean(field.allowOther && value && !field.options.includes(value));

	let choice = $state(isInitialOther() ? OTHER : value);
	let otherText = $state(isInitialOther() ? value : '');

	function chooseOption(next: string) {
		choice = next;
		value = next === OTHER ? otherText : next;
	}

	function typeOther(next: string) {
		otherText = next;
		value = next;
	}
</script>

<Select.Root type="single" name={field.id} value={choice} onValueChange={chooseOption}>
	<Select.Trigger
		id={field.id}
		aria-invalid={hasError}
		class={hasError ? 'w-full border-destructive ring-destructive/20' : 'w-full'}
	>
		{choice === OTHER ? 'Other' : choice || 'Select...'}
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			{#each field.options as option (option)}
				<Select.Item value={option} label={option}>{option}</Select.Item>
			{/each}
			{#if field.allowOther}
				<Select.Item value={OTHER} label="Other">Other</Select.Item>
			{/if}
		</Select.Group>
	</Select.Content>
</Select.Root>

{#if field.allowOther && choice === OTHER}
	<Input
		value={otherText}
		oninput={(e) => typeOther(e.currentTarget.value)}
		placeholder="Please specify"
		aria-invalid={hasError}
		class="mt-2"
	/>
{/if}
