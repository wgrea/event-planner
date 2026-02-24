// listFiles.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const exclude = [
  'node_modules',
  '.git',
  '.vite',
  'generated',
  'immutable',
  'chunks',
  'entries',
  'nodes',
  '.svelte-kit',
  '_app',
  'ambient.d.ts',
  'non-ambient.d.ts',
  'route_meta_data.json',
  '$types.d.ts',
  'manifest.json',
  'version.json',
  'root.js',
  'root.svelte',
  'internal.js',
  'remote-entry.js',
  '.npmrc',
  'package-lock.json',
  'pnpm-lock.yaml',
  'yarn.lock',
  'docs',
  'staging'
];

function listFiles(dir, indent = '') {
  try {
    const items = fs.readdirSync(dir);
    
    items.sort((a, b) => {
      const pathA = path.join(dir, a);
      const pathB = path.join(dir, b);
      const statA = fs.statSync(pathA);
      const statB = fs.statSync(pathB);
      
      if (statA.isDirectory() && !statB.isDirectory()) return -1;
      if (!statA.isDirectory() && statB.isDirectory()) return 1;
      return a.localeCompare(b);
    });

    for (const item of items) {
      if (exclude.some(pattern => {
        if (pattern.includes('*')) {
          const regex = new RegExp(pattern.replace('*', '.*'));
          return regex.test(item);
        }
        return item === pattern;
      })) continue;

      const fullPath = path.join(dir, item);
      
      try {
        const stats = fs.statSync(fullPath);

        // Special handling for country data folders
        const isCountryDataFolder = stats.isDirectory() && 
                                  fullPath.includes('countries') && 
                                  fs.readdirSync(fullPath).some(f => 
                                    f === 'flight.ts' || f === 'living-costs.ts' || 
                                    f === 'nomad.ts' || f === 'resonance.ts' || 
                                    f === 'visa.ts' || f === 'index.ts'
                                  );

        if (isCountryDataFolder) {
          const countryFiles = fs.readdirSync(fullPath).filter(f => f.endsWith('.ts'));
          console.log(indent + '🌍 ' + item + `/ (${countryFiles.length} data modules)`);
        } else {
          console.log(indent + (stats.isDirectory() ? '📁 ' : '📄 ') + item);

          if (stats.isDirectory()) {
            listFiles(fullPath, indent + '  ');
          }
        }
      } catch (err) {
        console.log(indent + '❌ ' + item + ' (error reading)');
      }
    }
  } catch (err) {
    console.log('Error reading directory:', dir, err.message);
  }
}

console.log('🚀 Travel Planner Project Structure:\n');
listFiles('.');