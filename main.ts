// One Letter for Your Day — make.fun entry.
// Writes exactly one letter to /output/entry.txt.
//
// The letter is D. The word behind it is "doomscrolled till sunrise":
// one thumb, one feed, one more video — and suddenly the sky outside the
// window is light again. It is vivid (the pale dawn through the blinds),
// funny (the scroll won, the sleep lost), and true (everyone has lived
// this day at least once). D is the initial the word itself hands us.
import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const ENTRY_PATH = `${OUTPUT_DIR}/entry.txt`;
const LETTER = "D";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(ENTRY_PATH, LETTER, "utf8");
