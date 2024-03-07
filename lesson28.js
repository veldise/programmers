/**
 * 삼각 달팽이: https://school.programmers.co.kr/learn/courses/30/lessons/68645
 */
function solution(n) {
  var answer = [];
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { n: 4, result: [1, 2, 9, 3, 10, 8, 4, 5, 6, 7] },
    { n: 5, result: [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9] },
    { n: 6, result: [1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11] }
  ];

  const success = testCases.every((tc) => {
    const answer = solution(tc.n);
    console.log(answer, tc.result);
    return require("lodash").isEqual(answer, tc.result);
  });
  console.log(success);
}

module.exports = solution;
