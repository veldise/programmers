/**
 * 스킬트리: https://school.programmers.co.kr/learn/courses/30/lessons/49993
 */

function solution(skill, skill_trees) {
  var answer = -1;
  return answer;
}

function solutionOther(skill, skill_trees) {
  var answer = -1;
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    {
      skill: "CBD",
      skill_trees: ["BACDE", "CBADF", "AECB", "BDA"],
      result: 2
    }
  ];

  const success = testCases.every((tc) => {
    console.log(solution(tc.skill, tc.skill_trees), tc.result);
    return require("lodash").isEqual(solution(tc.skill, tc.skill_trees), tc.result);
  });
  console.log(success);
}

module.exports = solution;
