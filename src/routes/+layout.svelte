<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import appleTouchIcon from '$lib/assets/apple-touch-icon.png';
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from '$lib/components/nav/navbar.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils';
	import menuState from '$lib/state/nav.svelte';
	import { MediaQuery } from 'svelte/reactivity';

	const isDesktop = new MediaQuery('(width >= 48rem)');
	const isReducedMotion = new MediaQuery('(prefers-reduced-motion: reduce)');

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} sizes="32x32" />
	<link rel="apple-touch-icon" href={appleTouchIcon} />
</svelte:head>
<ModeWatcher disableTransitions={isReducedMotion.current} />

<!-- Skip Links -->
<a
	inert={!isDesktop.current && menuState.open ? true : undefined}
	class={cn(
		buttonVariants({ variant: 'secondary', size: 'lg' }),
		'absolute left-0 z-100 m-3 -translate-y-16 py-6 transition focus:translate-y-0'
	)}
	href="#main-content">Skip to Content</a
>

<Navbar />
<main
	id="main-content"
	tabindex="-1"
	inert={!isDesktop.current && menuState.open ? true : undefined}
	class="mx-auto flex w-full max-w-7xl flex-1 scroll-mt-16 flex-col gap-12 px-4 py-4 transition-shadow duration-200 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
>
	{@render children()}
</main>
<Footer inert={!isDesktop.current && menuState.open ? true : undefined} />
