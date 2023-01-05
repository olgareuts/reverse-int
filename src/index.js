module.exports = function reverse (n) {
  let reverseNumber = 0;
  let numberValue = Math.abs(n);
  while (numberValue) {
    reverseNumber = reverseNumber * 10 + numberValue % 10; 
    numberValue = Math.floor(numberValue / 10);
  }
  return reverseNumber;
}

