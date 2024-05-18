/**
 * [실패율](https://school.programmers.co.kr/learn/courses/30/lessons/42889)
 * +8
 */

function solution(N, stages) {
  const stageMap = {};
  const clearMap = {};
  for (const stage of stages) {
    for (let i = 1; i <= stage; i++) {
      if (i <= N) {
        stageMap[i] = (stageMap[i] || 0) + 1;
      }
      if (i > 1) {
        clearMap[i - 1] = (clearMap[i - 1] || 0) + 1;
      }
    }
  }

  const failRateMap = {};
  for (let i = 1; i <= N; i++) {
    failRateMap[i] = (stageMap[i] - (clearMap[i] || 0)) / stageMap[i];
  }

  return Object.entries(failRateMap)
    .sort((a, b) => b[1] - a[1])
    .map((a) => +a[0]);
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
