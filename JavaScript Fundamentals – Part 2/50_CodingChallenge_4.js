const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log("bills: ", bills);
console.log("tips: ", tips);
console.log("totals: ", totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

// console.log(calcAverage([2, 3, 7]));
console.log("Average bills: ", calcAverage(bills));
console.log("Average tips: ", calcAverage(tips));
console.log("Average totals: ", calcAverage(totals));
// console.log(calcAverage(bills));
// console.log(calcAverage(tips));
// console.log(calcAverage(totals));
