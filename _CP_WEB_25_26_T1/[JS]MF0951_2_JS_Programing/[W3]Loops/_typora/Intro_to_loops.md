## **📘 WHAT IS A LOOP?**

A loop is a mechanism that **repeats** a block of code **as long as a condition is true**.

### Why do beginners learn loops before functions?

Because loops create the idea of *process* and *iteration*, without needing input/output or return logic.

------

## **📘 THE THREE BASIC LOOPS**

### **A. `for` loop — repetition with a counter**

Used when you know **how many times** you want to repeat.

```
for (let i = 1; i <= 5; i++) {
  console.log("Step:", i);
}
```

Structure:

- **start** → `let i = 1`
- **stop when** → `i <= 5`
- **increment** → `i++`

------

### **B. `while` loop — repetition \*until\* condition fails**

Used when you do **not** know the exact number of repetitions.

```
let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}
```

Important: You must update the variable manually (`counter++`).

------

### **C. `do…while` loop — execute first, check later**

Used when you want the loop to run **at least once**.

```
let x = 1;

do {
  console.log(x);
  x++;
} while (x <= 5);
```

------

## **📘 COMMON MISTAKES BEGINNERS MAKE**

| Mistake                        | Why it happens        | What to fix                      |
| ------------------------------ | --------------------- | -------------------------------- |
| Forgetting `i++`               | Counter never changes | Infinite loop                    |
| Using `<` instead of `<=`      | Off-by-one error      | Understand boundaries            |
| Writing logic outside the loop | Code never repeats    | Check braces `{}`                |
| Using too many variables       | Early confusion       | Keep it minimal (`i`, `counter`) |

# 🎓 **HOW LOOPS WORK — POSTER (BEGINNER VERSION)**

------

## 🧠 **THE UNIVERSAL LOOP MODEL**

*(All loops — `for`, `while`, `do...while` — follow the same internal logic.)*

```assembly
   ┌──────────────────────────────┐
   │        1. START VALUE        │
   └───────────────┬──────────────┘
                   │
                   ▼
   ┌──────────────────────────────┐
   │      2. CHECK CONDITION      │◄─────────────────────────┐
   └───────────────┬──────────────┘                          │
                   │ (true)                                   │
                   ▼                                          │
   ┌──────────────────────────────┐                           │
   │       3. RUN THE BLOCK       │  ←––––––––– loop body     │
   │       (repeat this)          │                           │
   └───────────────┬──────────────┘                           │
                   │                                           │
                   ▼                                           │
   ┌──────────────────────────────┐                           │
   │      4. UPDATE VARIABLE      │   (i++, x--, etc.)        │
   └───────────────┬──────────────┘                           │
                   │                                           │
                   └───────────────────────────────────────────┘
                                 (go back to step 2)
```

------

## 🚥 **BREAKDOWN OF THE 4 STEPS**

### **1️⃣ START VALUE**

A loop needs a “starting point.”

```js
let i = 1;
```

This creates the variable the loop will use to move forward.

------

### **2️⃣ CHECK CONDITION**

Before each repetition, the loop asks:

> “Should I continue, or am I done?”

```js
i <= 5
```

If **true** → run the loop
 If **false** → stop

------

### **3️⃣ RUN THE BLOCK (BODY)**

This is the action repeated every cycle:

```js
console.log(i);
```

------

### **4️⃣ UPDATE VARIABLE**

If you don’t update the variable → **infinite loop**.

```js
i++;
```

------

## 🧭 **POSTER: ALL LOOPS COMPARED USING THE MODEL**

### **1. `for` loop = all 4 phases in one line**

```
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

- Start value → `let i = 1`
- Condition → `i <= 5`
- Update → `i++`
- Block → inside `{ }`

------

## **2. `while` loop = phases separated**

```js
let i = 1;               // start
while (i <= 5) {         // condition
  console.log(i);        // block
  i++;                   // update
}
```

------

## **3. `do...while` loop = block runs first**

```js
let i = 1;
do {
  console.log(i);        // block
  i++;                   // update
} while (i <= 5);        // condition
```

Key idea: **always runs once**.

------

# 🧩 **WHY BEGINNERS FIND LOOPS CONFUSING**

Because visually, they think this:

```
start → block → block → block → block → done
```

But internally the machine does this:

```
start → check → block → update → check → block → update → … → stop
```

The **condition sits BETWEEN** repetitions, not after.

Understanding this fixes 80% of loop confusion.

------

# 🧘‍♀️ **STUDENT MANTRA FOR LOOPS**

> **“Start, Check, Do, Update — Repeat.”**

------

# 