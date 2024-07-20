const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// Generate numbers range 0..4
console.log(range(0, 4, 1));
// [0, 1, 2, 3, 4]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
console.log(Array.from({ length: 5 }, (scobiedoo, i) => i));
// [0, 1, 2, 3, 4]