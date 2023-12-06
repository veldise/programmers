/**
 * 카드 뭉치: https://school.programmers.co.kr/learn/courses/30/lessons/159994
 */

function solution(cards1, cards2, goal) {
  var answer = "";
  return answer;
}

function solutionOther(cards1, cards2, goal) {
  var answer = "";
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    {
      cards1: ["i", "drink", "water"],
      cards2: ["want", "to"],
      goal: ["i", "want", "to", "drink", "water"],
      result: "Yes"
    },
    {
      cards1: ["i", "water", "drink"],
      cards2: ["want", "to"],
      goal: ["i", "want", "to", "drink", "water"],
      result: "No"
    }
  ];

  const success = testCases.every((tc) => {
    console.log(solution(tc.cards1, tc.cards2, tc.goal), tc.result);
    return require("lodash").isEqual(solution(tc.cards1, tc.cards2, tc.goal), tc.result);
  });
  console.log(success);
}

module.exports = solution;
