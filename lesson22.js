/**
 * 가장 많이 받은 선물: https://school.programmers.co.kr/learn/courses/30/lessons/258712
 */
function solution(friends, gifts) {
  var answer = 0;
  return answer;
}

function solutionOther(friends, gifts) {
  var answer = 0;
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    {
      friends: ["muzi", "ryan", "frodo", "neo"],
      gifts: [
        "muzi frodo",
        "muzi frodo",
        "ryan muzi",
        "ryan muzi",
        "ryan muzi",
        "frodo muzi",
        "frodo ryan",
        "neo muzi"
      ],
      result: 2
    },
    {
      friends: ["joy", "brad", "alessandro", "conan", "david"],
      gifts: ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"],
      result: 4
    },
    { friends: ["a", "b", "c"], gifts: ["a b", "b a", "c a", "a c", "a c", "c a"], result: 0 }
  ];

  const success = testCases.every((tc) => {
    console.log(solution(tc.friends, tc.gifts), tc.result);
    return require("lodash").isEqual(solution(tc.friends, tc.gifts), tc.result);
  });
  console.log(success);
}

module.exports = solution;
