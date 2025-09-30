<script lang="ts">
	import { sideMenuOpen } from '$lib/stores/bars';
	function toggleMenu() {
		sideMenuOpen.update((v) => !v);
	}
</script>

<header>
	<button onclick={toggleMenu}>☰</button>
	<h1 style="margin-left: 1rem;">Pawland</h1>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 60px;
		background: #1e90ff;
		color: white;
		display: flex;
		align-items: center;
		padding: 0 1rem;
		z-index: 1000;
	}

	button {
		background: none;
		border: none;
		color: white;
		font-size: 1.5rem;
		cursor: pointer;
	}
</style>
