// Write a program to count the number of digits in a number

let number = 2159, countOfDigits = 0;
while (number >= 1 ){
    number = number / 10;
    countOfDigits++;    
}
console.log("Number of digits is "+ countOfDigits);