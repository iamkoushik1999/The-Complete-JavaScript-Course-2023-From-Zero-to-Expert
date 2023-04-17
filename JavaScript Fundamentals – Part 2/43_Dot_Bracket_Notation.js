// object
const koushik = {
  firstName: "koushik",
  lastName: "dutta",
  lastage: 2023 - 1999,
  job: "developer",
  friends: ["abc", "pqr", "xyz"],
};

console.log(koushik);

// Dot Notation
console.log(koushik.lastName);

// Bracket Notation
console.log(koushik["lastName"]);

const nameKey = "Name";
console.log(koushik["first" + nameKey]);

const lastKey = "last";
console.log(koushik[lastKey + "Name"]);
console.log(koushik[lastKey + "age"]);

// console.log(koushik[lastKey + nameKey]);

// const interestedIn = prompt("What do you want to know?");
// console.log(koushik[interestedIn]);

console.log(
  `${koushik.firstName} has ${koushik.friends.length} friends and his best frienhd is ${koushik.friends[0]}`
);
