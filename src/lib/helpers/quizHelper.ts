import { get } from 'svelte/store';
import { cats } from '$lib/stores/cats';
import type { Cat } from '$lib/types/catTypes';
const allCats = get(cats);
const length = allCats.length;

function getRandomNum(): number {
	return Math.floor(Math.random() * length);
}

export function getRandomNums(max: number): number[] {
	const nums = new Set<number>();
	while (nums.size < max) {
		nums.add(getRandomNum());
	}
	return Array.from(nums);
}

function getRandomCats() {
	const randomIndices = getRandomNums(5);
	return randomIndices.map((_, i) => allCats[randomIndices[i]]);
}

function getWrongAnswers(correctId: string) {
	const wrongAnswers = new Set<Cat>();
	while (wrongAnswers.size < 3) {
		const randomCat = allCats[getRandomNum()];
		if (randomCat.id !== correctId) {
			wrongAnswers.add(randomCat);
		}
	}
	return Array.from(wrongAnswers);
}

export function test(difficulty: string) {
	const context = [];
	const randomCats = getRandomCats();
	for (let i = 0; i < 5; i++) {
		const correctAns = randomCats[i];
		const wrongAns = getWrongAnswers(correctAns.id);
		context.push({
			correct: correctAns,
			wrong: wrongAns,
		});
	}
	console.log('test called with ', difficulty, context);
	return context;
}
