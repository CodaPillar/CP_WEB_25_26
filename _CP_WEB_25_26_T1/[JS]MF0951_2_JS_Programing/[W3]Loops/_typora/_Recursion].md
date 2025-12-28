### 📌 **SUMMARY TABLE**

| Expression | Mathematical meaning | Direction | Step size | Typical use                         |
| ---------- | -------------------- | --------- | --------- | ----------------------------------- |
| `x += 2`   | `x = x + 2`          | forward   | +2        | even numbers, skipping, timed jumps |
| `x++`      | `x = x + 1`          | forward   | +1        | standard loops, counting            |
| `x--`      | `x = x - 1`          | backward  | -1        | countdowns, reverse iteration       |

### 🌟 SUMMARY TABLE (super clean)

| Expression | Meaning    | Step size | Example (from 10) |
| ---------- | ---------- | --------- | ----------------- |
| `k--`      | subtract 1 | **1**     | 10 → 9 → 8 → 7    |
| `k -= 2`   | subtract 2 | **2**     | 10 → 8 → 6 → 4    |
| `k -= 3`   | subtract 3 | **3**     | 10 → 7 → 4 → 1    |

`k--` is just a **shorter version** of `k -= 1`.



# 🌱 Why do programmers use `--`?

Because in loops, the **main movement** is usually ±1.
 So the language gives us a shortcut:

- `k++` → k = k + 1
- `k--` → k = k - 1

The idea is to make code cleaner to read.

------

## ⭐ Clean comparison table

| Expression | Meaning    | Expanded form |
| ---------- | ---------- | ------------- |
| `k--`      | subtract 1 | `k = k - 1`   |
| `k -= 1`   | subtract 1 | `k = k - 1`   |
| `k -= 2`   | subtract 2 | `k = k - 2`   |

So yes — **`k--` is exactly the lazy (short) version of `k -= 1`.**