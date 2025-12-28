# Object-Based Calculator – Notes for Future Me 🐛 ⚡️🧸🦆🧹

Goal: understand **step by step** how this little calculator works, using:

- **objects** to classify operations (binary vs unary),
- **membership checks** (`binaryOps[op]`, `unaryOps[op]`),
- **clean branching** (two big main branches + one fallback).

------

## 1. The Code (Reference)

```js
let binaryOps = {
  "+": "binary",
  "-": "binary",
  "*": "binary",
  "/": "binary",
  "%": "binary"
};

let unaryOps = {
  "%0": "unary"
};

let op = prompt("Operation: Choose an operation: +, -, *, /, %, %0");

if (binaryOps[op]) {

  let a = Number(prompt("First number:"));
  let b = Number(prompt("Second number:"));

  if (isNaN(a) || isNaN(b)) {
    console.log("Invalid number");
  } else {
    if (op === "+")      console.log(a + b);
    else if (op === "-") console.log(a - b);
    else if (op === "*") console.log(a * b);
    else if (op === "/") console.log(a / b);
    else if (op === "%") console.log(a % b);
  }

} else if (unaryOps[op]) {

  let x = Number(prompt("Enter a number:"));

  if (isNaN(x)) {
    console.log("Invalid number.");
  } else {
    // %0 means: return 10% of x
    console.log(x * 0.10);
  }

} else {

  console.log("Invalid operation.");

}
```

------

## 2. How We Create the Objects

### 2.1. What is an object *here*?

An object is a **collection of pairs**:

- **key** → **value**

In this project:

- keys = **symbols of operations** (`"+", "-", "*", "/", "%", "%0"`)
- values = just strings (`"binary"`, `"unary"`), used as *truthy* markers

So:

```js
let binaryOps = {
  "+": "binary",
  "-": "binary",
  "*": "binary",
  "/": "binary",
  "%": "binary"
};
```

means:

- `binaryOps["+"]` exists → truthy → this operator belongs to the **binary domain**
- `binaryOps["banana"]` does *not* exist → `undefined` → falsy → **not** a binary op

Same idea for unary:

```js
let unaryOps = {
  "%0": "unary"
};
```

means:

- `unaryOps["%0"]` → `"unary"` → truthy → `%0` is a **unary** operator
- `unaryOps["+"]` → `undefined` → falsy → `"+"` is **not** unary

### 2.2. Why use values like `"binary"` and `"unary"`?

Right now we only need “does this key exist?” → truthy/falsy.

We **could** have used:

```js
"+": true
```

instead of `"binary"`, but using `"binary"` / `"unary"` also works
 and can be reused later if we want metadata.

Key point:
 ➡ For membership, **any truthy value is enough**.

------

## 3. How We Validate Membership (Belongs to a Set?)

We want to know:

> Does the chosen operator `op` belong to the **binary** set or the **unary** set?

With objects, the pattern is:

```js
if (binaryOps[op]) {
  // op is a binary operator
}
```

Why does this work?

- If `op` is a key (e.g. `"+"`), `binaryOps[op]` returns `"binary"` → truthy
- If `op` is not a key (e.g. `"hello"`), `binaryOps[op]` returns `undefined` → falsy

Same logic applies to `unaryOps[op]`.

So the main branching is:

```js
if (binaryOps[op]) {
  // go to the 2-number world
} else if (unaryOps[op]) {
  // go to the 1-number world
} else {
  // unknown symbol
  console.log("Invalid operation.");
}
```

This is our **domain gatekeeper**.

------

## 4. Structure of the Main Conditional Branches

There are **three big regions** in the code:

1. `if (binaryOps[op]) { ... }`
    → handles **all operations with 2 numbers** (`+ - * / %`)
2. `else if (unaryOps[op]) { ... }`
    → handles **all operations with 1 number** (`%0`)
3. `else { ... }`
    → handles **invalid operations**

### 4.1. Binary Branch (2-input block)

```js
if (binaryOps[op]) {

  let a = Number(prompt("First number:"));
  let b = Number(prompt("Second number:"));

  if (isNaN(a) || isNaN(b)) {
    console.log("Invalid number");
  } else {
    if (op === "+")      console.log(a + b);
    else if (op === "-") console.log(a - b);
    else if (op === "*") console.log(a * b);
    else if (op === "/") console.log(a / b);
    else if (op === "%") console.log(a % b);
  }

}
```

**Role of this branch:**

- Only runs if `op` is in `binaryOps`
- Asks for **two inputs** (`a`, `b`)
- Validates these two inputs
- If valid, performs the correct arithmetic, depending on `op`

------

### 4.2. Unary Branch (1-input block)

```js
else if (unaryOps[op]) {

  let x = Number(prompt("Enter a number:"));

  if (isNaN(x)) {
    console.log("Invalid number.");
  } else {
    console.log(x * 0.10); // 10% of x
  }

}
```

**Role of this branch:**

- Only runs if `op` is in `unaryOps`
- Asks for **one input** (`x`)
- Validates this input
- If valid, performs the unary operation (here: 10% of x)

------

### 4.3. Fallback Branch (Invalid op)

```js
else {

  console.log("Invalid operation.");

}
```

**Role of this branch:**

- Covers the case where **op is neither binary nor unary**
- Avoids silent failures
- Gives clear feedback: the symbol is not supported

------

## 5. ASCII Flow of the Program

High-level flow:

```text
                ┌─────────────────────────────┐
                │  User chooses operation op  │
                └──────────────┬──────────────┘
                               │
                     ┌─────────┴───────────┐
                     │                     │
          ┌──────────▼───────────┐   ┌─────▼─────────┐
          │  binaryOps[op] true? │   │ unaryOps[op]? │
          └──────────┬───────────┘   └─────┬─────────┘
                     │                     │
        YES (2-input branch)        YES (1-input branch)
                     │                     │
       ┌─────────────▼─────────────┐   ┌───▼─────────────────┐
       │ Ask a, b with 2 prompts   │   │ Ask x with 1 prompt │
       └─────────────┬─────────────┘   └───────────┬─────────┘
                     │                             │
          ┌──────────▼───────────┐        ┌────────▼─────────┐
          │ isNaN(a) || isNaN(b)?│        │   isNaN(x)?      │
          └──────────┬───────────┘        └────────┬─────────┘
                     │                             │
                YES  │ NO                      YES │ NO
                     │                             │
           ┌─────────▼──────────┐        ┌────────▼────────────┐
           │  "Invalid number"  │        │ x * 0.10 (10% of x) │
           └────────────────────┘        └─────────────────────┘


If neither binaryOps[op] nor unaryOps[op] is true:

┌─────────────────────────────┐
│      "Invalid operation"    │
└─────────────────────────────┘
```

------

## 6. Flow Overview in Bullet Points

### 6.1. Step-by-step logic

1. **Define operator domains as objects**
   - `binaryOps` for 2-number operations
   - `unaryOps` for 1-number operations
2. **Ask the user for an operation**
   - `prompt("Operation: +, -, *, /, %, %0")`
   - The answer is stored in `op`
3. **Check which domain `op` belongs to**
   - If `binaryOps[op]` is truthy → go to **binary branch**
   - Else if `unaryOps[op]` is truthy → go to **unary branch**
   - Else → log `"Invalid operation."`
4. **Binary branch (2 inputs)**
   - Ask for `a` and `b` with two prompts
   - Convert to numbers (`Number(prompt(...))`)
   - If either is `NaN` → `"Invalid number"`
   - Otherwise:
     - if `op === "+"` → `a + b`
     - if `op === "-"` → `a - b`
     - if `op === "*"` → `a * b`
     - if `op === "/"` → `a / b`
     - if `op === "%"` → `a % b`
5. **Unary branch (1 input)**
   - Ask for `x` with one prompt
   - Convert to number
   - If `x` is `NaN` → `"Invalid number."`
   - Otherwise:
     - `"%0"` means: return `10% of x` → `x * 0.10`
6. **Fallback**
   - If neither branch applies, op is not supported
   - Show: `"Invalid operation."`

------

## 7. Why This Version Feels Clean

- Objects (`binaryOps`, `unaryOps`) give **structure**:
  - Separate domains: 2-input vs 1-input
  - Membership checks are simple: `if (binaryOps[op]) { ... }`
- The shape of the program is **clear and symmetric**:
  - One big block for binary
  - One big block for unary
  - One safety block for invalid operators
- Input validation is done **inside each domain**:
  - 2-number domain validates both numbers
  - 1-number domain only validates one
- Computation is the **last step**, once everything is validated.

This is no longer a “long list of conditionals”;
 it’s a small **architecture** with:

- domains,
- gates,
- inputs,
- validation,
- and then behavior.

Perfect for early JS, but already thinking like a system designer. 🧠✨