const firstName = "Koushik";
const job = "developer";
const birthYear = 1999;
const year = 2023;

const koushik =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(koushik);

const koushikNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(koushikNew);

console.log("Just a regular string...");

console.log(
  "String with \n\
multiple\n\
lines"
);

console.log("--------------");

console.log(`String
multiple
lines`);
