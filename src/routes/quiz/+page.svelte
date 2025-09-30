<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { Tween } from 'svelte/motion';
	import { tick } from 'svelte';
	import Welcome from '$lib/components/quizes/welcome.svelte';
	import Level1 from '$lib/components/quizes/question.svelte';
	import Result from '$lib/components/quizes/result.svelte';
	import { selectedLevel } from '$lib/stores/quizStore';
	import { getStep, incrementStep } from '$lib/helpers/step.svelte';
	import { test } from '$lib/helpers/quizHelper';
	import type { Data } from '$lib/types/catTypes';
	import { generateNormalKeys, generateNormalQuestions } from '$lib/helpers/questionGenerator';

	let data: Data[];
	let quizStarted = $state(false);
	let quizFinished = $state(false);

	let keys: string[] = [];
	let quizData: {
		question: string;
		correctAnswer: string;
		imgUrl: string;
		wrongAnswers: string[];
	} = $state({
		question: '',
		correctAnswer: '',
		imgUrl: '',
		wrongAnswers: []
	});

	function startQuiz() {
		data = test($selectedLevel);
		quizStarted = true;
		incrementStep();
		let index = getStep() - 1;
		console.log('data in page:', data);
		keys = generateNormalKeys(data[0].correct, $selectedLevel);
		quizData = generateNormalQuestions(keys, data[index], index)!;
		return 'nothing';
	}

	function handleQuiz() {
		incrementStep();
		let index = getStep() - 1;
		quizData = generateNormalQuestions(keys, data[index], index)!;
	}

	let containerEl: HTMLDivElement;
	const containerHeight = new Tween(0, { duration: 500, easing: cubicOut });

	async function updateHeight() {
		await tick();
		if (containerEl) {
			containerHeight.set(containerEl.scrollHeight);
		}
	}

	$effect(() => {
		getStep();
		updateHeight();
	});

	function submit() {
		quizFinished = true;
		// quizStarted = false;
	}
</script>

<div
	id="quizContainer"
	bind:this={containerEl}
	style="max-height: {containerHeight.current + 'px'};"
>
	{#key getStep() + '-' + quizFinished}
		<div
			in:fly={{ y: 100, duration: 2000, easing: cubicOut }}
			out:fly={{ y: -100, duration: 500, easing: cubicIn }}
		>
			{#if getStep() === 0}
				<Welcome />
			{:else if quizFinished}
				<Result />
			{:else if quizStarted && !quizFinished}
				<Level1 {quizData} />
			{/if}
		</div>
	{/key}
	<button class={quizStarted ? 'used' : 'start-btn'} onclick={startQuiz}>Start Quiz</button>
	<button class={quizStarted ? 'current' : 'unused'} onclick={handleQuiz} disabled={getStep() === 5}
		>Next</button
	>
	<button class={!quizFinished && getStep() === 5 ? 'visible' : 'none'} onclick={submit}
		>Submit</button
	>
</div>

<style>
	#quizContainer {
		max-width: 1000px;
		margin: 5rem auto;
		padding: 2rem;
		background-color: var(--container-bg);
		border-radius: 10px;
		text-align: center;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.start-btn {
		padding: 1rem 3rem;
		margin: 2rem;
		font-size: 1.2rem;
		background-color: #4caf50;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: all 0.8s ease;
	}

	.used,
	.unused,
	.none {
		display: none;
	}
	.current {
		padding: 1rem 3rem;
		margin: 2rem;
		font-size: 1.2rem;
		background-color: orange;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: all 0.8s ease;
	}

	button:disabled {
		background-color: #ccc;
		cursor: not-allowed;
		display: none;
	}

	.visible {
		display: block;
		background-color: #4caf50;
		border: none;
		border-radius: 5px;
		color: #fff;
		font-size: 1.2rem;
		padding: 1rem 3rem;
		margin: 2rem;
	}
</style>
