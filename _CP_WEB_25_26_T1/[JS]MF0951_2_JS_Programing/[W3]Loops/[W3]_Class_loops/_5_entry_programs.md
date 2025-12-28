### ⭐ **PROGRAM 1 — Countdown (10 to 0)**

**Role names: iterator, condition, update, output**

```js
for (let i = 10; i >= 0; i--) {
  console.log(i);     // OUTPUT (displays each step)
}

console.log("Take off!!"); // FINAL OUTPUT
```

### 🔎 **Explanation of roles**

- **Iterator (loop counter):** `i`
- **Initial state:** `i = 10` (starting point for countdown)
- **Condition:** `i >= 0` → loop runs while true
- **Update:** `i--` (subtract 1 each cycle)
- **Output:** print the current value of `i`
- **Escape mechanism:** the loop stops when `i` becomes `-1` (boolean condition becomes false)

------

### ⭐ **PROGRAM 2 — Multiplication Table (User Input)**

**Role names: input, iterator, fixed value, arithmetic operation, output**

```js
let n = Number(prompt("Enter a number:"));  // INPUT (fixed value)

for (let i = 1; i <= 10; i++) {             // ITERATOR from 1 to 10
  console.log(n + " x " + i + " = " + (n * i));  // OUTPUT (operation)
}
```

### 🔎 **Explanation of roles**

- **Input:** `n` (user chooses the number for the table)
- **Iterator:** `i` (multipliers 1 → 10)
- **Initial state:** `i = 1`
- **Condition:** `i <= 10`
- **Update:** `i++`
- **Fixed value:** `n` never changes
- **Arithmetic:** `n * i`
- **Escape mechanism:** stop when `i` becomes 11
- **Output:** print the formula and the result

------

### ⭐ **PROGRAM 3 — Sum of the First 50 Numbers (Accumulator)**

**Role names: accumulator, iterator, update, output**

```js
let total = 0;  // ACCUMULATOR (starts at the neutral element for numbers)

for (let i = 1; i <= 50; i++) {  // ITERATOR 1 → 50
  total += i;                    // ACCUMULATION STEP
}

console.log(total);              // FINAL OUTPUT
```

### 🔎 **Explanation of roles**

- **Accumulator:** `total` (starts at 0, grows each iteration)
- **Initial accumulator state:** `0` (neutral element for addition)
- **Iterator:** `i` from 1 to 50
- **Condition:** `i <= 50`
- **Update:** `i++`
- **Accumulation rule:** `total += i` (equivalent to `total = total + i`)
- **Escape mechanism:** loop stops when `i` becomes 51
- **Output:** print the final sum after the loop ends

------

### ⭐ **PROGRAM 4 — Guessing Game (do…while)**

**Role names: input, unpredictable repetition, comparison, escape, output**

```js
let secret = 7;       // FIXED VALUE (target)
let guess;            // USER INPUT (changes)

do {
  guess = Number(prompt("Guess the number:"));  // INPUT PER ITERATION
} while (guess !== secret);                     // BOOLEAN CHECK (escape condition)

console.log("Correct! The secret number was " + secret); // OUTPUT
```

### 🔎 **Explanation of roles**

- **Fixed value:** `secret`
- **Input:** `guess` (new value each cycle)
- **Loop type:** `do…while` ensures at least one attempt
- **Condition:** `guess !== secret`
- **Escape mechanism (boolean):** loop exits when `guess === secret`
- **Update:** happens naturally when the user enters a new guess
- **Output:** final congratulation message

------

### ⭐ **PROGRAM 5 — Triangle of Asterisks (Accumulator for Strings)**

**Role names: accumulator (string), iterator, update, output**

```js
let stars = "";  // STRING ACCUMULATOR (neutral element = "")

for (let i = 1; i <= 5; i++) {   // ITERATOR controls the line number
  stars = stars + "*";           // ACCUMULATE 1 STAR PER ITERATION
  console.log(stars);            // OUTPUT (growing rope of stars)
}
```

### 🔎 **Explanation of roles**

- **Accumulator:** `stars` (grows like a rope: `"" → "*" → "**" → "***"`)
- **Initial accumulator state:** `""` (empty string = neutral element of text)
- **Iterator:** `i` → line number
- **Condition:** `i <= 5`
- **Update:** `i++`
- **Update to accumulator:** `stars = stars + "*"`
- **Escape mechanism:** loop stops when `i` becomes 6
- **Output:** print the current rope after each step

------

### ⭐ **IN SUMMARY — ROLES ACROSS ALL 5 PROGRAMS**

| Program              | Main Concept             | Key Role                              |
| -------------------- | ------------------------ | ------------------------------------- |
| Countdown            | controlled repetition    | iterator (i), update (--)             |
| Multiplication Table | fixed input + iteration  | fixed value (n) + iterator (i)        |
| Sum of 50 numbers    | accumulation             | accumulator (total += i)              |
| Guessing Game        | unpredictable repetition | boolean validation (guess !== secret) |
| Triangle of stars    | string accumulation      | accumulator (stars = stars + "*")     |

------

# 