<script lang="ts">
	import { cats } from '$lib/stores/cats';
	import unavailable from '$lib/assets/images/unavailable.png';
</script>

<h2>gallery page</h2>
<a href="/">Home page</a>

{#if $cats}
	<div id="catContainer">
		{#each $cats as cat}
			<div class="cat">
				<img src={cat.image?.url ?? unavailable} alt={cat.name} />
				<h3>{cat.name}</h3>
			</div>
		{/each}
	</div>
{/if}

<style>
	
	#catContainer {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		max-width: 90%;
		margin: 0 auto;

		.cat {
			flex: 1 1 200px;
			max-width: 300px;
			border: 1px solid #ccc;
			display: flex;
			flex-direction: column;
			border-radius: 0.5rem;
			padding: 0.5rem;
			background-color: var(--btn-color);

			img {
				width: 100%;
				height: auto;
				object-fit: cover;
				border-radius: 0.5rem;
			}

			h3 {
				text-align: center;
				font-weight: 500;
			}
		}
	}
</style>
