// Write programs to print the following patterns for an input n = 5: new Pyramid (numeric)

let n = 5, rows = 0, incrementer = 1;

while(rows < n){
    let spaces = 0;
    while(spaces < n - rows -1){
        process.stdout.write("   ");
        spaces++;
    }

    let cols = 0;
    while(cols <= rows){
        process.stdout.write((cols+incrementer)+"  ");
        cols++;
    }
    
    cols--;
    while(cols > 0){
        process.stdout.write((cols+incrementer-1)+"  ");
        cols--;
    }
    process.stdout.write("\n");
    rows++;
    incrementer++;
}