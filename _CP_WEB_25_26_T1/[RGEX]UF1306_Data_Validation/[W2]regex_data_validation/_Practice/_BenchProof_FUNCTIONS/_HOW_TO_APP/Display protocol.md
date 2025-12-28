<p id='created-timestamp'>Created: 2025-10-16 20:22:42</p>
# Display protocol

For each item **type**, render fields in this order (omit if empty):

**Common header (all types)**

1. `#N` badge (you already have)
2. **Meta line**: `Tipo: ...`
3. **Stem** (exactly one):
   - tri/short → `question`
   - code → prefer `prompt`, else fallback to `question`

**Body**

- `setup` (if present) — monospace box
- Main interaction area (chips / input / code editor)
- Code preview (`code`) only for tri/short items (since code is the thing we analyze), not for `code` items (where the user types the code)

**Footer**

- Feedback block (`.fb`) when corrected

# Minimal helpers (prevents duplicates)

```js
function getStem(item){
  if (item.type === 'code') return item.prompt || item.question || '';
  return item.question || '';
}

function makeStemEl(item){
  const stem = getStem(item);
  if (!stem) return null;
  const el = document.createElement('div');
  el.className = 'question';
  el.textContent = stem;
  return el;
}
```

Use in CSS (you already added):

```js
.question { font-weight:600; margin:4px 0 6px; color: var(--text); }
```

# Render integration (where to put what)

### tri

```js
const stemEl = makeStemEl(item);
card.append(head, meta);
if (stemEl) card.append(stemEl);
if (item.setup) card.append(setup);
card.append(codeBlock, row);   // row has chips + hint
```

### short

```js
const stemEl = makeStemEl(item);
card.append(head, meta);
if (stemEl) card.append(stemEl);
if (item.setup) card.append(setup);
card.append(codeBlock, row);   // row has input + hint
```

### code (expr/fn/prog)

```js
const stemEl = makeStemEl(item);
card.append(head, meta);
if (stemEl) card.append(stemEl);
if (item.setup) card.append(setup);
card.append(row);              // row has textarea + hint
// (Do NOT append your preauthored `codeBlock` here—user writes code)
```

# Markdown export (single stem)

Patch your exporters so they print **one** stem:

```js
function mdStem(item){
  const s = getStem(item);
  return s ? `**Question:** ${s}

` : '';
}

// in itemToMarkdown():
// TRI
return `### ${item.id} · Classification (tri)

` +
       mdStem(item) +
       // ...

// SHORT
return `### ${item.id} · Short answer

` +
       mdStem(item) +
       // ...

// CODE
return `### ${item.id} · Validator (code)

` +
       mdStem(item) +
       `**Your answer (code):**

\`\`\`js
${src}
\`\`\`

` +
       // ...
```

# Quick checklist (so we don’t regress)

-  `getStem()` centralizes the “question vs prompt” choice.
-  `makeStemEl()` renders stem exactly once for **all** types.
-  `code` items: **do not** show the preauthored `codeBlock`; only show the user editor.
-  MD export uses `mdStem(item)` so Typora shows the same stem consistently.
-  Tooltips & chips unchanged.

This keeps the UI coherent and avoids the double-text issue you spotted. If you want, we can also add per-type subtitles to the meta line (e.g., “modo: expr | fn | prog” for code) without touching the stem logic.
