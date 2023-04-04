// Assignment Operators

let x = 10 + 5;
console.log("x = 10 + 5 = " + x);
x += 10;
console.log("x += 10 = " + x);
x *= 4;
console.log("x *= 4 = " + x);
x /= 4;
console.log("x /= 4 = " + x);
x++;
console.log("x++ = " + x);
x--;
console.log("x-- = " + x);
x--;
console.log("x-- = " + x);

// console.log(25 - 10 - 5)
// console.log(5 - 10 - 25)
console.log("-----------------------------");
const now = 2023;
const ageRam = now - 1999;
const ageSham = now - 2002;

console.log(now - 1999 > now - 2002);

let a, b;
a = b = 25 - 10 - 5;
console.log(a, b);

const averageAge = (ageRam + ageSham) / 2;
console.log(ageRam, ageSham, averageAge);
