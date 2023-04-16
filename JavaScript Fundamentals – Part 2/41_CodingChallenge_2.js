const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const tips = [tip1, tip2, tip3];

// console.log(bills, tips);
console.log("Bills:", bills);
console.log("Tips:", tips);

const total1 = bills[0] + tips[0];
const total2 = bills[1] + tips[1];
const total3 = bills[2] + tips[2];

const totals = [total1, total2, total3];

console.log("Totals:", totals);
