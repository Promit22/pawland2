interface Ans {
	question: string;
	correct: string;
	userSelect: string;
}

export const ans: Ans[] = [];

export function validate(question: string, correct: string, userSelect: string) {
	ans.push({ question, correct, userSelect });
	console.log('In Validator', ans);
}
