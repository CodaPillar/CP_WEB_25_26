## `loops_showcase.md`
# Loops — Quick Concepts

**Choosing a loop**
- `for (init; test; step)`: known number of iterations
- `while (test)`: keep going while condition is true
- `do { ... } while (test)`: run at least once
- `for...of`: iterate values in arrays / iterables
- `for...in`: iterate keys (objects); avoid on arrays when order matters

**Flow control**
- `break`: exit the loop
- `continue`: skip to next iteration

```js
for (const v of [10,20,30]) {
  if (v === 20) continue;
  console.log(v);
}