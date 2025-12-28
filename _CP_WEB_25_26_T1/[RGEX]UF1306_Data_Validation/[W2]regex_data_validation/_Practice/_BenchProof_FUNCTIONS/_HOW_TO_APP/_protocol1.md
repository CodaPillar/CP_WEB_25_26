Awesome—let’s set you up so you can author **solid JSONL banks** for your *tri · short · code (expr/fn/prog)* trainer, specifically for **selectors & events**. Here’s the practical “authoring protocol” + ready-to-paste templates and examples.

------

# 0) JSONL ground rules

- **One JSON object per line**. No trailing commas. Always double quotes.
- Put the file in your project root next to the app (or wherever you’re loading from).
- You can mix types in one file (tri/short/code), but see *code* notes below.

------

# 1) Field reference (all types)

| field      | required | notes                                                     |
| ---------- | -------- | --------------------------------------------------------- |
| `id`       | ✅        | Unique string across the file (e.g. `"SEL-01"`).          |
| `type`     | ✅        | `"tri"`, `"short"`, or `"code"`.                          |
| `tier`     | ✅        | Difficulty (number), e.g. `2`.                            |
| `lang`     | ✅        | `"en"` / `"es"`. Controls your own wording.               |
| `category` | ✅        | Big bucket, e.g. `"Selectors & Events"`.                  |
| `subcat`   | ✅        | Finer bucket, e.g. `"querySelector"`, `"delegation"`.     |
| `question` | 🔹        | For **tri/short**. Shown above the snippet.               |
| `prompt`   | 🔹        | For **code**. Shown above the editor.                     |
| `setup`    | 🟨        | Optional context (shown in a separate “Setup” box).       |
| `code`     | 🟨        | Optional snippet (for **tri/short**). You can leave `""`. |
| `hint`     | 🟨        | Short tip; shown as hover pill.                           |
| `explain`  | 🟨        | Cambridge-tone explanation shown after correction.        |

> 🔹 Use **either** `question` (tri/short) **or** `prompt` (code). Don’t put both for the same item.

------

# 2) Type-specific fields

## 2.1) TRI (multiple choice)

- Add `options` (array of strings).
- Add `answer` (must match **exactly** one of the options).
- You can use any labels you like (e.g. `"string"`, `"number"`, `"undefined"`). The app no longer depends on `correct/variable/incorrect` for tri chips.

**Template (one line per item):**

```json
{"id":"...","type":"tri","tier":2,"lang":"en","category":"Selectors & Events","subcat":"...","question":"...","code":"","options":["opt1","opt2","opt3"],"answer":"opt1","hint":"...","explain":"..."}
```

## 2.2) SHORT (free text answer)

- Learner types the expected value. Your `answer` is compared as strings (trimmed).
- If you include `code`, keep the style “What does `console.log(...)` show?”—but it’s optional.

**Template:**

```json
{"id":"...","type":"short","tier":2,"lang":"en","category":"Selectors & Events","subcat":"...","question":"What does console.log(...) print?","code":"console.log('click' in window);","answer":"true","hint":"...","explain":"..."}
```

## 2.3) CODE (validator)

- Add a `validator` object.
- `validator.mode` must be one of:
  - `"expr"` → The learner writes **a single expression**. Tests get `result` + `env`.
  - `"fn"` → The learner writes **an expression that evaluates to a function**. Tests get `fn` + `env`.
  - `"prog"` → The learner writes **a mini-program**. We run it; tests get `exports`, `result`, `env`.
- `validator.tests` is an array of **string expressions** that must evaluate truthy.
- Optional `validator.runtime.vars` provides `env` variables available to tests.

> ⚠️ The sandbox **blocks DOM** (`window`, `document`, `fetch`, etc.). So for selectors/events topics, implement **pure helpers** (e.g., detect selector types from strings, merge event options) rather than touching the DOM.

**Templates:**

```json
{"id":"...","type":"code","tier":2,"lang":"en","category":"Selectors & Events","subcat":"...","prompt":"Write a single expression that ...","scaffold":"/* one expression */ 'click'","validator":{"mode":"expr","tests":["result === 'click'"]},"hint":"...","explain":"..."}
{"id":"...","type":"code","tier":2,"lang":"en","category":"Selectors & Events","subcat":"...","prompt":"Return a function that ...","scaffold":"(type)=>type==='click'","validator":{"mode":"fn","tests":["typeof fn==='function'","fn('click')===true","fn('keydown')===false"]},"hint":"Return the function, don’t call it.","explain":"In fn mode we call your function with tests."}
{"id":"...","type":"code","tier":2,"lang":"en","category":"Selectors & Events","subcat":"...","prompt":"Export a helper on `exports` named ...","scaffold":"function isIdSelector(s){ return /^#[A-Za-z_][\\w-]*$/.test(s); }\nexports.isIdSelector = isIdSelector;","validator":{"mode":"prog","tests":["typeof exports.isIdSelector==='function'","exports.isIdSelector('#app')===true","exports.isIdSelector('.btn')===false"]},"hint":"Attach to `exports` so tests can see it.","explain":"In prog mode, anything on exports is visible to tests."}
```

------

# 3) Ready-to-paste examples (Selectors & Events)

## 3.1) TRI (5 items)

```json
{"id":"SEL-01","type":"tri","tier":2,"lang":"en","category":"Selectors & Events","subcat":"querySelector","question":"What’s the most direct and fast way to get an element by id?","code":"","options":["document.getElementById('amount')","document.querySelector('#amount')","document.querySelectorAll('#amount')[0]"],"answer":"document.getElementById('amount')","hint":"Optimized for ids.","explain":"`getElementById` is the most specialized for id lookups."}
{"id":"SEL-02","type":"tri","tier":2,"lang":"en","category":"Selectors & Events","subcat":"querySelector","question":"Which selector matches a button with classes `btn` and `primary`?","code":"","options":["'.btn.primary'","'.btn .primary'","'button#primary.btn'"],"answer":".btn.primary","hint":"No space for multiple classes.","explain":"`.btn.primary` targets one element with both classes."}
{"id":"EVT-01","type":"tri","tier":2,"lang":"en","category":"Selectors & Events","subcat":"addEventListener","question":"Which is the recommended modern way to register a click handler?","code":"","options":["element.onclick = handler","element.addEventListener('click', handler)","element.addEventListener = handler"],"answer":"element.addEventListener('click', handler)","hint":"Supports options and multiple listeners.","explain":"Use `addEventListener` for flexibility and proper removal."}
{"id":"EVT-02","type":"tri","tier":2,"lang":"en","category":"Selectors & Events","subcat":"event-options","question":"Which option makes the listener run only once?","code":"","options":["{ passive: true }","{ capture: true }","{ once: true }"],"answer":"{ once: true }","hint":"One-time fire.","explain":"`once:true` auto removes the listener after first call."}
{"id":"EVT-03","type":"tri","tier":2,"lang":"en","category":"Selectors & Events","subcat":"delegation","question":"Event delegation is best described as:","code":"","options":["Attaching a single listener high up to handle lower targets","Attaching a listener to every child element","Using inline HTML event attributes"],"answer":"Attaching a single listener high up to handle lower targets","hint":"Bubbles to a shared ancestor.","explain":"Delegation listens on a parent and inspects `event.target`."}
```

## 3.2) SHORT (3 items)

```json
{"id":"EVT-04","type":"short","tier":2,"lang":"en","category":"Selectors & Events","subcat":"names","question":"What does console.log print?","code":"console.log('click' === 'click');","answer":"true","hint":"String comparison.","explain":"Two identical string literals are equal."}
{"id":"SEL-03","type":"short","tier":2,"lang":"en","category":"Selectors & Events","subcat":"css-syntax","question":"What does console.log print?","code":"const s = '.card.active'; console.log(s.includes(' '));","answer":"false","hint":"No space = single element, multiple classes.","explain":"There’s no space in '.card.active', so `includes(' ')` is false."}
{"id":"EVT-05","type":"short","tier":2,"lang":"en","category":"Selectors & Events","subcat":"options","question":"What does console.log print?","code":"const opts = { passive:true, once:false }; console.log(Boolean(opts.passive && !opts.once));","answer":"true","hint":"Passive & not once → true.","explain":"`true && !false` → true."}
```

## 3.3) CODE · expr (2)

```json
{"id":"XPR-01","type":"code","tier":2,"lang":"en","category":"Selectors & Events","subcat":"selector-type","prompt":"Write a single expression that returns true if the string starts with '#'.","scaffold":"'#id'.startsWith('#')","validator":{"mode":"expr","tests":["result === true","typeof result === 'boolean'"]},"hint":"Use a string method.","explain":"`startsWith('#')` is a simple way to test for id selectors."}
{"id":"XPR-02","type":"code","tier":2,"lang":"en","category":"Selectors & Events","subcat":"event-name-check","prompt":"Write a single expression that is exactly the string 'click'.","scaffold":"'click'","validator":{"mode":"expr","tests":["result === 'click'"]},"hint":"Just the literal string.","explain":"A literal is valid in expr mode."}
```

## 3.4) CODE · fn (2)

```json
{"id":"FN-01","type":"code","tier":2,"lang":"en","category":"Selectors & Events","subcat":"is-class-selector","prompt":"Return a function `fn(s)` that returns true if `s` looks like a class selector (starts with '.').","scaffold":"(s)=> typeof s==='string' && s.startsWith('.')","validator":{"mode":"fn","tests":["typeof fn==='function'","fn('.btn')===true","fn('#id')===false","fn('button')===false"]},"hint":"Return the function itself.","explain":"In fn mode, your code must evaluate to a function value."}
{"id":"FN-02","type":"code","tier":2,"lang":"en","category":"Selectors & Events","subcat":"is-once-option","prompt":"Return a function `fn(o)` that returns true if `o` has `{ once:true }`.","scaffold":"(o)=>!!(o && o.once===true)","validator":{"mode":"fn","tests":["typeof fn==='function'","fn({once:true})===true","fn({once:false})===false","fn({})===false"]},"hint":"Check a boolean property.","explain":"Tests call your function with several objects."}
```

## 3.5) CODE · prog (2)

```json
{"id":"PRG-01","type":"code","tier":2,"lang":"en","category":"Selectors & Events","subcat":"exports","prompt":"Export `isIdSelector(s)` on `exports` that returns true if `s` starts with `#` and has at least one more character.","scaffold":"function isIdSelector(s){ return typeof s==='string' && /^#[^#]+/.test(s); }\nexports.isIdSelector = isIdSelector;","validator":{"mode":"prog","tests":["typeof exports.isIdSelector==='function'","exports.isIdSelector('#app')===true","exports.isIdSelector('#')===false","exports.isIdSelector('.btn')===false"]},"hint":"Attach to exports.","explain":"In prog mode, anything on exports is testable."}
{"id":"PRG-02","type":"code","tier":2,"lang":"en","category":"Selectors & Events","subcat":"merge-options","prompt":"Export `mergeOncePassive(a,b)` that merges two option objects and forces `{once:true, passive:true}` regardless of inputs.","scaffold":"function mergeOncePassive(a={},b={}){\n  const out = {...a, ...b, once:true, passive:true};\n  return out;\n}\nexports.mergeOncePassive = mergeOncePassive;","validator":{"mode":"prog","tests":["typeof exports.mergeOncePassive==='function'","exports.mergeOncePassive({once:false},{passive:false}).once===true","exports.mergeOncePassive({},{}) .passive===true"]},"hint":"Spread & override.","explain":"Explicitly overwrite to ensure once/passive are true."}
```

> Save each line as-is to a file like `selectors_events_pack.jsonl`. Then load it from your app’s bank selector.

------

# 4) Quick author checklist

- **tri**: `options` present; `answer` matches one `options` item exactly. `question` filled. `code` allowed to be `""`.
- **short**: `answer` is the exact string you want the learner to type (trimmed). If you include `code`, it should reflect the question (usually a `console.log(...)`).
- **code/expr**: `validator.mode: "expr"`. Tests reference `result` (and `env` if you added runtime vars).
- **code/fn**: `validator.mode: "fn"`. Tests reference `fn` (and `env`).
- **code/prog**: `validator.mode: "prog"`. Tests reference `exports` (and `result`/`env` if needed). Put your public API on `exports.*`.
- **No DOM in code**: Your sandbox blocks `window`/`document`. Keep code tasks **pure** utilities for this topic.
- **Hints/Explain**: Keep them brief but useful—these become great Typora exports.

If you want, I can also generate an 8–12 item pack following exactly these rules for your next session.