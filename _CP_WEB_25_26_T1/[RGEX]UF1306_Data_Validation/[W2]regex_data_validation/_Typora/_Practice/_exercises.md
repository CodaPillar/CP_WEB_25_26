Give a **short answer** (1 line): *What does this match?*

------

## **Q1**

```
^[A-Za-z]+( [A-Za-z]+)*$
```

What does this match?

c

Or 

Case

`[A-Za-z]* `zero or more letters

`[A-Za-z]+`  one or more letters

(Think: letters + space + letters repeated…)

------

## **Q2**

```
^[0-9]{2}(-[0-9]{2}){3}$
```

What does this match?

99-99-99-99 123435-99-99-99 123435-45-23-99

(Think: groups with `{3}` repeat…)

------

## **Q3**

```react
^(ha)+[0-9]*$
```

 ha	haha9  hahahaha9999877

What does this match?

(Group repeated + set repeated)

------

## **Q4**

```
^[A-Z][a-z]*( [A-Z][a-z]*)?$
```

What does this match?



`[A-Za-z]* `zero or more letters

Rss, Socrates, R

(One required + zero-or-more + optional group)

------

## **Q5**

```
^([A-Za-z0-9._-]+)@([A-Za-z0-9.-]+)\.[A-Za-z]{2,}$
```

What does this match?

R.@mail.co 

(This is the “email pattern” but you must indentify the SETS × GROUPS roles)

------

Answer these 5 and we move to:

------

### ⭐ PART 2 — SPOT THE MISTAKE (EXAM TRAPS)

------

## **Q6 (trap)**

```
^([0-9]{2}[/-]){2}[0-9]{4}$
```

Mistake?

**YES / NO? No correct **[/-] but I can't reason or correct how it should be 
 (Hint: separator consistency?)

------

## **Q7 (trap)**

```
^[A-Za-z][A-Za-z0-9]*\s?$
```

Mistake? \s? You can have space or not given that is ?

**YES / NO?**
 (Hint: does this allow trailing space always?)

------

## **Q8 (trap)**

```
^(cat|dog)+$
```

Does this match `"catdog"`?

**YES / NO? **No