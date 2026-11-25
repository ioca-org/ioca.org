<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import {
		IconBrandFacebook,
		IconBrandInstagram,
		IconLink,
		IconMail,
		IconMapPin,
		IconSchool,
		IconSearch
	} from '@tabler/icons-svelte';

	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import * as ButtonGroup from '$lib/components/ui/button-group/index.js';
	import * as Label from '$lib/components/ui/label/index.js';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let searchTerm = $state('');
	let selectedRegion = $state('All');

	// Unique sorted regions derived from the full school list
	const allRegions = $derived(
		['All', ...new Set(data.schools.map((s) => s.region).filter(Boolean))].sort((a, b) =>
			a.localeCompare(b)
		)
	);

	const filteredSchools = $derived(
		data.schools.filter((school) => {
			const term = searchTerm.toLowerCase().trim();
			const matchesSearch =
				!term ||
				school.name.toLowerCase().includes(term) ||
				(school.institution && school.institution.toLowerCase().includes(term)) ||
				(school.city && school.city.toLowerCase().includes(term)) ||
				school.region.toLowerCase().includes(term) ||
				school.subdivision.toLowerCase().includes(term) ||
				school.country.toLowerCase().includes(term) ||
				(school.description && school.description.toLowerCase().includes(term)) ||
				school.website?.toLowerCase().includes(term) ||
				school.email?.toLowerCase().includes(term);
			const matchesRegion = selectedRegion === 'All' || school.region === selectedRegion;
			return matchesSearch && matchesRegion;
		})
	);
</script>

<svelte:head>
	<title>Outing Clubs Registry | IOCA</title>
	<meta
		name="description"
		content="Explore the registry of outing clubs affiliated with the Intercollegiate Outing Club Association (IOCA). Find contact information, websites, and social media links for each club."
	/>
</svelte:head>
<header class="py-12">
	<div class="grid grid-cols-1 items-center gap-6">
		<div class="">
			<span class="mb-2 block text-sm font-semibold tracking-widest text-accent uppercase"
				>Find your Outdoor Community</span
			>
			<h1 class="mb-6 font-serif text-4xl leading-tight font-semibold text-primary sm:text-5xl">
				Outing Clubs Registry
			</h1>

			<p class="mb-4 text-xl leading-relaxed text-muted-foreground">
				Explore our registry of outing clubs from colleges and universities across the country. Find
				contact information, websites, and more to connect with fellow outdoor enthusiasts.
			</p>
			<p class="text-base text-muted-foreground">
				If your club isn't listed, join IOCA and submit your information to be included in the
				registry.
			</p>
		</div>
	</div>
</header>

<section>
	<div class="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
		<h2 class="font-serif text-4xl font-semibold text-primary">Member Clubs</h2>
		<Separator class="ml-2 hidden flex-1 sm:block" />
	</div>
	<Separator class="sm:hidden" />

	<div class="px-4 py-4">
		<div class="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
			<div class="max-w-2xl flex-1">
				<InputGroup.Root>
					<InputGroup.Input
						bind:value={searchTerm}
						placeholder="Search by club name, college, city, or state..."
					/>
					<InputGroup.Addon>
						<IconSearch />
					</InputGroup.Addon>
				</InputGroup.Root>
			</div>

			<ButtonGroup.Root class="w-full md:w-auto">
				<ButtonGroup.Text>
					<Label.Root for="regionSelect">Select a Region</Label.Root>
				</ButtonGroup.Text>
				<Select.Root type="single" name="region" bind:value={selectedRegion}>
					<Select.Trigger id="regionSelect" class="grow px-4 py-2">
						{selectedRegion ? selectedRegion : 'Select a region'}
					</Select.Trigger>
					<Select.Content>
						<Select.Group>
							{#each allRegions as region (region)}
								<Select.Item value={region} label={region}>
									{region}
								</Select.Item>
							{/each}
						</Select.Group>
					</Select.Content>
				</Select.Root>
			</ButtonGroup.Root>
		</div>

		<div class="mb-6 flex items-center justify-between text-sm text-muted-foreground">
			<p>
				Showing <span class="font-medium text-foreground">{filteredSchools.length}</span>
				{filteredSchools.length === 1 ? 'club' : 'clubs'}
				{#if searchTerm.trim() || selectedRegion !== 'All'}
					(filtered from {data.schools.length})
				{/if}
			</p>
			{#if searchTerm.trim() || selectedRegion !== 'All'}
				<button
					type="button"
					class="text-xs font-medium text-accent underline underline-offset-4 hover:text-accent/80"
					onclick={() => {
						searchTerm = '';
						selectedRegion = 'All';
					}}
				>
					Clear filters
				</button>
			{/if}
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each filteredSchools as school (school.id || school.name)}
				<Card.Root
					class="flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
				>
					<Card.Header class="space-y-2">
						<div class="space-y-1">
							<Card.Title class="text-xl leading-snug font-semibold">{school.name}</Card.Title>
							{#if school.institution}
								<div class="flex items-center gap-1.5 text-sm font-medium text-foreground/80">
									<IconSchool class="h-4 w-4 shrink-0 text-accent" />
									<span>{school.institution}</span>
								</div>
							{/if}
						</div>

						<div
							class="flex flex-wrap items-center gap-x-2 gap-y-1 pt-1 text-xs text-muted-foreground"
						>
							<span class="inline-flex items-center gap-1">
								<IconMapPin class="h-3.5 w-3.5 shrink-0" />
								{[school.city, school.subdivision, school.country].filter(Boolean).join(', ')}
							</span>
							{#if school.region}
								<span class="text-muted-foreground/40">&bull;</span>
								<span
									class="inline-flex items-center rounded-sm bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground"
								>
									{school.region} Region
								</span>
							{/if}
						</div>
					</Card.Header>

					<Card.Content class="flex flex-1 flex-col justify-between gap-4">
						{#if school.description}
							<p class="text-sm leading-relaxed text-muted-foreground">{school.description}</p>
						{:else}
							<div></div>
						{/if}

						{#if school.website || school.instagram || school.facebook || school.email}
							<div class="flex flex-col gap-1 border-t border-border/40 pt-3 text-sm">
								{#if school.website}
									<a
										class="inline-flex items-center gap-2 py-1 text-sm font-medium text-primary transition-colors hover:text-accent hover:underline"
										href={school.website}
										target="_blank"
										rel="external noopener noreferrer"
									>
										<IconLink class="h-4 w-4 shrink-0 text-accent" />
										<span class="truncate">Visit Website</span>
									</a>
								{/if}

								{#if school.instagram}
									<a
										class="inline-flex items-center gap-2 py-1 text-sm font-medium text-primary transition-colors hover:text-accent hover:underline"
										href={school.instagram}
										target="_blank"
										rel="external noopener noreferrer"
									>
										<IconBrandInstagram class="h-4 w-4 shrink-0 text-accent" />
										<span class="truncate">Instagram</span>
									</a>
								{/if}

								{#if school.facebook}
									<a
										class="inline-flex items-center gap-2 py-1 text-sm font-medium text-primary transition-colors hover:text-accent hover:underline"
										href={school.facebook}
										target="_blank"
										rel="external noopener noreferrer"
									>
										<IconBrandFacebook class="h-4 w-4 shrink-0 text-accent" />
										<span class="truncate">Facebook</span>
									</a>
								{/if}

								{#if school.email}
									<a
										class="inline-flex items-center gap-2 py-1 text-sm font-medium text-primary transition-colors hover:text-accent hover:underline"
										href={`mailto:${school.email}`}
									>
										<IconMail class="h-4 w-4 shrink-0 text-accent" />
										<span class="truncate">{school.email}</span>
									</a>
								{/if}
							</div>
						{/if}
					</Card.Content>
				</Card.Root>
			{/each}
		</div>

		{#if filteredSchools.length === 0}
			<div class="py-12 text-center">
				<p class="text-lg font-medium text-foreground">
					No clubs found matching your search criteria.
				</p>
				<p class="mt-1 text-sm text-muted-foreground">
					Try adjusting your keywords or clearing the region filter.
				</p>
				{#if searchTerm.trim() || selectedRegion !== 'All'}
					<button
						type="button"
						class="mt-4 inline-flex items-center text-sm font-medium text-accent underline underline-offset-4 hover:text-accent/80"
						onclick={() => {
							searchTerm = '';
							selectedRegion = 'All';
						}}
					>
						Reset search & filters
					</button>
				{/if}
			</div>
		{/if}
	</div>
</section>
