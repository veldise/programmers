/**
 * 덧칠하기: https://school.programmers.co.kr/learn/courses/30/lessons/161989
 */

function solution(n, m, section) {
  var answer = 0;
  return answer;
}

function solutionOther(n, m, section) {
  var answer = 0;
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { n: 8, m: 4, section: [2, 3, 6], result: 2 },
    { n: 5, m: 4, section: [1, 3], result: 1 },
    { n: 4, m: 1, section: [1, 2, 3, 4], result: 4 }
  ];

  const success = testCases.every((tc) => {
    console.log(solution(tc.n, tc.m, tc.section), tc.result);
    return require("lodash").isEqual(solution(tc.n, tc.m, tc.section), tc.result);
  });
  console.log(success);
}

module.exports = solution;
