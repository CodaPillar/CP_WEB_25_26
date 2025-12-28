<a> tags cannot have alt attributes. The alt attribute is only for images (<img alt="">).

But you can provide descriptions or explanations on hover. Here are the correct, standard ways:

✅ 1. The simplest: title attribute

Add a title="" to your <a> tag. On hover, the browser shows a tooltip.

<a href="https://example.com" title="Visit the Example website">
  Go to Example
</a>

✔ Works everywhere
✔ No CSS or JS needed
✖ Tooltip styling cannot be changed
✖ Screen readers treat it inconsistently

✅ 2. Accessible description using aria-label

If your link contains an icon or an image with no text, ARIA labels help accessibility:

<a href="https://example.com" aria-label="Visit the Example website">
  <img src="icon.png" alt="">
</a>

✔ Best for accessibility
✖ Does not show anything visually on hover
→ You combine ARIA for accessibility + CSS/JS for visual hover text.
