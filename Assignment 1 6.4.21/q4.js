// Write a program to print even numbers after odd times jump.
// E.g: 2, 6, 14, 26, …
// 2 (then jump 1 even number 4) -> 6
// 6 (then jump 3 even numbers 8, 10, 12) -> 14
// 14 (then jump 5 even numbers 16,18,20,22,24) -> 26

let OddCount = 1, evenCount = 2;
let noOfTimes = 10;
console.log("Series is : ");
while (noOfTimes--) {
  process.stdout.write(evenCount + " ");
  // ? Doing + 2 because we don't exactly want the odd jumped number we want number next of this
  evenCount += 2 * OddCount + 2;
  OddCount += 2;
}
