import type { Cat } from '$lib/types/catTypes';
import { get} from 'svelte/store';
import { cats } from '$lib/stores/cats';

const excludedKeys = [
		'alt_names',
		'country_codes',
		'id',
		'image',
		'reference_image_id',
		'vetstreet_url',
		'weight',
		'wikipedia_url',
		'vcahospitals_url',
		'cfa_url',
		'description'
	];

export function getKeys(cat: Cat = get(cats)[0]) {
	return Object.keys(cat).filter(key => !excludedKeys.includes(key));
}