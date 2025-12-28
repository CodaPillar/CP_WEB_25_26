```js
let total = 0;

for (let i = 1; i <= 50; i++) {
  total += i;
}

console.log(total);
```



### 📝 **STUDENT NOTE — Why `total` must be inside the loop**

When we calculate the sum of numbers with a loop, the variable `i` changes every time the loop repeats. That means the addition also needs to happen every time.
 If I put `total += i` **inside** the loop, I am adding one number per iteration:

```
first iteration  → add 1  
second iteration → add 2  
third iteration  → add 3  
...
last iteration   → add 50
```

This is the correct behaviour, because the total is built step by step.

But if I put `total += i` **outside** the loop, it will only run **once**, after the loop ends. At that moment, `i` no longer goes from 1 to 50 — it only has its final value. So the sum will not be calculated; it will only add one single number, which is incorrect.

So the rule is:

> **All operations that depend on the changing loop variable must go INSIDE the loop.**
>  The final result (console.log) is what goes OUTSIDE, because we only want to show the total once the loop has finished doing all the additions.

```js
// Incorrect result 
let sum = 0;
for (let i = 1; i <= 50; i++) {
  //sum += i;
}
sum += i;
console.log(sum);
```

Inside the loop, we write:

```
for (let i = 1; i <= 50; i++)
```

The important detail is **`let i`**.
 When we declare a variable with `let` inside a loop, that variable exists **only inside the loop’s block**.

This is called **block scope**.

So:

- **Inside the loop** → `i` exists
- **Outside the loop** → `i` does *not* exist

That’s why JavaScript says:

> **“i is not defined”**

Because outside the `for` loop, there is no `i` anymore.



`i` only exists inside the loop because we declared it with `let` in the loop header. When the loop finishes, `i` disappears. That’s why `sum += i` outside the loop gives “i is not defined.”
 This also shows why the addition must happen inside the loop: the loop variable is created, used, and destroyed within that block.