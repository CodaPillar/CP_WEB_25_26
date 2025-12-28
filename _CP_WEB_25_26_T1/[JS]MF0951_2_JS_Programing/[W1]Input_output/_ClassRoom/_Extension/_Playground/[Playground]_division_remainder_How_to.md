# 🟢 **PLAYGROUND PART 1 — Single Coin Type (0.50€)**

This is the cleanest starting point.

```js
let c50 = Number(prompt("How many 0.50 coins?"));

let units50 = Math.floor(c50 / 2);   // full euros from 0.50 coins
let rem50 = c50 % 2;                 // leftover 0.50 coins
let rem50cents = rem50 * 50;         // leftover in cents

console.log("0.50 playground");
console.log("Full euros from 0.50: " + units50);
console.log("Leftover 0.50 coins: " + rem50);
console.log("Leftover cents: " + rem50cents);
```

Run it with:

- 1
- 2
- 3
- 7
- 11

Watch the pattern.

This is your first “rhythm”.

------

# 🟡 **PLAYGROUND PART 2 — Single Coin Type (0.20€)**

Same structure, new divisor and new cent value.

```
let c20 = Number(prompt("How many 0.20 coins?"));

let units20 = Math.floor(c20 / 5);   // groups of 5 make 1 euro
let rem20 = c20 % 5;                 // leftover coins
let rem20cents = rem20 * 20;

console.log("0.20 playground");
console.log("Full euros from 0.20: " + units20);
console.log("Leftover 0.20 coins: " + rem20);
console.log("Leftover cents: " + rem20cents);
```

Try:

- 1
- 5
- 6
- 12
- 17

Notice how `5` is a clean threshold.

------

# 🟣 **PLAYGROUND PART 3 — Single Coin Type (0.10€)**

```
let c10 = Number(prompt("How many 0.10 coins?"));

let units10 = Math.floor(c10 / 10);  // 10 coins make 1 euro
let rem10 = c10 % 10;
let rem10cents = rem10 * 10;

console.log("0.10 playground");
console.log("Full euros from 0.10: " + units10);
console.log("Leftover 0.10 coins: " + rem10);
console.log("Leftover cents: " + rem10cents);
```

Try:

- 7
- 10
- 13
- 25

You’ll start seeing how “10s” create the rhythm.

------

# 🔵 **PLAYGROUND PART 4 — Combine them (still with training mode)**

Now put all three together but **DO NOT** calculate totals.
 Just practice rhythms:

```
let c50 = Number(prompt("0.50 coins:"));
let c20 = Number(prompt("0.20 coins:"));
let c10 = Number(prompt("0.10 coins:"));

console.log("\n--- 0.50 € ---");
console.log("Euros: " + Math.floor(c50 / 2));
console.log("Leftovers: " + (c50 % 2));
console.log("Cents from leftovers: " + ((c50 % 2) * 50));

console.log("\n--- 0.20 € ---");
console.log("Euros: " + Math.floor(c20 / 5));
console.log("Leftovers: " + (c20 % 5));
console.log("Cents from leftovers: " + ((c20 % 5) * 20));

console.log("\n--- 0.10 € ---");
console.log("Euros: " + Math.floor(c10 / 10));
console.log("Leftovers: " + (c10 % 10));
console.log("Cents from leftovers: " + ((c10 % 10) * 10));
```

Still no combining.
 Just **seeing** the units vs leftovers for each kind of coin.

This is how you train a *mental scan*.

------

# 🟢 **PLAYGROUND PART 5 — Add 1€ and 2€ coins (but still separate)**

You treat them exactly the same way:

### For 1€:

```
let c1 = Number(prompt("1€ coins:"));
console.log("Euros: " + c1);
console.log("Leftover cents: 0");
```

### For 2€:

This one is interesting:

You *can* think:

- each 2€ = 2 euros
   OR
- each 2€ = 1 “unit of 2€

But **your logic prefers uniform units**, so let's match that:

```
let c2 = Number(prompt("2€ coins:"));
console.log("Euros: " + (c2 * 2));  // because each is worth 2 euros
console.log("Leftover cents: 0");
```

This prepares your brain for the final all-in-cents version.