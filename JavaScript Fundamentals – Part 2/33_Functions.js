function name() {
  console.log("My name is Koushik");
}
name();

function fruitProcess(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const apple_Juice = fruitProcess(5, 0);
console.log(apple_Juice);

const apple_orange_Juice = fruitProcess(3, 3);
console.log(apple_orange_Juice);
