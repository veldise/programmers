/**
 * 마법의 엘리베이터: https://school.programmers.co.kr/learn/courses/30/lessons/148653
 */
function solution(storey) {
  var answer = 0;
  return answer;
}

function solutionOther(storey) {
  var answer = 0;
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { storey: 16, result: 6 },
    { storey: 2554, result: 16 }
  ];

  const success = testCases.every((tc) => {
    console.log(solution(tc.storey), tc.result);
    return require("lodash").isEqual(solution(tc.storey), tc.result);
  });
  console.log(success);
}

module.exports = solution;
