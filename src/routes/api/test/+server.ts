// src/routes/api/test/+server.ts
import { db } from '$lib';
import { json } from '@sveltejs/kit';

export async function GET() {
  try {
    const drinks = await db.getDrinks();
    const bars = await db.getBars();
    const clubs = await db.getClubs();
    const events = await db.getEvents();
    
    // Test a specific drink lookup
    const sampleDrink = drinks[0];
    let venues = null;
    
    if (sampleDrink) {
      venues = await db.getAllVenuesForDrink(sampleDrink.id);
    }
    
    return json({
      success: true,
      counts: {
        drinks: drinks.length,
        bars: bars.length,
        clubs: clubs.length,
        events: events.length
      },
      sample: sampleDrink ? {
        drink: sampleDrink.name,
        venues: {
          bars: venues?.bars.length || 0,
          clubs: venues?.clubs.length || 0,
          events: venues?.events.length || 0
        }
      } : null
    });
  } catch (error) {
    return json({
      success: false,
      error: String(error)
    }, { status: 500 });
  }
}