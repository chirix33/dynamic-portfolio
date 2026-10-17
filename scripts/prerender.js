// Injects the server-rendered app into dist/index.html so the page has real
// content before (or without) client-side JavaScript. Run after both the
// client build (dist/) and the SSR build (dist-ssr/) — see "build" in package.json.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const indexPath = path.join(root, 'dist', 'index.html');
const ssrDir = path.join(root, 'dist-ssr');
const rootMarker = '<div id="root"></div>';

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

const template = fs.readFileSync(indexPath, 'utf-8');
if (!template.includes(rootMarker)) {
  throw new Error(`prerender: could not find ${rootMarker} in ${indexPath}`);
}

const appHtml = render();
fs.writeFileSync(indexPath, template.replace(rootMarker, () => `<div id="root">${appHtml}</div>`));
fs.rmSync(ssrDir, { recursive: true, force: true });

console.log(`prerender: wrote ${appHtml.length} characters of HTML into dist/index.html`);
