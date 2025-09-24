<script lang="ts">
	import { cats } from '$lib/stores/cats';
	import unavailable from '$lib/assets/images/unavailable.png';
	// console.log($cats);
	// console.log($cats.map(cat => ({cat.id})));
</script>

<h1>Pawllery</h1>
<p id="note">(click cats for details)</p>
<a href="/">Home page</a>

{#if $cats}
	<div id="catContainer">
		{#each $cats as cat}
			<a href="/cats/{cat.id}">
				<div class="cat">
					<img src={cat.image?.url ?? unavailable} alt={cat.name} />
					<p>{cat.name}</p>
				</div>
			</a>
		{/each}
	</div>
{/if}

<style>
	h1 {
		text-align: center;
		margin: 1rem 0;
		font-size: 3.5rem;
		font-weight: 900;
	}

	#note {
		text-align: center;
		font-size: 1.2rem;
		font-style: italic;
		font-weight: 600;
	}

	#catContainer {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		max-width: 90%;
		margin: 0 auto;
		background-color: var(--container-bg);
		padding: 2rem;

		a {
			text-decoration: none;
			color: inherit;
		}

		.cat {
			flex: 1 1 200px;
			width: 300px;
			height: 400px;
			display: flex;
			flex-direction: column;
			border-radius: 0.5rem;
			padding: 1rem;
			background-color: var(--bg-color);
			transition: transform 0.3s ease-in-out;

			img {
				width: 100%;
				height: 70%;
				object-fit: cover;
				border-radius: 0.5rem;
			}

			p {
				text-align: center;
				font-weight: 600;
				/* letter-spacing: 2px; */
				font-size: 1.5rem;
			}
		}
		.cat:hover {
			transform: scale(1.05);
		}
	}
</style>
