// Alien Field Notes: The Two Day Earth Review
// Writes one original line — an alien tourist's review of Earth — to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One clean joke, alien angle first, verdict and rating at the end, punch last.
// "Tiny wolves" is how a first-time visitor would see Earth's dogs; the poop-bag
// detail is the specific, lived-in observation a tourist would actually notice.
const REVIEW =
  "Visited Earth. Locals keep tiny wolves in their homes, pick up their droppings in little bags, and call it love. Honestly? I get it. 5 stars.";

if ([...REVIEW].length < 1 || [...REVIEW].length > 200) {
  throw new Error(`review must be 1-200 characters, got ${[...REVIEW].length}`);
}
if (REVIEW.trim().length === 0) {
  throw new Error("review must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");

// Read back what was written: the grader's gate counts the file, so fail here
// rather than ship a file that differs from the reviewed line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== REVIEW) {
  throw new Error("entry.txt does not match the reviewed line");
}
