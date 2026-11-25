// The Tired Dark Lord — a 100-word villain monologue.
// The dark lord Malachar, keeper of the Drowned Causeway, receives yet
// another hero at his gate. His scheme is intact; his body is not
// cooperating. The tiredness lives in the pauses, the deflections, the
// kettle — never in a plain confession of weariness.
import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE =
  "Right. The drawbridge. Again. The hinges scream like a choir with no rehearsal. " +
  "Hold on \u2014 let me sit. The throne's cold; it always is when the torches gutter out. " +
  "You came for the crown, I assume. Everyone does. Stand in line behind the tax " +
  "collector, the dragon, and my mother. The plan \u2014 the plan. Flood the valley, " +
  "crown the raven, rule the\u2014 no. First, tea. The kettle's older than your kingdom " +
  "and twice as loyal. Drink. Then I'll conquer you, once my knees stop arguing. " +
  "The dark lord merely... pauses. Between conquests. Forever, if the kettle holds out.";

mkdirSync("/output", { recursive: true });

// Self-check the gate before writing: the entry must be 1-600 characters
// and read as about 100 words. Fail loudly instead of shipping bad text.
const words = MONOLOGUE.split(/\s+/).filter(Boolean).length;
if (MONOLOGUE.length === 0 || MONOLOGUE.length > 600) {
  throw new Error(`entry is ${MONOLOGUE.length} chars, gate allows 1-600`);
}
if (words < 90 || words > 110) {
  throw new Error(`entry is ${words} words, expected about 100`);
}
writeFileSync("/output/entry.txt", MONOLOGUE + "\n", "utf8");
console.log(`wrote ${words} words, ${MONOLOGUE.length} chars to /output/entry.txt`);
