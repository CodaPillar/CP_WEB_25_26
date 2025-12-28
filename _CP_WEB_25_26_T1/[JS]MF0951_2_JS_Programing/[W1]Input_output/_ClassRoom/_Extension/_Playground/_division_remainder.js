let c50 = Number(prompt("How many 0.50 coins?"));

let units50 = Math.floor(c50 / 2);
// full euros from 0.50 coins
let rem50 = c50 % 2;
// leftover 0.50 coins
let rem50cents = rem50 * 50;
// leftover in cents

console.log("0.50 playground");
console.log("Full euros from 0.50: " + units50);
console.log("Leftover 0.50 coins: " + rem50);
console.log("Leftover cents: " + rem50cents);

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
