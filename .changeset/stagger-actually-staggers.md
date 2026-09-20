---
'@woldui/react': patch
---

`Stagger` now staggers. Its children animated in at the same moment, because `staggerChildren` only drives a child that declares no `animate` of its own and every `Reveal` declares one. Each `Reveal` inside a `Stagger` now delays itself by its position instead.
