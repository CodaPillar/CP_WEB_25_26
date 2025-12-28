// regex_playground_level1.js
// Week 1 – Basic Regular Expressions (JS DevTools Playground)

// ---------------------------------------------------------
// Helper to test patterns quickly
// ---------------------------------------------------------
function testPattern(label, pattern, samples) {
  console.log(`\n=== ${label} ===`);
  console.log(`Pattern: ${pattern}`);
  samples.forEach(str => {
    const result = pattern.test(str);
    console.log(`  ${JSON.stringify(str)} -> ${result}`);
  });
}

// ---------------------------------------------------------
// 1. Single-character classes: .  \d  \w  \s
// ---------------------------------------------------------
testPattern("Any single char (.)", /^.$/, ["A", "7", " ", "AB", ""]);
testPattern("Digit (\\d)", /^\d$/, ["5", "a", " ", "42"]);
testPattern("Word char (\\w)", /^\w$/, ["A", "z", "7", "_", ".", " "]);
testPattern("Whitespace (\\s)", /^\s$/, [" ", "\t", "A"]);

// ---------------------------------------------------------
// 2. Character sets: [aeiou]  [^aeiou]
// ---------------------------------------------------------
testPattern(
  "Single vowel [aeiou]",
  /^[aeiou]$/,
  ["a", "e", "i", "b", "x", "ae"]
);

testPattern(
  "Single non-vowel [^aeiou]",
  /^[^aeiou]$/,
  ["b", "x", "a", "e", "i", "ou"]
);

// ---------------------------------------------------------
// 3. Anchors: ^  $
// ---------------------------------------------------------
testPattern(
  "Starts with 'A'",
  /^A/,
  ["Ana", "BA", "A", " xA"]
);

testPattern(
  "Ends with 'end'",
  /end$/,
  ["the end", "ended", "friend", "gameend"]
);

// ---------------------------------------------------------
// 4. Simple quantifiers: *  +  ?  {n}
// ---------------------------------------------------------
testPattern(
  "One or more digits (\\d+)",
  /^\d+$/,
  ["1", "123", "a1", "12b", ""]
);

testPattern(
  "Zero or more digits (\\d*)",
  /^\d*$/,
  ["", "0", "123", "12a"]
);

testPattern(
  "Optional minus sign then digits (-?\\d+)",
  /^-?\d+$/,
  ["5", "-5", "--5", "5-5", "a"]
);

testPattern(
  "Exactly 3 digits (\\d{3})",
  /^\d{3}$/,
  ["123", "12", "1234", "abc", "1a3"]
);

// ---------------------------------------------------------
// 5. Groups + OR: ( )  |
// ---------------------------------------------------------
testPattern(
  "Word 'cat' or 'dog'",
  /^(cat|dog)$/,
  ["cat", "dog", "cats", "hotdog"]
);

testPattern(
  "Year 19xx or 20xx",
  /^(19|20)\d{2}$/,
  ["1999", "2015", "1899", "2100"]
);

// ---------------------------------------------------------
// 6. Small practical examples
// ---------------------------------------------------------

// Example A: simple 5-digit postal code
testPattern(
  "Postal code: 5 digits",
  /^\d{5}$/,
  ["08912", "1234", "123456", "08A12"]
);

// Example B: name + 2 digits, e.g. "ana22"
testPattern(
  "Name + 2 digits",
  /^[A-Za-z]+\d{2}$/,
  ["ana22", "Bob99", "ana2", "99Bob", "ana_22"]
);

// Tip: edit patterns & sample arrays and rerun the file.
console.log("\nReady. Edit patterns, rerun, and observe.");
