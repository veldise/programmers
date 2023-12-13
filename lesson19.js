/**
 * [3차] 파일명 정렬: https://school.programmers.co.kr/learn/courses/30/lessons/17686
 */

function solution(files) {
  var answer = [];
  return answer;
}

function solutionOther(files) {
  var answer = [];
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    {
      input: ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"],
      output: ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
    },
    {
      input: ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"],
      output: ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
    }
  ];

  const success = testCases.every((tc) => {
    console.log(solution(tc.input), tc.output);
    return require("lodash").isEqual(solution(tc.input), tc.output);
  });
  console.log(success);
}

module.exports = solution;
