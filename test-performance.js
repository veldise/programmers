

const solution = require("./lesson8");
const testCases = [
  [2, 1, 3, 4, 1],
  [5, 0, 2, 7]
];
const results = [
  [2, 3, 4, 5, 6, 7],
  [2, 5, 7, 9, 12]
];

for (let index = 0; index < 10000000; index++) {
  testCases.every((lines, index) => {
    return solution(lines) === results[index];
  });
}
