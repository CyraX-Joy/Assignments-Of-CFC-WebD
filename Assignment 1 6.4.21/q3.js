// Write the pseudocode & the program to calculate GCD of two numbers

let first = 108, second = 90;
let smaller = 1, gcd = 1, check = 1;

if (first<second) {
  smaller = first;
} else {
  smaller = second;
}

while (check < smaller) {
  if (first % check == 0 && second % check == 0) {
    gcd = check;
  }
  check++;
}
console.log("The GCD of " + first + " and " + second + " is " + gcd);
