/**
 * [3차] 방금그곡: https://school.programmers.co.kr/learn/courses/30/lessons/17683
 */
function solution(m, musicinfos) {
  var answer = "";
  return answer;
}

function solutionOther(m, musicinfos) {
  var answer = "";
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { m: "ABCDEFG", musicinfos: ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"], answer: "HELLO" },
    { m: "CC#BCC#BCC#BCC#B", musicinfos: ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"], answer: "FOO" },
    { m: "ABC", musicinfos: ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"], answer: "WORLD" }
  ];

  const success = testCases.every((tc) => {
    console.log(solution(tc.m, tc.musicinfos), tc.answer);
    return require("lodash").isEqual(solution(tc.m, tc.musicinfos), tc.answer);
  });
  console.log(success);
}

module.exports = solution;
