/**
 * [실패율](https://school.programmers.co.kr/learn/courses/30/lessons/42889)
 */

function solution(N, stages) {
  var answer = [];
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { N: 5, stages: [2, 1, 2, 6, 2, 4, 3, 3], answer: [3, 4, 2, 1, 5] },
    { N: 4, stages: [4, 4, 4, 4, 4], answer: [4, 1, 2, 3] }
  ];

  testCases.forEach((tc) => {
    const answer = solution(tc.N, tc.stages);
    console.log(require("lodash").isEqual(answer, tc.answer) + "");
    console.table([answer, tc.answer]);
  });
}

module.exports = solution;
