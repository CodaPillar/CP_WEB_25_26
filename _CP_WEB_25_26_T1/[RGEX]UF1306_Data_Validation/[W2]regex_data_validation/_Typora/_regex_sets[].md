### 📄 **DOCUMENT 1 — SETS + QUANTIFIERS (EXAM MASTER TABLE)**

### **1. What a SET is**

| Syntax   | Meaning                                            | Notes                     |
| -------- | -------------------------------------------------- | ------------------------- |
| `[abc]`  | one character: a OR b OR c                         | always ONE character      |
| `[A-Z]`  | one uppercase letter                               | range                     |
| `[0-9]`  | one digit                                          | digits only               |
| `[\w.-]` | one character from: letters, digits, `_`, `.`, `-` | common in email/domain    |
| `[^0-9]` | one NON-digit                                      | caret (^) causes negation |

⚠️ **A SET always matches exactly ONE character** unless you add a quantifier.

------

### ⭐ **2. SETS with QUANTIFIERS**

Quantifier = modifies “how many times the set repeats”.

| Pattern      | Meaning                       | Allows empty? | Examples matched          |
| ------------ | ----------------------------- | ------------- | ------------------------- |
| `[A-Za-z]*`  | zero or more letters          | ✅ yes         | `""`, `"a"`, `"abc"`      |
| `[A-Za-z]+`  | one or more letters           | ❌ no          | `"a"`, `"abc"`            |
| `[A-Za-z]?`  | zero or one letter            | ✅ yes         | `""`, `"a"`               |
| `[0-9]{3}`   | exactly 3 digits              | ❌ no          | `"123"`                   |
| `[0-9]{1,3}` | 1 to 3 digits                 | ❌ no          | `"5"`, `"50"`, `"500"`    |
| `[abc]{2,}`  | 2 or more characters from set | ❌ no          | `"aa"`, `"bc"`, `"acbca"` |

------

### ⭐ **3. Combined SET patterns (typical exam scenarios)**

### **Letters followed by digits**

```
[A-Za-z][0-9]+
```

→ one letter + one or more digits:
 `A5`, `B123`, `d9`

------

### **Allow letters OR digits, unlimited**

```
[A-Za-z0-9]*
```

Used for optional names, domains, tags.

------

### **At least one allowed word character**

```
\w+
```

Equivalent to `[A-Za-z0-9_]+`.

------

### **Digit or dot or hyphen**

```
[0-9.-]
```

Used in domain or IP matches.

------

### **Forbidden set (negation)**

```
[^0-9]
```

→ any character that is **not** a digit.

------

### ⭐ **4. SETS cheat definitions (simple)**

- `[ ]` → choose **one character** from inside.
- `[ ]*` → choose **zero or more** characters from inside.
- `[ ]+` → choose **one or more** characters from inside.
- `[ ]?` → choose **zero or one** character.
- `{n}` → choose **exactly n** characters from inside.
- `{n,m}` → choose between n and m characters.

------

### ⭐ **5. SET mistakes (exam traps)**

#### ❌ `[A-Za-z0-9]*` allows empty → HTML tags become invalid

#### ❌ `\w+` does NOT allow hyphens → invalid for domain names

#### ❌ `[0-9]` matches one digit only → not whole numbers

#### ❌ `[^a-z]` means “NOT a-z”, not “uppercase”

#### ❌ `[A-Z]?` may be empty — cannot guarantee a starting uppercase

These show up often in validation tasks.