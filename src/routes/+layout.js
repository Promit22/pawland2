export const prerender = true;
export const trailingSlash = 'always';
import { cats } from "$lib/stores/cats";

export async function load() {
    await cats.loadCats();
    return {};
}