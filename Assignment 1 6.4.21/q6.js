// Write a program to reverse a number (9735 -> 5379)
let number = 9735,
  temp = number,
  newNumber = 0;

while (number > 0) {
  let remainder = number % 10;
  newNumber = newNumber * 10 + remainder;
  number = Math.floor(number/10);
}
console.log("Reverse of " + temp + " is " + newNumber);
