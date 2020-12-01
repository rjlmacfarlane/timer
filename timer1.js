const intervals = process.argv.slice(2);

for (let i = 0; i < intervals.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  },intervals[i] * 1000);
}