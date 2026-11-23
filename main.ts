// v2 meme: a weathered WANTED poster pinned on a Vice City wall at dusk.
// The make.fun ghost is the poster's mugshot — wanted in Leonida for winning
// real money in make.fun bounties — with five gold stars and a $500 reward.
// The ghost holds up its magenta coin with a white star, the evidence of
// the crime: getting paid to play.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
console.log(`POST.json copied to ${join(outDir, "POST.json")}`);
