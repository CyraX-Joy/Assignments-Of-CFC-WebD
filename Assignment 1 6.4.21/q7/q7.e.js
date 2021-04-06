// Write programs to printing the Pascal Triangle 

let n = 6, rows = 1;

while(rows <= n){
    let cols = 1;
    let Multiply = 1;
    while(cols <= rows){
        process.stdout.write(Multiply+" ");
        Multiply = Multiply * (rows-cols)/cols;
        cols++;
    }
    process.stdout.write("\n");
    rows++;
}