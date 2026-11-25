import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "Grandma's recipes have no measurements, only 'a little of this' and 'until it smells right.' Her soup tastes like home anyway, and nobody dares write it down in case the magic checks the spelling.";

// A pinch more salt would change the story, so this text stays exactly as written.

// Output dir is absolute: taken from the environment when the grader sets
// it, otherwise the fixed absolute path /output. Never relative to cwd,
// never inside the repo.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT, "utf8");
} catch (err) {
  console.error("failed to write entry.txt:", err);
  process.exit(1);
}
