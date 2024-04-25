/**
 * [여행경로](https://school.programmers.co.kr/learn/courses/30/lessons/43164)
 */

function solution(tickets) {
  var answer = [];
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    {
      tickets: [
        ["ICN", "JFK"],
        ["HND", "IAD"],
        ["JFK", "HND"]
      ],
      answer: ["ICN", "JFK", "HND", "IAD"]
    },
    {
      tickets: [
        ["ICN", "SFO"],
        ["ICN", "ATL"],
        ["SFO", "ATL"],
        ["ATL", "ICN"],
        ["ATL", "SFO"]
      ],
      answer: ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
    }
  ];

  const success = testCases.every((tc) => {
    const answer = solution(tc.tickets);
    console.log(answer, tc.answer);
    return require("lodash").isEqual(answer, tc.answer);
  });
  console.log(success);
}

module.exports = solution;
