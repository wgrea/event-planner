// listFiles.js
import fs from 'fs';
import path from 'path';

// folders & files to skip
const exclude = [
  'node_modules',
  '.git',
  '.vite',                // Vite cache
  'generated',            // All generated files
  'immutable',            // Hashed build outputs
  'chunks',               // Code split chunks
  'entries',              // Compiled entry points
  'nodes',                // Compiled components
  '.svelte-kit',          // Build artifacts
  '_app',                 // Compiled app
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
  'yarn.lock'
];

function listFiles(dir, indent = '') {
  const items = fs.readdirSync(dir);
  
  // Sort: directories first, then files, both alphabetically
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
    // Skip excluded patterns
    if (exclude.some(pattern => {
      if (pattern.includes('*')) {
        // Handle wildcard patterns
        const regex = new RegExp(pattern.replace('*', '.*'));
        return regex.test(item);
      }
      return item === pattern;
    })) continue;

    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);

    console.log(indent + (stats.isDirectory() ? '📁 ' : '📄 ') + item);

    if (stats.isDirectory()) {
      listFiles(fullPath, indent + '  ');
    }
  }
}

console.log('Event Planner Project Structure:\n');
listFiles('.');