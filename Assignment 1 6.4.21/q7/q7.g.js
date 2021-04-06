// Write programs to print the following patterns for an input n = 5:
let n = 5, rows = 0;

while(rows < n){
    let cols = 0;
    while(cols <= rows){
        process.stdout.write("*  ");
        cols++;
    }

    let spaces = 0;
    while(spaces < 2*(n - rows -1)){
        process.stdout.write("   ");
        spaces++;
    }

    let nextCols = 0;
    while(nextCols <= rows){
        process.stdout.write("*  ");
        nextCols++;
    }
    process.stdout.write("\n");
    rows++;
}
rows-=2;

while(rows >= 0){
    let cols = 0;
    while(cols <= rows){
        process.stdout.write("*  ");
        cols++;
    }

    let spaces = 0;
    while(spaces < 2*(n - rows -1)){
        process.stdout.write("   ");
        spaces++;
    }

    let nextCols = 0;
    while(nextCols <= rows){
        process.stdout.write("*  ");
        nextCols++;
    }
    process.stdout.write("\n");
    rows--;
}