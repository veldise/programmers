/**
 * [2016년](https://school.programmers.co.kr/learn/courses/30/lessons/12901)
 *
 */

function solution(a, b) {
  const startWeekIdx = 5;
  const weekNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const monthDays = [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (let i = 1; i < a; i++) {
    b += monthDays[i];
  }
  return weekNames[(b + startWeekIdx - 1) % weekNames.length];
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { a: 5, b: 24, answer: "TUE" },
    { a: 1, b: 1, answer: "FRI" },
    { a: 1, b: 2, answer: "SAT" },
    { a: 1, b: 6, answer: "WED" },
    { a: 2, b: 29, answer: "MON" },
    { a: 3, b: 3, answer: "THU" },
    { a: 7, b: 17, answer: "SUN" },
    { a: 10, b: 22, answer: "SAT" },
    { a: 10, b: 22, answer: "SAT" },
    { a: 12, b: 25, answer: "SUN" }
  ];

  testCases.forEach((tc) => {
    const answer = solution(tc.a, tc.b);
    console.log(require("lodash").isEqual(answer, tc.answer) + "");
    // console.table([answer, tc.answer]);
  });
}

module.exports = solution;
