/**
 * 삼각 달팽이: https://school.programmers.co.kr/learn/courses/30/lessons/68645
 */
function solution(n) {
  const snail = [];
  while (snail.length < n) {
    // snail.unshift(Array(n - snail.length).fill(0));
    snail.push([]);
  }

  let [x, y] = [0, 0]; // 시작 위치
  let num = 1; // 시작 숫자
  let dir = "d"; // 시작 방향
  let len = n;

  while (len) {
    switch (dir) {
      case "d":
        for (let i = 0; i < len; i++) {
          snail[y++][x] = num++;
        }
        [y, x, dir, len] = [y - 1, x + 1, "l", len - 1];
        break;
      case "l":
        for (let i = 0; i < len; i++) {
          snail[y][x++] = num++;
        }
        [y, x, dir, len] = [y - 1, x - 2, "u", len - 1];
        break;
      case "u":
        for (let i = 0; i < len; i++) {
          snail[y--][x--] = num++;
        }
        [y, x, dir, len] = [y + 2, x + 1, "d", len - 1];
        break;
    }
  }
  console.log("snail:", require("json-stringify-pretty-compact")(snail, { maxLength: 30 }));

  // flatten
  return snail.reduce((arr, cur) => arr.concat(cur), []);
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { n: 4, result: [1, 2, 9, 3, 10, 8, 4, 5, 6, 7] },
    { n: 5, result: [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9] },
    { n: 6, result: [1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11] },
    {
      n: 7,
      result: [1, 2, 18, 3, 19, 17, 4, 20, 27, 16, 5, 21, 28, 26, 15, 6, 22, 23, 24, 25, 14, 7, 8, 9, 10, 11, 12, 13]
    }
  ];

  const success = testCases.every((tc) => {
    const answer = solution(tc.n);
    // console.log(answer, tc.result);
    return require("lodash").isEqual(answer, tc.result);
  });
  console.log(success);
}

module.exports = solution;
