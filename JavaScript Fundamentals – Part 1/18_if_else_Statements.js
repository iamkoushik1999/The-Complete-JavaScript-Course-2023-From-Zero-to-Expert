// const age = 19;
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Can start driving...");
} else {
  const yearsLeft = 18 - age;
  console.log(`Still ${yearsLeft} years left`);
}

// const birthYear = 1999;
const birthYear = 2002;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
