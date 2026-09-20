# @woldui/react

## 0.1.3

### Patch Changes

- 3e6d0e5: `Stagger` now staggers. Its children animated in at the same moment, because `staggerChildren` only drives a child that declares no `animate` of its own and every `Reveal` declares one. Each `Reveal` inside a `Stagger` now delays itself by its position instead.

## 0.1.2

### Patch Changes

- d9c49c9: Toasts are now tinted by type: success, info, warning and error each take their tone's surface, border and text, instead of every toast sharing the neutral popover colour. Pass `richColors={false}` to `Toaster` for the old behaviour.

## 0.1.1

### Patch Changes

- 04366cc: The README says what the theme's stylesheet costs: it carries the classes for every component, about 28 KB gzipped.
