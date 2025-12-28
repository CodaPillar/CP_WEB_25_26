# Regex Level 1 – Cheat Sheet (JS-flavored)

> All examples assume **JavaScript** regex, used like:  
> `const re = /pattern/; re.test("text");`

---

## 1. Character types

| Pattern | Meaning (short)                 | Example ✅           | Example ❌    |
| ------: | ------------------------------- | ------------------- | ------------ |
|     `.` | Any one character               | `"A"`               | `""`, `"AB"` |
|    `\d` | Digit 0–9                       | `"5"`               | `"a"`        |
|    `\w` | “Word” char: A–Z, a–z, 0–9, `_` | `"A"`, `"7"`, `"_"` | `"%"`, `" "` |
|    `\s` | Whitespace (space, tab…)        | `" "`               | `"A"`        |

---

## 2. Character sets

|    Pattern | Meaning (short)                 | Example ✅    | Example ❌    |
| ---------: | ------------------------------- | ------------ | ------------ |
|  `[aeiou]` | One char, must be **a/e/i/o/u** | `"a"`        | `"b"`        |
| `[^aeiou]` | One char, **not** a/e/i/o/u     | `"b"`        | `"a"`        |
|    `[A-Z]` | Capital letter A–Z              | `"B"`        | `"b"`, `"9"` |
| `[A-Za-z]` | Any letter (upper or lower)     | `"B"`, `"b"` | `"9"`        |

---

## 3. Anchors (position)

| Pattern | Meaning (short) | Example ✅                  | Example ❌          |
| ------: | --------------- | -------------------------- | ------------------ |
|     `^` | Start of string | `^A` matches `"Ana"`       | in `"BA"`, `^A` no |
|     `$` | End of string   | `end$` matches `"the end"` | `"ending"`         |

Anchors are **not characters**, they are **positions**.

---

## 4. Quantifiers

|  Pattern | Meaning (short)                  | Example ✅                 | Example ❌        |
| -------: | -------------------------------- | ------------------------- | ---------------- |
|     `a*` | 0 or more `a`                    | `""`, `"a"`, `"aaa"`      | `"b"`            |
|     `a+` | 1 or more `a`                    | `"a"`, `"aaa"`            | `""`, `"b"`      |
|     `a?` | 0 or 1 `a`                       | `""`, `"a"`               | `"aa"`           |
|   `a{3}` | exactly 3 `a`                    | `"aaa"`                   | `"aa"`, `"aaaa"` |
| `a{2,4}` | between 2 and 4 `a` (2, 3, or 4) | `"aa"`, `"aaa"`, `"aaaa"` | `"a"`, `"aaaaa"` |

Combine with other tokens, e.g. `\d+`, `[A-Za-z]{3}`, `-?\d{2}`.

---

## 5. Groups and OR

|       Pattern | Meaning (short)                                | Example ✅        | Example ❌  |
| ------------: | ---------------------------------------------- | ---------------- | ---------- |
|       `(abc)` | Group “abc”                                    | `"abc"`          | `"ab"`     |
|       `(a|b)` | Either `"a"` or `"b"`                          | `"a"`, `"b"`     | `"c"`      |
| `^(cat|dog)$` | Whole string is exactly `"cat"` **or** `"dog"` | `"cat"`, `"dog"` | `"hotdog"` |

---

## 6. Typical “full string” pattern

Use `^` and `$` to force **the entire string** to match:

- 3 digits only: `^\d{3}$`
- 5 digits (postal code): `^\d{5}$`
- Letters + 2 digits: `^[A-Za-z]+\d{2}$`
- Year 1900–2099: `^(19|20)\d{2}$`

---

## 7. JS usage patterns

```js
// A) Check format
const re = /^\d{5}$/;
re.test("08912");   // true
re.test("0891A");   // false

// B) Find match
"room 123".match(/\d+/);    // ["123"]

// C) Replace matches
"abc123def".replace(/\d+/g, " ");  // "abc def"
```

---

## 3️⃣ PLA-style Typora drills (no answers, JS-ready)

Here’s a first **drill pack** you can drop into Typora as `PLA_Regex_Level1_Drills.md`.  
You can later add anchors like `[⬅ back to index](#top)` the way you usually do.

# PLA – Regex Level 1 Drills

> DevTools / TriWise-friendly.  
> All patterns are **JavaScript regex**.

---

## Block A – Translate description → regex

Copy each block into a `.js` file or TriWise console and complete the `TODO` lines.

```js
// A1) Exactly 3 digits, nothing else
// Examples: "123" ✅, "12" ❌, "1234" ❌
const reA1 = /TODO/;

// A2) A lowercase vowel (a, e, i, o, u)
// Examples: "a" ✅, "e" ✅, "x" ❌, "A" ❌
const reA2 = /TODO/;

// A3) A word that starts with a capital letter and then 2–4 lowercase letters
// Examples: "Ana" ✅, "Luis" ✅, "A" ❌, "anA" ❌
const reA3 = /TODO/;

// A4) A positive integer (one or more digits, no sign)
// Examples: "0", "5", "123" ✅, "-5", "5.0", "a5" ❌
const reA4 = /TODO/;

// A5) A year between 1900 and 2099 (simple pattern, no numeric logic)
// Examples: "1999", "2000" ✅, "1899", "2100", "99" ❌
const reA5 = /TODO/;