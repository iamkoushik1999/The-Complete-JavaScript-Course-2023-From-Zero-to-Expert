// Function Declaration
const age1 = cal_age1(1999);
function cal_age1(birthYear) {
  return 2023 - birthYear;
}
// Function can be declared before it is called
// But we cannot do that in Function expression

// Function Expression
const cal_age2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = cal_age2(2002);

console.log(age1, age2);
