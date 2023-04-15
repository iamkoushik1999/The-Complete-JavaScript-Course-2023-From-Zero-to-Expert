const friends = ["Ram", "Sham", "Sita"];
console.log(friends);

const year = new Array(1999, 2002, 2019, 2023);
console.log(year);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Gita";
console.log(friends);

const firstName = "Koushik";
const koushik = [firstName, "Dutta", 2023 - 1999, "Developer", friends];
console.log(koushik);

//Excersice
const calAge = function (birthYear) {
  return 2023 - birthYear;
};

const years = [1999, 2002, 2011, 2019, 2022];

const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [age1, age2, age3];
const ages = [
  calAge(years[0]),
  calAge(years[1]),
  calAge(years[years.length - 1]),
];
console.log(ages);
