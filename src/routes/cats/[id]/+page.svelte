<script lang="ts">
    import type { PageProps } from './$types';

	let { data }: PageProps = $props();
    let {cat} = data;
    console.log(cat);
    
</script>

<div id="container">
    <a href="/gallery">Back to Gallery</a>
    {#if cat}
        <div id="catDetails">
            <h1>{cat.name}</h1>
            <img src={cat.image?.url} alt={cat.name} />
            <p><strong>Origin:</strong> {cat.origin}</p>
            <p><strong>Temperament:</strong> {cat.temperament}</p>
            <p><strong>Description:</strong> {cat.description}</p>
            {#if cat.wikipedia_url}
                <p><a href={cat.wikipedia_url} target="_blank" rel="noopener noreferrer">Learn more on Wikipedia</a></p>
            {/if}
        </div>
    {:else}
        <p>Cat not found.</p>
    {/if}
</div>