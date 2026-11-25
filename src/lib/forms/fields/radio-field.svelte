<script lang="ts">
	import type { Field } from '$lib/forms/types';
	import * as Label from '$lib/components/ui/label';
	import * as RadioGroup from '$lib/components/ui/radio-group';

	let {
		field,
		value = $bindable('')
	}: { field: Extract<Field, { type: 'radio' }>; value: string } = $props();
</script>

<RadioGroup.Root bind:value class="flex flex-col gap-2">
	{#each field.options as option (option)}
		<Label.Root class="flex items-center gap-2 text-sm font-normal text-foreground">
			<RadioGroup.Item value={option} id={`${field.id}-${option}`} />
			{option}
		</Label.Root>
	{/each}
</RadioGroup.Root>
