<script lang="ts">
	import { sideMenuOpen } from '$lib/stores/bars';
	import { fly } from 'svelte/transition';
	import { base } from '$app/paths';
</script>

{#if $sideMenuOpen}
	<div
		class="overlay"
		onclick={() => sideMenuOpen.set(false)}
		role="button"
		tabindex="0"
		onkeydown={(e) => e.key === 'Enter' && sideMenuOpen.set(false)}
	></div>
	<div class="menu" transition:fly={{ x: -300, duration: 300 }}>
		<h2>Menu</h2>
		<a href="{base}/">Home</a>
		<a href="{base}/gallery/">Gallery</a>
		<a href="{base}/quiz/">Quiz</a>
	</div>
{/if}

<style>
	.menu {
		position: fixed;
		top: 0;
		left: 0;
		width: 250px;
		height: 100%;
		background: #333;
		color: white;
		padding: 2rem 1rem;
		z-index: 900;
		margin-top: 2rem;
	}

	.menu a {
		display: block;
		color: white;
		margin: 1rem 0;
		text-decoration: none;
	}

	.overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 800;
	}
</style>
