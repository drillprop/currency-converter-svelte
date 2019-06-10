import { writable } from 'svelte/store';

export const currency = writable('usd');
export const amount = writable(0);
