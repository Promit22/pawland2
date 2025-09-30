<script lang="ts">
    	import { selectedLevel, data } from '$lib/stores/quizStore';
		import {base} from '$app/paths'
</script>

<div id="welcome">
	<h1>&#x1F389;Welcome to the Quiz!&#x1F389;</h1>
	<p>Test your knowledge about our feline friends</p>
	<h2>Select level and get started</h2>
	<div id="levels">
		<button
			class={$selectedLevel === 'normal' ? 'selected normal' : ''}
			onclick={() => ($selectedLevel = 'normal')}>Normal</button
		>
		<button
			class={$selectedLevel === 'medium' ? 'selected medium' : ''}
			onclick={() => ($selectedLevel = 'medium')}>Medium</button
		>
		<button
			class={$selectedLevel === 'hard' ? 'selected hard' : ''}
			onclick={() => ($selectedLevel = 'hard')}>Hard</button
		>
	</div>
	<div id="note">
		<p>
			<strong>Note: </strong> Questions will be based on the cats available in pawland. We recommend
			checking out <a href="{base}/gallery/">our Gallery</a> if you haven't already.
		</p>
	</div>
	
</div>

<style>
	#welcome {
		background-color: var(--bg-color);
		padding: 2rem;

		h1 {
			margin-bottom: 0;
		}

		p {
			margin: 0.2rem;
		}

		#levels {
			margin: 2rem;

			button {
				margin: 0 1rem;
				padding: 0.5rem 2rem;
				border: 2px solid #ccc;
				border-radius: 5px;
				cursor: pointer;
				transition: all 0.3s ease;
			}
			.selected {
				background-color: #4caf50;
				color: white;
				border-color: #4caf50;
			}

			.selected.medium {
				background-color: orange;
				border-color: orange;
			}

			.selected.hard {
				background-color: tomato;
				border-color: tomato;
			}
		}
	}

	#note {
		background-color: var(--container-bg);
		padding: 0.5rem;

		a {
			color: #4caf50;
			text-decoration: none;
			font-weight: bold;
		}
		a:hover {
			color: tomato;
		}
	}
</style>
