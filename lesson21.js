/**
 * 가장 큰 정사각형 찾기: https://school.programmers.co.kr/learn/courses/30/lessons/12905
 */
function solution(board) {
  var answer = 1234;
  return answer;
}

function solutionOther(board) {
  var answer = 1234;
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    {
      board: [
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 0, 1, 0]
      ],
      answer: 9
    },
    {
      board: [
        [0, 0, 1, 1],
        [1, 1, 1, 1]
      ],
      answer: 4
    }
  ];

  const success = testCases.every((tc) => {
    console.log(solution(tc.board), tc.answer);
    return require("lodash").isEqual(solution(tc.board), tc.answer);
  });
  console.log(success);
}

module.exports = solution;
