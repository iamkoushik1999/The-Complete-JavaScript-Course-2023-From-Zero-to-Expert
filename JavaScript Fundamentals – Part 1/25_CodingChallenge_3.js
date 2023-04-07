// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphines wins");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas wins");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Draw");
// }

// Bonus 1

const scoreDolphinsB1 = (97 + 112 + 101) / 3;
const scoreKoalasB1 = (109 + 95 + 106) / 3;

console.log(scoreDolphinsB1, scoreKoalasB1);

if (scoreDolphinsB1 > scoreKoalasB1 && scoreDolphinsB1 >= 100) {
  console.log("Dolphines wins");
} else if (scoreKoalasB1 > scoreDolphinsB1 && scoreKoalasB1 >= 100) {
  console.log("Koalas wins");
} else if (
  scoreDolphinsB1 === scoreKoalasB1 &&
  scoreDolphinsB1 >= 100 &&
  scoreKoalasB1 >= 100
) {
  console.log("Both wins");
} else {
  console.log("No one wins anything");
}

// Bonus 2

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphines wins");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas wins");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both wins");
} else {
  console.log("No one wins anything");
}
