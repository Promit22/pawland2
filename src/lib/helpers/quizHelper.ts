import { get } from 'svelte/store';
import { cats } from '$lib/stores/cats';
import type { Cat } from '$lib/types/catTypes';
const allCats = get(cats);
const length = allCats.length;
let index = 0;

const level1 = [
	'What is this cat ?',
	'How long does this cat live ?',
	'What is the origin of this cat ?',
	'What is the temperament of this cat ?',
	'What is the weight of this cat ?'
];

const level2 = [
	'What is this cat ?',
	'How long does this cat live ?',
	'What is the origin of this cat ?',
	'What is the temperament of this cat ?',
	'What is the weight of this cat ?'
];

const level3 = [
	'What is this cat ?',
	'How long does this cat live ?',
	'What is the origin of this cat ?',
	'What is the temperament of this cat ?',
	'What is the weight of this cat ?'
];

function getRandomNum(): number {
	return Math.floor(Math.random() * length);
}

function getRandomNums(max: number): number[] {
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

function level1Wizard(qIndex: number) {
	const randomCats = getRandomCats();
	const correctAns = randomCats[qIndex];
	const wrongAns = getWrongAnswers(correctAns.id);
	const q = level1[qIndex];
	index++;
	return {
		correct: correctAns,
		wrong: wrongAns,
		question: q
	};
}
//we should be able to transfer context.
export function test(difficulty: string) {
	const context = [];
	const randomCats = getRandomCats();
	for (let i = 0; i < 5; i++) {
		const correctAns = randomCats[i];
		const wrongAns = getWrongAnswers(correctAns.id);
		const q = difficulty === 'normal' ? level1[i] : difficulty === 'medium' ? level2[i] : level3[i];
		context.push({
			correct: correctAns,
			wrong: wrongAns,
			question: q
		});
	}
	console.log('test called with ', difficulty, context);
	return context;
}

export function masterWizard(level: string) {
	console.log('master wizard called with ', level);
	if (level === 'normal') {
		return level1Wizard(index);
	}
}
