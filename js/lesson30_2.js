/**
 * Lv0: [주사위 게임 1](https://school.programmers.co.kr/learn/courses/30/lessons/181839)
 */

function solution(a, b) {
  const isOddA = a % 2 !== 0;
  const isOddB = b % 2 !== 0;

  if (isOddA && isOddB) {
    return a * a + b * b;
  } else if (isOddA || isOddB) {
    return 2 * (a + b);
  } else {
    return Math.abs(a - b);
  }
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { a: 3, b: 5, answer: 34 },
    { a: 6, b: 1, answer: 14 },
    { a: 2, b: 4, answer: 2 }
  ];

  testCases.forEach((tc) => {
    const answer = solution(tc.a, tc.b);
    console.log(answer, tc.answer, require("lodash").isEqual(answer, tc.answer));
  });
}

module.exports = solution;
