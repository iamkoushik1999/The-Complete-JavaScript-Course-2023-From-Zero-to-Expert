const koushikArray = [
  "Koushik",
  "Dutta",
  2023 - 1999,
  "Developer",
  ["ABC", "PQR", "XYZ"],
];

for (let i = koushikArray.length - 1; i >= 0; i--) {
  // const element = array[i];
  console.log(i, koushikArray[i]);
}

for (let excersice = 1; excersice < 4; excersice++) {
  console.log(`---Starting excersice ${excersice}`);

  for (let rep = 0; rep < 6; rep++) {
    console.log(`Excercise ${excersice}: Lifting weight repetation ${rep}`);
  }
}
