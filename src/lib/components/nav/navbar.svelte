<script lang="ts">
	import ThemeToggle from '$lib/components/theme-toggle.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { MediaQuery } from 'svelte/reactivity';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import menuState from '$lib/state/nav.svelte';

	const isDesktop = new MediaQuery('(width >= 48rem)');
</script>

<nav
	class="sticky top-0 left-0 z-50 bg-background transition-colors duration-200"
	aria-label="Main Navigation"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between p-2">
		<a
			href={resolve('/')}
			class="flex items-center gap-4 rounded-lg p-2 font-serif text-2xl font-bold text-primary transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
		>
			<enhanced:img
				src="$lib/assets/icon-512.png?w=192"
				alt="IOCA Patch Logo"
				class="h-10 w-10 rounded-full"
			/>

			<span>IOCA</span>
		</a>

		<div class="flex items-center gap-6">
			<button
				onclick={() => (menuState.open = !menuState.open)}
				class="flex w-12 cursor-pointer flex-col gap-2 rounded-lg p-2 text-lg transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent md:hidden"
				aria-expanded={menuState.open}
				aria-controls="nav-list"
				aria-label="Toggle Navigation Menu"
			>
				<span
					class="block h-0.5 w-full translate-y-2.5 rotate-45 bg-primary transition-transform duration-200"
					class:translate-y-2.5={menuState.open}
					class:rotate-45={menuState.open}
				></span>
				<span
					class="block h-0.5 w-full bg-primary transition-all duration-200"
					class:opacity-0={menuState.open}
					class:scale-x-0={menuState.open}
				></span>
				<span
					class="block h-0.5 w-full -translate-y-2.5 -rotate-45 bg-primary transition-transform duration-200"
					class:-translate-y-2.5={menuState.open}
					class:-rotate-45={menuState.open}
				></span>
			</button>

			<ul
				class="fixed inset-0 top-18 z-100 flex translate-x-full list-none flex-col items-center gap-6 bg-background px-0 py-10 transition-transform duration-500 ease-in-out md:static md:inset-auto md:z-auto md:translate-x-0 md:flex-row md:items-center md:gap-4 md:bg-transparent md:p-0 md:transition-none"
				id="nav-list"
				class:translate-x-full={!menuState.open}
				class:translate-x-0={menuState.open}
				inert={!isDesktop.current && !menuState.open ? true : undefined}
			>
				<li>
					<a
						href={resolve('/')}
						onclick={() => (menuState.open = false)}
						class="rounded-lg px-1 py-2 text-lg transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
						class:text-accent={page.url.pathname === '/'}>Home</a
					>
				</li>
				<li>
					<a
						href={resolve('/about')}
						onclick={() => (menuState.open = false)}
						class="rounded-lg px-1 py-2 text-lg transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
						class:text-accent={page.url.pathname === '/about/'}>About</a
					>
				</li>
				<li>
					<a
						href={resolve('/governance')}
						onclick={() => (menuState.open = false)}
						class="rounded-lg px-1 py-2 text-lg transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
						class:text-accent={page.url.pathname === '/governance/'}>Governance</a
					>
				</li>
				<li>
					<a
						href={resolve('/events')}
						onclick={() => (menuState.open = false)}
						class="rounded-lg px-1 py-2 text-lg transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
						class:text-accent={page.url.pathname === '/events/'}>Events</a
					>
				</li>
				<li>
					<a
						href={resolve('/schools')}
						onclick={() => (menuState.open = false)}
						class="rounded-lg px-1 py-2 text-lg transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
						class:text-accent={page.url.pathname === '/schools/'}>Schools</a
					>
				</li>
				<li>
					<a
						href={resolve('/news')}
						onclick={() => (menuState.open = false)}
						class="rounded-lg px-1 py-2 text-lg transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
						class:text-accent={page.url.pathname === '/news/'}>News</a
					>
				</li>
				<li>
					<a
						href={resolve('/join')}
						onclick={() => (menuState.open = false)}
						class="rounded-lg px-1 py-2 text-lg transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
						class:text-accent={page.url.pathname === '/join/'}>Join Us</a
					>
				</li>
			</ul>

			<ThemeToggle />
		</div>
	</div>

	<Separator class="" />
</nav>
