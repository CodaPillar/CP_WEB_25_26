# 🧠 **ONE Mental Reference Table — Characters, Classes, Groups, Quantifiers**

## 1️⃣ **Single Character / Character Class**

| Pattern      | Meaning                 |
| ------------ | ----------------------- |
| `^[A-Za-z]$` | exactly **1 letter**    |
| `^\d$`       | exactly **1 digit**     |
| `^\w$`       | exactly **1 word char** |

------

## 2️⃣ **Quantifiers applied to classes**

| Quantifier | Letters `[A-Za-z]` | Digits `\d` | Word `\w`   | Meaning   |
| ---------- | ------------------ | ----------- | ----------- | --------- |
| `?`        | `^[A-Za-z]?$`      | `^\d?$`     | `^\w?$`     | 0 or 1    |
| `*`        | `^[A-Za-z]*$`      | `^\d*$`     | `^\w*$`     | 0 or more |
| `+`        | `^[A-Za-z]+$`      | `^\d+$`     | `^\w+$`     | 1 or more |
| `{n}`      | `^[A-Za-z]{n}$`    | `^\d{n}$`   | `^\w{n}$`   | exactly n |
| `{n,m}`    | `^[A-Za-z]{n,m}$`  | `^\d{n,m}$` | `^\w{n,m}$` | n to m    |
| `{n,}`     | `^[A-Za-z]{n,}$`   | `^\d{n,}$`  | `^\w{n,}$`  | ≥ n       |

------

## 3️⃣ **Groups (what they are for)**

| Pattern         | Type                       | Purpose                   |
| --------------- | -------------------------- | ------------------------- |
| `(ab)`          | Capturing group            | Stores match              |
| `(?:ab)`        | Non-capturing group        | Structure only            |
| `(ab){3}`       | Group + quantifier         | Repeat block              |
| `(?:\d{2}-){2}` | Non-cap group + quantifier | Repeat structured pattern |
| `(a             | b                          | c)`                       |

------

## 4️⃣ **Quantifier: WHERE it applies (critical exam rule)**

| Pattern     | What is quantified |
| ----------- | ------------------ |
| `a+`        | the letter `a`     |
| `\d{4}`     | the digit class    |
| `[A-Za-z]+` | the class          |
| `(ab)+`     | the group          |
| `(?:ab){3}` | the group          |
| `:?`        | the colon only     |

**Rule:**

> The quantifier applies to the **immediately previous token**.

------

## 5️⃣ **Ultra-compact “exam brain” version**

```assembly
CHAR / CLASS
[A-Za-z]   \d   \w

+   → 1 or more
*   → 0 or more
?   → 0 or 1
{n} → exactly n
If quantifier follows ):
→ it applies to the whole group
```

------

## 6️⃣ **One-liner you can literally remember**

> **`\d` and `\w` ARE classes.**
>  **Quantifiers only answer “how many”.**
>  **They always apply to what’s immediately before them.**

That’s the whole system.

When you’re ready, loops will feel *much* more natural because it’s the **same counting logic** in another syntax.