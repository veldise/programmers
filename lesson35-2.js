/**
 * [2016년](https://school.programmers.co.kr/learn/courses/30/lessons/12901)
 * +8
 */

function solution(a, b) {
  // TODO: ...
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [{ a: 5, b: 24, answer: "TUE" }];

  testCases.forEach((tc) => {
    const answer = solution(tc.a, tc.b);
    console.log(require("lodash").isEqual(answer, tc.answer) + "");
    console.table([answer, tc.answer]);
  });
}

module.exports = solution;
