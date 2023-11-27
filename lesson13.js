/**
 * 이모티콘 할인행사: https://school.programmers.co.kr/learn/courses/30/lessons/150368
 */

function solution(users, emoticons) {
  var answer = [];
  return answer;
}

function solutionOther(users, emoticons) {
  var answer = [];
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    {
      users: [
        [40, 10000],
        [25, 10000]
      ],
      emoticons: [7000, 9000],
      result: [1, 5400]
    },
    {
      users: [
        [40, 2900],
        [23, 10000],
        [11, 5200],
        [5, 5900],
        [40, 3100],
        [27, 9200],
        [32, 6900]
      ],
      emoticons: [1300, 1500, 1600, 4900],
      result: [4, 13860]
    }
  ];

  const success = testCases.every((tc) => {
    console.log(solution(tc.users, tc.emoticons), tc.result);
    return require("lodash").isEqual(solution(tc.users, tc.emoticons), tc.result);
  });
  console.log(success);
}

module.exports = solution;
