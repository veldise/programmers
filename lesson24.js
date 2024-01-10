/**
 * 무인도 여행: https://school.programmers.co.kr/learn/courses/30/lessons/154540
 */
function solution(maps) {
  var answer = [];
  return answer;
}

function solutionOther(maps) {
  var answer = [];
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { maps: ["X591X", "X1X5X", "X231X", "1XXX1"], result: [1, 1, 27] },
    { maps: ["XXX", "XXX", "XXX"], result: [-1] }
  ];

  const success = testCases.every((tc) => {
    console.log(solution(tc.maps), tc.result);
    return require("lodash").isEqual(solution(tc.maps), tc.result);
  });
  console.log(success);
}

module.exports = solution;
