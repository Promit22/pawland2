import { cats } from "$lib/stores/cats";
import { get } from "svelte/store";
import type { EntryGenerator } from './$types';
import type { PageLoad } from "./$types";
const kets = get(cats);

export const entries: EntryGenerator = () => {
    return kets.map(cat => ({ id: cat.id ?? '' }));
}

export const load: PageLoad = async ({ params }) => {
    return {
        cat: kets.find(cat => cat.id === params.id)
    }
}