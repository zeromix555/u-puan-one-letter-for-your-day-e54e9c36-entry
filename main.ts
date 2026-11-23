// One Letter for Your Day — make.fun entry.
// Writes exactly one letter to /output/entry.txt.
// The letter is D: D for "doomscrolled till sunrise" — a vivid, funny,
// true picture of a day spent scrolling until the sun came up.
import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "D";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
