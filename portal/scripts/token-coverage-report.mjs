import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const pagesDir = path.join(rootDir, 'src/portal/styles/pages');
const reportDir = path.join(rootDir, 'reports');
const reportFile = path.join(reportDir, 'token-coverage-by-page.md');

const pageFiles = fs
  .readdirSync(pagesDir)
  .filter((file) => file.endsWith('.css'))
  .sort();

const declarationRegex = /([-\w]+)\s*:\s*([^;]+);/gms;
const hexRegex = /#[0-9a-f]{3,8}\b/gi;
const hardColorRegex = /#[0-9a-f]{3,8}\b|rgba?\(|hsla?\(/i;
const portalTokenRegex = /var\(--portal-[a-z0-9-]+\)/i;
const baseTokenRegex = /var\(--color-[a-z0-9-]+\)/i;

function analyzeCss(content) {
  let totalDeclarations = 0;
  let colorRelatedDeclarations = 0;
  let tokenizedDeclarations = 0;
  let portalTokenDeclarations = 0;
  let baseTokenDeclarations = 0;
  let mixedTokenDeclarations = 0;
  let hardcodedColorDeclarations = 0;
  let colorMixDeclarations = 0;
  const hexLiterals = new Map();

  for (const match of content.matchAll(declarationRegex)) {
    totalDeclarations += 1;
    const value = match[2].trim();
    const hasPortalToken = portalTokenRegex.test(value);
    const hasBaseToken = baseTokenRegex.test(value);
    const hasToken = hasPortalToken || hasBaseToken;
    const hasHardColor = hardColorRegex.test(value);
    const hasColorMix = /color-mix\(/i.test(value);
    const isColorRelated =
      hasToken ||
      hasHardColor ||
      hasColorMix ||
      /\btransparent\b/i.test(value) ||
      /\bcurrentcolor\b/i.test(value);

    if (!isColorRelated) continue;

    colorRelatedDeclarations += 1;
    if (hasToken) {
      tokenizedDeclarations += 1;
      if (hasPortalToken) portalTokenDeclarations += 1;
      if (hasBaseToken) baseTokenDeclarations += 1;
      if (hasPortalToken && hasBaseToken) mixedTokenDeclarations += 1;
    }
    if (hasHardColor) {
      hardcodedColorDeclarations += 1;
      for (const hex of value.match(hexRegex) ?? []) {
        const key = hex.toLowerCase();
        hexLiterals.set(key, (hexLiterals.get(key) ?? 0) + 1);
      }
    }
    if (hasColorMix) {
      colorMixDeclarations += 1;
    }
  }

  const tokenCoverage =
    colorRelatedDeclarations === 0
      ? 100
      : (tokenizedDeclarations / colorRelatedDeclarations) * 100;

  const topHexLiterals = [...hexLiterals.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([hex, count]) => `${hex} (${count})`);

  return {
    totalDeclarations,
    colorRelatedDeclarations,
    tokenizedDeclarations,
    portalTokenDeclarations,
    baseTokenDeclarations,
    mixedTokenDeclarations,
    hardcodedColorDeclarations,
    colorMixDeclarations,
    tokenCoverage,
    topHexLiterals,
  };
}

const rows = pageFiles.map((fileName) => {
  const absolutePath = path.join(pagesDir, fileName);
  const css = fs.readFileSync(absolutePath, 'utf8');
  return {
    page: fileName.replace('.css', ''),
    ...analyzeCss(css),
  };
});

const generatedAt = new Date().toISOString();
let markdown = '';
markdown += '# Token Coverage By Page\n\n';
markdown += `Generated at: ${generatedAt}\n\n`;
markdown += '## Method\n\n';
markdown += '- Scope: `src/portal/styles/pages/*.css`\n';
markdown += '- `Color-related declarations`: declarations that use `var(--portal-*)`, `var(--color-*)`, `color-mix(...)`, `transparent/currentColor`, or hardcoded color literals/functions.\n';
markdown += '- `Token coverage`: `tokenized declarations / color-related declarations`.\n';
markdown += '- `Hardcoded`: declarations with `#hex`, `rgb(a)` or `hsl(a)`.\n\n';
markdown += '## Summary Table\n\n';
markdown += '| Page | Color-related | Tokenized | Coverage | Portal token refs | Base token refs | Mixed refs | Hardcoded | color-mix |\n';
markdown += '| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n';

for (const row of rows) {
  markdown += `| ${row.page} | ${row.colorRelatedDeclarations} | ${row.tokenizedDeclarations} | ${row.tokenCoverage.toFixed(1)}% | ${row.portalTokenDeclarations} | ${row.baseTokenDeclarations} | ${row.mixedTokenDeclarations} | ${row.hardcodedColorDeclarations} | ${row.colorMixDeclarations} |\n`;
}

markdown += '\n## Hardcoded Hex (Top 5 Per Page)\n\n';
for (const row of rows) {
  const list = row.topHexLiterals.length > 0 ? row.topHexLiterals.join(', ') : '-';
  markdown += `- **${row.page}**: ${list}\n`;
}

fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(reportFile, markdown, 'utf8');
console.log(`Report written to: ${path.relative(rootDir, reportFile)}`);
