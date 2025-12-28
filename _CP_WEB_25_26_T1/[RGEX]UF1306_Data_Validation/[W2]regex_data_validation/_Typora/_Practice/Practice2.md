# 🔥 **BLOCK 1 — Anchors & Basic Quantifiers**

## **Q1**

Regex:

```
^\d{4}$
```

Which matches?

A) `123`
 B) `1234`
 C) `12345`
 D) `12a4`

**Your answer:** ___

b)

------

## **Q2**

Regex:

```
^[A-Z]{2}\d{3}$
```

Which matches?

A) `AB123`
 B) `A1234`
 C) `AB12`
 D) `Ab123`

**Your answer:** ___

a)

------

## **Q3**

Regex:

```
^\w+$ 
```

Which matches?

A) `hello_world123`
 B) `hello world`
 C) `###`
 D) `_abc_123_`

**Your answer:** ___

a), d)

------

# 🔥 **BLOCK 2 — Optional, +, * **

## **Q4**

Regex:

```
^go+gle$
```

Which matches?

A) `google`
 B) `gooogle`
 C) `gogle`
 D) `goooogle`

**Your answer:** ___ a),b),D)

------

## **Q5**

Regex:

```
^colou?r$
```

Which matches?

A) `color`
 B) `colour`
 C) `colouur`
 D) `colo`

**Your answer:** ___

a),b)

------

## **Q6**

Regex:

```
^a*b$
```

Which matches?

A) `b`
 B) `ab`
 C) `aaab`
 D) `ba`

**Your answer:** ___

B) and C)

------

# 🔥 **BLOCK 3 — Group Repetition**

## **Q7**

Regex:

```
^(ab){2}$
```

A) `abab`
 B) `ab`
 C) `aba`
 D) `ababb`

**Your answer:** ___

a)





------

## **Q8**

Regex:

```
^(?:12){3}$
```

A) `121212`
 B) `1212`
 C) `12 12 12`
 D) `112212`

**Your answer:** ___

a)

------

## **Q9**

Regex:

```
^\d{2}(?:\s\d{2}){2}$
```

A) `12 34 56`
 B) `12 345 6`
 C) `1 23 45`
 D) `12  34 56` (two spaces between 12 and 34)

**Your answer:** ___

a)

------

# 🔥 **BLOCK 4 — Alternation (A|B|C)**

## **Q10**

Regex:

```
^(cat|dog|fox)$
```

A) `cat`
 B) `cats`
 C) `dog`
 D) `foxes`

**Your answer:** ___

A) C)

------

## **Q11**

Regex:

```
^(\d{2}|[A-Z]+)$
```

A) `12`
 B) `ABC`
 C) `A1`
 D) `123`

A) B)

**Your answer:** ___

------

## **Q12**

Regex:

```
^(red|blue)[0-9]$
```

A) `red3`
 B) `blue9`
 C) `red`
 D) `blue99`

a) b)

**Your answer:** ___

------

# 🔥 **BLOCK 5 — REAL EXAM TYPE: “Which FULL line matches?”**

## **Q13**

Regex:

```
^[1-9]\d{2}$
```

A) `012`
 B) `123`
 C) `999`
 D) `1200`

B),C)

**Your answer:** ___

------

## **Q14**

Regex:

```
^[A-Za-z]+\s[A-Za-z]+$
```

Which matches?

A) `John Doe`
 B) `John`
 C) `John  Doe` (two spaces)
 D) `John-Doe`

**Your answer:** ___

A)

------

## **Q15**

Regex:

```
^[A-Z]{3}\d{2}[A-Z]?$ 
```

A) `ABC12`
 B) `ABC12D`
 C) `AB12D`
 D) `ABC123`

**Your answer:** ___

B)

------

# 🔥 **BLOCK 6 — Character classes & traps**

## **Q16**

Regex:

```
^[^0-9]+$
```

Which matches?

A) `hello`
 B) `hello2`
 C) `HELLO!`
 D) `#test#`

**Your answer:** ___

A)

------

## **Q17**

Regex:

```
^[A-Z][a-z]*$
```

Which matches?

A) `Hello`
 B) `hello`
 C) `H`
 D) `HEllo`

**Your answer:** ___

a)

------

## **Q18**

Regex:

```
^\d{1,3}$ 
```

A) `7`
 B) `77`
 C) `777`
 D) `7777`

**Your answer:** ___

a),b),c)

------

# 🔥 BLOCK 7 — Harder grouping logic (but still clear)

## **Q19**

Regex:

```
^(ha){2,4}!$
```

A) `haha!`
 B) `hahaha!`
 C) `hahahaha!`
 D) `ha!`

**Your answer:** ___

a) b) c)

------

## **Q20**

Regex:

```
^(?:\d{3}-){2}\d{3}$
```

A) `123-456-789`
 B) `123-45-678`
 C) `123456789`
 D) `123-4567-89`

**Your answer:** ___

A)