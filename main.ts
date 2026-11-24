// main.ts — One Word for Your Wi-Fi.
// Writes exactly one word to /output/entry.txt: the funniest and most
// accurate description of my Wi-Fi. Runs on Node 22+, standard library
// only; no network, no dependencies.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The entry: one word, eleven characters. Full bars, "Connected", nothing
// loads — the router insists everything is fine while the call freezes,
// and somehow you end up apologising to the router. Gaslighting.
const WORD = 'Gaslighting';

// The sealed gate, mirrored exactly: /output/entry.txt must be UTF-8 text
// of 1 to 20 characters, not only white space, and the entry is one word.
function checkGate(word) {
  if (typeof word !== 'string' || word.length < 1 || word.length > 20) {
    throw new Error(`gate: word must be 1-20 characters, got ${word.length}`);
  }
  if (word.trim().length === 0) {
    throw new Error('gate: word must not be only white space');
  }
  if (/\s/.test(word)) {
    throw new Error('gate: entry must be exactly one word (no white space)');
  }
}

checkGate(WORD);

mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.txt');
writeFileSync(target, WORD, 'utf8');

// Read the bytes back: the grader judges exactly what is on disk, so the
// program fails loudly here rather than handing in a word it did not write.
if (readFileSync(target, 'utf8') !== WORD) {
  throw new Error('gate: entry.txt on disk does not match the word');
}
