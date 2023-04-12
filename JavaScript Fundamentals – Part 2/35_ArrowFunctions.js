// Arrow Function
const cal_age2 = (birthYear) => 2023 - birthYear;
const age3 = cal_age2(1999);
console.log(`Age -> `, age3);

// const yearsTillRetirement = (birthYear) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(`I have years to retire -> `, yearsTillRetirement(1999));

const yearsTillRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires at ${retirement}`;
};

console.log(yearsTillRetirement(1999, "Koushik"));
console.log(yearsTillRetirement(2002, "Dutta"));
