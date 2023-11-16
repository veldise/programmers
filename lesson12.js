/**
 * 구명보트 (탐욕법): https://school.programmers.co.kr/learn/courses/30/lessons/42885
 */

function solution(people, limit) {
  var answer = 0;
  return answer;
}

function solutionOther(args) {
  return null;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    {
      people: [70, 50, 80, 50],
      limit: 100,
      answer: 3
    },
    {
      people: [70, 80, 50],
      limit: 100,
      answer: 3
    }
  ];

  const success = testCases.every((item) => {
    console.log(solution(item.k, item.dungeons), item.answer);
    return require("lodash").isEqual(solution(item.k, item.dungeons), item.answer);
  });
  console.log(success);
}

module.exports = solution;
