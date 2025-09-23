import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { Cat } from '$lib/types/catTypes'

const maxAge = 7 * 24 * 60 * 60 * 1000;

function createCatsStore() {
	const { subscribe, set } = writable([] as Cat[]);

	async function fetchCats() {
		const res = await fetch('https://api.thecatapi.com/v1/breeds', {
			headers: {
				'x-api-key': 'live_0GNo1gdJyt1dzjLKoez5uyfuQcIjvPj1ZZD0JSCsUFdsPu5KUhE3NigjE66mGHIf'
			}
		});
		if (!res.ok) return [];

		const cats: Cat[] = await res.json();

		if (browser) {
			localStorage.setItem(
				'cats',
				JSON.stringify({
					timeStamp: Date.now(),
					data: cats
				})
			);
		}

		set(cats);
		return cats;
	}

	function loadCats() {
		if (browser) {
			const item = localStorage.getItem('cats');
			if (item) {
				const cached: { timeStamp: number; data: Cat[] } = JSON.parse(item);
				const age = Date.now() - cached.timeStamp;
				if (age <= maxAge) {
					set(cached.data);
					return cached.data;
				}
			}
		}
		return fetchCats();
	}

	return {
		subscribe,
		loadCats,
		fetchCats
	};
}

export const cats = createCatsStore();
