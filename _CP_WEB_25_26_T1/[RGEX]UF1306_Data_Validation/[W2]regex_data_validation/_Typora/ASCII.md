## I. **ASCII / CHARACTER BASICS (the missing foundation)**

Regex does **not** work with meanings.
 It works with **characters** ordered in a table.

### Think Latin grammar:

- *noun* ≠ *meaning*
- *case* defines behavior

In regex:

- **character** ≠ **number**
- **position in ASCII table** defines ranges

------

## II. **CHARACTER CLASSES `[ ]` (ONE character only)**

> **A character class always matches exactly ONE character**

### Structure

```
[ ... ]
```

### What can live inside `[ ]`

| Type           | Example        | Meaning               |
| -------------- | -------------- | --------------------- |
| Literal char   | `[a]`          | the character `a`     |
| Range          | `[A-Z]`        | all chars from A to Z |
| Multiple chars | `[aeiou]`      | one vowel             |
| Mixed          | `[A-Za-z0-9_]` | alphanumeric + `_`    |
| Negation       | `[^0-9]`       | NOT a digit           |

------

### Canonical ASCII ranges (MEMORIZE)

| Purpose           | Regex          |
| ----------------- | -------------- |
| Uppercase letters | `[A-Z]`        |
| Lowercase letters | `[a-z]`        |
| All letters       | `[A-Za-z]`     |
| Digits            | `[0-9]`        |
| Word chars        | `[A-Za-z0-9_]` |

------

### 🚫 What **cannot** exist inside `[ ]`

| ❌ Invalid          | Why                           |
| ------------------ | ----------------------------- |
| `[12]` (as number) | means `1` OR `2`              |
| `[1-12]`           | no numeric logic              |
| `(ab)`             | groups don’t exist in sets    |
| `                  | `                             |
| `{}`               | quantifiers don’t live inside |

This is the **direct complement rule**:

> `[ ]` answers **“which character?”**, not **“which value?”**

------

## III. **PREDEFINED CLASSES (ASCII shortcuts)**

These are **character classes**, formally.

| Token | Equivalent     |
| ----- | -------------- |
| `\d`  | `[0-9]`        |
| `\w`  | `[A-Za-z0-9_]` |
| `\s`  | whitespace     |

### Negations (capital letters)

| Token | Meaning        |
| ----- | -------------- |
| `\D`  | NOT digit      |
| `\W`  | NOT word       |
| `\S`  | NOT whitespace |

> Lowercase = *is*
>  Uppercase = *is NOT*

------

## IV. **GROUPS `( )` (MULTI-CHARACTER LOGIC)**

> **Groups work with VALUES, not characters**

### Structure

```
( ... )
```

### What groups do

- combine characters into **units**
- allow **alternation**
- allow **numeric logic**
- allow **repetition of sequences**

------

### Examples (groups built from sets)

#### Month (01–12)

```
(0[1-9]|1[0-2])
```

#### Day (01–31)

```
(0[1-9]|[12]\d|3[01])
```

This is **syntax-as-grammar**, not memorization.

------

## V. **QUANTIFIERS (the “number” part)**

> Quantifiers answer: **how many times?**

### Canonical table

| Quantifier | Meaning         |
| ---------- | --------------- |
| `?`        | 0 or 1          |
| `*`        | 0 or more       |
| `+`        | 1 or more       |
| `{n}`      | exactly n       |
| `{n,m}`    | between n and m |
| `{n,}`     | at least n      |

------

### 🔑 THE MOST IMPORTANT RULE

> **A quantifier applies ONLY to the token immediately before it**

| Pattern   | What is counted |
| --------- | --------------- |
| `a+`      | `a`             |
| `\d{4}`   | digit           |
| `[A-Z]+`  | class           |
| `(ab){3}` | group           |
| `:?`      | colon only      |

This is the **syntactic equivalent of verb government** in Latin.

1️⃣ Is this a **character class** or a **group**?
 2️⃣ Does it match **one character** or **a value**?
 3️⃣ Is there a **quantifier**?
 4️⃣ What EXACT token does it apply to?

This is the equivalent of parsing a sentence.

## 5️⃣ The precise equivalence (this is the key insight)

You can map them **one-to-one**:

| JavaScript       | Regex                   | ASCII                 |
| ---------------- | ----------------------- | --------------------- |
| `"12"`           | `(12)`                  | `'1' '2'`             |
| `"5"`            | `\d`                    | `'5'`                 |
| `Number("12")`   | *(impossible in regex)* | *(not representable)* |
| `parseInt("12")` | *(must be simulated)*   | *(outside ASCII)*     |

Regex has **no `parseInt`**.

So it builds value-logic manually.

> **Regex treats digits the way JavaScript treats string numbers.**

Both are:

- symbols
- ordered lexicographically
- not numeric until interpreted

------

## 9️⃣ Why this matters for your future learning

Once you see this, you’ll notice it everywhere:

- SQL strings vs numbers
- JSON values vs text
- CSV parsing
- User input validation
- Parsing vs evaluation
- Compilers vs interpreters

You’ve just uncovered a **core computer science boundary**.