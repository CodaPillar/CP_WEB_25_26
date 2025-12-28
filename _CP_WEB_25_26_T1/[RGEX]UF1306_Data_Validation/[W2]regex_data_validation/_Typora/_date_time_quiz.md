# 🧪 REGEX QUIZ — **DATES & HOURS**

------

## 🔹 PART 1 — READ THE PATTERN (understand what it matches)

### **Q1 — Date**

Regex:

```
^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$
```

**Question:**
 What format does this regex match?

A) `YYYY/MM/DD`
 B) `YYYY-MM-DD`
 C) `DD-MM-YYYY`
 D) Any date with digits

✏️ **Your answer:** ___

 a) yyyy - mm - day 



------

### **Q2 — Hour**

Regex:

```
^(0\d|1\d|2[0-3]):[0-5]\d$
```

**Question:**
 Which times are valid?

A) `09:45`
 B) `23:59`
 C) `24:00`
 D) `12:75`

✏️ **Your answer(s):** ___

a)B)c) but in the actual stage with no limit it will pass 12:23333333 so in requires a limitation ^(0\d|1\d|2[0-3]):[0-5]\d$



------

## 🔹 PART 2 — SPOT THE MISTAKE (classic exam traps)

### **Q3 — Date (buggy regex)**

Regex:

```
^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[0-2])$
```

❓ **What is wrong here?**
 (Answer in words, very short)

✏️ **Your answer:** ____________ 

allows for months of 32 days 3[0-2]____

------

### **Q4 — Hour (buggy regex)**

Regex:

```
^(0\d|1\d|2[0-4]):[0-5]\d$
```

❓ **What invalid time does this allow?**

✏️ **Your answer:** __________________

2[0-4] allows for 24:59 which is not realistic 

------

## 🔹 PART 3 — WRITE THE PATTERN (production mode)

### **Q5 — Write a DATE regex**

**Requirement:**

- Format: `YYYY-MM-DD`
- Month: `01–12`
- Day: `01–31`
- No leap year logic

✏️ **Write the regex:**

/d{4}-(0[1-9] |1[0-2])-(0[1-9]| [12]\\d | 3[01])$





```
______________________________________
```

------

### **Q6 — Write an HOUR regex**

**Requirement:**

- Format: `HH:MM`
- Hour: `00–23`
- Minutes: `00–59`

✏️ **Write the regex:**

^(0\d|1\d|2[0-4]:[0-5]\d$

```
______________________________________
```

------

## 🔹 BONUS (confidence builder)

### **Q7 — Flexible date**

Allow:

- `2024-1-9`
- `2024-01-09`

✏️ **Write the regex:**

If I want European style dd/mm/yyyy

^(0[1-9]| [12]\\d | 3[01])-(0[1-9] |1[0-2])-/d{4}$

/d{4}-([1-9] |1[0-2])-(0[1-9]| [12]\\d | 3[01])$

/d{4}-(0[1-9] |1[0-2])-(0[1-9]| [12]\\d | 3[01])$

```
______________________________________
```

------

# 🔹 STEP 1 — **MICRO-DRILL: `?` (ZERO or ONE)**

Answer **YES / NO** only.

------

### **Q1**

Regex:

```
^0?\d$
```

Does it match `7` ?
 👉 **YES / NO**

Yes

Note 

It matches 7 as 5 any ingle digit from 0 to 9 and also any of the above matched with 0

------

### **Q2**

Regex:

```
^0?\d$
```

Does it match `07` ?

Yes it does 

 👉 **YES / NO**

------

### **Q3**

Regex:

```
^\d{2}:?\d{2}$
```

Does it match `1234` ?

no

 👉 **YES / NO**

------

### **Q4**

Regex:

```
^\d{2}:?\d{2}$
```

Does it match `12::34` ?

yes

 👉 **YES / NO**

------

### **Q5**

Regex:

```
^(ab)?c$
```

Does it match `c` ?

Yes

 👉 **YES / NO**

------

*(Do these mentally — they’re confidence builders.)*

------

# 🔹 STEP 2 — **“8 BYTES” REGEX (EXAM VERSION)**

Your teacher is using **“bytes” in a practical sense**, not hardcore encoding theory.

In exams, **“8 bytes” usually means:**

> **Exactly 8 characters**
>  (often ASCII, letters, digits, symbols — depends on the statement)

^[01]{8}$

------

## ✅ **Most common interpretation**

### **Exactly 8 characters (any type)**

```
^.{8}$
```

- `.` → any character
- `{8}` → exactly 8
- anchors → whole string

✔ `password`
 ✔ `A1!b_9Z@`
 ✘ `short`
 ✘ `toolonggg`

------

## ✅ **Exactly 8 alphanumeric characters**

```
^[A-Za-z0-9]{8}$
```

✔ `AbC123xY`
 ✘ `Abc!1234`
 ✘ `123456789`

------

## ✅ **Exactly 8 BYTES (ASCII safe)**

(what teachers *usually* mean)

```
^[\x00-\x7F]{8}$
```

But ⚠️ **this is rarely required** unless explicitly stated.

Most of the time they expect:

```
^.{8}$
```

or

```
^\w{8}$
```

depending on context.

------

## 🧠 **Exam decision rule for “8 bytes”**

Ask yourself:

### Did the teacher say:

- “8 characters”
- “8 bytes”
- “8 ASCII characters”
- “password of 8 characters”

### Then choose:

| Requirement    | Regex              |
| -------------- | ------------------ |
| Any 8 chars    | `^.{8}$`           |
| Letters+digits | `^[A-Za-z0-9]{8}$` |
| Word chars     | `^\w{8}$`          |
| Exactly N      | `{8}` ALWAYS       |

------

## 🔑 One-line memory hook

> **“Bytes in class = characters.”**
>  **Count them. Anchor them. Done.**

------

Reply with:

- the **YES / NO** for Q1–Q5
   and then we’ll **lock this in** and you can safely jump topics knowing this is solid.

## Regex — Round 1 (clean, falsifiable)

### **Exercise 1 — Time (24h)**

Match a valid time in **HH:MM** (00:00 → 23:59)

**Test strings**

```
09:15   ✔
23:59   ✔
24:00   ✘
7:05    ✘
12:60   ✘
```

👉 **Write the regex.**

------

### **Exercise 2 — Date (YYYY-MM-DD)**

Match a date with:

- year: 4 digits
- month: 01–12
- day: 01–31 (no month-length logic)

**Test strings**

```
2024-01-09   ✔
1999-12-31   ✔
2024-13-01   ✘
2024-00-10   ✘
2024-1-09    ✘
```

👉 **Write the regex.**

------

### **Exercise 3 — Identifier**

Match an identifier that:

- starts with a letter
- contains letters, numbers, or `_`
- length ≥ 3

**Test strings**

```
var_1     ✔
a1_       ✔
ab        ✘
1var      ✘
var-name  ✘
```

👉 **Write the regex.**

------

### **Exercise 4 — Exact word**

Match the word **`cat`** only when it is a whole word.

**Test strings**

```
cat        ✔
a cat b    ✔
catalog   ✘
concatenate ✘
```

👉 **Write the regex.**

------

Reply with your answers **numbered 1–4**.
 I’ll only say **correct / incorrect**, then we tighten.

# 🚨 REGEX **ATTENTION-GRABBERS** (EXAM TRAPS)

## 🔥 Trap 1 — *“Looks wrong but is valid”*

```
^\d{2}:?\d{2}$
```

String:

```
1234
```

✅ **MATCHES**

👉 Because `:?` allows **zero** colon
 **Brain trap:** “But there’s no colon!” → irrelevant.

------

## 🔥 Trap 2 — *“Looks right but fails”*

```
^\d{2}:?\d{2}$
```

String:

```
12::34
```

❌ **FAILS**

👉 `:?` = **0 or 1**, not many
 **Brain trap:** eyes see `:` and relax.

------

## 🔥 Trap 3 — *Empty string sneaks in*

```
^[A-Za-z]*$
```

String:

```
""   (empty)
```

✅ **MATCHES**

👉 `*` allows **zero**
 **Brain trap:** people assume “letters” means “at least one”.

------

## 🔥 Trap 4 — *Looks optional, isn’t*

```
^[A-Za-z]+$
```

String:

```
"" 
```

❌ **FAILS**

👉 `+` = **at least one**
 **Brain trap:** confusing `+` with `*`.

------

## 🔥 Trap 5 — *The invisible space*

```
^\w+\s\w+$
```

String:

```
hello  world
```

❌ **FAILS**

👉 `\s` = **exactly one whitespace**
 **Brain trap:** eyes don’t count spaces.

------

## 🔥 Trap 6 — *Group vs character*

```
(ab)+
```

Matches:

```
abab
```

✅
 But:

```
aba
```

❌

👉 The unit is **`ab`**, not `a` or `b`
 **Brain trap:** brain counts characters, regex counts **units**.

------

## 🔥 Trap 7 — *Optional applies to WHAT exactly?*

```
colou?r
```

Matches:

- `color` ✅
- `colour` ✅
- `colouur` ❌

👉 `?` applies only to **`u`**
 **Brain trap:** people think it applies to `ou`.

------

## 🔥 Trap 8 — *The fake range*

```
[1-12]
```

❌ **WRONG**

👉 This means: `1`, `-`, `2`
 **Brain trap:** thinking character classes understand numbers.

Correct:

```
(0[1-9]|1[0-2])
```

------

## 🔥 Trap 9 — *Quantifier location*

```
(ab)?c
```

Matches:

- `c` ✅
- `abc` ✅
- `ababc` ❌

👉 `?` applies to **the group**, not repetition
 **Brain trap:** assuming “optional” means repeatable.

------

## 🔥 Trap 10 — *Anchors matter*

```
\d{4}
```

Matches inside:

```
abc2024xyz
```

✅

But:

```
^\d{4}$
```

Same string ❌

👉 Anchors change **everything**
 **Brain trap:** forgetting `^ $` exist.

------

# 🧠 YOUR PERSONAL “ALERT SYSTEM” (remember this)

When reading a regex, always ask **in this order**:

1️⃣ **Where does the quantifier apply?**
 2️⃣ **Does `\*` allow empty?**
 3️⃣ **Is `?` zero or one?**
 4️⃣ **Is there exactly ONE space or many?**
 5️⃣ **Are anchors present?**

If you want next:

- 🔥 **10 brutal attention-grabbers (rapid YES/NO)**
- 🔥 **Mixed regex vs loops parallels** (why your brain confuses them)
- 🔥 **Final “exam survivor” checklist**