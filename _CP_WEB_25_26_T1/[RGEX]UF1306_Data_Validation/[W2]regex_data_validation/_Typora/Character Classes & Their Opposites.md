# 🧠 MASTER TABLE — **Character Classes & Their Opposites**

> Think in **PAIRS**. Regex is built in duals.

------

## 1️⃣ **WORD characters**

| Token | Means          | Expands to      |
| ----- | -------------- | --------------- |
| `\w`  | word character | `[A-Za-z0-9_]`  |
| `\W`  | NOT word       | `[^A-Za-z0-9_]` |

### Examples

| Character | `\w` | `\W` |
| --------- | ---- | ---- |
| `A`       | ✅    | ❌    |
| `7`       | ✅    | ❌    |
| `_`       | ✅    | ❌    |
| space     | ❌    | ✅    |
| `-`       | ❌    | ✅    |
| `@`       | ❌    | ✅    |

🔑 **Key idea:**
 `\w` is **very liberal**, but only inside the *“word universe”*.

------

## 2️⃣ **DIGITS**

| Token | Means     | Expands to |
| ----- | --------- | ---------- |
| `\d`  | digit     | `[0-9]`    |
| `\D`  | NOT digit | `[^0-9]`   |

### Examples

| Character | `\d` | `\D` |
| --------- | ---- | ---- |
| `5`       | ✅    | ❌    |
| `0`       | ✅    | ❌    |
| `A`       | ❌    | ✅    |
| `_`       | ❌    | ✅    |
| space     | ❌    | ✅    |

------

## 3️⃣ **WHITESPACE**

| Token | Means          | Expands to          |
| ----- | -------------- | ------------------- |
| `\s`  | whitespace     | space, tab, newline |
| `\S`  | NOT whitespace | everything else     |

### Examples

| Character | `\s` | `\S` |
| --------- | ---- | ---- |
| space     | ✅    | ❌    |
| tab       | ✅    | ❌    |
| newline   | ✅    | ❌    |
| `A`       | ❌    | ✅    |
| `7`       | ❌    | ✅    |
| `_`       | ❌    | ✅    |

------

# 🧠 **THE BIG PATTERN (THIS IS THE RULE)**

Every predefined class has a **capital-letter negation**:

| Lowercase | Uppercase |
| --------- | --------- |
| `\w`      | `\W`      |
| `\d`      | `\D`      |
| `\s`      | `\S`      |

> **Lowercase = “is”**
>  **Uppercase = “is NOT”**

This is NOT optional knowledge.
 This is **core grammar**.

------

# 🧠 WHY `^\w+\s\w+$` IS SO MISLEADING

Let’s dissect it with the table.

```
^\w+\s\w+$
```

| Part  | Meaning                                |
| ----- | -------------------------------------- |
| `\w+` | many word chars (letters, digits, `_`) |
| `\s`  | **exactly ONE whitespace**             |
| `\w+` | many word chars                        |

So:

- Liberal on **content**
- Rigid on **spacing**

### This matches:

```
A9__ 123
```

### This fails:

```
hello  world   ❌ (2 spaces)
```

Because `\s` ≠ `\s+`

------

# 🧠 **COMMON CONFUSION TABLE (THIS IS THE ONE YOU NEEDED)**

| Pattern    | What people THINK | What it REALLY means                               |
| ---------- | ----------------- | -------------------------------------------------- |
| `\w+`      | letters           | letters + digits + `_`                             |
| `\s`       | spaces            | **ONE** whitespace                                 |
| `\s+`      | space             | one or more                                        |
| `\w+\s\w+` | two words         | two word-blocks separated by **exactly one space** |
| `\W`       | punctuation       | everything that is NOT a word char                 |

------

# 🧠 **MENTAL SAFETY CHECK (USE THIS IN EXAMS)**

When you see a regex, ask **in order**:

1️⃣ Is this **`\w`, `\d`, or `\s`**?
 → Check the table.

2️⃣ Is there a **quantifier** (`+ * ? {}`)?
 → If not, it means **ONE**.

3️⃣ Is there a **capital version** (`\W \D \S`)?
 → That means **NOT**.

If you do only these 3 steps, you will NOT be tricked.