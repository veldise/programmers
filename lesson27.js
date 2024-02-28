/**
 * 게임 맵 최단거리: https://school.programmers.co.kr/learn/courses/30/lessons/1844
 */
function solution(maps) {
  return -1;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    {
      maps: [
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 1],
        [0, 0, 0, 0, 1]
      ],
      answer: 11
    },
    {
      maps: [
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1]
      ],
      answer: -1
    }
  ];

  const success = testCases.every((tc) => {
    console.log(solution(tc.maps), tc.answer);
    return require("lodash").isEqual(solution(tc.maps), tc.answer);
  });
  console.log(success);
}

module.exports = solution;
