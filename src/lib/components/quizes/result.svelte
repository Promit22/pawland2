<script lang="ts">
	import { ans } from '$lib/helpers/validator';
	import {base} from '$app/paths'
	console.log('in validar', ans);
</script>

<div id="ansContainer">
	<h1>Result</h1>
	{#each ans as a}
		<div class="question">
			<p><strong>{a.question}</strong></p>
		</div>
		<div class="correct">
			<p>Correct Answer: <strong>{a.correct}</strong></p>
		</div>
		<div class="selected">
			<p>You selected: <strong>{a.userSelect}</strong></p>
		</div>
	{/each}
    <a href="{base}/gallery/">Back to gallery</a>
</div>

<style>
	#ansContainer {
		max-width: 1000px;
		/* margin: 5rem auto; */
		/* padding: 2rem; */
	}

    .question {
        background-color: #9ACD32;
    }

    p {
        font-size: 1.1rem;
    }

    a {
        text-decoration: none;
        color: #4caf50;
    }

    a:hover {
        color: tomato;
    }
</style>
