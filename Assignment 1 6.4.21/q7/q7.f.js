// Write programs to print the following patterns for an input n = 5: Diamond
let n = 5, rows = 0;

while(rows < n){
    let spaces = 0;
    while(spaces < n - rows -1){
        process.stdout.write("   ");
        spaces++;
    }

    let cols = 0;
    while(cols < 2*rows+1){
        process.stdout.write("*  ");
        cols++;
    }
    process.stdout.write("\n");
    rows++;
}
rows-=2; // To complement last row ++ and in next row we need to print n-1 lines
while(rows >= 0){
    let spaces = 0;
    while(spaces < n - rows-1){
        process.stdout.write("   ");
        spaces++;
    }

    let cols = 0;
    while(cols < 2*rows+1){
        process.stdout.write("*  ");
        cols++;
    }
    process.stdout.write("\n");
    rows--;
}