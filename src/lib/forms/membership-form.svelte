<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { FormFlow } from './form-flow.svelte';
	import { submitMembership } from './submit';
	import FieldRenderer from './field-renderer.svelte';
	import SuccessCard from './success-card.svelte';
	import Turnstile from './turnstile/turnstile.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Progress } from '$lib/components/ui/progress/index.js';
	import { IconArrowLeft, IconArrowRight } from '@tabler/icons-svelte';

	let {
		class: className = '',
		turnstileSiteKey = env.PUBLIC_TURNSTILE_SITE_KEY || '2x00000000000000000000BB'
	}: {
		class?: string;
		turnstileSiteKey?: string;
	} = $props();

	const flow = new FormFlow();

	let status = $state<'idle' | 'submitting' | 'done'>('idle');
	let submitError = $state<string | null>(null);
	let turnstileToken = $state<string | null>(null);

	async function submit() {
		if (status === 'submitting') return;

		flow.showErrors = true;
		if (!flow.isValid) return;

		if (!turnstileToken) {
			submitError = 'Please complete the security check before submitting.';
			return;
		}

		status = 'submitting';
		submitError = null;
		try {
			await submitMembership(flow.visitedAnswers(), turnstileToken);
			status = 'done';
		} catch (err) {
			submitError = err instanceof Error ? err.message : 'Something went wrong.';
			status = 'idle';
		}
	}

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (flow.nav.isLast) {
			submit();
		} else {
			flow.next();
		}
	}
</script>

<div class="mx-auto w-full max-w-7xl {className}">
	{#if status === 'done'}
		<SuccessCard />
	{:else}
		<div class="mb-4">
			<div class="mb-2 flex items-center justify-between text-xs font-medium text-muted-foreground">
				<span>Section {flow.nav.progress.step} of {flow.nav.progress.total}</span>
				<span>{flow.nav.progress.pct}%</span>
			</div>
			<Progress value={flow.nav.progress.pct} class="h-1.5" />
		</div>

		<form onsubmit={handleSubmit}>
			<Card.Root>
				<Card.Header>
					<Card.Title class="font-serif text-2xl text-primary">{flow.nav.section.title}</Card.Title>
					{#if flow.nav.section.description}
						<Card.Description class="text-base leading-relaxed">
							{flow.nav.section.description}
						</Card.Description>
					{/if}
				</Card.Header>

				<Card.Content>
					{#each flow.nav.section.fields as field (flow.nav.currentId + '-' + field.id)}
						<FieldRenderer
							{field}
							bind:value={flow.answers[field.id]}
							errorMessage={flow.errors[field.id]}
						/>
					{/each}

					{#if flow.nav.isLast}
						<div class="my-4 flex justify-start">
							<Turnstile
								siteKey={turnstileSiteKey}
								onCallback={(token) => {
									turnstileToken = token;
									submitError = null;
								}}
								onExpired={() => {
									turnstileToken = null;
								}}
								onError={() => {
									turnstileToken = null;
								}}
							/>
						</div>
					{/if}

					{#if flow.showErrors && !flow.isValid}
						<p class="mb-2 text-sm text-destructive">Please fix the errors above to continue.</p>
					{/if}
					{#if submitError}
						<p class="mb-2 text-sm text-destructive">{submitError}</p>
					{/if}
				</Card.Content>

				<Card.Footer class="flex justify-between">
					<Button
						type="button"
						variant="outline"
						disabled={flow.nav.isFirst || status === 'submitting'}
						onclick={() => flow.back()}
					>
						<IconArrowLeft class="mr-1 h-4 w-4" />
						Back
					</Button>

					{#if flow.nav.isLast}
						<Button type="submit" disabled={status === 'submitting' || !turnstileToken}>
							{status === 'submitting' ? 'Submitting...' : 'Submit'}
						</Button>
					{:else}
						<Button type="submit">
							Next
							<IconArrowRight class="ml-1 h-4 w-4" />
						</Button>
					{/if}
				</Card.Footer>
			</Card.Root>
		</form>
	{/if}
</div>
