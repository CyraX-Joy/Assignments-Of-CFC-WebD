// Write programs to print the following patterns for an input n = 5: square - diamond

let n = 5, rows = 1;

// ? For Upper Portion of pattern
let temp=0;
while(temp< 2*n-1){
    process.stdout.write("*  ");
    temp++;
}
process.stdout.write("\n");
while (rows < n) {
  let cols = 0;
  while (cols < n - rows) {
    process.stdout.write("*  ");
    cols++;
  }

  let spaces = 0;
  while (spaces < 2 * rows - 1) {
    process.stdout.write("   ");
    spaces++;
  }

  cols -= 1;
  while (cols >= 0) {
    process.stdout.write("*  ");
    cols--;
  }
  process.stdout.write("\n");
  rows++;
}
// ? To complement the last row++ and we need to print n-1
rows-=2;

// ? For lower portion of pattern
while (rows >= 1) {
  let cols = 0;
  while (cols < n - rows) {
    process.stdout.write("*  ");
    cols++;
  }

  let spaces = 0;
  while (spaces < 2 * rows - 1) {
    process.stdout.write("   ");
    spaces++;
  }

  cols -= 1;
  while (cols >= 0) {
    process.stdout.write("*  ");
    cols--;
  }
  process.stdout.write("\n");
  rows--;
}
temp=0;
while(temp< 2*n-1){
    process.stdout.write("*  ");
    temp++;
}