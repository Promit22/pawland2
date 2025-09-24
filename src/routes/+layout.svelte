<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";
	import '@fontsource/poppins';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
