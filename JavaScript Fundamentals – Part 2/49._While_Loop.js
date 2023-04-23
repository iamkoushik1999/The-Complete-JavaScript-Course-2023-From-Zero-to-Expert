// For Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// While Loop
// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE : Lifting weights repetition ${rep}`);
//   rep++;
// }

// Without counter
let dice = Math.trunc(Math.random() * 6) + 1;
// Math.trunc because normally Math.random returns decimal number
// console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a dice ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}
