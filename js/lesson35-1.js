/**
 * [실패율](https://school.programmers.co.kr/learn/courses/30/lessons/42889)
 * +8
 */

function solution(N, stages) {
  const stageMap = {};
  const clearedMap = {};
  for (const stage of stages) {
    for (let i = 1; i <= stage; i++) {
      // 특정 스테이지에 도달한 수 집계
      if (i <= N) {
        stageMap[i] = (stageMap[i] || 0) + 1;
      }
      // 특정 스테이지를 클리어한 수 집계
      if (i > 1) {
        clearedMap[i - 1] = (clearedMap[i - 1] || 0) + 1;
      }
    }
  }

  // 실패율 계산
  const failRateMap = {};
  for (let i = 1; i <= N; i++) {
    failRateMap[i] = stageMap[i] ? (stageMap[i] - (clearedMap[i] || 0)) / stageMap[i] : 0;
  }

  return (
    Object.entries(failRateMap)
      // 값(실패율) 기준으로 정렬
      .sort((a, b) => b[1] - a[1])
      // 키(스테이지)를 배열로 변환
      .map((a) => +a[0])
  );
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { N: 5, stages: [2, 1, 2, 6, 2, 4, 3, 3], answer: [3, 4, 2, 1, 5] },
    { N: 4, stages: [4, 4, 4, 4, 4], answer: [4, 1, 2, 3] },
    { N: 5, stages: [1, 1, 1, 2, 3, 4], answer: [4, 1, 3, 2, 5] },
    { N: 6, stages: [2, 2, 2, 2, 2, 2, 2, 2, 2], answer: [2, 1, 3, 4, 5, 6] },
    { N: 2, stages: [3], answer: [1, 2] },
    { N: 4, stages: [4, 4, 4, 4, 4], answer: [4, 1, 2, 3] },
    { N: 5, stages: [3, 2, 1, 1], answer: [3, 1, 2, 4, 5] },
    { N: 10, stages: [10, 2], answer: [10, 2, 1, 3, 4, 5, 6, 7, 8, 9] },
    { N: 5, stages: [2, 4], answer: [4, 2, 1, 3, 5] },
    { N: 5, stages: [3, 3, 3, 3, 3], answer: [3, 1, 2, 4, 5] },
    { N: 3, stages: [1, 1, 2, 2], answer: [2, 1, 3] },
    { N: 2, stages: [1, 1, 1, 1], answer: [1, 2] }
  ];

  testCases.forEach((tc) => {
    const answer = solution(tc.N, tc.stages);
    console.log(require("lodash").isEqual(answer, tc.answer) + "");
    // console.table([answer, tc.answer]);
  });
}

module.exports = solution;
