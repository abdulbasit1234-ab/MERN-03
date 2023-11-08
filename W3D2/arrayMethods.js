import { printName } from "./checkImport";

// Ascending Order

const names = ["Kareem" , "Jameel", "Kaleem" , "Basit"];

const orderNames = names.sort();

console.log(orderNames);

// Descending Order

const desNames = names.sort((a , b) => b.localeCompare(a));

console.log(desNames);

// Rest Operator

let fruits = ["Banana" , "Apple" , "Guava" , "MAngo"];

let [first , second , ...restFruits] = fruits;

console.log(restFruits);

// Spread Operator

let fruitsCopy = [...fruits];

console.log(fruitsCopy);

// Multiple Spread Operator

let ocean = ["Atlantic Ocean" , "Indian Ocean" , "Pacific Ocean"];

let continents = ["Asia" , "Europe" , "Africa" , "Australia"];

let oceanAndContinents = [...ocean , ...continents];

console.log(oceanAndContinents);

printName("Nawaz Sharif");