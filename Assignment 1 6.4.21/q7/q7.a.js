// Write programs to print the following patterns for an input n = 5: Upper triangle

let n = 5, rows = 0;

while(rows < n){
    let cols = 0;
    while(cols <= rows){
        process.stdout.write("*  ");
        cols++;
    }
    process.stdout.write("\n");
    rows++;
}