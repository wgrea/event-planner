// src/routes/drinks/[id]/+page.server.ts
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  const { id } = params;
  
  const [beer, wine, spirits, cocktails, fermented, nonAlcoholic, globalBrands] = await Promise.all([
    import('$lib/data/drinks/beer.json'),
    import('$lib/data/drinks/wine.json'),
    import('$lib/data/drinks/spirits.json'),
    import('$lib/data/drinks/cocktails.json'),
    import('$lib/data/drinks/fermented-traditional.json'),
    import('$lib/data/drinks/non-alcoholic.json'),
    import('$lib/data/drinks/global.json') // Ensure this is last
  ]);

  const allDrinks = [
    ...beer.default,
    ...wine.default,
    ...spirits.default,
    ...cocktails.default,
    ...fermented.default,
    ...nonAlcoholic.default,
    ...globalBrands.default // Matches the last variable above
  ];

  const drink = allDrinks.find(d => d.id === id);

  if (!drink) {
    console.error(`Drink ID "${id}" not found in database.`);
    throw error(404, { message: 'Drink not found' });
  }

  return { drink };
};