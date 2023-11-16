/**
 * 피로도 (완전탐색): https://school.programmers.co.kr/learn/courses/30/lessons/87946
 */

function solution(k, dungeons) {
  var answer = -1;
  return answer;
}

function solutionOther(args) {
  return null;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    {
      k: 80,
      dungeons: [
        [80, 20],
        [50, 40],
        [30, 10]
      ],
      answer: 3
    }
  ];

  const success = testCases.every((item) => {
    console.log(solution(item.k, item.dungeons), item.answer);
    return require("lodash").isEqual(solution(item.k, item.dungeons), item.answer);
  });
  console.log(success);
}

module.exports = solution;
