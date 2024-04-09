/**
 * Lv3: [인사고과](https://school.programmers.co.kr/learn/courses/30/lessons/152995)
 */

function solution(scores) {
  var answer = 0;
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    {
      scores: [
        [2, 2],
        [1, 4],
        [3, 2],
        [3, 2],
        [2, 1]
      ],
      answer: 4
    }
  ];

  testCases.forEach((tc) => {
    const answer = solution(tc.scores);
    console.log(answer, tc.answer, require("lodash").isEqual(answer, tc.answer));
  });
}

module.exports = solution;
