## 1️⃣ Build a **function-based validator**

This will look like:

```
function isValidOp(op) {
    return ["+", "-", "*", "/"].includes(op);
}
```

And then the calculator becomes:

```
if (isValidOp(op)) { ... }
```

This is a MAJOR step toward real-world frontend coding.

------

## 2️⃣ Then we build the **ternary operator version**

Starting simple:

```
let msg = age >= 18 ? "Adult" : "Minor";
```

Then multi-branch ternaries:

```
let category = 
    score > 90 ? "A" :
    score > 80 ? "B" :
    score > 70 ? "C" : "Fail";
```

Then nested ternaries used carefully (but you must know how).

------

## 3️⃣ Then we rewrite the **Batch 1 exercises as ternaries**

This is the TRUE skill builder.

Examples:

### Even/Odd

```
let result = num % 2 === 0 ? "Even" : "Odd";
```

### Approve/Fail

```
let status = grade >= 5 ? "Pass" : "Fail";
```

### Largest Number (two numbers)

```
let bigger = a > b ? a : b;
```

### Day of week (useful ternaries)

`switch` is better here, but ternaries train your mind.