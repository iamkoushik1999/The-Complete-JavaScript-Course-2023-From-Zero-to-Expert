const calAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsTillRetirement = function (birthYear, firstName) {
  const age = calAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires after ${retirement} years`);
    return age;
  } else {
    console.log(`${firstName} already retired`);
    return -1;
  }
};

console.log(yearsTillRetirement(1999, "Koushik"));
console.log(yearsTillRetirement(1955, "Dutta"));
