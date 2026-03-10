// src/routes/drinks/[id]/+page.server.ts
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  const id = params.id;
  
  // Dynamic import all drink files
  const [beer, wine, spirits, cocktails, fermented, nonAlcoholic] = await Promise.all([
    import('$lib/data/drinks/beer.json'),
    import('$lib/data/drinks/wine.json'),
    import('$lib/data/drinks/spirits.json'),
    import('$lib/data/drinks/cocktails.json'),
    import('$lib/data/drinks/fermented-traditional.json'),
    import('$lib/data/drinks/non-alcoholic.json')
  ]);

  const allDrinks = [
    ...beer.default,
    ...wine.default,
    ...spirits.default,
    ...cocktails.default,
    ...fermented.default,
    ...nonAlcoholic.default
  ];

  const drink = allDrinks.find(d => d.id === id);

  if (!drink) {
    throw error(404, 'Drink not found');
  }

  return {
    drink
  };
};