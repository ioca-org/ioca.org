<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { IconShieldCheck, IconLock, IconDatabase, IconMail } from '@tabler/icons-svelte';
</script>

<svelte:head>
	<title>Privacy Policy | IOCA</title>
	<meta
		name="description"
		content="Learn how the Intercollegiate Outing Club Association (IOCA) protects your privacy, collects information, and handles data."
	/>
</svelte:head>

<header class="py-10 text-center">
	<h1 class="mb-6 font-serif text-5xl leading-tight font-semibold text-primary">Privacy Policy</h1>
	<p class="mx-auto max-w-2xl text-xl leading-relaxed text-muted-foreground">
		We're required to have this, so here is how IOCA collects, uses, and safeguards your information
		when you register for membership or submit forms on our website.
	</p>
</header>

<div class="flex flex-col gap-6">
	<!-- Overview -->
	<Card.Root>
		<Card.Header>
			<div class="mb-2 flex items-center gap-2 text-primary">
				<IconShieldCheck class="size-6 text-accent" />
				<Card.Title class="font-serif text-2xl">Overview</Card.Title>
			</div>
			<Card.Description class="text-base leading-relaxed">
				This policy describes how IOCA collects, uses, and safeguards information submitted through
				our website, <span class="font-medium text-foreground">ioca.org</span>.
			</Card.Description>
		</Card.Header>
	</Card.Root>

	<!-- Information We Collect -->
	<Card.Root>
		<Card.Header>
			<div class="mb-2 flex items-center gap-2 text-primary">
				<IconDatabase class="size-6 text-accent" />
				<Card.Title class="font-serif text-2xl">Information We Collect</Card.Title>
			</div>
		</Card.Header>
		<Card.Content class="space-y-4 leading-relaxed text-muted-foreground">
			<p>
				When you submit forms on our website such as membership registration, event or trip signups,
				or general inquiries, we collect the information you voluntarily provide, which may include:
			</p>
			<ul class="list-disc list-inside space-y-2">
				<li>
					<strong class="text-foreground">Contact Details:</strong> Your name, email address, or phone number.
				</li>
				<li>
					<strong class="text-foreground">Outing Club Affiliation:</strong> University name, club name,
					student or alumni status, and club leadership roles.
				</li>
				<li>
					<strong class="text-foreground">Event & Participation Details:</strong> Information needed to
					coordinate events, trips, or conferences (such as attendance status or emergency contacts).
				</li>
				<li>
					<strong class="text-foreground">Inquiries & Feedback:</strong> Club details, activity focus areas,
					questions, or general feedback.
				</li>
			</ul>
		</Card.Content>
	</Card.Root>

	<!-- How We Use Information -->
	<Card.Root>
		<Card.Header>
			<div class="mb-2 flex items-center gap-2 text-primary">
				<IconMail class="size-6 text-accent" />
				<Card.Title class="font-serif text-2xl">How We Use Your Information</Card.Title>
			</div>
		</Card.Header>
		<Card.Content class="space-y-4 leading-relaxed text-muted-foreground">
			<p>The information we collect is used solely to support the IOCA community and mission:</p>
			<ul class="list-disc list-inside space-y-2">
				<li>
					Connecting collegiate outing clubs and sharing resources (constitutions, bylaws, advice).
				</li>
				<li>Maintaining the official IOCA directory of active and alumni clubs.</li>
				<li>Organizing and administering IOCA events, conferences, and outdoor trips.</li>
				<li>Sending announcements regarding events, updates, and association business.</li>
				<li>Responding to inquiries and registration requests.</li>
			</ul>
			<p class="pt-2">
				<strong class="text-foreground">We never sell or rent your personal information.</strong> We do
				not share your contact details with commercial third parties or advertisers.
			</p>
		</Card.Content>
	</Card.Root>

	<!-- Spam Protection & Cloudflare Turnstile -->
	<Card.Root>
		<Card.Header>
			<div class="mb-2 flex items-center gap-2 text-primary">
				<IconLock class="size-6 text-accent" />
				<Card.Title class="font-serif text-2xl">Spam Protection & Security</Card.Title>
			</div>
		</Card.Header>
		<Card.Content class="space-y-4 leading-relaxed text-muted-foreground">
			<p>
				To prevent automated spam and protect our services from abuse, we use Cloudflare Turnstile
				on our forms.
			</p>
			<p>
				Turnstile evaluates basic client-side telemetry (such as browser headers, TLS fingerprints,
				and IP addresses) to verify whether a submission is made by a human. It does not use
				cross-site tracking cookies, build browsing profiles, or track users across the web. Data
				processed by Turnstile is handled in accordance with the
				<a
					href="https://www.cloudflare.com/privacypolicy/"
					target="_blank"
					rel="noopener noreferrer"
					class="font-medium text-accent underline underline-offset-4 hover:text-accent/80"
				>
					Cloudflare Privacy Policy
				</a>.
			</p>
		</Card.Content>
	</Card.Root>

	<!-- Data Retention & Your Rights -->
	<Card.Root>
		<Card.Header>
			<Card.Title class="font-serif text-2xl text-primary">Your Rights & Removal</Card.Title>
		</Card.Header>
		<Card.Content class="space-y-4 leading-relaxed text-muted-foreground">
			<p>
				You have the right to request a copy of the information we have on file for you or your
				club, request corrections, or ask for your information to be deleted from our active contact
				lists.
			</p>
			<p>
				To make a request or if you have questions regarding this privacy policy, please reach out
				to
				<a
					href="mailto:webmaster@ioca.org"
					class="font-medium text-accent underline underline-offset-4 hover:text-accent/80"
				>
					webmaster@ioca.org
				</a>.
			</p>
		</Card.Content>
	</Card.Root>
</div>
