const calcAverage = (firstScore, secondScore, thirdScore) =>
  (firstScore + secondScore + thirdScore) / 3;

const checkWinner = (avgDolphines, avgKoalas) => {
  if (avgDolphines >= 2 * avgKoalas) {
    console.log(`Dolphines win (${avgDolphines} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphines) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphines})`);
  } else {
    console.log(`No team won`);
  }
};

// Test Data One
let dolphinesAverageScore = calcAverage(44, 23, 71);
let koalasAverageScore = calcAverage(65, 54, 49);
console.log(dolphinesAverageScore, koalasAverageScore);
checkWinner(dolphinesAverageScore, koalasAverageScore);

// Test Data two
dolphinesAverageScore = calcAverage(85, 54, 41);
koalasAverageScore = calcAverage(23, 34, 27);
console.log(dolphinesAverageScore, koalasAverageScore);
checkWinner(dolphinesAverageScore, koalasAverageScore);
