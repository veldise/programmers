/**
 * [단속카메라](https://school.programmers.co.kr/learn/courses/30/lessons/42884)
 */
function solution(routes) {
  var answer = 0;
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    {
      routes: [
        [-20, -15],
        [-14, -5],
        [-18, -13],
        [-5, -3]
      ],
      result: 2
    }
  ];

  const success = testCases.every((tc) => {
    const answer = solution(tc.routes);
    console.log(answer, tc.result);
    return require("lodash").isEqual(answer, tc.result);
  });
  console.log(success);
}

module.exports = solution;
