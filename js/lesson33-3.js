/**
 * [푸드 파이트 대회](https://school.programmers.co.kr/learn/courses/30/lessons/134240)
 * +1
 */

function solution(food) {
  let answer = ["0"];
  for (let i = food.length; i >= 1; i--) {
    for (let n = 1; n < food[i]; n += 2) {
      answer.unshift(i);
      answer.push(i);
    }
  }
  return answer.join("");
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { food: [1, 3, 4, 6], answer: "1223330333221" },
    { food: [1, 7, 1, 2], answer: "111303111" },
    { food: [1, 3, 2, 3], answer: "1230321" }
  ];

  testCases.forEach((tc) => {
    const answer = solution(tc.food);
    console.log(require("lodash").isEqual(answer, tc.answer) + "");
    console.table([answer, tc.answer]);
  });
}

module.exports = solution;
