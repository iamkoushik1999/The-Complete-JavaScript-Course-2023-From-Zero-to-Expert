const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${apples} apples with ${applePieces} apple pieces and ${oranges} oranges with ${orangePieces} orange pieces`;
  return juice;
};

console.log(fruitProcessor(5, 6));
