const { performance } = require('perf_hooks');

// SETUP 🏁

let iterations = 1e7;

const objects = [
  { a: 1 },
  { b: 1, a: 2 },
  { a: 3, c: 4, b: 2 },
  { a: 4, b: 7 },
];
const a = 1;
const b = 2;

const add = (x, y) => x + y;

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

// %NeverOptimizeFunction(add);

while (iterations--) {
  // add(a, b);
  // const point = new Point(2, 4, 6);
  // point.x = undefined;
  // point.y = undefined;
  // point.z = undefined;

  // delete point.x; ++
  // delete point.y; /* +++ */
  // delete point.z; +

  // JSON.stringify(point);
  let sum = 0;
  const obj = objects[iterations & 3];
  sum = sum + obj.a;
}

// 🔚 EXERCISE

performance.mark('end');

performance.measure('My Special Benchmark', 'start', 'end');

const [measure] = performance.getEntriesByName('My Special Benchmark');
console.log(measure);
