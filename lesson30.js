/**
 * Lv2: [다리를 지나는 트럭](https://school.programmers.co.kr/learn/courses/30/lessons/42583)
 */

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { bridge_length: 2, weight: 10, truck_weights: [7, 4, 5, 6], answer: 8 },
    { bridge_length: 100, weight: 100, truck_weights: [10], answer: 101 },
    { bridge_length: 100, weight: 100, truck_weights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], answer: 110 }
  ];

  testCases.forEach((tc) => {
    const answer = solution(tc.bridge_length, tc.weight, tc.truck_weights);
    console.log(answer, tc.answer, require("lodash").isEqual(answer, tc.answer));
  });
}

module.exports = solution;
