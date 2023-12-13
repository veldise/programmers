/**
 * 괄호 회전하기: https://school.programmers.co.kr/learn/courses/30/lessons/76502
 */

function solution(s) {
  var answer = -1;
  return answer;
}

function solutionOther(s) {
  var answer = -1;
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { s: "[](){}", result: 3 },
    { s: "}]()[{", result: 2 },
    { s: "[)(]", result: 0 },
    { s: "}}}", result: 0 }
  ];

  const success = testCases.every((tc) => {
    console.log(solution(tc.s), tc.result);
    return require("lodash").isEqual(solution(tc.s), tc.result);
  });
  console.log(success);
}

module.exports = solution;
