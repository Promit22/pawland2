<script lang="ts">
	import type { PageProps } from './$types';
	// import type { Cat } from '$lib/types/catTypes';
	import unavailable from '$lib/assets/images/unavailable.png';

	let { data }: PageProps = $props();
	let { cat } = data; //  as {cat: Cat};
	console.log(cat);
	const excludedKeys = [
		'alt_names',
		'country_codes',
		'id',
		'image',
		'reference_image_id',
		'vetstreet_url',
		'weight',
		'wikipedia_url',
		'vcahospitals_url',
		'cfa_url',
		'description'
	];
	const keys = Object.keys(cat || {}).filter((key) => !excludedKeys.includes(key));
	console.log(keys);
	function formatKey(key: string): string {
		return key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
	}
</script>

<div id="container">
	<a href="/gallery/">Back to Gallery</a>
	{#if cat}
		<div id="catDetails">
			<h1>{cat.name}</h1>
			<div id="hero">
				<img src={cat.image?.url ?? unavailable} alt={cat.name} />
			</div>
			<p><strong>Description:</strong> {cat['description']}</p>
			<h2>Additional Informations</h2>
			<div id="additional">
				{#each keys as key}
					{#if cat[key]}
						<p>
							<strong>{formatKey(key)}:</strong>
							{cat[key]}
							{typeof cat[key] === 'number' && key !== 'life_span' ? '/ 5' : ''}
							{key === 'life_span' ? 'years' : ''}
						</p>
					{/if}
				{/each}
			</div>

			{#if cat.wikipedia_url}
				<p>
					<a href={cat.wikipedia_url} target="_blank" rel="noopener noreferrer"
						>Learn more on Wikipedia</a
					>
				</p>
			{/if}
		</div>
	{:else}
		<p>Cat not found.</p>
	{/if}
</div>

<style>
	#container {
		max-width: 900px;
		margin: 0 auto;
		background-color: var(--container-bg);
		padding: 1.5rem;

		a {
			background-color: #ed7d31;
			color: white;
			text-decoration: none;
			padding: 0.5rem;
			border-radius: 0.5rem;
			/* letter-spacing: 0.3rem; */
		}

		#catDetails {
			padding: 2rem;
			background-color: var(--bg-color);
			border-radius: 0.5rem;
			margin-top: 1rem;
			width: 100%;
			font-size: 1.2rem;

			h1 {
				text-align: center;
			}

			h2 {
				margin-top: 5rem;
				margin-bottom: 1rem;
				font-size: 2rem;
			}

			#hero {
				margin: 1.5rem auto;
				margin-bottom: 5rem;
				max-width: 400px;

				img {
					max-width: 100%;
					height: auto;
					object-fit: cover;
					border-radius: 0.5rem;
				}
			}

			#additional {
				margin-top: 1rem;
				margin-bottom: 4rem;
				line-height: 2rem;
			}
			a {
				text-decoration: none;
				color: inherit;
				transition: color 0.1s ease-in-out;
			}

			a:hover {
				color: white;
			}
		}
	}
</style>
