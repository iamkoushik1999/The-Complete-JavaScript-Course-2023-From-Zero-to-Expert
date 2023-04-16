// add element at the end
const friends = ["Ram", "Sham", "Gita"];
console.log(friends);
friends.push("Mita");
console.log(friends);

// add element at the beginning
friends.unshift("Sita");
console.log(friends);

// Remove last element
friends.pop();
const popped = friends.pop();
console.log("Popped element: ", popped);
console.log(friends);

// Remove first element
friends.shift();
console.log(friends);

console.log(friends.indexOf("Sham"));
console.log(friends.indexOf("Koushik"));

console.log(friends.includes("Sham"));
console.log(friends.includes("Koushik"));

if (friends.includes("Ram")) {
  console.log("You have a friend called Ram");
}
