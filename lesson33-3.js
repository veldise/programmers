/**
 * [푸드 파이트 대회](https://school.programmers.co.kr/learn/courses/30/lessons/134240)
 */

function solution(food) {
  var answer = "";
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { food: [1, 3, 4, 6], answer: "1223330333221" },
    { food: [1, 7, 1, 2], answer: "111303111" }
  ];

  testCases.forEach((tc) => {
    const answer = solution(tc.food);
    console.log(require("lodash").isEqual(answer, tc.answer) + "");
    console.table([answer, tc.answer]);
  });
}

module.exports = solution;
