/**
 * 피로도 (완전탐색): https://school.programmers.co.kr/learn/courses/30/lessons/87946
 */

// 랜덤으로 index 배열을 생성
function makeRdIdxArr(length) {
  const rds = {};
  const rst = [];
  while (rst.length < length) {
    const rd = Math.floor(Math.random() * length);
    if (!rds[rd]) {
      rds[rd] = true;
      rst.push(rd);
    }
  }
  return rst;
}

// 모든 경우의 수 index 배열을 생성
function makeAllCaseIndexes(arr) {
  const arrLen = arr.length;
  const caseLen = arrLen * (arrLen - 1);
  const obj = {};

  while (Object.keys(obj).length < caseLen) {
    const rd = makeRdIdxArr(arrLen);
    const key = rd.join("");
    if (!obj[key]) {
      obj[key] = rd;
    }
  }

  return Object.values(obj);
}

// 던전 방문 횟수 계산
function clacVisitCount(k, dungeons, idxArr) {
  let cnt = 0;

  for (const idx of idxArr) {
    const [needK, useK] = dungeons[idx];

    // 던전 진입 가능 ?
    if (needK <= k) {
      // 피로도 소모
      k -= useK;
      cnt += 1;
    }
  }

  return cnt;
}

function solution(k, dungeons) {
  let answer = -1;

  for (const idxArr of makeAllCaseIndexes(dungeons)) {
    const count = clacVisitCount(k, dungeons, idxArr);
    answer = Math.max(count, answer);
    // 던전을 모두 돌았다면 더 계산할 필요 없음
    if (answer === dungeons.length) {
      break;
    }
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
    // console.log(solution(item.k, item.dungeons), item.answer);
    return require("lodash").isEqual(solution(item.k, item.dungeons), item.answer);
  });
  console.log(success);
}

module.exports = solution;
