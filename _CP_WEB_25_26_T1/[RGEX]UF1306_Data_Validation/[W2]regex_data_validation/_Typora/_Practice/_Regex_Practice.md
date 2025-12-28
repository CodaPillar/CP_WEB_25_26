**Designed to calm your nervous system by giving you micro-steps.**

------

# ⭐ **PHASE 1 — 15-minute Warm-Up (Regex101 only)**

Goal: Warm up your brain using *only extremely small patterns*.

Open **Regex101** → https://regex101.com/

Do the following:

------

### **Warm-Up 1 — Match a digit**

Pattern to test:

```
\d
```

In the test window, write:

```
1
a
5
z
0
```

🎯 See which ones light up. That’s all.

------

### **Warm-Up 2 — Match 3 digits**

Pattern:

```
\d{3}
```

Test:

```
123
45
999
a12
```

------

### **Warm-Up 3 — Match letters only**

Pattern:

```
[A-Za-z]+
```

Test:

```
hello
HELLO
h3llo
```

------

### **Warm-Up 4 — Match a literal dot**

Pattern:

```
\.
```

Test:

```
hello.world
```

------

### **Warm-Up 5 — Match a word character**

Pattern:

```
\w+
```

Test:

```
hi
_underscore
999
```

------

### **Goal of Phase 1**

You start seeing how Regex101 explains each token.
 This *primes your brain* for the real work.

------

# ⭐ **PHASE 2 — 10-minute Understanding Drills (Regex101 only)**

Here, you learn to *read*, not write.

Copy/paste these patterns into Regex101 and just read the explanation.
 Do NOT solve anything yet.

------

### **Understanding Drill A — Email**

```
^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$
```

### **Understanding Drill B — Date**

```
^([0-2][0-9]|3[0-1])/(0[1-9]|1[0-2])/\d{4}$
```

### **Understanding Drill C — Password**

```
^(?=.*[a-z])(?=.*[A-Z]).{8,}$
```

### **Understanding Drill D — IPv4**

```
^(\d{1,3}\.){3}\d{1,3}$
```

### **Understanding Drill E — URL**

```
^(https?|ftp):\/\/[\w.-]+(?:\.[\w.-]+)+$
```

💡 Just read.
 No pressure.
 Let Regex101 teach you silently.

------

# ⭐ **PHASE 3 — 20-minute Construct & Test (Regexr + Regex101)**

Now you *write something small*, test it, fix it.
 Use **Regexr** to test, and **Regex101** to understand.

Pick **3 patterns** from the homework list and “rebuild” them slowly.

I recommend:

## **1. URL**

Goal: allow http, https, ftp.

Write in steps:

1. Start anchor: `^`
2. Choose protocol: `(https?|ftp)`
3. Add `://`
4. Add domain: `[\w.-]+`
5. Add TLD: `\.[A-Za-z]{2,}`
6. End anchor: `$`

Test every step on Regexr.

------

## **2. RGB color**

Steps:

1. Literal `RGB(`
2. Numbers: `(\d{1,3})`
3. Commas: `,`
4. Repeat three times
5. Close `)`

Test:

```
RGB(255,255,255)
RGB(1,2,3)
```

------

## **3. Word Even–0–Odd**

Steps:

1. Start with even: `[2468]`
2. Allow anything: `\w*`
3. Must contain 0: `0`
4. Allow anything: `\w*`
5. End with odd: `[13579]$`

Test a few:

```
2hello0world5
6test099
```

------

# ⭐ **PHASE 4 — 10-minute QUIZ (Self-check)**

Write your answers on paper — this solidifies learning.

**Q1:**
 Write a regex for exactly 4 digits.

**Q2:**
 Write a regex that matches a word that ends with “ing”.

**Q3:**
 Write a regex that matches a Spanish IBAN starting with ES.

**Q4:**
 Write a regex that matches a username containing letters, digits, dots, or underscores.

**Q5:**
 Write a regex that matches a time `HH:MM:SS`.

You don’t need to get all right.
 The point is: **engage with the structure**.

------

# ⭐ **PHASE 5 — 5-minute reflection**

This is very important:
 Write down **3 patterns** that you feel more familiar with now.

They can be:

- `\d{3}`
- `[A-Za-z]+`
- `[2468]`
- `^$`
- `\.`

Tiny pieces matter.

------

# 🎯 WHAT THIS ROUTINE ACHIEVES

By the end of the hour, you will have:

- activated pattern memory
- removed fear through small wins
- practiced 3 homework-relevant regexes
- built grounding around syntax
- repeated key structures
- used both tools effectively

This is **exactly** what beginners should do — and what your class pacing did not provide.