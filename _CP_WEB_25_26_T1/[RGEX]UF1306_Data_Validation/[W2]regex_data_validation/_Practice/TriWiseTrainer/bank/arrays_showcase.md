# Arrays — Quick Concepts

**Core ideas**
- Arrays are ordered collections; zero-based index.
- `length` is the count of elements, **not** the last index.
- Mutating vs non-mutating:
  - Mutate: `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`
  - Don’t mutate: `slice`, `map`, `filter`, `reduce`, `find`, `includes`

**Patterns**
- Append: `arr.push(x)`
- Prepend: `arr.unshift(x)`
- Copy a portion: `arr.slice(start, end)` (end not included)
- Insert/remove in place: `arr.splice(start, deleteCount, ...items)`
- Transform: `arr.map(fn)`
- Select: `arr.filter(predicate)`
- Aggregate: `arr.reduce(reducer, initial)`

```js
const nums = [3, 1, 2];
nums.sort();     // [1, 2, 3]
nums.slice(0,2); // [1, 2]
nums.includes(2) // true