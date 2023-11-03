/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181935
 */
/**
 * N번째까지 모든 홀수의 합 + N번째까지 모든 짝수 제곱의 합을 구하는 문제
 * => 수학 공식을 이용
 */

function solution(num) {
  let sum = 0;
  for (let n = num; n > 0; n -= 2) {
    sum += num % 2 ? n : n * n;
  }
  return sum;
}

function solution2(num) {
  if (num % 2) {
    // 홀수
    let n = (num + 1) / 2;
    return n * n;
  } else {
    // 짝수
    let n = num / 2;
    return 4 * ((n * (n + 1) * (2 * n + 1)) / 6);
  }
}

function solutionOther(n) {
  if (n % 2 === 1) {
    return ((n + 1) / 2) * ((n + 1) / 2);
  } else {
    return (n * (n + 1) * (n + 2)) / 6;
  }
}

/**
 * run & test
 */
if (require.main === module) {
  console.log(solution(7), solution(10));
  console.log(solution2(7), solution2(10));
  console.log(solutionOther(7), solutionOther(10));
}

// N 번째 홀수의 합 : (1) + (1+2^1) + (1+2^2) + ... + (1+2^(N-1)) = N * N
// N 번째 짝수 제곱의 합 : 2^2 + (2*2)^2 + ... + (2^N)^2 = N*N(N*N + 1)

// (2*1)^2 + (2*2)^2 + (2*3)^2 + ... + (2*N)^2
// = 2^2 * (1^2 + 2^2 + 3^2 + ... + N^2)
// = 4 * (n * (n + 1) * (2 * n + 1)) / 6);

module.exports = solution;
