<script lang="ts">
	import { resolve } from '$app/paths';
	import { IconLink } from '@tabler/icons-svelte';

	let {
		inert = false
	}: {
		inert?: boolean;
	} = $props();
</script>

<footer {inert} class="border-t border-border bg-card text-sm text-muted-foreground">
	<div class="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-4 py-10">
		<div>
			<p class="mb-1 font-serif font-semibold text-primary">
				Intercollegiate Outing Club Association
			</p>
			<p class="text-xs">Connecting outing club members since 1932.</p>
		</div>

		<ul class="flex list-none flex-wrap items-center gap-4">
			<li>
				<a
					href={resolve('/')}
					class="rounded-lg px-0.5 py-1 text-muted-foreground no-underline
 transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
					>Home</a
				>
			</li>
			<li>
				<a
					href={resolve('/about')}
					class="rounded-lg px-0.5 py-1 text-muted-foreground no-underline
 transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
					>About</a
				>
			</li>
			<li>
				<a
					href={resolve('/governance')}
					class="rounded-lg px-0.5 py-1 text-muted-foreground no-underline
 transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
					>Governance</a
				>
			</li>
			<li>
				<a
					href={resolve('/events')}
					class="rounded-lg px-0.5 py-1 text-muted-foreground no-underline
 transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
					>Events</a
				>
			</li>
			<li>
				<a
					href={resolve('/schools')}
					class="rounded-lg px-0.5 py-1 text-muted-foreground no-underline
 transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
					>Schools</a
				>
			</li>
			<li>
				<a
					href={resolve('/join')}
					class="rounded-lg px-0.5 py-1 text-muted-foreground no-underline
 transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
					>Join</a
				>
			</li>
		</ul>

		<div class="mt-4 flex w-full flex-wrap items-center justify-between gap-2 border-t border-border pt-4 text-xs">
			<div class="flex items-center gap-1">
				<span>Designed and built by</span>
				<a
					href="https://rtyocum.dev"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1 rounded-lg px-0.5 py-1 text-muted-foreground no-underline
 transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
				>
					<IconLink class="size-3" />
					Ryan Yocum
				</a>
			</div>
			<div class="flex items-center gap-4">
				<a
					href={resolve('/privacy')}
					class="rounded-lg px-0.5 py-1 text-muted-foreground no-underline
 transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
					>Privacy Policy</a
				>
				<span> &copy; 1932-2026 IOCA. All rights reserved. </span>
			</div>
		</div>
	</div>
</footer>
