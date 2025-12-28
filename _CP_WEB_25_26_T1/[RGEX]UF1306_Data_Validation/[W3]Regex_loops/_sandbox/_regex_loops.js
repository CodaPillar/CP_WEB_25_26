//test presence of email

const regex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;

let cadena = prompt("Introduce tu info:");
let box = cadena.match(regex);

if (box !== null) {
  for (let i = 0; i < box.length; i++) {
    console.log("Element " + i);
    console.log(box[i]);
  }
} else {
  console.log("No match found");
}

// test presence of numbers 
  const regex = /\d+/;
   let cadena = prompt("Intro una oracio amb numeros ");
   console.log(cadena.match(regex)); 

// test presence numbers and print
const regex = /\d+/;
   let cadena = prompt("Intro una oracio amb numeros ");
   let box = cadena.match(regex);
   for (let i=0 ; i<box.length; i++){
   console.log("Element " +i);
   console.log(box[i]); 
}
//test presence of capital letters
const regex = /[A-Z]+/;
   let cadena = prompt("Intro tu info ");
   let box = cadena.match(regex);
   for (let i=0 ; i<box.length; i++){
   console.log("Element " +i);
   console.log(box[i]); 
}
//Test legth of password
const regex = /^\w{6}$/;
   let cadena = prompt("Intro the pass");
   let val = cadena.matchAll(regex);
   console.log(val);
   for (let i = 0, i < val.length; i++)
   console.log(val[i]); 

//test presence of capital letters and numbers 

 const regex = /^\w{6}$/;
   let cadena = prompt("Intro the byte pass");
   console.log(cadena.match(regex)); 