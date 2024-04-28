/**
 * [모의고사](https://school.programmers.co.kr/learn/courses/30/lessons/42840)
 */

function solution(answers) {
  var answer = [];
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { answers: [1, 2, 3, 4, 5], answer: [1] },
    { answers: [1, 3, 2, 4, 2], answer: [1, 2, 3] }
  ];

  testCases.forEach((tc) => {
    const answer = solution(tc.answers);
    console.log(require("lodash").isEqual(answer, tc.answer) + "");
    console.table([answer, tc.answer]);
  });
}

module.exports = solution;
