import { readFile, writeFile, mkdir } from 'node:fs/promises';
// GitHub Pages serves real files, with no SPA rewrite configuration.
// Generate an entry document for every existing React route so direct links work.
const data = await readFile(new URL('../src/data/projects.ts', import.meta.url), 'utf8');
const slugs = [...data.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map(match => match[1]);
if (!slugs.length || new Set(slugs).size !== slugs.length) throw new Error('Missing or duplicate project routes');
const root = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('index.html', root), 'utf8');
for (const route of ['projects', ...slugs.map(slug => `projects/${slug}`)]) {
  const dir = new URL(`${route}/`, root);
  await mkdir(dir, { recursive: true });
  await writeFile(new URL('index.html', dir), html);
}
await writeFile(new URL('404.html', root), html);
await writeFile(new URL('.nojekyll', root), '');
console.log(`Prepared ${slugs.length + 2} page routes and a custom 404 for GitHub Pages.`);
