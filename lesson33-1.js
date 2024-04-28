/**
 * [여행경로](https://school.programmers.co.kr/learn/courses/30/lessons/43164)
 */

function solution(tickets) {
  // 티켓 사용 여부
  const used = new Array(tickets.length).fill(false);
  const paths = [];

  function fly(stopover, paths) {
    if (stopover.length === tickets.length + 1) {
      // 완성된 경로 저장
      paths.push([...stopover]);
    }

    for (let i = 0; i < tickets.length; i++) {
      // 사용한 티켓
      if (used[i]) {
        continue;
      }
      const [from, to] = tickets[i];
      const currAp = stopover[stopover.length - 1]; // 현재 위치

      // 사용 가능한 티켓
      if (currAp === from) {
        // 티켓 사용
        used[i] = true;
        stopover.push(to);

        fly(stopover, paths);

        // 원래 노드로 복귀하여 다른 노드 탐색
        used[i] = false;
        stopover.pop();
      }
    }

    return paths;
  }

  // 시작 위치는 ICN
  fly(["ICN"], paths);

  // 배열을 문자열로 변환하여 오름차순 정렬하고, 가장 첫번째 선택
  return paths.sort((a, b) => a.toString().localeCompare(b.toString()))[0];
}

/**
 * run & test
 */
if (require.main === module) {
  const testCases = [
    {
      tickets: [
        ["ICN", "JFK"],
        ["HND", "IAD"],
        ["JFK", "HND"]
      ],
      answer: ["ICN", "JFK", "HND", "IAD"]
    },
    {
      tickets: [
        ["ICN", "SFO"],
        ["ICN", "ATL"],
        ["SFO", "ATL"],
        ["ATL", "ICN"],
        ["ATL", "SFO"]
      ],
      answer: ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
    },
    /* {
      tickets: [
        ["ICN", "BOO"],
        ["ICN", "COO"],
        ["COO", "DOO"],
        ["DOO", "COO"],
        ["BOO", "DOO"],
        ["DOO", "BOO"],
        ["BOO", "ICN"],
        ["COO", "BOO"]
      ],
      answer: []
    },
    {
      tickets: [
        ["ICN", "BOO"],
        ["BOO", "COO"],
        ["COO", "ICN"],
        ["ICN", "BOO"],
        ["BOO", "COO"],
        ["COO", "ICN"]
      ],
      answer: []
    },
    {
      tickets: [
        ["ICN", "SFO"],
        ["ICN", "ATL"],
        ["SFO", "ATL"],
        ["ATL", "ICN"],
        ["ATL", "SFO"]
      ],
      answer: []
    },
    {
      tickets: [
        ["ICN", "JFK"],
        ["HND", "IAD"],
        ["JFK", "HND"],
        ["AAA", "HND"],
        ["JFK", "AAA"]
      ],
      answer: []
    },
    {
      tickets: [
        ["ICN", "AAA"],
        ["ICN", "AAA"],
        ["ICN", "AAA"],
        ["AAA", "ICN"],
        ["AAA", "ICN"]
      ],
      answer: []
    },
    {
      tickets: [
        ["ICN", "AAA"],
        ["ICN", "BBB"],
        ["BBB", "CCC"],
        ["AAA", "DDD"],
        ["DDD", "EEE"],
        ["CCC", "ICN"]
      ],
      answer: []
    } */
  ];

  testCases.forEach((tc) => {
    const answer = solution(tc.tickets);
    console.log(require("lodash").isEqual(answer, tc.answer) + "");
    console.table([answer, tc.answer]);
  });
}

module.exports = solution;
