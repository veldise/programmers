/**
 * [x 사이의 개수](https://school.programmers.co.kr/learn/courses/30/lessons/181867)
 */

function solution(myString) {
  var answer = [];
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { myString: "oxooxoxxox", answer: [1, 2, 1, 0, 1, 0] },
    { myString: "xabcxdefxghi", answer: [0, 3, 3, 3] }
  ];

  const success = testCases.every((tc) => {
    const answer = solution(tc.routes);
    console.log(answer, tc.result);
    return require("lodash").isEqual(answer, tc.result);
  });
  console.log(success);
}

module.exports = solution;
