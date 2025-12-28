## **Q1**

Regex:

```
^\d{3,4}$
```

Which match?

A) `123`
 B) `12`
 C) `1234`
 D) `12345`

a) c)

------

## **Q2**

Regex:

```
^[A-Z][a-z]+$
```

Which match?

A) `Hello`
 B) `HELLO`
 C) `H`
 D) `Hello1`

A)

------

## **Q3**

Regex:

```
^colou?r$
```

Which match?

A) `color`
 B) `colour`
 C) `colouur`
 D) `colo`

A) B)

------

## **Q4**

Regex:

```
^\d{2}(?:-\d{2}){2}$
```

Which match?

A) `12-34-56`
 B) `12-345-6`
 C) `1-23-45`
 D) `12--34--56`

a)

------

## **Q5**

Regex:

```
^(cat|dog|rat)s?$
```

Which match?

A) `cat`
 B) `cats`
 C) `dogss`
 D) `rats`

A)B)D)

------

## **Q6**

Regex:

```
^[^0-9]+$
```

Which match?

A) `hello`
 B) `hi2`
 C) `!!!`
 D) `A_B_9`

a) C)

------

## **Q7**

Regex:

```
^\w+\s\w+$
```

Which match?

A) `hello world`
 B) `hello  world`
 C) `hello-world`
 D) `hello`

A)

------

## **Q8**

Regex:

```
^\d{2}(?:\s\d{4}){3}$
```

Which match?

A) `12 3456 7890 1111`
 B) `12 3456 7890`
 C) `12   3456 7890 1111`
 D) `123 3456 7890 1111`

A)

------

## **Q9**

Regex:

```
^(ha){3,5}!$
```

Which match?

A) `hahaha!`
 B) `hahahaha!`
 C) `hahahahahaha!`
 D) `haha!`

A) B)

------

## **Q10**

Regex:

```
^[A-Z]{3}\d?$ 
```

Which match?

A) `ABC`
 B) `ABCD`
 C) `ABC4`
 D) `AB4`

C)

------

## **Q11**

Regex:

```
^\d+(?:\.\d+)?$
```

Which match? *(decimal allowed)*

A) `12`
 B) `12.5`
 C) `12.`
 D) `.5\

B)

------

## **Q12**

Regex:

```
^(red|blue|green)[0-9]{2}$
```

Which match?

A) `red12`
 B) `blue5`
 C) `green34`
 D) `green345`

c)

------

## **Q13**

Regex:

```
^[A-Za-z_]\w*$
```

Which match?

A) `_start`
 B) `1start`
 C) `Start9`
 D) `Start-9`

A)C)

------

## **Q14**

Regex:

```
^\d{1,2}\/\d{1,2}\/\d{4}$
```

Which match?

A) `1/2/2024`
 B) `12/12/24`
 C) `01/02/2024`
 D) `1-2-2024`

A) B)

------

## **Q15**

Regex:

```
^(?:[A-Z]{2}\d){2}$
```

Which match?

A) `AB12CD34`
 B) `AB12CD`
 C) `AB12CD345`
 D) `AB12CD34EF56`

A)

------

## **Q16**

Regex:

```
^[a-z]+@[a-z]+\.(com|es)$
```

Which match?

A) `hello@world.com`
 B) `Hello@world.com`
 C) `test@domain.es`
 D) `user@site.co`

A) C)

------

## **Q17**

Regex:

```
^(\d{3}-){2}\d{3}$
```

Which match?

A) `123-456-789`
 B) `12-345-678`
 C) `123-4567-89`
 D) `123-456-7890 `

A)

------

## **Q18**

Regex:

```
^\d{2}:?\d{2}$
```

Which match?

A) `1234`
 B) `12:34`
 C) `12`
 D) `1:234`

B)

------

## **Q19**

Regex:

```
^[A-Z]+[0-9]*$
```

Which match?

A) `ABC`
 B) `ABC123`
 C) `A123B`
 D) `ABc123`

A) B)

------

## **Q20**

Regex:

```
^\s*\d+\s*$ 
```

Which match?

A) `123`
 B) `  456  `
 C) `78 90`
 D) `12a`

B)