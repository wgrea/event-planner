// src/lib/utils/drink-filters.ts
import type { Drink, FilterState } from '$lib/types';

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'Beer': 'bg-yellow-100 text-yellow-800',
    'Wine': 'bg-purple-100 text-purple-800',
    'Spirits': 'bg-blue-100 text-blue-800',
    'Cocktails': 'bg-green-100 text-green-800',
    'Fermented Traditional': 'bg-orange-100 text-orange-800',
    'Non-Alcoholic Ritual': 'bg-gray-100 text-gray-800'
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
}

// Normalize origin → region
export function normalizeOriginToRegion(origin?: string): string {
  const originLower = origin?.toLowerCase() ?? '';

  // Europe
  if (
    originLower.includes('germany') ||
    originLower.includes('czech') ||
    originLower.includes('czechia') ||
    originLower.includes('austria') ||
    originLower.includes('united kingdom') ||
    originLower.includes('uk') ||
    originLower.includes('britain') ||
    originLower.includes('england') ||
    originLower.includes('scotland') ||
    originLower.includes('ireland') ||
    originLower.includes('belgium') ||
    originLower.includes('netherlands') ||
    originLower.includes('france') ||
    originLower.includes('italy') ||
    originLower.includes('spain') ||
    originLower.includes('portugal') ||
    originLower.includes('greece') ||
    originLower.includes('hungary') ||
    originLower.includes('balkans') ||
    originLower.includes('scandinavia') ||
    originLower.includes('sweden') ||
    originLower.includes('europe')
  ) {
    return 'Europe';
  }

  // Africa
  if (
    originLower.includes('africa') ||
    originLower.includes('south africa') ||
    originLower.includes('west africa') ||
    originLower.includes('nigeria') ||
    originLower.includes('ghana') ||
    originLower.includes('ethiopia') ||
    originLower.includes('eritrea') ||
    originLower.includes('uganda') ||
    originLower.includes('kenya') ||
    originLower.includes('southern africa')
  ) {
    return 'Africa';
  }

  // Asia
  if (
    originLower.includes('pakistan') ||
    originLower.includes('india') ||
    originLower.includes('china') ||
    originLower.includes('japan') ||
    originLower.includes('korea') ||
    originLower.includes('thailand') ||
    originLower.includes('laos') ||
    originLower.includes('philippines') ||
    originLower.includes('indonesia') ||
    originLower.includes('sri lanka') ||
    originLower.includes('asia') ||
    originLower.includes('azerbaijan') ||
    originLower.includes('afghanistan')
  ) {
    return 'Asia';
  }

  // Middle East
  if (
    originLower.includes('middle east') ||
    originLower.includes('lebanon') ||
    originLower.includes('syria') ||
    originLower.includes('jordan') ||
    originLower.includes('palestine') ||
    originLower.includes('israel') ||
    originLower.includes('saudi arabia') ||
    originLower.includes('gulf') ||
    originLower.includes('uae') ||
    originLower.includes('turkey')
  ) {
    return 'Middle East';
  }

  // North America
  if (
    originLower.includes('united states') ||
    originLower.includes('usa') ||
    originLower.includes('canada') ||
    originLower.includes('mexico') ||
    originLower.includes('north america')
  ) {
    return 'North America';
  }

  // South America
  if (
    originLower.includes('south america') ||
    originLower.includes('peru') ||
    originLower.includes('chile') ||
    originLower.includes('brazil') ||
    originLower.includes('bolivia') ||
    originLower.includes('colombia') ||
    originLower.includes('argentina') ||
    originLower.includes('andes') ||
    originLower.includes('andean')
  ) {
    return 'South America';
  }

  // Oceania
  if (
    originLower.includes('australia') ||
    originLower.includes('oceania') ||
    originLower.includes('pacific islands') ||
    originLower.includes('fiji') ||
    originLower.includes('vanuatu') ||
    originLower.includes('tonga') ||
    originLower.includes('samoa') ||
    originLower.includes('hawaii')
  ) {
    return 'Oceania';
  }

  // Global / Multiple regions
  if (
    originLower.includes('global') ||
    originLower.includes('pan-tropical')
  ) {
    return 'Global';
  }

  return 'Other';
}

export function getABV(drink: Drink): number {
  return drink.alcohol_percentage ?? 0;
}

export function matchesStrength(drink: Drink, strengthFilter: string | null): boolean {
  if (!strengthFilter) return true;

  const abv = getABV(drink);
  
  // If drink has no ABV info, include it only when no filter is applied
  // or when filtering by 'Non-Alcoholic' (since undefined = 0)
  if (drink.alcohol_percentage === undefined) {
    return strengthFilter === 'Non-Alcoholic';
  }

  if (strengthFilter === 'Non-Alcoholic') return abv <= 0.5;
  if (strengthFilter === 'Low') return abv > 0.5 && abv <= 10;
  if (strengthFilter === 'Medium') return abv > 10 && abv <= 25;
  if (strengthFilter === 'High') return abv > 25;

  return true;
}

export function matchesRegion(drink: Drink, regionFilter: string | null): boolean {
  if (!regionFilter) return true;
  return normalizeOriginToRegion(drink.origin) === regionFilter;
}

export function matchesSearch(drink: Drink, searchQuery: string): boolean {
  if (!searchQuery) return true;
  
  const query = searchQuery.toLowerCase();
  return (
    drink.name.toLowerCase().includes(query) ||
    drink.origin?.toLowerCase().includes(query) ||
    drink.category.toLowerCase().includes(query)
  );
}

export function filterDrinks(drinks: Drink[], filters: FilterState): Drink[] {
  return drinks.filter(drink => {
    const matchesCategory = !filters.selectedCategory || drink.category === filters.selectedCategory;
    const matchesRegionFilter = matchesRegion(drink, filters.selectedRegion);
    const matchesStrengthFilter = matchesStrength(drink, filters.selectedStrength);
    const matchesSearchFilter = matchesSearch(drink, filters.searchQuery);

    return matchesCategory && matchesRegionFilter && matchesStrengthFilter && matchesSearchFilter;
  });
}