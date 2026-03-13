// src/routes/drinks/+page.server.ts
import type { PageServerLoad } from './$types';
import beer from '$lib/data/drinks/beer.json';
import wine from '$lib/data/drinks/wine.json';
import spirits from '$lib/data/drinks/spirits.json';
import cocktails from '$lib/data/drinks/cocktails.json';
import fermented from '$lib/data/drinks/fermented-traditional.json';
import nonAlcoholic from '$lib/data/drinks/non-alcoholic.json';
import globalBrands from '$lib/data/drinks/global.json';

export const load: PageServerLoad = async () => {
  const allDrinks = [
    ...(beer as any[]),
    ...(wine as any[]),
    ...(spirits as any[]),
    ...(cocktails as any[]),
    ...(fermented as any[]),
    ...(nonAlcoholic as any[]),
    ...(globalBrands as any[])
  ].sort((a, b) => a.name.localeCompare(b.name));

  return {
    drinks: allDrinks
  };
};