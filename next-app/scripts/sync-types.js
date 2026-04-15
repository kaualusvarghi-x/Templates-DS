import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const BASE_URL = (process.env.XDS_CDN_URL ?? 'http://localhost:4173').replace(/\/$/, '');
const TYPES_URL = `${BASE_URL}/xds-elements.d.ts`;
const OUTPUT_PATH = resolve(process.cwd(), 'src/xds-elements.d.ts');

console.log(`\n[sync-types] Baixando tipos do Design System...`);
console.log(`             ${TYPES_URL}\n`);

let response;
try {
  response = await fetch(TYPES_URL);
} catch (err) {
  console.warn(`[sync-types] ⚠ Servidor inacessível (${BASE_URL})`);
  console.warn(`             Tipos não foram atualizados. Verifique se o servidor está rodando.`);
  console.warn(`             Para pular este passo: npm install --ignore-scripts\n`);
  process.exit(0);
}

if (!response.ok) {
  console.warn(`[sync-types] ⚠ ${TYPES_URL} retornou ${response.status}`);
  console.warn(`             Certifique-se de que o design system foi buildado (npm run build).\n`);
  process.exit(0);
}

const content = await response.text();

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, content, 'utf-8');

console.log(`[sync-types] ✓ src/xds-elements.d.ts atualizado.\n`);
