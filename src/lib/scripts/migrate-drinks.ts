import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define the Drink type to match your data structure
interface Drink {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  alcohol_percentage?: number;
  origin?: string;
  flavor_profile?: string[];
  typical_setting?: string[];
  cultural_notes?: string;
  global_availability?: string;
  manufacturing_notes?: string;
  consumption_patterns?: string[];
  regional_identity?: string;
  legal_notes?: string;
}

// Define the category mapping
interface CategoryMap {
  Beer: Drink[];
  Wine: Drink[];
  Spirits: Drink[];
  Cocktails: Drink[];
  'Fermented traditional drinks': Drink[];
  'Non-Alcoholic Ritual': Drink[];
  [key: string]: Drink[]; // Index signature for dynamic access
}

async function migrateDrinks() {
  try {
    // Read the original drinks.json
    const drinksPath = path.join(__dirname, '..', 'data', 'drinks.json');
    
    // Check if file exists
    try {
      await fs.access(drinksPath);
    } catch {
      console.log('No drinks.json found. Creating new drink files from scratch...');
      // Create empty category files
      const categories = [
        'Beer', 'Wine', 'Spirits', 'Cocktails', 
        'Fermented traditional drinks', 'Non-Alcoholic Ritual'
      ];
      
      const drinksDir = path.join(__dirname, '..', 'data', 'drinks');
      await fs.mkdir(drinksDir, { recursive: true });
      
      for (const category of categories) {
        const filename = category.toLowerCase().replace(/\s+/g, '-') + '.json';
        const filePath = path.join(drinksDir, filename);
        await fs.writeFile(filePath, JSON.stringify([], null, 2));
        console.log(`Created empty ${filename}`);
      }
      
      console.log('Migration complete! Empty files created.');
      return;
    }
    
    const drinksData = await fs.readFile(drinksPath, 'utf-8');
    const drinks: Drink[] = JSON.parse(drinksData);
    
    // Create drinks directory if it doesn't exist
    const drinksDir = path.join(__dirname, '..', 'data', 'drinks');
    await fs.mkdir(drinksDir, { recursive: true });
    
    // Group drinks by category with proper typing
    const categorized: CategoryMap = {
      Beer: [],
      Wine: [],
      Spirits: [],
      Cocktails: [],
      'Fermented traditional drinks': [],
      'Non-Alcoholic Ritual': []
    };
    
    drinks.forEach((drink: Drink) => {
      const category = drink.category;
      if (categorized[category]) {
        categorized[category].push(drink);
      } else {
        console.warn(`Unknown category: ${category} for drink ${drink.name}`);
        // Optionally put unknown categories in a separate file
        if (!categorized['Other']) {
          categorized['Other'] = [];
        }
        categorized['Other'].push(drink);
      }
    });
    
    // Write each category to its own file
    for (const [category, categoryDrinks] of Object.entries(categorized)) {
      const filename = category.toLowerCase().replace(/\s+/g, '-') + '.json';
      const filePath = path.join(drinksDir, filename);
      await fs.writeFile(filePath, JSON.stringify(categoryDrinks, null, 2));
      console.log(`Wrote ${categoryDrinks.length} drinks to ${filename}`);
    }
    
    // Backup original
    await fs.rename(drinksPath, drinksPath + '.backup');
    console.log('Migration complete! Original file backed up as drinks.json.backup');
    
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

// Run the migration
migrateDrinks();