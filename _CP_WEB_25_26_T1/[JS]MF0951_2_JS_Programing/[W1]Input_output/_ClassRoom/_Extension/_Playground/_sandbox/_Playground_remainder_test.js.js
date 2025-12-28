/*let c50 = Number(prompt("How many 0.50 coins?"));

let units50 = Math.floor(c50 / 2);
// full euros from 0.50 coins
let rem50 = c50 % 2;
// leftover 0.50 coins
let rem50cents = rem50 * 50;
// leftover in cents

console.log("0.50 playground");
console.log("Full euros from 0.50: " + units50);
console.log("Leftover 0.50 coins: " + rem50);
console.log("Leftover cents: " + rem50cents); */

// Trainer for 0.50 coins

function test50(c50) {
    let units50 = Math.floor(c50 / 2);
    let rem50 = c50 % 2;
    let rem50cents = rem50 * 50;

    console.log("=== 0.50 Coin Trainer ===");
    console.log("Input (coins): " + c50);
    console.log("Full euros:     " + units50);
    console.log("Leftover coins: " + rem50);
    console.log("Leftover cents: " + rem50cents);
    console.log("--------------------------");
}


// Trainer for 0.20 coins
function test20(c20) {
  let units20 = Math.floor(c20 / 5);
  let rem20 = c20 % 5;
  let rem20cents = rem20 * 20;

  console.log("=== 0.20 Coin Trainer ===");
  console.log("Input (coins): " + c20);
  console.log("Full euros:     " + units20);
  console.log("Leftover coins: " + rem20);
  console.log("Leftover cents: " + rem20cents);
  console.log("--------------------------");
}


// Trainer for 0.10 coins
function test10(c10) {
  let units10 = Math.floor(c10 / 10);
  let rem10 = c10 % 10;
  let rem10cents = rem10 * 10;

  console.log("=== 0.10 Coin Trainer ===");
  console.log("Input (coins): " + c10);
  console.log("Full euros:     " + units10);
  console.log("Leftover coins: " + rem10);
  console.log("Leftover cents: " + rem10cents);
  console.log("--------------------------");
}

console.log("Codapillar Playground loaded 🐛");