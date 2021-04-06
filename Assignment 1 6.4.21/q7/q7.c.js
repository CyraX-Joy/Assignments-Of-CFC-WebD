// Write programs to print the following patterns for an input n = 5: Pyramid (numeric)

let n = 5, rows = 0;

while(rows < n){
    let spaces = 0;
    while(spaces < n - rows -1){
        process.stdout.write("   ");
        spaces++;
    }

    let cols = 0;
    while(cols <= rows){
        process.stdout.write((cols+1)+"  ");
        cols++;
    }
    
    cols--;
    while(cols > 0){
        process.stdout.write((cols)+"  ");
        cols--;
    }
    process.stdout.write("\n");
    rows++;
}