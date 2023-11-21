/**
 * 피로도 (완전탐색): https://school.programmers.co.kr/learn/courses/30/lessons/87946
 */

function findIndexMaxCase(k, dungeons) {
  let currMax = null;
  let currIdx = -1;

  for (let i = 0; i < dungeons.length; i++) {
    const [, useK] = dungeons[i];
    const usedK = k - useK;
    const length = dungeons.filter(([minK], idx) => idx !== i && minK <= usedK).length;

    if (currMax === null || currMax < length) {
      currMax = length;
      currIdx = i;
    }
  }

  return currIdx;
}

function solution(k, dungeons) {
  dungeons = dungeons.slice(0);

  let answer = 0;

  while (dungeons.length) {
    // 현재 던전 목록에서, 특정 던전을 돌고 난 뒤 돌 수 있는 남은 던전의 개수가 최대인 던전을 찾기
    let index = findIndexMaxCase(k, dungeons);
    if (index === -1) {
      break;
    }
    answer++;
    dungeons.splice(index, 1);
  }

  return answer;
}

function solutionOther(args) {
  return null;
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    {
      k: 80,
      dungeons: [
        [80, 20],
        [50, 40],
        [30, 10]
      ],
      answer: 3
    },
    {
      k: 40,
      dungeons: [
        [40, 20],
        [10, 10],
        [10, 10],
        [10, 10],
        [10, 10]
      ],
      answer: 4
    },
    {
      k: 70,
      dungeons: [
        [70, 60],
        [50, 30],
        [40, 30]
      ],
      answer: 2
    },
    {
      k: 100,
      dungeons: [
        [80, 8],
        [90, 9],
        [100, 10]
      ],
      answer: 3
    }
  ];

  const success = testCases.every((item) => {
    console.log(solution(item.k, item.dungeons), item.answer);
    return require("lodash").isEqual(solution(item.k, item.dungeons), item.answer);
  });
  console.log(success);
}

module.exports = solution;
