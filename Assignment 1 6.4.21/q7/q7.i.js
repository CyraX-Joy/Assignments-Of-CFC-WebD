// Write programs to print the following patterns for an input n = 5:
//! 5 5 5 5 5 5 5 5 5 
//! 5 4 4 4 4 4 4 4 5 
//! 5 4 3 3 3 3 3 4 5 
//! 5 4 3 2 2 2 3 4 5 
//! 5 4 3 2 1 2 3 4 5 
//! 5 4 3 2 2 2 3 4 5 
//! 5 4 3 3 3 3 3 4 5 
//! 5 4 4 4 4 4 4 4 5 
//! 5 5 5 5 5 5 5 5 5
let n = 5, rows = 0, number = n;
while (rows < n){
    let cols = 0;
    number=n;
    while (cols < 2*n -1){
        if(cols >= 2*n-rows-1){
            number += 1;
        }
        process.stdout.write(number+"  ");
        if(cols< rows){
            number -= 1;
        }
        cols++;
    }
    process.stdout.write("\n");
    rows++;
}
rows-=2;
while (rows >= 0){
    let cols = 0;
    number=n;
    while (cols < 2*n -1){
        if(cols >= 2*n-rows-1){
            number += 1;
        }
        process.stdout.write(number+"  ");
        if(cols< rows){
            number -= 1;
        }
        cols++;
    }
    process.stdout.write("\n");
    rows--;
}