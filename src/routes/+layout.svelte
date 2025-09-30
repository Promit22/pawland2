<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import '@fontsource/poppins';
	import Header from '$lib/components/header.svelte';
	import SideMenu from '$lib/components/sidemenu.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<Header />
<SideMenu />
{@render children?.()}
