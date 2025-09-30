import { getKeys } from '$lib/helpers/keys';
import type { Cat } from '$lib/types/catTypes';
import type { Data } from '$lib/types/catTypes';
import unavailable from '$lib/assets/images/unavailable.png';
import { formatKey } from '$lib/helpers/keyFormatter';
import { get } from 'svelte/store';
import { cats } from '$lib/stores/cats';
// import {getRandomNums} from "$lib/helpers/quizHelper";
const catList = get(cats);
const normal = new Set<string>(['name', 'origin', 'country_code']);
const medium = new Set<string>(['name', 'country_code']);
const hard = new Set<string>(['country_code']);


export function generateNormalKeys(cat: Cat, difficulty = 'normal') {
	const level = difficulty === 'normal' ? normal : difficulty === 'medium' ? medium : hard;
	const keys = getKeys(cat).filter((item) => !level.has(item));
	while (level.size < 5) {
		level.add(keys[Math.floor(Math.random() * keys.length)]);
	}
	// const randomNums = doTheThing(keys.length);
	console.log(keys);
	// console.log(random);

	return Array.from(level);
}

export function generateNormalQuestions(keys: string[], data: Data, index: number) {
	const correct = data.correct;
	const wrong = data.wrong;
	const key = keys[index];
	let question = '';
	let correctAnswer = '';
	let wrongAnswers: string[] = [];
	const imgUrl = correct.image?.url ?? unavailable;

	switch (key) {
		case 'name':
			question = 'What is the name of this cat ?';
			correctAnswer = correct.name;
			wrongAnswers = wrong.map((cat) => cat.name);
			break;

		case 'origin':
			question = `What is the origin of ${correct.name} ?`;
			correctAnswer = correct.origin;
			wrongAnswers = wrong.map((cat) => cat.origin);
			break;

		case 'country_code':
			question = `What is the country code of ${correct.name} ?`;
			correctAnswer = correct.country_code;
			wrongAnswers = wrong.map((cat) => cat.country_code);
			break;

		case 'temperament':
			question = `What is the temperament of ${correct.name} ?`;
			correctAnswer = correct.temperament;
			wrongAnswers = wrong.map((cat) => cat.temperament);
			break;

		default:
			question = `What is the ${formatKey(key)} of ${correct.name} ?`;
			correctAnswer = String(correct[key] ?? 'Unknown');
			// collect candidate wrong answers from other cats
			wrongAnswers = wrong.map((cat) => String(cat[key] ?? 'Unknown'));
			break;
	}

	wrongAnswers = wrongAnswers.filter((ans) => ans !== correctAnswer);

	while (wrongAnswers.length < 3) {
		const test = catList.filter(cat => cat[key]?.toString() !== correctAnswer);
		const randomIndex = Math.floor(Math.random() * test.length);
		const candidate = String(test[randomIndex][key] ?? 'Unknown');
		wrongAnswers.push(candidate);
	}

	return { question, correctAnswer, imgUrl, wrongAnswers };
}
