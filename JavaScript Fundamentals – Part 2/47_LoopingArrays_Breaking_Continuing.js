const koushikArray = [
  "Koushik",
  "Dutta",
  2023 - 1999,
  "Developer",
  ["ABC", "PQR", "XYZ"],
  true,
];

const types = [];

for (let i = 0; i < koushikArray.length; i++) {
  // reading from koushik array
  console.log(koushikArray[i]);
  // Filling types array
  //   types[i] = typeof koushikArray[i];
  types.push(typeof koushikArray[i]);
}

console.log(types);

const years = [1999, 2002, 2019, 2022];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(ages);

// continue and Break statement
console.log("---ONLY STRING---");
for (let i = 0; i < koushikArray.length; i++) {
  if (typeof koushikArray[i] !== "string") continue;
  console.log(koushikArray[i]);
}

console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < koushikArray.length; i++) {
  if (typeof koushikArray[i] === "number") break;
  console.log(koushikArray[i]);
}
