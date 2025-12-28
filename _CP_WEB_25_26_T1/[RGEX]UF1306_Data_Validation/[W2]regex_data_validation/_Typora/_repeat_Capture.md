# **1. NON-CAPTURING GROUP (structure only)**

### **Syntax**

```
(?:pattern)
```

### **Example**

```
(?:ha){3}
```

- `(?:ha)` = the group
- `{3}` = quantifier for **the whole group**
   → Matches: `hahaha`

Non-capturing = **just grouping**, no memory.

------

# ✅ **2. QUANTIFIER FOR A SINGLE CHARACTER (e.g., the colon)**

### **Syntax**

Quantifier applies *directly* to the character **before it**.

### **Example (optional colon)**

```
^\d{2}:?\d{2}$
```

- `:` = literal colon
- `?` = quantifier → “0 or 1 colon”

So it matches:

- `12:34`
- `1234`

This has **nothing to do with grouping**.

------

# 🔥 **Side-by-side clarity**

| Pattern     | What is repeated?  | Why                                |
| ----------- | ------------------ | ---------------------------------- |
| `(?:ha){3}` | **The group** `ha` | Quantifier applies to `)`          |
| `:?\d{2}`   | **The colon only** | Quantifier applies to `:` directly |

------

# 🎯 Ultra-concise takeaway

- `(?: ... )` = **grouping**
- `{3}` after `)` = **repeat the group**
- `:?` = quantifier applies **only to the colon**, not a group

# 🔥 **MICRO-DRILL PACK (for later)**

## **Q1**

In this regex:

```
(?:ha){4}
```

What is repeated?

A) `h`
 B) `ha`
 C) `a`
 D) the entire string

------

## **Q2**

In this regex:

```
^\d{2}:?\d{2}$
```

What does `?` apply to?

A) the whole pattern
 B) the group `\d{2}`
 C) the colon `:`
 D) the last digit

------

## **Q3**

Which pattern repeats the whole block “12-” exactly 3 times?

A) `12-3`
 B) `(12-){3}`
 C) `12-{3}`
 D) `(?:12)-3`

------

## **Q4**

In this regex:

```
(ab)+c
```

What is repeated?

A) `a`
 B) `b`
 C) `ab`
 D) `c`

------

## **Q5**

You want the **underscore `_`** to be optional, not the word `name`.
 Which is correct?

A) `name_?`
 B) `(name_)?`
 C) `name(_)?`
 D) `(?:name_)?`