/**
 * Lv2: [다리를 지나는 트럭](https://school.programmers.co.kr/learn/courses/30/lessons/42583)
 */

function solution(bridge_length, weight, truck_weights) {
  let curWeight = 0;
  let curLength = 0;
  let sec = 0;

  while (truck_weights.length) {
    const truck_weight = truck_weights.shift();
    if (curWeight + truck_weight <= weight && curLength < bridge_length) {
      curWeight += truck_weight;
      curLength += 1;
      sec += 1; // 트럭이 다리에 올라가는데 (1초) 소요
    } else {
      curWeight = 0;
      curLength = 0;
      sec += bridge_length - 1; // 다리에 올라간 모든 트럭이 통과하는데 (다리 길이 - 1초) 소요
      truck_weights.unshift(truck_weight);
    }
  }
  if (curLength) {
    sec += bridge_length;
  }

  return sec;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { bridge_length: 2, weight: 10, truck_weights: [7, 4, 5, 6], answer: 8 },
    { bridge_length: 100, weight: 100, truck_weights: [10], answer: 101 },
    { bridge_length: 100, weight: 100, truck_weights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], answer: 110 },
    { bridge_length: 1, weight: 10, truck_weights: [7, 4, 5, 6], answer: 5 },
    { bridge_length: 3, weight: 10, truck_weights: [7, 4, 5, 6], answer: 11 },

    // 경과 시간	다리를 지난 트럭	다리를 건너는 트럭	대기 트럭
    // 0	[]				[-,-,-]	[7,4,5,6]
    // 1	[]				[-,-,7]	[4,5,6]
    // 2	[]				[-,7,-]	[4,5,6]
    // 3	[]				[7,-,-]	[4,5,6]
    // 4	[7]				[-,-,4]	[5,6]
    // 5	[7]				[-,4,5]	[6]
    // 6	[7]				[4,5,-]	[6]
    // 7	[7,4]			[5,-,-]	[6]
    // 8	[7,4,5]		[-,-,6]	[]
    // 9	[7,4,5]		[-,6,-]	[]
    // 10	[7,4,5]		[6,-,-]	[]
    // 11	[7,4,5,6]	[-,-,-]	[]
  ];

  testCases.forEach((tc) => {
    const answer = solution(tc.bridge_length, tc.weight, tc.truck_weights);
    console.log(answer, tc.answer, require("lodash").isEqual(answer, tc.answer));
  });
}

module.exports = solution;
