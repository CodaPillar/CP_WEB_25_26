### 📄 **DOCUMENT 2 — GROUPS + QUANTIFIERS (EXAM MASTER TABLE)**

Groups are the second foundational unit of regex.
 Where **SETS** `[...]` define *choices*, **GROUPS** `( ... )` define *structure*.

------

## ⭐ 1. What a GROUP is

<span style="background-color: rgba(255,255,0,0.5);">Match the exact sequence "abc" as a block.</span>

| Syntax    | Meaning                            | Notes                             |
| --------- | ---------------------------------- | --------------------------------- |
| `(abc)`   | matches the exact sequence **abc** | entire block = 1 unit             |
| `(0[1-9]  | 1[0-2])`                           | chooses between full alternatives |
| `(?:abc)` | non-capturing group                | does not store memory             |
| `(\d{4})` | capturing group                    | stores digits for backreference   |

**Sets match ONE character. Groups match SEQUENCES.**

------

## ⭐ 2. GROUPS with QUANTIFIERS

Groups can repeat the whole sequence as a block.

| Pattern      | Meaning                       | Allows empty? | Examples matched          |
| ------------ | ----------------------------- | ------------- | ------------------------- |
| `(abc)*`     | zero or more repeats of “abc” | ✅ yes         | `""`, `"abc"`, `"abcabc"` |
| `(abc)+`     | one or more repeats of “abc”  | ❌ no          | `"abc"`, `"abcabc"`       |
| `(abc)?`     | zero or one repeat            | ✅ yes         | `""`, `"abc"`             |
| `(abc){3}`   | exactly 3 repeats             | ❌ no          | `"abcabcabc"`             |
| `(abc){2,5}` | repeat block 2 to 5 times     | ❌ no          | `"abcabc"`, `"abc"*5      |

This is **the core** of almost every exam pattern involving structured data.

------

## ⭐ 3. Group Types

### ✔ **Capturing Group**

```
(\d{4})
```

Stores what it matches as **Group 1**, usable via backreference:

```
\1
```

Used for:

- repeating separators
- repeating domain segments
- palindrome checks
- duplicate word detection

------

### ✔ **Non-Capturing Group**

```
(?:\s\d{4})
```

Used when:

- You need grouping for quantifiers
- But you DO NOT need backreference memory
- Cleaner and cheaper in performance

Used heavily in:

- IBAN patterns
- URL domain repetition
- Optional blocks

------

### ✔ **Alternation Group**

```
(cat|dog|bird)
```

Meaning:

> Match **one entire option**.

Used for:

- month formats
- separators
- http/https
- extensions
- tag names

------

## ⭐ 4. Classic exam examples

### **4.1 Repeat a block**

```
(?:\s\d{4}){5}
```

Meaning:

- Match the block “space + four digits”
- Repeat it exactly 5 times
- Do NOT store memory

Used in IBAN.

------

### **4.2 Ensure separator consistency**

```
([/-])
\1
```

`\1` repeats the same separator the user typed.

If user enters:
 `01/02/2023` → OK
 `01-02/2023` → ❌

Used in dates.

------

### **4.3 Optional country code**

```
(?:\+34)?
```

Meaning:

- Either nothing
- Or "+34" exactly once

------

### **4.4 URL protocol**

```
^(https?|ftp)
```

Group chooses **http**, **https**, or **ftp**.

------

### **4.5 Optional block inside a structure**

```
^abc(?:xyz)?123$
```

Matches:

- `abc123`
- `abcxyz123`

# ⭐ 5. Groups vs Sets (Summary Table)

| Concept     | Sets `[ ]`           | Groups `( )`               |
| ----------- | -------------------- | -------------------------- |
| Matches     | 1 character          | entire sequence            |
| Purpose     | choose one from list | combine, structure, repeat |
| Repetition  | repeats characters   | repeats whole block        |
| Quantifiers | apply to 1 char      | apply to full sequence     |
| Example     | `[A-Z]+`             | `(abc)+`                   |

------

# ⭐ 6. Typical Group Mistakes (Traps)

- Using `[...]` instead of `( … )` for words
   → `[abc]` ≠ `(abc)`

- Forgetting `?:` → capturing too many groups

- Forgetting grouping when applying quantifiers

  ```
  abc+  → c repeats  
  (abc)+ → full block repeats
  ```

- Misplaced alternation

  ```
  cat|dog|bird
  ```

  is different from:

  ```
  (cat|dog|bird)
  ```

------

### ⭐ 7. Deep Understanding” Examples

### Example 1:

```
(ha)+
```

Matches: `ha`, `haha`, `hahaha`
 Does NOT match: `h`, `haa`

------

### Example 2:

```
(?:[0-9]{2}-){3}[0-9]{2}
```

Meaning:
 Repeat “two digits + dash” 3 times, then “two digits”.

Matches: `12-34-56-78`

------

### Example 3:

```
(0[1-9]|1[0-2])
```

Group of alternatives: valid months.

------

## **GROUP + ***

```
(ha)*
```

Matches:

- `""`
- `"ha"`
- `"haha"`
- `"hahaha"`

## **GROUP + +**

```
(ha)+
```

Matches:

- `"ha"`
- `"haha"`
- `"hahaha"`
   Does NOT match:
- `""`

## **GROUP + ?**

```
(ha)?
```

Matches:

- `""`
- `"ha"`
   Does NOT match:
- `"haha"`
