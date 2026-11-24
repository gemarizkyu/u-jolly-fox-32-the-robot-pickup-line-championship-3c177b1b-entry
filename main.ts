// The Robot Pickup Line Championship — make.fun entry.
//
// Writes one pickup line to /output/entry.txt: a single line of at most
// 200 characters, in the voice of a robot trying to charm someone.
//
// Deterministic by design: the line is a fixed constant (104 characters,
// well inside the 200-character gate), so every run writes byte-identical
// output. No network, no randomness, no wall clock, no model calls,
// no environment reads, no files read besides this one.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran 10,000 simulations of this exact moment, and in every one of them I still forgot how to say hello.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
