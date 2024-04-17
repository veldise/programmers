/**
 * [귤 고르기](https://school.programmers.co.kr/learn/courses/30/lessons/138476)
 */

function solution(k, tangerine) {
  var answer = 0;
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { k: 6, tangerine: [1, 3, 2, 5, 4, 5, 2, 3], answer: 3 },
    { k: 4, tangerine: [1, 3, 2, 5, 4, 5, 2, 3], answer: 2 },
    { k: 2, tangerine: [1, 1, 1, 1, 2, 2, 2, 3], answer: 1 }
  ];

  const success = testCases.every((tc) => {
    const answer = solution(tc.routes);
    console.log(answer, tc.result);
    return require("lodash").isEqual(answer, tc.result);
  });
  console.log(success);
}

module.exports = solution;
