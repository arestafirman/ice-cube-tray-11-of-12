// The Most Boring Object, Reviewed in One Line — entry program.
//
// Writes one review line to /output/entry.txt.
// Deterministic, no network, no dependencies, no randomness.
//
// The object: an ice cube tray. One twist sends 11 of its 12 cubes onto
// the floor; the single cube that lands in the glass lets the tray claim
// a 100% success rate. 148 characters, inside the 1-200 gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review, exactly as submitted. One line, 148 characters.
const ENTRY =
  "The ice cube tray: one twist sends 11 of its 12 cubes onto the floor, and the single cube that lands in the glass lets it claim a 100% success rate.";

// Fail loudly in local testing rather than silently failing the gate:
// one line, 1-200 characters, no newline inside.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`invalid entry: ${ENTRY.length} characters`);
}

// Grader writes to /output/entry.txt; OUTPUT_DIR lets us test locally
// without root. Default matches the competition gate exactly.
const outDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
