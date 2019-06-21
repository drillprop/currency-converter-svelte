import { writable } from 'svelte/store';

export const currency = writable('usd');
export const amount = writable(0);
export const rate = writable(0);
export const convertValue = writable(0);
