// src/routes/drinks/+page.server.ts
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  // Dynamic import all drink files
  const beer = await import('$lib/data/drinks/beer.json');
  const wine = await import('$lib/data/drinks/wine.json');
  const spirits = await import('$lib/data/drinks/spirits.json');
  const cocktails = await import('$lib/data/drinks/cocktails.json');
  const fermented = await import('$lib/data/drinks/fermented-traditional.json');
  const nonAlcoholic = await import('$lib/data/drinks/non-alcoholic.json');

  const allDrinks = [
    ...(beer.default as any[]),
    ...(wine.default as any[]),
    ...(spirits.default as any[]),
    ...(cocktails.default as any[]),
    ...(fermented.default as any[]),
    ...(nonAlcoholic.default as any[])
  ].sort((a, b) => a.name.localeCompare(b.name));

  return {
    drinks: allDrinks
  };
};