/**
 * [모의고사](https://school.programmers.co.kr/learn/courses/30/lessons/42840)
 * +4
 */

function solution(answers) {
  const aSolve = [1, 2, 3, 4, 5];
  const bSolve = [2, 1, 2, 3, 2, 4, 2, 5];
  const cSolve = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let aScore = 0;
  let bScore = 0;
  let cScore = 0;

  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];

    if (answer === aSolve[i % aSolve.length]) {
      aScore++;
    }
    if (answer === bSolve[i % bSolve.length]) {
      bScore++;
    }
    if (answer === cSolve[i % cSolve.length]) {
      cScore++;
    }
  }

  const scoreArr = [
    [1, aScore],
    [2, bScore],
    [3, cScore]
  ].sort((a, b) => b[1] - a[1]);

  const maxScore = scoreArr[0][1];

  return scoreArr.filter((arr) => maxScore === arr[1]).map((arr) => arr[0]);
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    { answers: [1, 2, 3, 4, 5], answer: [1] },
    { answers: [1, 3, 2, 4, 2], answer: [1, 2, 3] },
    { answers: [1, 1, 1, 1, 1, 1], answer: [1, 3] },
    { answers: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5], answer: [1, 3] },
    { answers: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5], answer: [3] }
  ];

  testCases.forEach((tc) => {
    const answer = solution(tc.answers);
    console.log(require("lodash").isEqual(answer, tc.answer) + "");
    console.table([answer, tc.answer]);
  });
}

module.exports = solution;
