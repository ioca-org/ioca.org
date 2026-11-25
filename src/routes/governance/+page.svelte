<script lang="ts">
	import { resolve } from '$app/paths';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import { IconMail, IconBook2 } from '@tabler/icons-svelte';
</script>

<svelte:head>
	<title>Governance | IOCA</title>
	<meta
		name="description"
		content="Learn about the governance structure of the Intercollegiate Outing Club Association (IOCA) and our ongoing process to draft a new constitution."
	/>
</svelte:head>

<header class="py-12 text-left">
	<span class="mb-2 block font-sans text-sm font-semibold tracking-widest text-accent uppercase"
		>IOCA Restructuring</span
	>
	<h1 class="mb-6 font-serif text-5xl leading-tight font-semibold text-primary">
		Governance & Constitution
	</h1>
	<p class="max-w-3xl text-xl leading-relaxed font-light text-muted-foreground">
		Historically run with a spirit of playful "disorganization," we are drafting a new constitution
		to establish stable governance and leadership for the Intercollegiate Outing Club Association
		(IOCA). This constitution will formalize voting procedures, core roles, and other aspects that
		we think should be part of the foundation. We aren't abandoning the "disorganized" spirit of
		IOCA, but we are looking to create a more sustainable structure for the future.
	</p>
</header>

<div class="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.7fr]">
	<!-- Left Column: Constitution Draft & Pillars -->
	<div class="space-y-16">
		<!-- Status banner -->
		<section class="rounded-md border border-accent/30 bg-accent/4 p-6 md:p-8">
			<div class="mb-2 flex items-center gap-2 font-semibold text-accent">
				<IconBook2 class="size-5" />
				<span class="font-sans text-sm font-bold tracking-wider uppercase">In Progress</span>
			</div>
			<h2 class="mt-1 mb-2 font-serif text-2xl font-semibold text-primary">
				Drafting the Constitution for New IOCA
			</h2>
			<p class="mb-0 text-base leading-relaxed font-light text-muted-foreground">
				You might be wondering about our motivation towards a formal contsitution. We put together a
				short FAQ to explain our reasoning.
			</p>

			<Accordion.Root class="mt-4" type="single">
				<Accordion.Item value="item-1">
					<Accordion.Trigger
						class="text-base transition-shadow duration-200 outline-none ring-inset focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
						>Why are we drafting a constitution?</Accordion.Trigger
					>
					<Accordion.Content class="mt-2 text-sm leading-relaxed text-foreground/80">
						The fact that IOCA had run for so long without formal governance was impressive.
						Although there was no formal governance, due to the size of the organization in the
						later years, many procedures, positions, and responsibilities were informally
						established. We are drafting a constitution to formalize these positions and
						responsibilities. This constution we expect to be a living document that will evolve as
						the organization grows and changes.
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-2">
					<Accordion.Trigger
						class="text-base transition-shadow duration-200 outline-none ring-inset focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
						>What will the constitution cover?</Accordion.Trigger
					>
					<Accordion.Content class="mt-2 text-sm leading-relaxed text-foreground/80">
						The constitution will cover the governance structure of IOCA, including the roles and
						responsibilities of the Executive Board, voting procedures, membership requirements, and
						other aspects that we think should be part of the foundation of the organization. It
						will also include a section for ammendments, which will allow for future changes to the
						constitution as the organization evolves.
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-3">
					<Accordion.Trigger
						class="text-base transition-shadow duration-200 outline-none ring-inset focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
						>Does this mean IOCA will lose its fun and disorganized spirit?</Accordion.Trigger
					>
					<Accordion.Content class="mt-2 text-sm leading-relaxed text-foreground/80">
						Absolutely not! The constitution defines the governance structure of IOCA, but it does
						not dictate how the organization should operate on a day-to-day basis. It also does not
						say "IOCA shall never have fun." If IOCA wasn't fun, we wouldn't be here. The
						constitution is meant to provide a framework for the organization to operate within, but
						limited to just that. A framework but allows the organization to run the way it has
						always run.
					</Accordion.Content>
				</Accordion.Item>

				<Accordion.Item value="item-4">
					<Accordion.Trigger
						class="text-base transition-shadow duration-200 outline-none ring-inset focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
						>How can I get involved?</Accordion.Trigger
					>
					<Accordion.Content class="mt-2 text-sm leading-relaxed text-foreground/80">
						We welcome input from all members of the IOCA community. If you have ideas, feedback, or
						sample documents that you would like to share with the Executive Board, please reach out
						to us at <a
							href="mailto:info@ioca.org"
							class="rounded-lg px-0.5 py-1 font-sans font-semibold text-accent transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
							>info@ioca.org</a
						>. We appreciate your input and look forward to hearing from you!
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</section>

		<!-- Call to Action -->
		<section class="my-6 rounded-md border border-border bg-card p-8 md:p-12">
			<div class="max-w-2xl">
				<span
					class="mb-2 block font-sans text-xs font-semibold tracking-widest text-accent uppercase"
					>Get Involved</span
				>
				<h2 class="mt-0 mb-3 border-none pb-0 font-serif text-3xl font-semibold text-primary">
					Help Shape IOCA's Future
				</h2>
				<p class="mb-6 font-sans text-base leading-relaxed font-light text-muted-foreground">
					Are you a club leader, faculty advisor, or alumnus with experience in student association
					governance? We welcome your input as we draft this constitution. Share your ideas,
					feedback, or sample documents with the Executive Board.
				</p>
				<div class="flex flex-wrap gap-4">
					<a
						href={resolve('/join')}
						class={buttonVariants({
							variant: 'default',
							size: 'lg',
							className: 'cursor-pointer rounded-sm px-6 font-sans text-base font-semibold'
						})}
					>
						Submit Ideas
					</a>
					<a
						href="mailto:info@ioca.org"
						class={buttonVariants({
							variant: 'outline',
							size: 'lg',
							className: 'cursor-pointer rounded-sm px-6 font-sans text-base font-semibold'
						})}
					>
						Email Board
					</a>
				</div>
			</div>
		</section>
	</div>

	<!-- Right Column: Sidebar Executive Board Directory -->
	<aside class="space-y-6">
		<Card.Root class="sticky top-24 border border-border bg-card font-sans shadow-sm">
			<Card.Content class="p-6">
				<h3 class="mb-6 border-b border-border pb-2 font-serif text-xl font-semibold text-primary">
					Executive Board
				</h3>

				<!-- in the works -->
				<span class="text-sm font-light text-muted-foreground"
					>Executive Board directory coming soon. The email below is actively monitored, please
					forward questions there.</span
				>

				<!-- <ul class="space-y-6 list-none p-0 m-0"> -->
				<!-- 	<li class="space-y-1"> -->
				<!-- 		<div class="text-[0.7rem] font-semibold tracking-wider text-accent uppercase font-sans">Webmaster & Executive Chair</div> -->
				<!-- 		<div class="font-serif text-base font-bold text-primary">Kevin Cosgrove (RIT)</div> -->
				<!-- 		<div class="flex items-center gap-1.5 text-xs text-muted-foreground"> -->
				<!-- 			<IconMail class="size-3.5" /> -->
				<!-- 			<a href="mailto:kmc3958@rit.edu" class="hover:text-accent font-sans">kmc3958@rit.edu</a> -->
				<!-- 		</div> -->
				<!-- 	</li> -->
				<!-- 	<li class="space-y-1"> -->
				<!-- 		<div class="text-[0.7rem] font-semibold tracking-wider text-accent uppercase font-sans">Executive Secretary</div> -->
				<!-- 		<div class="font-serif text-base font-bold text-primary">Alyssa Plow (RIT)</div> -->
				<!-- 		<div class="flex items-center gap-1.5 text-xs text-muted-foreground"> -->
				<!-- 			<IconMail class="size-3.5" /> -->
				<!-- 			<a href="mailto:amp4732@rit.edu" class="hover:text-accent font-sans">amp4732@rit.edu</a> -->
				<!-- 		</div> -->
				<!-- 	</li> -->
				<!-- 	<li class="space-y-1"> -->
				<!-- 		<div class="text-[0.7rem] font-semibold tracking-wider text-accent uppercase font-sans">Fall Lake George Chair</div> -->
				<!-- 		<div class="font-serif text-base font-bold text-primary">Alex Blum (UT)</div> -->
				<!-- 		<div class="flex items-center gap-1.5 text-xs text-muted-foreground"> -->
				<!-- 			<IconMail class="size-3.5" /> -->
				<!-- 			<a href="mailto:alex.blum1@gmail.com" class="hover:text-accent font-sans">alex.blum1@gmail.com</a> -->
				<!-- 		</div> -->
				<!-- 	</li> -->
				<!-- 	<li class="space-y-1"> -->
				<!-- 		<div class="text-[0.7rem] font-semibold tracking-wider text-accent uppercase font-sans">Direct Mail Chair</div> -->
				<!-- 		<div class="font-serif text-base font-bold text-primary">Don Wade (NCC)</div> -->
				<!-- 		<div class="flex items-center gap-1.5 text-xs text-muted-foreground"> -->
				<!-- 			<IconMail class="size-3.5" /> -->
				<!-- 			<a href="mailto:waded@ncc.edu" class="hover:text-accent font-sans">waded@ncc.edu</a> -->
				<!-- 		</div> -->
				<!-- 	</li> -->
				<!-- 	<li class="space-y-1"> -->
				<!-- 		<div class="text-[0.7rem] font-semibold tracking-wider text-accent uppercase font-sans">Whitewater Chair</div> -->
				<!-- 		<div class="font-serif text-base font-bold text-primary">Jonathan Nowak</div> -->
				<!-- 		<div class="flex items-center gap-1.5 text-xs text-muted-foreground"> -->
				<!-- 			<IconMail class="size-3.5" /> -->
				<!-- 			<a href="mailto:Johnathan.Nowak396@students.ncc.edu" class="hover:text-accent break-all font-sans">Johnathan.Nowak396@students.ncc.edu</a> -->
				<!-- 		</div> -->
				<!-- 	</li> -->
				<!-- </ul> -->
				<!---->
				<div class="mt-6 border-t border-border/85 pt-6">
					<div class="mb-1 text-xs font-bold text-primary uppercase">General Questions</div>
					<div class="flex items-center gap-1.5 text-sm text-muted-foreground">
						<IconMail class="size-4 text-accent" />
						<a
							href="mailto:info@ioca.org"
							class="rounded-lg px-0.5 py-1 font-sans font-semibold text-accent transition-shadow duration-200 outline-none hover:text-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-accent"
							>info@ioca.org</a
						>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</aside>
</div>
