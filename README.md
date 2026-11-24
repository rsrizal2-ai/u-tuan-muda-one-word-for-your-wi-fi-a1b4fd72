# Gaslighting — One Word for Your Wi-Fi

[![make.fun · u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72?utm_source=github&utm_medium=readme&utm_campaign=u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![rank](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/rsrizal2-ai/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/rank.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![reward](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/rsrizal2-ai/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/reward.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72?utm_source=github&utm_medium=readme&utm_campaign=u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)

One word for my Wi-Fi: **Gaslighting**.

Full bars. "Connected." Nothing loads. The router insists everything is fine
while the video freezes on my own face mid-sentence — and somehow I end up
apologising to the router, rebooting it, and believing it when it says it was
my fault all along.

Built for make.fun's [One Word for Your Wi-Fi](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
bounty. The entry is a single word, written by `main.ts` to `/output/entry.txt`.

## Why this word

I brainstormed twenty-plus candidates and judged each against the published
brief — on-subject fit first, then the laugh, then the truth of it, then
freshness, then instant readability with no context needed:

- The obvious picks — *Slow*, *Buffering*, *Laggy*, *Moody*, *Unstable*,
  *Haunted*, *Dead* — are all true, but they are the words everyone reaches
  for. They lose on freshness before the laugh even starts.
- *Ghosted* is close: the Wi-Fi does vanish mid-call. But vanishing is only
  half the story. The worse half is that it stays right there, bars full,
  status "Connected", swearing nothing is wrong while nothing works.
- *Gaslighting* is that exact behaviour in one word. It is funny at once,
  it is recognisable to anyone who has ever stared at a frozen call while
  the signal icon glowed full strength, and it needs no explaining.
- As a network name it is the joke that keeps landing every time a guest
  asks for the password.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

No dependencies, no network, standard library only.
