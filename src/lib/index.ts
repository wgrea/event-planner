// src/lib/index.ts
import fs from 'fs/promises';
import path from 'path';
import type {
  BarType, ClubType, EventType, Drink, DrinkCategory, Country,
  DrinkToBarMapping, DrinkToClubMapping, DrinkToEventMapping,
  CountryConsumption, CountryDetails
} from './types';

export * from './types';

export class JSONDatabase {
  private dataDir: string;
  private mappingsDir: string;
  private cache: Map<string, any>;

  constructor() {
    this.dataDir = path.join(process.cwd(), 'src', 'lib', 'data');
    this.mappingsDir = path.join(this.dataDir, 'mappings');
    this.cache = new Map();
  }

  private async readJSONFile<T>(filePath: string): Promise<T> {
    if (this.cache.has(filePath)) {
      return this.cache.get(filePath) as T;
    }

    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(fileContent) as T;
      this.cache.set(filePath, data);
      return data;
    } catch (error) {
      console.error(`Error reading ${filePath}:`, error);
      throw new Error(`Failed to read ${path.basename(filePath)}`);
    }
  }

  clearCache() {
    this.cache.clear();
  }

  // Bar methods
  async getBars(): Promise<BarType[]> {
    const filePath = path.join(this.dataDir, 'bar-types.json');
    return this.readJSONFile<BarType[]>(filePath);
  }

  async getBarBySlug(slug: string): Promise<BarType | undefined> {
    const bars = await this.getBars();
    return bars.find(bar => bar.slug === slug);
  }

  // Club methods
  async getClubs(): Promise<ClubType[]> {
    const filePath = path.join(this.dataDir, 'club-types.json');
    return this.readJSONFile<ClubType[]>(filePath);
  }

  async getClubBySlug(slug: string): Promise<ClubType | undefined> {
    const clubs = await this.getClubs();
    return clubs.find(club => club.slug === slug);
  }

  // Event methods
  async getEvents(): Promise<EventType[]> {
    const filePath = path.join(this.dataDir, 'event-types.json');
    return this.readJSONFile<EventType[]>(filePath);
  }

  async getEventBySlug(slug: string): Promise<EventType | undefined> {
    const events = await this.getEvents();
    return events.find(event => event.slug === slug);
  }

async getAllDrinks(): Promise<Drink[]> {
  const drinkFiles = [
    'beer.json',
    'wine.json', 
    'spirits.json',
    'cocktails.json',
    'fermented-traditional.json',
    'non-alcoholic.json'
  ];
  
  const allDrinks: Drink[] = [];
  
  for (const file of drinkFiles) {
    try {
      const filePath = path.join(this.dataDir, 'drinks', file);
      const drinks = await this.readJSONFile<Drink[]>(filePath);
      allDrinks.push(...drinks);
    } catch (error) {
      console.warn(`Could not load ${file}, skipping...`);
    }
  }
  
  return allDrinks;
}

// Add method to get drinks by subcategory
async getDrinksBySubcategory(subcategory: string): Promise<Drink[]> {
  const allDrinks = await this.getAllDrinks();
  return allDrinks.filter(drink => drink.subcategory === subcategory);
}

// Add method to get drinks by region
async getDrinksByRegion(region: string): Promise<Drink[]> {
  const allDrinks = await this.getAllDrinks();
  return allDrinks.filter(drink => 
    drink.regional_identity?.toLowerCase().includes(region.toLowerCase()) ||
    drink.origin?.toLowerCase().includes(region.toLowerCase())
  );
}

// Add method to search drinks by flavor profile
async searchDrinksByFlavor(flavors: string[]): Promise<Drink[]> {
  const allDrinks = await this.getAllDrinks();
  return allDrinks.filter(drink => 
    drink.flavor_profile?.some(flavor => 
      flavors.some(searchFlavor => 
        flavor.toLowerCase().includes(searchFlavor.toLowerCase())
      )
    )
  );
}

// Override the existing getDrinks method
async getDrinks(): Promise<Drink[]> {
  return this.getAllDrinks();
}

// Get drinks by category
async getDrinksByCategory(category: string): Promise<Drink[]> {
  const allDrinks = await this.getAllDrinks();
  return allDrinks.filter(drink => drink.category === category);
}

// Get all drink categories with counts
async getDrinkCategoriesWithCounts(): Promise<{ category: string; count: number }[]> {
  const allDrinks = await this.getAllDrinks();
  const counts = new Map<string, number>();
  
  allDrinks.forEach(drink => {
    const count = counts.get(drink.category) || 0;
    counts.set(drink.category, count + 1);
  });
  
  return Array.from(counts.entries()).map(([category, count]) => ({
    category,
    count
  }));
}

  async getDrinkById(id: string): Promise<Drink | undefined> {
    const drinks = await this.getDrinks();
    return drinks.find(drink => drink.id === id);
  }

  async getDrinksByOrigin(origin: string): Promise<Drink[]> {
    const drinks = await this.getDrinks();
    return drinks.filter(drink => drink.origin === origin);
  }

  // Drink Categories
  async getDrinkCategories(): Promise<DrinkCategory[]> {
    const filePath = path.join(this.dataDir, 'drink-categories.json');
    return this.readJSONFile<DrinkCategory[]>(filePath);
  }

  // Country methods
  async getCountries(): Promise<Country[]> {
    const filePath = path.join(this.dataDir, 'countries.json');
    return this.readJSONFile<Country[]>(filePath);
  }

  async getCountryById(id: string): Promise<Country | undefined> {
    const countries = await this.getCountries();
    return countries.find(country => country.id === id);
  }

  // Mock data methods
  async getMockCountryConsumption(): Promise<CountryConsumption[]> {
    const filePath = path.join(this.dataDir, 'mock-country-consumption.json');
    return this.readJSONFile<CountryConsumption[]>(filePath);
  }

  async getMockCountryDetails(): Promise<CountryDetails[]> {
    const filePath = path.join(this.dataDir, 'mock-country-details.json');
    return this.readJSONFile<CountryDetails[]>(filePath);
  }

  // Mapping methods
  async getDrinkToBarMapping(): Promise<DrinkToBarMapping> {
    const filePath = path.join(this.mappingsDir, 'drink-to-bar.json');
    return this.readJSONFile<DrinkToBarMapping>(filePath);
  }

  async getDrinkToClubMapping(): Promise<DrinkToClubMapping> {
    const filePath = path.join(this.mappingsDir, 'drink-to-club.json');
    return this.readJSONFile<DrinkToClubMapping>(filePath);
  }

  async getDrinkToEventMapping(): Promise<DrinkToEventMapping> {
    const filePath = path.join(this.mappingsDir, 'drink-to-event.json');
    return this.readJSONFile<DrinkToEventMapping>(filePath);
  }

  // Get bars that serve a specific drink
  async getBarsForDrink(drinkId: string): Promise<BarType[]> {
    const [mapping, bars] = await Promise.all([
      this.getDrinkToBarMapping(),
      this.getBars()
    ]);
    
    const barIds = mapping[drinkId] || [];
    return bars.filter(bar => barIds.includes(bar.id));
  }

  // Get clubs that serve a specific drink
  async getClubsForDrink(drinkId: string): Promise<ClubType[]> {
    const [mapping, clubs] = await Promise.all([
      this.getDrinkToClubMapping(),
      this.getClubs()
    ]);
    
    const clubIds = mapping[drinkId] || [];
    return clubs.filter(club => clubIds.includes(club.id));
  }

  // Get events where a specific drink is common
  async getEventsForDrink(drinkId: string): Promise<EventType[]> {
    const [mapping, events] = await Promise.all([
      this.getDrinkToEventMapping(),
      this.getEvents()
    ]);
    
    const eventIds = mapping[drinkId] || [];
    return events.filter(event => eventIds.includes(event.id));
  }

  // Get all venues for a drink (bars, clubs, events)
  async getAllVenuesForDrink(drinkId: string): Promise<{
    bars: BarType[];
    clubs: ClubType[];
    events: EventType[];
  }> {
    const [bars, clubs, events] = await Promise.all([
      this.getBarsForDrink(drinkId),
      this.getClubsForDrink(drinkId),
      this.getEventsForDrink(drinkId)
    ]);

    return { bars, clubs, events };
  }

  // Get drinks that fit a specific bar
  async getDrinksForBar(barId: string): Promise<Drink[]> {
    const [mapping, drinks] = await Promise.all([
      this.getDrinkToBarMapping(),
      this.getDrinks()
    ]);
    
    // Find all drink IDs that map to this bar
    const drinkIds = Object.entries(mapping)
      .filter(([_, barIds]) => barIds.includes(barId))
      .map(([drinkId]) => drinkId);
    
    return drinks.filter(drink => drinkIds.includes(drink.id));
  }

  // Get drinks that fit a specific club
  async getDrinksForClub(clubId: string): Promise<Drink[]> {
    const [mapping, drinks] = await Promise.all([
      this.getDrinkToClubMapping(),
      this.getDrinks()
    ]);
    
    const drinkIds = Object.entries(mapping)
      .filter(([_, clubIds]) => clubIds.includes(clubId))
      .map(([drinkId]) => drinkId);
    
    return drinks.filter(drink => drinkIds.includes(drink.id));
  }

  // Get drinks common at a specific event
  async getDrinksForEvent(eventId: string): Promise<Drink[]> {
    const [mapping, drinks] = await Promise.all([
      this.getDrinkToEventMapping(),
      this.getDrinks()
    ]);
    
    const drinkIds = Object.entries(mapping)
      .filter(([_, eventIds]) => eventIds.includes(eventId))
      .map(([drinkId]) => drinkId);
    
    return drinks.filter(drink => drinkIds.includes(drink.id));
  }

  async searchDrinksBySetting(setting: string): Promise<Drink[]> {
    const drinks = await this.getDrinks();
    return drinks.filter(drink => 
      drink.typical_setting?.includes(setting)
    );
  }

  // Get drinks by restriction level (for restricted countries)
  async getDrinksByRestrictionLevel(level: string): Promise<Drink[]> {
    const drinks = await this.getDrinks();
    // This is a placeholder - you might want to add a field to drinks
    // indicating if they're available in restricted countries
    return drinks;
  }
}

// Export a singleton instance
export const db = new JSONDatabase();