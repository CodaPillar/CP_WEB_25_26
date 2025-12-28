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
let op = prompt("Operation: Choose an operation: +,-,*,/,%,%0");

if (binaryOps[op]) {
 let a = Number(prompt("First number:")) ;
 let b = Number(promt("Second number:"));
 if (isNaN(a) || (isNaN(b))){
 console.log("Invalid Number")
 } else {
   if (op === "+") console.log((a+b));
   else if (op === "-") console.log(a - b); 
   else if (op === "*") console.log(a * b); 
   else if (op === "/") console.log(a / b);
   else if (op === "%") console.log(a % b);
 } 
} 
 else if(unaryOps[op]) {
 let x = Number(prompt("Enter a number:"));
 if (isNaN(x)){
console.log("Invalid number.")
 } else {
 if (op === "%0") console.log(x * 0.10);
  else{ console.log("Invalid operation.")}
 }
}

```

## 1. The Goal of This Little Project

We want a **console calculator** that:

- Asks the user which operation they want to perform.
- Supports:
  - `+` (addition)
  - `-` (subtraction)
  - `*` (multiplication)
  - `/` (division)
  - `%` (modulo / remainder)
  - `%0` (a unary operation: “10% of a number”)
- Asks for **two numbers** for binary operations and **one number** for the unary one.
- Validates both:
  - that the **operation** is allowed
  - that the **inputs** are numbers

------

## 2. Creating Objects for Operation Domains

Instead of using long chains like:

```js
if (op === "+") { ... }
else if (op === "-") { ... }
...
```

we define **two objects** that describe the *operation domains*:

```
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
```

### 2.1. Why Objects?

- An **object** in JavaScript is a collection of **key → value** pairs.
- In this project:
  - The **keys** are the operation symbols (e.g. `"+"`, `"-"`, `"%0"`).
  - The **values** are just strings (`"binary"`, `"unary"`) used as **truthy flags**.

We don’t care about the exact string text; we only care that:

- `binaryOps[op]` is **truthy** if `op` is a binary operation.
- `unaryOps[op]` is **truthy** if `op` is a unary operation.

### 2.2. Membership Test Using Objects

Instead of:

```
["+", "-", "*", "/"].includes(op)
```

we now use:

```
if (binaryOps[op]) {
  // op belongs to the binary domain
}
```

- If `op` is a key in `binaryOps`, then `binaryOps[op]` returns `"binary"` (truthy).
- If not, `binaryOps[op]` returns `undefined` (falsy).

This is our **object-based set membership test**.

------

## 3. Core Program Structure

Here is the reference version of the program:

```
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
    // Only %0 exists in the unary set
    console.log(x * 0.10);   // 10% of x
  }

} else {

  console.log("Invalid operation.");

}
```

------

## 4. Understanding the Main Conditional Branches

The **outer structure** is one big `if / else if / else` that separates the **three main situations**:

1. `if (binaryOps[op]) { ... }`
    → the operation is in the **binary domain**
2. `else if (unaryOps[op]) { ... }`
    → the operation is in the **unary domain**
3. `else { ... }`
    → the operation is **not valid** (not in any domain)

So the program flow is:

1. Ask for `op`.
2. Check: does `op` belong to the binary object?
3. If not, check: does `op` belong to the unary object?
4. If not, report invalid operation.

------

## 5. Sub-branches Inside Each Domain

### 5.1. Binary Branch (Two Inputs)

Inside:

```
if (binaryOps[op]) {
  ...
}
```

we have two levels:

1. **Input & validation**

   ```
   let a = Number(prompt("First number:"));
   let b = Number(prompt("Second number:"));
   
   if (isNaN(a) || isNaN(b)) {
     console.log("Invalid number");
   } else {
     // safe zone: both are valid numbers
   }
   ```

   - We ask for **two prompts**.
   - We convert both to numbers using `Number(...)`.
   - We test for invalid numeric input using `isNaN(...)`.
   - If any input is not a number, we show `"Invalid number"` and skip calculations.

2. **Computation block (only when inputs are valid)**

   ```
   if (op === "+")      console.log(a + b);
   else if (op === "-") console.log(a - b);
   else if (op === "*") console.log(a * b);
   else if (op === "/") console.log(a / b);
   else if (op === "%") console.log(a % b);
   ```

   This block:

   - Uses the same `op` symbol.
   - Chooses the correct arithmetic rule.
   - Outputs the result to the console.

### 5.2. Unary Branch (One Input)

Inside:

```
else if (unaryOps[op]) {
  ...
}
```

we also have:

1. **Input & validation**

   ```
   let x = Number(prompt("Enter a number:"));
   
   if (isNaN(x)) {
     console.log("Invalid number.");
   } else {
     // safe zone: x is a valid number
   }
   ```

   - Only **one** prompt.
   - Validation is simpler: only check `x`.

2. **Computation block**

   ```
   console.log(x * 0.10);   // 10% of x
   ```

   - Since only `%0` lives inside `unaryOps`, we don’t need another `if`.
   - Operation: compute 10% of the given number.

### 5.3. Final Else: Invalid Operation

```
else {
  console.log("Invalid operation.");
}
```

This is a **catch-all** for any `op` that does not belong to either object.

------

## 6. ASCII Flow Diagram

### 6.1. High-Level Flow

```assembly
                  ┌─────────────────────────────┐
                  │   Ask user for operation    │
                  │ op = prompt("...")         │
                  └─────────────┬──────────────┘
                                │
                  ┌─────────────┴──────────────┐
                  │                            │
        ┌─────────▼─────────┐        ┌─────────▼─────────┐
        │ if binaryOps[op]  │        │ else if unaryOps[op]
        └─────────┬─────────┘        └─────────┬─────────┘
                  │                            │
          (binary branch)               (unary branch)
                  │                            │
                  │                            │
       ┌──────────▼─────────┐        ┌─────────▼─────────┐
       │ ask a, b           │        │ ask x              │
       │ Number(prompt(...))│        │ Number(prompt(...))│
       └──────────┬─────────┘        └─────────┬─────────┘
                  │                            │
       ┌──────────▼─────────┐        ┌─────────▼─────────┐
       │ validate a, b      │        │ validate x        │
       │ isNaN(a) || isNaN(b│        │ isNaN(x)          │
       └───────┬────────────┘        └─────────┬─────────┘
               │                               │
        ┌──────▼───────┐                ┌──────▼───────┐
        │ invalid num  │                │ invalid num  │
        └──────────────┘                └──────────────┘
               │                               │
               │              ┌────────────────┘
               │              │
       ┌───────▼────────┐     │
       │ compute result │◄────┘
       │ ( + - * / % )  │
       └───────┬────────┘
               │
        ┌──────▼─────────┐
        │  console.log   │
        └────────────────┘
```

And a simple final else (not shown above) catches **invalid operators**.

------

## 7. Flow Overview in Bullet Points

### 7.1. Overall Control Flow

- Prompt user for an operation: `+`, `-`, `*`, `/`, `%`, `%0`.
- **If** `op` is in `binaryOps`:
  - Ask for two numbers.
  - Convert them to `Number`.
  - If either is `NaN` → show `"Invalid number"`.
  - Else:
    - Choose the right arithmetic rule based on `op`.
    - Compute and log the result.
- **Else if** `op` is in `unaryOps`:
  - Ask for one number.
  - Convert it to `Number`.
  - If it is `NaN` → show `"Invalid number."`
  - Else:
    - Compute 10% of the number and log it.
- **Else**:
  - Show `"Invalid operation."`

### 7.2. Responsibilities by Section

- **Objects (`binaryOps`, `unaryOps`)**
  - Define the *universe of allowed operations*.
  - Separate **binary** vs **unary** domains.
  - Provide a simple membership test using `binaryOps[op]` and `unaryOps[op]`.
- **Outer `if / else if / else`**
  - Routes the flow into:
    - Binary domain
    - Unary domain
    - Invalid operation branch
- **Binary branch**
  - Handles operations needing **two inputs**.
  - Validates both inputs.
  - Applies the operation selected by the user.
- **Unary branch**
  - Handles operations needing **one input**.
  - Validates the single input.
  - Applies the unary transformation (here: 10% of x).
- **Validation blocks**
  - Protect the program from invalid user input.
  - Ensure we only compute when inputs are numbers.

------

If you like, next time we can add a **small appendix** where:

- We generalize `%0` from “10% of x” to “any percentage of x”.
- Or we sketch how this structure would look once functions *are* allowed (same architecture, just cleaner).