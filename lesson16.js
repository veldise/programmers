/**
 * 기능개발: https://school.programmers.co.kr/learn/courses/30/lessons/42586
 */

function solution(progresses, speeds) {
  var answer = [];
  return answer;
}

function solutionOther(progresses, speeds) {
  var answer = [];
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { progresses: [93, 30, 55], speeds: [1, 30, 5], result: [2, 1] },
    { progresses: [95, 90, 99, 99, 80, 99], speeds: [1, 1, 1, 1, 1, 1], result: [1, 3, 2] }
  ];

  const success = testCases.every((tc) => {
    console.log(solution(tc.progresses, tc.speeds), tc.result);
    return require("lodash").isEqual(solution(tc.progresses, tc.speeds), tc.result);
  });
  console.log(success);
}

module.exports = solution;
