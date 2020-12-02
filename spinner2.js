
let spinner = ['|', '/', '-', '\\', '|', '|', '/', '-', '\\', '|', '|', '/', '-', '\\', '|']
let ms = 0

for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r ${char}`);
  }, 200 * ms);
  ms++
}
    setTimeout(() => {
      process.stdout.write(`\n`)}, 200 * ms);