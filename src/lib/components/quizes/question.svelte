<script lang="ts">
	import unavailable from '$lib/assets/images/unavailable.png';
	import { validate } from '$lib/helpers/validator';

	let {
		quizData
	}: {
		quizData: { question: string; correctAnswer: string; imgUrl: string; wrongAnswers: string[] };
	} = $props();

	let selectedOption = $state('');
	let confirmed = $state(false);

	function confirm() {
		validate(quizData.question, quizData.correctAnswer, selectedOption);
		confirmed = !confirmed;
	// 	console.log(confirmed);
	// 	console.log(quizData.question, quizData.correctAnswer, selectedOption);
	}
</script>

<div id="questionContainer">
	<div id="imageContainer">
		<img src={quizData.imgUrl ?? unavailable} alt={quizData.correctAnswer} />
	</div>
	<h2>{quizData.question}</h2>
	<div id="option">
		<button
			class={selectedOption === quizData.correctAnswer ? 'selected' : ''}
			onclick={() => (selectedOption = quizData.correctAnswer)}
		>
			{quizData.correctAnswer}
		</button>
		{#each quizData.wrongAnswers as wrong}
			<button
				class={selectedOption === wrong ? 'selected' : ''}
				onclick={() => (selectedOption = wrong)}
			>
				{wrong}
			</button>
		{/each}
	</div>
	<button id="confirm" onclick={() => confirm()} disabled={confirmed}>Confirm</button>
</div>

<style>
	#imageContainer {
		width: 300px;
		margin: 0 auto;
		border: 5px solid var(--border-color);
		border-radius: 10px;
		/* overflow: hidden; */
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

		img {
			width: 100%;
			height: auto;
			border-radius: 10px;
		}
	}

	#option {
		margin: 2rem 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;

		button {
			padding: 0.5rem 1rem;
			border: 2px solid #ccc;
			border-radius: 5px;
			cursor: pointer;
			transition: all 0.3s ease;
			min-width: 120px;
			background-color: var(--bg-color);
		}

		.selected {
			background-color: #4caf50;
			color: white;
			/* border-color: #4caf50; */
			border: none;
		}
	}

	#confirm {
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: all 0.3s ease;
		min-width: 120px;
		background-color: #4caf50;
		margin-left: 70%;
		color: #fff;
	}

	#confirm:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
</style>
