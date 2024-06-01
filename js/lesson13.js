/**
 * 하노이의 탑: https://school.programmers.co.kr/learn/courses/30/lessons/12946
 */

function last(arr) {
  return arr[arr.length - 1];
}

// 실패 - 미구현
function solution(n) {
  let answer = [];

  const towers = [];

  // 기둥은 3개
  for (let i = 0; i < 3; i++) {
    towers.push([]);
  }
  // 첫번째 기둥에 원반 준비
  for (let i = n; i > 0; i--) {
    towers[0].push(i);
  }

  function movable(from, to) {
    return !to.length || last(from) < last(to);
  }
  function move(from, to) {
    to.push(from.pop());
    answer.push([towers.indexOf(from) + 1, towers.indexOf(to) + 1]);
    console.log(last(answer));
  }
  function findTowerBy(n) {
    return towers.find((tower) => last(tower) === n);
  }

  let from = towers[0];
  let via = towers[1];
  let to = towers[2];

  let cnt = 0;

  let currN = n;

  while (1) {
    if (cnt++ > 10) {
      break;
    }

    if (last(from) === currN && movable(from, to)) {
      move(from, to);
    } else {
      if (movable(from, via)) {
        move(from, via);
      }
    }

    if (currN === 1) {
      currN = n;

      from = towers[0];
      via = towers[1];
      to = towers[2];
    } else {
      currN -= 1;

      let fromA = from;
      let viaA = via;
      let toA = to;

      from = toA;
      via = fromA;
      to = viaA;
    }
  }

  return answer;
}

// SEE: https://nyang-in.tistory.com/210
function solutionOther(n) {
  let answer = [];

  function hanoi(n, from, to, via) {
    if (n === 1) {
      answer.push([from, to]);
    } else {
      hanoi(n - 1, from, via, to);
      answer.push([from, to]);
      hanoi(n - 1, via, to, from);
    }
  }

  hanoi(n, 1, 3, 2);
  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    // {
    //   n: 1,
    //   result: [
    //     [1, 3]
    //   ]
    // },
    {
      n: 2,
      result: [
        [1, 2],
        [1, 3],
        [2, 3]
      ]
    },
    {
      n: 3,
      result: [
        [1, 3],
        [1, 2],
        [3, 2],
        [1, 3],
        [2, 1],
        [2, 3],
        [1, 3]
      ]
    }
  ];

  const success = testCases.every((tc) => {
    console.log(solution(tc.n), tc.result);
    return require("lodash").isEqual(solution(tc.n), tc.result);
  });
  console.log(success);
}

module.exports = solution;
