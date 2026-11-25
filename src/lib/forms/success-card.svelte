<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { IconCheck } from '@tabler/icons-svelte';
</script>

<Card.Root>
	<Card.Content class="flex flex-col items-center gap-3 py-12 text-center">
		<span class="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
			<IconCheck class="h-6 w-6" stroke={2.5} />
		</span>
		<h2 class="font-serif text-2xl font-semibold text-primary">You're in!</h2>
		<p class="text-muted-foreground">Thanks for joining IOCA &mdash; we'll be in touch soon.</p>
	</Card.Content>
</Card.Root>
