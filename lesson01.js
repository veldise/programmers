/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181880
 */
/**
 * 짝수/홀수 관계없이 계속 2로 나누어 1이 되는 횟수를 구하는 문제
 * => 가장 가까운 2의 배수의 지수?를 찾는 문제
 * => 이진수의 자릿수로 판별
 */

function solution(num_list) {
  var answer = 0;
  num_list.forEach((num) => {
    answer += calcUntil1(num);
  });
  return answer;
}

function calcUntil1(num) {
  let cnt = 0;
  while (num > 1) {
    num = (num % 2 ? num - 1 : num) / 2;
    cnt++;
  }
  return cnt + 1;
}

function solution2(num_list) {
  var answer = 0;
  num_list.forEach((num) => {
    answer += num.toString(2).length - 1;
  });
  return answer;
}

function solutionOther(num_list) {
  return num_list
    .map((num) => {
      return num.toString(2).length - 1;
    })
    .reduce((a, c) => a + c);
}

/**
 * run & test
 */
if (require.main === module) {
  // const arr = [12, 4, 15, 1, 14];
  const arr = require('lodash').range(1, 30);

  console.log(solution(arr));
  console.log(solution2(arr));
  console.log(solutionOther(arr));
}

module.exports = solution;
