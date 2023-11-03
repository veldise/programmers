/**
 *
 */

function solution(args) {
  if (false) {
    throw new Error("Invalid arguments: " + JSON.stringify(args));
  }
  return null;
}

function solutionOther(args) {
  return null;
}


/**
 * run & test
 */
if (require.main === module) {
  const testCases = [];
  const results = [];

  const success = testCases.every((lines, index) => {
    // console.log(solution(lines), results[index]);
    return solution(lines) === results[index];
  });
  console.log(success);
}

module.exports = solution;
