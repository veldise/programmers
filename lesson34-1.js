/**
 * [디펜스 게임](https://school.programmers.co.kr/learn/courses/30/lessons/142085)
 */

function solution(n, k, enemy) {
  var answer = 0;
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { n: 7, k: 3, enemy: [4, 2, 4, 5, 3, 3, 1], answer: 5 },
    { n: 2, k: 4, enemy: [3, 3, 3, 3], answer: 4 }
  ];

  testCases.forEach((tc) => {
    const answer = solution(tc.n, tc.k, tc.enemy);
    console.log(require("lodash").isEqual(answer, tc.answer) + "");
    console.table([answer, tc.answer]);
  });
}

module.exports = solution;
