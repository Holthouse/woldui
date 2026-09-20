---
'@woldui/react': patch
---

Toasts are now tinted by type: success, info, warning and error each take their tone's surface, border and text, instead of every toast sharing the neutral popover colour. Pass `richColors={false}` to `Toaster` for the old behaviour.
