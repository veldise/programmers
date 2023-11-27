/**
 * 하노이의 탑: https://school.programmers.co.kr/learn/courses/30/lessons/12946
 */

function solution(n) {
  var answer = [[]];
  return answer;
}

function solutionOther(n) {
  var answer = [[]];
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    {
      n: 2,
      result: [
        [1, 2],
        [1, 3],
        [2, 3]
      ]
    }
  ];

  const success = testCases.every((tc) => {
    console.log(solution(tc.n), tc.result);
    return require("lodash").isEqual(solution(tc.n), tc.result);
  });
  console.log(success);
}

module.exports = solution;
