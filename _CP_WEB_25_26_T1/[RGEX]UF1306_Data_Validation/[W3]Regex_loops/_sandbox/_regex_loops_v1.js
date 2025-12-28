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
