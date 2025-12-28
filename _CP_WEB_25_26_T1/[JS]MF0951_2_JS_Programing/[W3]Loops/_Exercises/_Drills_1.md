Each drill contains:

- A **gentle narrative problem** (no stress, no stakes)
- A **clear objective**
- **Starter code**
- **Hint**
- All loops remain **beginner-friendly**.

------

## 🪩 **DRILL WP-1 — “Disco Steps Counter”**

**Scenario:**
 A small disco opens at 8pm. Every 10 minutes, another group of visitors arrives.
 You want to simulate the arrival of the first **6 groups**.

**Task:**
 Print `"Group arrived"` six times.

```
// WP-1: Disco steps counter
// Print "Group arrived" six times.

for (let i = 1; i <= 6; i++) {
  console.log("Group arrived:", i);
}
```

**Hint:**
 Each loop round = one group entering.

------

## 💶 **DRILL WP-2 — “Affordance Check: Saving for a Jacket”**

**Scenario:**
 You save **5€ every day**. You want to know your savings after **12 days**.

**Task:**
 Start at 0, add 5€ each day, print the running total.

```
// WP-2: Saving for a jacket
let savings = 0;

for (let day = 1; day <= 12; day++) {
  savings += 5;
  console.log("Day", day, ":", savings, "€");
}
```

**Hint:**
 This is an accumulator pattern.

------

## 🚌 **DRILL WP-3 — “Bus Ticket Validator”**

**Scenario:**
 A bus driver checks 8 passengers in a row.
 Each check prints `"Ticket ok"`.

**Task:**
 Simulate the 8 checks.

```
// WP-3: Bus ticket validation
for (let p = 1; p <= 8; p++) {
  console.log("Passenger", p, ": Ticket ok");
}
```

**Hint:** Fixed number of repetitions → for loop.

------

### 🍫 **DRILL WP-4 — “Cafeteria Chocolate Squares”**

**Scenario:**
 A small bar of chocolate has **30 squares**.
 A student eats **3 squares at a time**.

**Task:**
 Print how many squares remain after each bite, until you reach 0.

```
// WP-4: Chocolate counter
let squares = 30;

while (squares > 0) {
  console.log("Squares left:", squares);
  squares -= 3;
}
```

**Hint:**
 Decreasing loop.

------

### 🎵 **DRILL WP-5 — “Playlist Volume Increase”**

**Scenario:**
 Your music app increases volume by **2 units** every second.
 You start at volume 0 and stop at 10.

**Task:**
 Print each volume level.

```
// WP-5: Volume increase
for (let vol = 0; vol <= 10; vol += 2) {
  console.log("Volume:", vol);
}
```

**Hint:** Jump by 2 units.

------

### 🏋️ **DRILL WP-6 — “Gym Repetition Tracker”**

**Scenario:**
 You want to do **15 squats**.
 Count each one as you perform it.

**Task:**
 Print `"Squat X"` from 1 to 15.

```
// WP-6: Squat counter
for (let rep = 1; rep <= 15; rep++) {
  console.log("Squat", rep);
}
```

------

### 🧺 **DRILL WP-7 — “Laundry Machine Countdown”**

**Scenario:**
 A washing machine counts down from **30 minutes**, decreasing by 5 each cycle.

**Task:**
 Print the timer at each step: 30, 25, 20, ..., 0.

```
// WP-7: Laundry countdown
for (let t = 30; t >= 0; t -= 5) {
  console.log("Minutes left:", t);
}
```

**Hint:** Backwards stepping loop.

------

### 🍇 **DRILL WP-8 — “Fruit Bowl Inspection”**

**Scenario:**
 A bowl contains apples numbered 1 to 10.
 You want to print only apples that are **even-numbered**.

**Task:**
 Print 2, 4, 6, 8, 10.

```
// WP-8: Even-number apples
for (let a = 2; a <= 10; a += 2) {
  console.log("Apple number:", a);
}
```

------

### 🧮 **DRILL WP-9 — “Multiplication Climber”**

**Scenario:**
 A student practices multiplying by 3.
 They want to see the first **five results**: 3, 6, 9, 12, 15.

**Task:**
 Print the sequence using a loop.

```
// WP-9: Multiplying by 3
for (let n = 1; n <= 5; n++) {
  console.log(n * 3);
}
```

------

### 🛒 **DRILL WP-10 — “Supermarket Basket Total”**

**Scenario:**
 You add an item worth **4€** into your basket every time you walk past a promotion.
 You walk past it **7 times**.

**Task:**
 Print running total: 4, 8, 12, … 28.

```js
// WP-10: Basket accumulation
let total = 0;

for (let i = 1; i <= 7; i++) {
  total += 4;
  console.log("Total so far:", total, "€");
}
```