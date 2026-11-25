<script lang="ts">
	import MembershipForm from '$lib/forms/membership-form.svelte';
</script>

<svelte:head>
	<title>Join | IOCA</title>
	<meta
		name="description"
		content="Register your university outing club with the Intercollegiate Outing Club Association (IOCA) or sign up for direct mail announcements."
	/>
</svelte:head>

<header class="py-10 text-center">
	<span class="mb-2 block text-sm font-semibold tracking-widest text-accent uppercase"
		>Get Connected</span
	>
	<h1 class="mb-6 font-serif text-5xl leading-tight font-semibold text-primary">
		IOCA Registration
	</h1>
	<p class="mx-auto max-w-2xl text-xl leading-relaxed text-muted-foreground">
		Fill out this form to register yourself or your university outing club with the Intercollegiate
		Outing Club Association (IOCA).
	</p>
</header>

<MembershipForm class="pb-12" />
