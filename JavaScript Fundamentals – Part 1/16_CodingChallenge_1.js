const mark_Weight = 78;
const mark_Height = 1.69;
const john_Weight = 92;
const john_Height = 1.95;

// const mark_Weight = 95;
// const mark_Height = 1.88;
// const john_Weight = 85;
// const john_Height = 1.76;

const mark_BMI = mark_Weight / (mark_Height * mark_Height);
const john_BMI = john_Weight / (john_Height * john_Height);
const markHigherBMI = mark_BMI > john_BMI;

console.log(mark_BMI);
console.log(john_BMI);
console.log(markHigherBMI);
