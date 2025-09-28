<script lang="ts">
	import { masterWizard } from '$lib/helpers/quizHelper';
	import { fade, fly } from 'svelte/transition';
	import Welcome from '$lib/components/quizes/welcome.svelte';
	import Level1 from '$lib/components/quizes/level1.svelte';
	import { selectedLevel } from '$lib/stores/quizStore';
	import {getStep} from '$lib/helpers/step.svelte';
	// let step = getStep();
	// masterWizard($selectedLevel);
	// import { selectedLevel } from '$lib/components/quizes/welcome.svelte';
	// let selectedLevel:string;
	// console.log(selectedLevel);
</script>

<!-- {#key step}
	
{/key} -->

<div id="quizContainer">
	{#key getStep()}
		<div  in:fly={{ y: 200, duration: 1000 }} out:fade>
			{#if getStep() === 0}
				<Welcome />
			{:else if getStep() === 1}
				<Level1 />
			{/if}
		</div>
	{/key}
</div>

<style>
	#quizContainer {
		max-width: 1000px;
		/* min-height: ; */
		margin: 5rem auto;
		padding: 2rem;
		background-color: var(--container-bg);
		border-radius: 10px;
		text-align: center;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}
</style>
