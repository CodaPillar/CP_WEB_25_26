Perfect timing — you’re asking for what every **good curriculum dev** would: a **Typora Protocol for Question Design**.
 Here’s a canonical, easy-to-follow reference you can keep in your documentation vault.

Here’s the **ultra-compact version** of the Typora Protocol — the one you can paste on your dashboard before you go look at Vincent 🧸✨

------

## 🧭 Typora Protocol — Question Bank (Quick Reference)

### 🟢 TRI — Multiple Choice

```
{"id":"T1","type":"tri","question":"What is typeof(5)?","code":"typeof(5);","options":["\"string\"","\"number\""],"answer":"\"number\"","hint":"typeof returns the type name as a string.","explain":"Numbers yield \"number\"."}
```

- Uses `question` (not `prompt`)
- 2–4 `options`, one `answer`
- `code` optional (omit if empty)

------

### 🟠 SHORT — Short Answer

```
{"id":"S1","type":"short","question":"Result of 10 / 2?","answer":"5","explain":"Division yields 5."}
```

- `question` required
- `answer` is string, strict match
- `code` optional

------

### 🔵 CODE — Validator

```
{"id":"C1","type":"code","prompt":"Write an expression that equals 8.","scaffold":"4*2","validator":{"mode":"expr","tests":["result===8"]},"hint":"Simple multiplication.","explain":"4*2 evaluates to 8."}
```

- Uses `prompt` (not `question`)
- `mode`: `"expr"`, `"fn"`, or `"prog"`
- Attach to `exports` in `"prog"` mode

------

### ⚙️ General

- One JSON object per line (`.jsonl`)
- `code` empty ⇒ no code box
- Tri/Short can coexist in same file
- Code needs its own `validator` block
- `hint` and `explain` optional but recommended

------

That’s all you need to author new packs safely.
 Now go enjoy Vincent’s images — he’s probably studying under warm light with a cookie ☕🧸

------

## 🧭 Typora Protocol — Question Bank Authoring (Tri / Short / Code)

> **Goal:** to standardize how each question type is written, exported, and read by the `render()` logic
>  *(so both you and I always remember the rules months from now).*

------

### ### Ⅰ. Common Schema (applies to all)

Each question in your `.jsonl` file is a single JSON object per line:

```
{
  "id": "UNIQUE_ID",
  "type": "tri | short | code",
  "tier": 2,
  "lang": "en",
  "category": "Main Topic",
  "subcat": "Subtopic",
  "question": "Visible question text (shown for tri/short)",
  "prompt": "Optional: used only for code-type items",
  "code": "Optional: starter code snippet or example",
  "setup": "Optional: pre-execution setup context",
  "answer": "The correct value for tri/short",
  "options": ["optional", "for", "tri", "only"],
  "hint": "Short hint (hover or feedback)",
  "explain": "Pedagogic feedback shown after validation",
  "validator": {
    "mode": "expr | fn | prog",
    "tests": ["JS expressions returning boolean"],
    "runtime": { "vars": { "a": 2 } }
  }
}
```

------

## Ⅱ. Type-Specific Rules

### 🟢 A. `type: "tri"` — Multiple Choice (Classification)

**Purpose:** Conceptual classification or prediction of output type/value.

| Key               | Required   | Description                                          |
| ----------------- | ---------- | ---------------------------------------------------- |
| `question`        | ✅          | Main enunciate shown in the UI                       |
| `options`         | ✅          | Array of possible answers (2–4 typical)              |
| `answer`          | ✅          | Must match one of the options                        |
| `code`            | ⚙️ optional | Example code shown (fence appears only if not empty) |
| `hint`, `explain` | optional   | Appear after correction                              |

**Example:**

```
{
  "id": "T1",
  "type": "tri",
  "category": "Types & typeof",
  "subcat": "strings",
  "question": "What does typeof return for ('2' + 2)?",
  "code": "typeof ('2' + 2);",
  "options": ["\"string\"", "\"number\"", "\"undefined\""],
  "answer": "\"string\"",
  "hint": "String + number → string concatenation.",
  "explain": "The `+` operator concatenates when a string is present."
}
```

🧩 **Notes:**

- `prompt` is ignored.
- Empty `code` ⇒ no code block rendered.
- `LABELS` mapping is no longer required; any string options work.

------

### 🟠 B. `type: "short"` — Short Answer (Text / Output)

**Purpose:** The student types an output or single value.

| Key               | Required   | Description                         |
| ----------------- | ---------- | ----------------------------------- |
| `question`        | ✅          | Enunciate (always shown)            |
| `answer`          | ✅          | Expected string (compared strictly) |
| `code`            | ⚙️ optional | Optional supporting snippet         |
| `setup`           | ⚙️ optional | Pre-context if needed               |
| `hint`, `explain` | optional   | Feedback shown after validation     |

**Example:**

```
{
  "id": "S1",
  "type": "short",
  "category": "Arithmetic",
  "subcat": "operators",
  "question": "What value does `5 % 2` return?",
  "code": "5 % 2;",
  "answer": "1",
  "hint": "Think remainder after integer division.",
  "explain": "The modulo operator returns the remainder of division (1)."
}
```

🧩 **Notes:**

- `prompt` is ignored.
- User input compared to `.answer` via strict trimmed string equality.
- Empty `code` ⇒ no code box.

------

### 🔵 C. `type: "code"` — Validator Questions

**Purpose:** The learner writes JS that is tested by the engine.

| Key                      | Required | Description                            |
| ------------------------ | -------- | -------------------------------------- |
| `prompt`                 | ✅        | The enunciate (visible above textarea) |
| `validator.mode`         | ✅        | `"expr"`, `"fn"`, or `"prog"`          |
| `validator.tests`        | ✅        | Array of boolean test strings          |
| `validator.runtime.vars` | optional | Environment vars used in tests         |
| `scaffold`               | optional | Pre-filled code in textarea            |
| `setup`                  | optional | Pre-execution context snippet          |

**Modes Overview:**

| Mode     | Expectation                                     | Example                 |
| -------- | ----------------------------------------------- | ----------------------- |
| `"expr"` | A single JS expression returning a value        | `"result === 10"`       |
| `"fn"`   | Code must evaluate to a function `fn`           | `"fn(5)===10"`          |
| `"prog"` | Multi-line program; exports or `result` checked | `"exports.calc(2)===4"` |

**Example (expr):**

```
{
  "id": "C1",
  "type": "code",
  "prompt": "Write an expression that equals 10.",
  "scaffold": "5 * 2",
  "validator": { "mode": "expr", "tests": ["result === 10"] },
  "hint": "Use arithmetic precedence.",
  "explain": "Your expression must evaluate strictly to number 10."
}
```

**Example (prog):**

```
{
  "id": "C2",
  "type": "code",
  "prompt": "Define a function add(a,b) returning their sum and export it.",
  "scaffold": "function add(a,b){ return a + b; }\nexports.add = add;",
  "validator": {
    "mode": "prog",
    "tests": [
      "typeof exports.add==='function'",
      "exports.add(2,3)===5"
    ]
  },
  "hint": "Attach to `exports` for tests to see it.",
  "explain": "In prog mode anything attached to `exports` is visible to tests."
}
```

🧩 **Notes:**

- `prompt` replaces `question` (UI shows only prompt).
- `mode` drives validator behavior and textarea rows.
- `code` (read-only snippet) still appears if included (e.g., reference code).

------

## Ⅲ. Practical Authoring Tips

✅ Keep **question or prompt** always non-empty.
 ✅ Omit `"code": ""` entirely to avoid empty divs.
 ✅ Use **escaped quotes** (`\"string\"`) in options for typeof questions.
 ✅ Place one JSON object per line (`.jsonl` not `.json`).
 ✅ Validate with a JSONL linter before loading.
 ✅ Tri / Short can mix freely in the same file.
 ✅ Code (prog/fn/expr) items can share a file or live separately if testing modes conflict.

------

## Ⅳ. Quick Template Bank (for Copy-Paste in Typora)

```
### 🧩 TRI Example
```json
{"id":"T1","type":"tri","question":"What is typeof(5)?","code":"typeof(5);","options":["\"string\"","\"number\""],"answer":"\"number\"","hint":"typeof returns the type name as a string.","explain":"Numbers yield \"number\"."}
```

### ✏️ SHORT Example

```
{"id":"S1","type":"short","question":"Result of 10 / 2?","answer":"5","explain":"Division yields 5."}
```

### 💻 CODE Example (expr)

```
{"id":"C1","type":"code","prompt":"Write an expression that evaluates to 8.","scaffold":"4*2","validator":{"mode":"expr","tests":["result===8"]},"hint":"Simple multiplication.","explain":"`4*2` evaluates to 8."}
---

Would you like me to add a small **“meta badge strip”** (like 🟢 TRI | 🟠 SHORT | 🔵 CODE) to include at the top of each question block for your Typora styling system? It helps visually separate them when scrolling through the markdown.
```

