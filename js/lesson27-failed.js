/**
 * 게임 맵 최단거리: https://school.programmers.co.kr/learn/courses/30/lessons/1844
 */
function solution(maps) {
  let answer = -1;

  const rl = maps.length;
  const cl = maps[0].length;

  if (maps[rl - 2][cl - 1] === 0 && maps[rl - 1][cl - 2] === 0) {
    return -1;
  }

  let cnt = 0;

  function canVisit(r, c) {
    return maps[r][c];
  }
  function visit(r, c) {
    maps[r][c] = 0;
    cnt++;
  }

  function move(r, c) {
    // 상대 팀 진영
    if (r === rl - 1 && c === cl - 1) {
      answer = cnt;
      return;
    }
    if (!canVisit(r, c)) {
      return;
    }
    visit(r, c);

    if (r < rl - 1 && canVisit(r + 1, c)) move(r + 1, c); // move down
    else if (c < cl - 1 && canVisit(r, c + 1)) move(r, c + 1); // move right
    else if (r > 0 && canVisit(r - 1, c)) move(r - 1, c); // move up
    else if (c > 0 && canVisit(r, c - 1)) move(r, c - 1); // move left
    // else console.log(r, c);
  }

  cnt = 1;
  move(0, 0);

  return answer;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    {
      maps: [
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 1],
        [0, 0, 0, 0, 1]
      ],
      answer: 11
    },
    {
      maps: [
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1]
      ],
      answer: -1
    },
    {
      maps: [
        [1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1]
      ],
      answer: 17
    },
    {
      maps: [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
      ],
      answer: 9
    },
    {
      maps: [
        [1, 1, 1, 1, 0],
        [1, 1, 1, 1, 0],
        [1, 1, 1, 1, 0],
        [1, 1, 1, 1, 0],
        [1, 1, 1, 0, 1]
      ],
      answer: -1
    },
    {
      maps: [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0],
        [1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1]
      ],
      answer: -1
    },
    {
      maps: [
        [1, 1, 1, 0, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 0, 1, 0],
        [1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1]
      ],
      answer: 9
    }
  ];

  const clone = function (obj) {
    return JSON.parse(JSON.stringify(obj));
  };

  const success = testCases.every((tc) => {
    console.log(solution(clone(tc.maps)), tc.answer);
    return require("lodash").isEqual(solution(tc.maps), tc.answer);
  });
  console.log(success);
}

module.exports = solution;
