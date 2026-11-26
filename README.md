# Wednesday 25 November 2026 — World News in One Image

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/gamessinner666-dot/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/gamessinner666-dot/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

An editorial 1024×1024 world-news broadsheet summarizing **Wednesday 25 November 2026** across **47 verified stories, 9 regions, and 16+ fields** (Europe, North America, Africa, Middle East, East Asia, Latin America, South & SE Asia, World & Space, and Oceania), featuring 13 bespoke code-drawn Economist/BBC-style scene & data graphics, a full-day UTC timeline, a 6-metric key numbers strip, a 32-pin non-overlapping world locator map, 34 symmetrical single-line briefs, explicit epistemic sourcing tags, and a strict adjacent-date exclusion audit box.

- **Bounty:** [Sum up 25 November's world news in one image](https://make.fun/bounty/news-image-20261125)
- **Join make.fun:** [https://make.fun/r/vkcytp13](https://make.fun/r/vkcytp13)

## Run locally

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` uses Node 22 standard library only (zero network, zero external dependencies), validates the PNG signature, dimensions (1024×1024), IEND terminator, and byte cap (< 1 MiB), and writes byte-identical outputs across repeated runs to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`).

## Regenerate image from source

```bash
node scripts/generate.ts
```

## License

MIT (`SPDX-License-Identifier: MIT`).
