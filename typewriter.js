const sentence = "hello there from lighthouse labs";
let x = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, x += 50);
}

setTimeout(() => {
  console.log();
}, x);


