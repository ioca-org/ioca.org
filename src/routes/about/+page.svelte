<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { cn } from '$lib/utils';
	import { IconLink } from '@tabler/icons-svelte';

	type PublicationEntry = {
		publication: string;
		dateline: string;
		file: string;
		description?: string;
	};

	const publicationArchive: PublicationEntry[] = [
		{
			publication: 'IOCA Bulletin',
			dateline: 'Winter 1965',
			file: 'IOCA_Bulletin_1965_Winter.pdf'
		},
		{
			publication: 'IOCA Bulletin',
			dateline: 'Spring 1969',
			file: 'IOCA_Bulletin_1969_Spring.pdf'
		},
		{ publication: 'IOCA Bulletin', dateline: 'Fall 1969', file: 'IOCA_Bulletin_1969_Fall.pdf' },
		{ publication: 'IOCAver', dateline: 'Fall 1969', file: 'IOCAver_1969_Fall.pdf' },
		{ publication: 'IOCAver', dateline: 'Winter 1969-1970', file: 'IOCAver-Winter1969-1970.pdf' },
		{ publication: 'IOCA Directory', dateline: '1969-1970', file: 'IOCA_Directory_1969-1970.pdf' },
		{
			publication: 'IOCA Bulletin',
			dateline: 'Winter 1970',
			file: '1970-Winter_IOCA_Bulletin.pdf'
		},
		{ publication: 'IOCA Bulletin', dateline: 'Winter 1971', file: '1971-Winter_Bulletin.pdf' },
		{ publication: 'IOCA Bulletin', dateline: 'Spring 1972', file: '1972-Spring_Bulletin.pdf' },
		{ publication: 'IOCA Bulletin', dateline: 'Autumn 1972', file: '1972-Autumn_Bulletin.pdf' },
		{ publication: 'IOCA News', dateline: 'October 1974', file: '1974-10_IOCA_News.pdf' },
		{ publication: 'IOCA News', dateline: 'November 1974', file: '1974-11_IOCA_News.pdf' },
		{ publication: 'IOCA News', dateline: 'December 1974', file: '1974-12_IOCA_News.pdf' },
		{ publication: 'IOCA News', dateline: 'February 1975', file: '1975-02_IOCA_News.pdf' },
		{ publication: 'IOCA News', dateline: 'March 1975', file: '1975-03_IOCA_News.pdf' },
		{ publication: 'IOCA News', dateline: 'April 1975', file: '1975-04_IOCA_News.pdf' },
		{ publication: 'IOCAlum News', dateline: 'May-June 1975', file: '1975-05&06_IOCAlum_News.pdf' },
		{ publication: 'ICOA Newsletter', dateline: 'May 1975', file: '1975-05_ICOA_Newsletter.pdf' },
		{
			publication: 'IOCA Newsletter',
			dateline: 'June 2, 1975',
			file: '1975-06-02_IOCA_Newsletter.pdf'
		},
		{
			publication: 'IOCA Newsletter',
			dateline: 'July 7, 1975',
			file: '1975-07-07_IOCA_Newsletter.pdf'
		},
		{
			publication: 'IOCA Newsletter',
			dateline: 'August 6, 1975',
			file: '1975-08-06_IOCA_Newsletter.pdf'
		},
		{
			publication: 'IOCAlum News',
			dateline: 'September 10, 1975',
			file: '1975-09-10_IOCAlum_News.pdf'
		},
		{
			publication: 'IOCAlum News',
			dateline: 'March-April 1976',
			file: '1976-03&4_IOCAlum_News.pdf'
		},
		{
			publication: 'IOCA Newsletter',
			dateline: 'October-November 1976',
			file: '1976-10&11_IOCA_Newsletter.pdf'
		},
		{
			publication: 'IOCA Newsletter',
			dateline: 'November-December 1976',
			file: '1976-11&12_IOCA_Newsletter.pdf'
		},
		{
			publication: 'IOCA Newsletter',
			dateline: 'January 1977',
			file: '1977-01_IOCA_Newsletter.pdf'
		},
		{ publication: 'IOCAlum News', dateline: 'March 1977', file: '1977-03_IOCAlum_News.pdf' },
		{ publication: 'IOCA Directory', dateline: '1977-1978', file: '1977&1978_IOCA_Directory.pdf' },
		{
			publication: 'IOCA Newsletter',
			dateline: 'December 1977',
			file: '1977-12_IOCA_Newsletter.pdf'
		},
		{
			publication: 'IOCA Newsletter',
			dateline: 'January 1979',
			file: '1979-01_IOCA_Newsletter.pdf'
		},
		{ publication: 'IOCA Newsletter', dateline: 'April 1982', file: '1982-04_IOCA_Newsletter.pdf' }
	];
</script>

<svelte:head>
	<title>About | IOCA</title>
	<meta
		name="description"
		content="Learn about the history and mission of the Intercollegiate Outing Club Association (IOCA), a hub for intercollegiate outdoor programs."
	/>
</svelte:head>

<header class="py-12">
	<div class="">
		<span class="mb-2 block text-sm font-semibold tracking-widest text-accent uppercase"
			>From Origins to Now</span
		>
		<h1 class="mb-6 font-serif text-5xl leading-tight font-semibold text-primary">About IOCA</h1>

		<p class="mb-8 text-lg leading-relaxed text-muted-foreground">
			The Intercollegiate Outing Club Association was formed in 1932 during the first conference run
			by Dartmouth College's Outing Club on the summit of Mount Moosilauke. The gathering brought
			together 14 colleges to establish a new network for outdoor recreation. Over the decades, with
			the network expanding to the entire continental US, IOCA has evolved into a hub for
			intercollegiate outdoor programs to share trip opportunities, resources, and experience. Today
			the organization continues the same purpose as it did in 1932, to promote intercollegiate
			outdoor activities, organize group trips, and share resources with each other to better
			connect students with the outdoors.
		</p>

		<p class="mb-8 text-lg leading-relaxed text-muted-foreground">
			Although the organization had mostly fell dormant in recent years, a new interest in the
			association has sparked a group of students to revive the organization in 2026, with the goal
			of reconnecting outing club members across the Northeast and beyond. If you were involved in
			IOCA in the past and would like to help us out, or if you're just interested in learning more
			about the organization, please don't hesitate to reach out!
		</p>

		<a
			href={resolve('/join')}
			class={buttonVariants({
				variant: 'outline',
				size: 'xl',
				className: 'rounded-sm px-6 text-lg'
			})}
		>
			Contact Us
		</a>
	</div>
</header>

<section>
	<div class="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
		<h2 class="font-serif text-4xl font-semibold text-primary">Our History</h2>
		<Separator class="ml-2 hidden flex-1 sm:block" />
	</div>
	<Separator class="sm:hidden" />

	<!-- History timeline -->
	<div class="mt-8 flex flex-col">
		<div class="relative flex h-24 flex-col items-center justify-start">
			<!-- Connecting Line -->
			<Separator orientation="vertical" class="absolute h-full w-0.5 bg-border" />
			<!-- Badge / Button -->
			<div
				class="relative z-10 flex items-center gap-1.5 rounded-full border border-accent bg-card px-4 py-1.5 font-sans text-sm font-semibold tracking-wider text-accent uppercase shadow-sm transition-colors select-none"
			>
				<span>1932</span>
			</div>
		</div>

		<Card.Root class="border border-border bg-card shadow-sm">
			<Card.Content class="">
				<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1fr]">
					<div class="space-y-2">
						<span class="font-serif text-xs font-semibold tracking-wider text-accent uppercase"
							>May 1932</span
						>
						<h3 class="mt-1 mb-2 font-serif text-2xl font-bold text-primary">
							The Early Summits: Founding IOCA
						</h3>
						<p class="text-base leading-relaxed font-light text-muted-foreground">
							The association was officially formed during its first annual conference hosted by the <strong
								class="font-semibold text-foreground">Dartmouth Outing Club</strong
							>
							on
							<strong class="font-semibold text-foreground">Mount Moosilauke, New Hampshire</strong
							>. The movement was spearheaded by
							<strong class="font-semibold text-foreground">Dr. Ellis B. Jump</strong>, recognized
							as IOCA's founder, alongside a small group of college outing clubs from the Northeast.
							Their goal was simple: to promote intercollegiate, non-competitive outdoor activities,
							organize group trips, and provide information and friendship among students.
						</p>
						<p class="text-base leading-relaxed font-light text-muted-foreground">
							IOCA operates as a non-profit listings coalition, coordinating joint intercollegiate
							outdoor activities and flatwater outings while helping student leaders share trail
							details.
						</p>
					</div>
					<div>
						<div class="rounded-lg border border-border bg-card p-2 shadow-sm">
							<enhanced:img
								src="$lib/assets/ioca-1932.jpg"
								sizes="(max-width: 768px) 100vw, 50vw"
								alt="The original intercollegiate outing council on Mount Moosilauke, May 1932"
								class="h-auto w-full rounded-sm object-cover"
							/>

							<div class="mt-2 text-center font-serif text-xs text-muted-foreground italic">
								The original intercollegiate outing council, Autumn 1932.
							</div>
						</div>
					</div>
				</div>
			</Card.Content>
		</Card.Root>

		<!-- Centered Timeline Button 1 -->
		<div class="relative flex h-30 flex-col items-center justify-center">
			<!-- Connecting Line -->
			<div class="absolute h-full w-0.5 bg-border"></div>
			<!-- Badge / Button -->
			<div
				class="relative z-10 flex items-center gap-1.5 rounded-full border border-accent bg-card px-4 py-1.5 font-sans text-sm font-semibold tracking-wider text-accent uppercase shadow-sm transition-colors select-none"
			>
				<span>1934&mdash;1937</span>
			</div>
		</div>

		<Card.Root class="border border-border bg-card shadow-sm">
			<Card.Content class="p-6 md:p-8">
				<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1fr]">
					<div class="space-y-10">
						<div class="space-y-2">
							<span class="font-serif text-xs font-semibold tracking-wider text-accent uppercase"
								>1934</span
							>
							<h3 class="mt-1 mb-2 font-serif text-2xl font-bold text-primary">
								Expansion and the Birth of IOCAlum
							</h3>
							<p class="text-base leading-relaxed font-light text-muted-foreground">
								While the organization began as a student-led initiative, its members soon realized
								that the "outing club spirit" didn’t end at graduation. In <strong
									class="font-semibold text-foreground">1934</strong
								>, the first single-page alumni newsletter was published for a roster of just
								fifteen members, setting the groundwork for IOCAlum.
							</p>
							<Separator class="my-4" />
							<span class="font-serif text-xs font-semibold tracking-wider text-accent uppercase"
								>May 1937</span
							>
							<h3 class="mt-1 mb-2 font-serif text-2xl font-bold text-primary">
								Formalizing IOCAlum
							</h3>
							<p class="text-base leading-relaxed font-light text-muted-foreground">
								By <strong class="font-semibold text-foreground">May 1937</strong>, alumni attended
								an IOCA conference as a formal group for the first time, electing
								<strong class="font-semibold text-foreground">Janet Cutler</strong> (of the Vassar Outing
								Club) as the first IOCAlum Secretary.
							</p>
						</div>
					</div>
					<div>
						<div class="rounded-lg border border-border bg-card p-2 shadow-sm">
							<enhanced:img
								src="$lib/assets/iocalum-news.jpg"
								sizes="(max-width: 768px) 100vw, 50vw"
								alt="The first IOCAlum newsletter, May 1937"
								class="h-auto w-full rounded-sm object-cover"
							/>
							<div class="mt-2 text-center font-serif text-xs text-muted-foreground italic">
								The IOCAlum newsletter, May-June 1975.
							</div>
						</div>
						<a
							class={cn(
								buttonVariants({ variant: 'link', size: 'sm' }),
								'mt-2 block px-2 py-1 text-center text-base'
							)}
							href={asset('/publications/1975-05&06_IOCAlum_News.pdf')}
							target="_blank"
							rel="noopener noreferrer"
						>
							<IconLink class="mr-1 inline h-4 w-4" />
							Read the full newsletter</a
						>
					</div>
				</div></Card.Content
			>
		</Card.Root>

		<div class="relative flex h-30 flex-col items-center justify-center">
			<!-- Connecting Line -->
			<div class="absolute h-full w-0.5 bg-border"></div>
			<!-- Badge / Button -->
			<div
				class="relative z-10 flex items-center gap-1.5 rounded-full border border-accent bg-card px-4 py-1.5 font-sans text-sm font-semibold tracking-wider text-accent shadow-sm transition-colors select-none"
			>
				<span>1940&mdash;1980</span>
			</div>
		</div>

		<Card.Root class="border border-border bg-card shadow-sm">
			<Card.Content class="p-6 md:p-8">
				<div class="space-y-2">
					<span class="font-serif text-xs font-semibold tracking-wider text-accent">1940-1970</span>
					<h3 class="mt-1 mb-2 font-serif text-2xl font-bold text-primary">
						Formalization and Growth of IOCA
					</h3>
					<p class="text-base leading-relaxed font-light text-muted-foreground">
						Over the next three decades, IOCA continued to grow and formalize its structure. The
						organization still mainly stayed within the Northeast, but its structure, member count,
						and influence expanded significantly. IOCAlum continued to operate. IOCA started
						professional training programs, including the Climbing Leadership School, Winter
						Mountaineering School. They also upkept classic traditions such as Songfests, and the
						annual IOCA Conference. The organization also began to establish a more formalized
						governance structure, with elected officers and committees to oversee various aspects of
						its operations.
					</p>
					<Separator class="my-4" />
					<span class="font-serif text-xs font-semibold tracking-wider text-accent">1970-1980</span>
					<h3 class="mt-1 mb-2 font-serif text-2xl font-bold text-primary">IOCA Goes West</h3>
					<p class="text-base leading-relaxed font-light text-muted-foreground">
						Starting in the 1970s, IOCA began to expand it's reach beyond the northeast,
						establishing IOCA-West. For the first time, the anual conference was held outside of the
						Northeast, in Colorado. This conference saw a 750% increase in attendance. This
						expansion lead to a wider influence of IOCA. Over the later years, sections of the
						organization expanded to most of the continental United States, into Canada, and even
						had a branch for international members.
					</p>
				</div>
			</Card.Content>
		</Card.Root>

		<!-- Centered Timeline Button 1 -->
		<div class="relative flex h-30 flex-col items-center justify-center">
			<!-- Connecting Line -->
			<div class="absolute h-full w-0.5 bg-border"></div>
			<!-- Badge / Button -->
			<div
				class="relative z-10 flex items-center gap-1.5 rounded-full border border-accent bg-card px-4 py-1.5 font-sans text-sm font-semibold tracking-wider text-accent shadow-sm transition-colors select-none"
			>
				<span>2020&mdash;2026</span>
			</div>
		</div>

		<Card.Root class="border border-border bg-card shadow-sm">
			<Card.Content class="p-6 md:p-8">
				<div class="space-y-2">
					<span class="font-serif text-xs font-semibold tracking-wider text-accent">2020</span>
					<h3 class="mt-1 mb-2 font-serif text-2xl font-bold text-primary">
						The Fall of IOCA &mdash; COVID-19
					</h3>
					<p class="text-base leading-relaxed font-light text-muted-foreground">
						Like many organizations, IOCA was heavily impacted by the COVID-19 pandemic. The
						organization's operations were severely disrupted, and many of its activities and events
						were canceled or postponed. The organization struggled to maintain activities. As
						engagement and participation declined, the organization eventually fell dormant and
						never truly recovered. The organization was left without a clear direction or
						leadership, and its future was uncertain.
					</p>

					<Separator class="my-4" />

					<span class="font-serif text-xs font-semibold tracking-wider text-accent">2026</span>
					<h3 class="mt-1 mb-2 font-serif text-2xl font-bold text-primary">
						The Revival of IOCA &mdash; A New Beginning
					</h3>
					<p class="text-base leading-relaxed font-light text-muted-foreground">
						In 2026, a group of students from 11 colleges across the U.S. came together to discuss
						the revival of IOCA. Due to the amount of time that had passed since the organization
						had been active, many aspects of the organization are being redescovered. Although no
						major events have been planned as of now, the group is working to reestablish the
						organization and its activities. The goal is to reconnect outing club members across the
						Northeast and beyond, and to provide a platform for intercollegiate outdoor programs to
						share trip opportunities, resources, and experience.
					</p>

					<p class="text-base leading-relaxed font-light text-muted-foreground">
						This is your time! If your club used to be a part of IOCA, its time to reconnect. If you
						are a student leader of an outing club, its time to get involved. If you are an alum of
						an outing club, its time to help us out. Reach out to us and help us revive IOCA!
					</p>

					<a
						href={resolve('/join')}
						class={buttonVariants({
							variant: 'outline',
							size: 'sm',
							className: 'rounded-md px-6 text-lg'
						})}
					>
						Join Us
					</a>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</section>

<!-- publication archives -->
<section>
	<div class="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
		<h2 class="font-serif text-4xl font-semibold text-primary">Publication Archives</h2>
		<Separator class="ml-2 hidden flex-1 sm:block" />
	</div>
	<Separator class="sm:hidden" />

	<p class="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
		Scanned bulletins, newsletters, directories, and alumni mailings from the archive. Each link
		opens the original PDF in a new tab.
	</p>

	<div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each publicationArchive as item (item.file)}
			<a
				href={asset(`/publications/${item.file}`)}
				target="_blank"
				rel="noopener noreferrer"
				class={cn(
					buttonVariants({ variant: 'secondary', size: 'lg' }),
					'group h-auto items-center justify-between gap-4 rounded-sm px-5 py-4 text-left transition-all motion-safe:hover:-translate-y-0.5'
				)}
			>
				<span class="min-w-0 flex-1">
					<span class="block font-serif text-base font-semibold text-primary"
						>{item.publication}</span
					>
					<span class="block text-sm text-foreground/85">{item.dateline}</span>
				</span>
				<IconLink class="h-5 w-5 shrink-0" />
			</a>
		{/each}
	</div>
</section>
