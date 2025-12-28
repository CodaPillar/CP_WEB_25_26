/*for (let i = 1; i <= 5; i++) 
  console.log(i);*/
/*
for (let i = 1; i <=20; i++)
 console.log(i);
*/
/*
for (let p = 2; p <=50; p = p+2 )
let word = prompt("Indica una palabra");
let rep = "";  // accumulator (string zero)

for (let w = 1; w <= 10; w++) {
  rep += word;   // add the word one time per iteration
}

console.log(rep); */

let word = prompt("Indica una palabra");
let rep = ""; 
for ( let w = 1; w <=10; w++ ){
     rep += word +"\n";
}
console.log (rep);


let total = 0;

for (let i = 1; i <= 5; i++) {
  total += i;
  console.log("i =", i, " total =", total);
}
/*
for (let i = 1; i <= 5; i++) {
  console.log(i);
}*/
/*
let n = Number(prompt("introduce un numero: "));
let value  = 0; 
for (let i = 1; i <= 5; i++){
     value = n + i; 
     console.log(" i =", i, "total = ", value);
}*/
/*
let n = Number(prompt("introduce un numero: "));
let value  = 0; 
for (let i = 1; i <=n; i++){
     value = value + i
    console.log("Total =", value);
}*/

/*
let n = Number(prompt("Introduce un numero:"));
let value = 0;  // accumulator

for (let i = 1; i <= n; i++) {
  value += i;   // accumulate
  console.log("i =", i, "| value now =", value);
}

console.log("Total =", value);
*/
for (let i = 10; i >= 0; i--) {

  if (i === 3 || i === 2 || i === 1) {
    console.log(i + " - Attention, imminent launching!");

  } else if (i === 0) {
    console.log("Take off!");

  } else {
    console.log(i);
  }

}
